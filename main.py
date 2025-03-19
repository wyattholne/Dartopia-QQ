import sagemaker
from sagemaker.pytorch import PyTorch
import boto3
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    # Set up SageMaker session with explicit region
    boto_session = boto3.Session(region_name='eu-west-2')  # eu-west-2 is London region
    sagemaker_session = sagemaker.Session(boto_session=boto_session)
    role = "arn:aws:iam::650251732447:role/service-role/AmazonSageMaker-ExecutionRole-20250310T001863"

    # Define the training configuration
    pytorch_estimator = PyTorch(
        entry_point="train.py",
        source_dir=".",  # Include all files in current directory
        dependencies=['requirements.txt'],
        role=role,
        instance_count=1,
        instance_type="ml.m5.xlarge",
        framework_version="1.8.1",
        py_version="py3",
        hyperparameters={
            "model": "/opt/ml/input/data/training/weights/best.pt",  # Path inside container
            "data": "/opt/ml/input/data/training/data.yaml",  # Path inside container
            "epochs": 50,
            "device": 0,
            "lr0": 0.01,
        },
        sagemaker_session=sagemaker_session
    )

    # Start training with explicit error handling
    logger.info("Starting training job...")
    pytorch_estimator.fit(
        inputs={
            "training": "s3://dartopia-coach-connect/Darts.v2i.yolov11/"
        },
        wait=True,
        logs="All"
    )

except Exception as e:
    logger.error(f"Training failed with error: {str(e)}")
    raise
