
import React from "react";
import { Target, AlertCircle, Activity, BarChart3, Crosshair } from "lucide-react";

export const FeedbackSection: React.FC = () => {
  return (
    <div className="feed-card animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="p-3 border-b border-neutral-200">
        <h3 className="font-medium text-sm">Real-time Feedback and Analysis</h3>
      </div>
      
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Last Throw Score */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-4 transition-all hover:shadow-sm">
            <div className="flex items-center mb-3">
              <Target className="h-4 w-4 text-dart-accent mr-2" />
              <h4 className="text-sm font-medium text-dart-black">Last Throw Score</h4>
            </div>
            <div className="flex items-center justify-center h-24">
              <div className="text-3xl font-bold text-dart-black/70">Score: --</div>
            </div>
          </div>
          
          {/* AI Coaching Tip */}
          <div className="rounded-lg border border-dart-green/20 bg-dart-green/5 p-4 transition-all hover:shadow-sm md:col-span-2">
            <div className="flex items-center mb-3">
              <Crosshair className="h-4 w-4 text-dart-green mr-2" />
              <h4 className="text-sm font-medium text-dart-black">AI Coaching Tip</h4>
            </div>
            <div className="flex items-center justify-center h-24 p-4 text-center">
              <p className="text-lg text-dart-black/70 font-medium">
                Tip: Awaiting Throw...
              </p>
            </div>
          </div>
          
          {/* Session Metrics */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-4 transition-all hover:shadow-sm md:col-span-3">
            <div className="flex items-center mb-3">
              <BarChart3 className="h-4 w-4 text-dart-accent mr-2" />
              <h4 className="text-sm font-medium text-dart-black">Session Metrics</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 border border-neutral-200 flex items-center">
                <Activity className="h-5 w-5 text-dart-accent mr-3" />
                <div>
                  <div className="text-xs text-neutral-500">Accuracy</div>
                  <div className="text-xl font-semibold">--%</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-neutral-200 flex items-center">
                <Target className="h-5 w-5 text-dart-green mr-3" />
                <div>
                  <div className="text-xs text-neutral-500">Consistency</div>
                  <div className="text-xl font-semibold">--%</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-neutral-200 flex items-center">
                <Crosshair className="h-5 w-5 text-dart-red mr-3" />
                <div>
                  <div className="text-xs text-neutral-500">Avg. per Throw</div>
                  <div className="text-xl font-semibold">--</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
