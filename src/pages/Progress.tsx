
import { Navbar } from "@/components/Navbar";
import { TrendingUp, BarChart3, ChevronDown, Filter } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container-custom py-8">
          <div className="page-transition">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-dart-black">Progress Tracking & Analytics</h1>
                <p className="text-neutral-500">Track your improvement and analyze performance trends</p>
              </div>
              
              <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                  <span>Last 30 Days</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-8 mb-10">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-dart-green/10 mb-4">
                  <BarChart3 className="h-7 w-7 text-dart-green" />
                </div>
                <h2 className="text-xl font-semibold text-dart-black mb-2">Your Performance Analytics</h2>
                <p className="text-neutral-500 mb-6">
                  This section will display your dart practice progress and analytics once you start using the coaching dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Start First Session</button>
                  <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                    View Sample Data
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-6">
                <h3 className="font-medium text-lg mb-4 flex items-center text-dart-black">
                  <TrendingUp className="h-5 w-5 mr-2 text-dart-green" />
                  What You'll Track
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dart-green/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-semibold text-dart-green">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-dart-black">Accuracy Metrics</h4>
                      <p className="text-sm text-neutral-500">Track your precision and grouping patterns over time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dart-green/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-semibold text-dart-green">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-dart-black">Throw Consistency</h4>
                      <p className="text-sm text-neutral-500">Analyze the consistency of your throwing technique</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dart-green/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-semibold text-dart-green">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-dart-black">Session History</h4>
                      <p className="text-sm text-neutral-500">Review past practice sessions and identify trends</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dart-green/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-semibold text-dart-green">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-dart-black">Improvement Rate</h4>
                      <p className="text-sm text-neutral-500">See how quickly you're improving specific aspects of your game</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-6">
                <h3 className="font-medium text-lg mb-4 flex items-center text-dart-black">
                  <TrendingUp className="h-5 w-5 mr-2 text-dart-green" />
                  Coming Soon
                </h3>
                <div className="bg-dart-black/5 rounded-lg p-4">
                  <h4 className="font-medium text-dart-black mb-2">Advanced Analytics Features</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-dart-green mr-2"></div>
                      <span>AI-powered technique recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-dart-green mr-2"></div>
                      <span>Comparative analysis with pro players</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-dart-green mr-2"></div>
                      <span>Custom practice program generation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-dart-green mr-2"></div>
                      <span>Performance prediction based on practice data</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-dart-green mr-2"></div>
                      <span>Integration with tournament platforms</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-neutral-500 mt-4">These features are currently in development and will be available in future updates.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
