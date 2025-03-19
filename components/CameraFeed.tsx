from flask import Flask, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
import cv2
from typing import Dict, List
from ultralytics import YOLO
import logging
import base64
from datetime import datetime
import csv
import eventlet
eventlet.monkey_patch()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
# Enable CORS
CORS(app, resources={r"/*": {
    "origins": ["http://localhost:5173", "http://127.0.0.1:5173"],
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type"],
    "supports_credentials": True
}})

# Configure SocketIO with more stable settings
socketio = SocketIO(
    app,
    cors_allowed_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    async_mode='eventlet',
    ping_timeout=60,
    ping_interval=25,
    max_http_buffer_size=100000000,  # Using integer instead of scientific notation
    engineio_logger=True
)

# Load the YOLO model
model_path = "C:/Users/woody/Desktop/Gemini Project/dartopia-coach-connect-backend/train7/weights/best.pt"
model = YOLO(model_path)
model.conf = 0.2
logger.info("YOLO model loaded successfully")

# Initialize camera feeds
camera_indices = [0, 1, 2]
cameras: Dict[int, cv2.VideoCapture] = {}
for idx in camera_indices:
    cap = cv2.VideoCapture(idx)
    if cap.isOpened():
        cameras[idx] = cap
        logger.info(f"Camera {idx} initialized")
    else:
        logger.warning(f"Failed to initialize camera {idx}")

# Store latest predictions for each camera
latest_predictions: Dict[int, List[dict]] = {idx: [] for idx in camera_indices}

def calculate_score(predictions: List[dict]) -> dict:
    if not predictions:
        return {"total": 0, "details": []}
        
    score_details = []
    total_score = 0
    
    # First, find the dartboard for reference
    dartboard = None
    for pred in predictions:
        if 'dartboard' in pred['label'].lower():
            dartboard = pred
            break
    
    # Find all darts
    darts = [p for p in predictions if 'dart' in p['label'].lower()]
    
    # Find all scoring regions
    scoring_regions = [p for p in predictions if all(x not in p['label'].lower() for x in ['dart', 'dartboard'])]
    
    for dart in darts:
        dart_x = dart['bbox'][0] + dart['bbox'][2]/2
        dart_y = dart['bbox'][1] + dart['bbox'][3]/2
        score_info = {
            "label": dart['label'],
            "confidence": dart['confidence'],
            "location": dart['bbox'],
            "points": 0,
            "region": "outside"
        }
        
        # Only score if we have a dartboard reference
        if dartboard:
            board_x = dartboard['bbox'][0] + dartboard['bbox'][2]/2
            board_y = dartboard['bbox'][1] + dartboard['bbox'][3]/2
            board_radius = max(dartboard['bbox'][2], dartboard['bbox'][3])/2
            
            # Calculate distance from dart to board center
            dist_to_center = ((dart_x - board_x)**2 + (dart_y - board_y)**2)**0.5
            
            # If dart is within board radius
            if dist_to_center <= board_radius:
                # Find the closest scoring region
                best_region = None
                min_dist = float('inf')
                
                for region in scoring_regions:
                    region_x = region['bbox'][0] + region['bbox'][2]/2
                    region_y = region['bbox'][1] + region['bbox'][3]/2
                    dist = ((dart_x - region_x)**2 + (dart_y - region_y)**2)**0.5
                    
                    if dist < min_dist:
                        min_dist = dist
                        best_region = region
                
                if best_region:
                    region_label = best_region['label'].lower()
                    score_info["region"] = region_label
                    
                    # Calculate points based on region
                    if 'bulls_eye' in region_label or 'bullseye' in region_label:
                        score_info["points"] = 50
                    elif 'bull' in region_label:
                        score_info["points"] = 25
                    elif 'triple' in region_label:
                        try:
                            base = int(''.join(filter(str.isdigit, region_label)))
                            score_info["points"] = base * 3
                        except ValueError:
                            score_info["points"] = 0
                    elif 'double' in region_label:
                        try:
                            base = int(''.join(filter(str.isdigit, region_label)))
                            score_info["points"] = base * 2
                        except ValueError:
                            score_info["points"] = 0
                    else:
                        try:
                            score_info["points"] = int(''.join(filter(str.isdigit, region_label)))
                        except ValueError:
                            score_info["points"] = 0
                    
                    total_score += score_info["points"]
        
        score_details.append(score_info)
    
    # Sort details by points (highest first) and filter out zero scores
    score_details = sorted(score_details, key=lambda x: x["points"], reverse=True)
    score_details = [d for d in score_details if d["points"] > 0]
    
    return {
        "total": total_score,
        "details": score_details
    }

@socketio.on('connect')
def handle_connect():
    logger.info("Client connected")

@socketio.on('disconnect')
def handle_disconnect():
    logger.info("Client disconnected")

