
import { Navbar } from "@/components/Navbar";
import { CameraFeed } from "@/components/CameraFeed";
import { FeedbackSection } from "@/components/FeedbackSection";
import { Play, Settings, Info } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container-custom py-8">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 page-transition">
              <div>
                <h1 className="text-2xl font-bold text-dart-black">Coaching Dashboard</h1>
                <p className="text-neutral-500">Set up your cameras and analyze your throw in real-time</p>
              </div>
              
              <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
                <button className="btn-primary">
                  <Play className="h-4 w-4 mr-2" />
                  Start Session
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Dartopia AI Vision Active</span> - When you connect a camera, our AI will detect dartboards and bullseyes in real-time. The score is calculated based on precision and accuracy of your throws.
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  This demo uses simulated data. In a real setup, connect your cameras and the system will analyze actual dart throws.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <CameraFeed title="Camera Feed 1" id="1" />
              <CameraFeed title="Camera Feed 2" id="2" />
              <CameraFeed title="Camera Feed 3" id="3" />
            </div>
            
            <FeedbackSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