@socketio.on('request_camera_feed')
def handle_camera_feed(data):
    camera_idx = data.get('camera_idx')
    if camera_idx not in cameras:
        socketio.emit('camera_error', {'error': f'Camera {camera_idx} not available'}, room=data.get('sid'))
        return

    cap = cameras[camera_idx]
    logger.info(f"Starting camera feed for camera {camera_idx}")
    
    while True:
        ret, frame = cap.read()
        if not ret:
            logger.warning(f"Failed to read frame from camera {camera_idx}")
            socketio.emit('camera_error', {'error': f'Failed to read frame from camera {camera_idx}'}, room=data.get('sid'))
            break

        try:
            # Perform inference
            results = model(frame)
            predictions = []

            for result in results:
                boxes = result.boxes.xywh.cpu().numpy()
                labels = result.boxes.cls.cpu().numpy()
                confidences = result.boxes.conf.cpu().numpy()
                names = result.names

                for box, label, conf in zip(boxes, labels, confidences):
                    x, y, w, h = box
                    predictions.append({
                        'label': names[int(label)],
                        'confidence': float(conf),
                        'bbox': [float(x - w/2), float(y - h/2), float(w), float(h)]
                    })

            # Only calculate score if we have both darts and regions detected
            score = calculate_score(predictions)

            # Draw scoring information on frame
            for detail in score["details"]:
                x, y, w, h = detail["location"]
                points = detail["points"]
                region = detail["region"]
                
                # Draw rectangle around scored dart
                cv2.rectangle(frame, 
                            (int(x), int(y)), 
                            (int(x + w), int(y + h)),
                            (0, 255, 0) if points > 0 else (0, 0, 255),
                            2)
                
                # Add score text
                cv2.putText(frame,
                           f"{points} pts ({region})",
                           (int(x), int(y - 10)),
                           cv2.FONT_HERSHEY_SIMPLEX,
                           0.5,
                           (0, 255, 0) if points > 0 else (0, 0, 255),
                           2)

            # Encode frame as base64
            _, buffer = cv2.imencode('.jpg', frame)
            frame_base64 = base64.b64encode(buffer).decode('utf-8')

            # Send frame, predictions and score
            socketio.emit('camera_frame', {
                'camera_idx': camera_idx,
                'frame': frame_base64,
                'predictions': predictions,
                'score': score
            }, room=data.get('sid'))

            socketio.sleep(0.05)  # Rate limiting

        except Exception as e:
            logger.error(f"Error processing frame from camera {camera_idx}: {str(e)}")
            socketio.emit('camera_error', {'error': f'Error processing frame: {str(e)}'}, room=data.get('sid'))
            break

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    logger.info("Starting server with SocketIO support...")
    socketio.run(app, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)

class DartboardValidator:
    def __init__(self):
        self.scores = []
        self.current_throw = 0
        self.max_throws = 100  # Number of throws to validate
        self.log_file = f'practice_log_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
        
        # Initialize CSV log
        with open(self.log_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Throw', 'Score', 'Region', 'Confidence', 'Timestamp'])

    def calculate_score(self, predictions, frame):
        if not predictions:
            return 0, 'no_detection', 0

        # Get the first prediction (assuming highest confidence)
        pred = predictions[0]
        boxes = pred.boxes
        if len(boxes) == 0:
            return 0, 'no_detection', 0

        # Get the class with highest confidence
        conf = float(boxes.conf[0])
        cls = int(boxes.cls[0])
        class_name = model.names[cls]

        # Draw bounding box on frame
        box = boxes[0].xyxy[0].cpu().numpy()
        cv2.rectangle(frame, 
                     (int(box[0]), int(box[1])), 
                     (int(box[2]), int(box[3])), 
                     (0, 255, 0), 2)
        
        # Add text with class and confidence
        cv2.putText(frame, 
                   f'{class_name}: {conf:.2f}', 
                   (int(box[0]), int(box[1] - 10)), 
                   cv2.FONT_HERSHEY_SIMPLEX, 
                   0.5, 
                   (0, 255, 0), 
                   2)

        # Calculate score based on detected region
        score_mapping = {
            'bulls_eye': 50,
            'bull': 25,
            'triple': lambda x: x * 3,
            'double': lambda x: x * 2,
            'single': lambda x: x
        }

        base_score = 0
        if class_name in score_mapping:
            if callable(score_mapping[class_name]):
                # For multipliers, we'll use a default segment value of 1 for testing
                base_score = score_mapping[class_name](1)
            else:
                base_score = score_mapping[class_name]

        return base_score, class_name, conf

    def run_validation(self):
        # Try to open all three cameras
        cameras = []
        for i in range(3):
            cap = cv2.VideoCapture(i)
            if cap.isOpened():
                cameras.append(cap)
                print(f"Camera {i} initialized successfully")
            else:
                print(f"Failed to open camera {i}")

        if not cameras:
            print("No cameras available")
            return

        while self.current_throw < self.max_throws:
            frames = []
            for i, cap in enumerate(cameras):
                ret, frame = cap.read()
                if ret:
                    frames.append(frame)
                else:
                    print(f"Failed to read from camera {i}")
                    continue

            if not frames:
                continue

            # Show all camera feeds
            for i, frame in enumerate(frames):
                cv2.imshow(f'Camera {i}', frame)

            key = cv2.waitKey(1) & 0xFF
            if key == ord('s'):  # Press 's' to score current throw
                self.current_throw += 1
                
                # Process each camera feed
                for i, frame in enumerate(frames):
                    # Run detection
                    results = model(frame)
                    score, region, confidence = self.calculate_score(results, frame)
                    
                    # Log results
                    with open(self.log_file, 'a', newline='') as f:
                        writer = csv.writer(f)
                        writer.writerow([
                            self.current_throw,
                            score,
                            region,
                            confidence,
                            datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        ])
                    
                    print(f"Throw {self.current_throw} - Camera {i}: Score={score}, Region={region}, Confidence={confidence:.2f}")
                    
                    # Show result frame
                    cv2.imshow(f'Result Camera {i}', frame)
                    
            elif key == ord('q'):  # Press 'q' to quit
                break

        # Cleanup
        for cap in cameras:
            cap.release()
        cv2.destroyAllWindows()

        # Print summary
        print("\nValidation Summary:")
        with open(self.log_file, 'r') as f:
            reader = csv.DictReader(f)
            scores = [int(row['Score']) for row in reader]
            print(f"Total throws: {len(scores)}")
            print(f"Average score: {sum(scores)/len(scores):.2f}")
            print(f"Results saved to: {self.log_file}")

if __name__ == "__main__":
    validator = DartboardValidator()
    validator.run_validation()
