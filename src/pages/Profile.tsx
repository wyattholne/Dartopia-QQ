
import { Navbar } from "@/components/Navbar";
import { User, Settings, Calendar, Award, Target, ChevronRight } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container-custom py-8">
          <div className="page-transition">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-dart-black">Your Profile</h1>
              <p className="text-neutral-500">View and manage your profile settings</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-8 mb-10">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-dart-green/10 mb-4">
                  <User className="h-10 w-10 text-dart-green" />
                </div>
                <h2 className="text-xl font-semibold text-dart-black mb-2">Create Your Profile</h2>
                <p className="text-neutral-500 mb-6">
                  Set up your profile to track your progress, participate in the community, and get personalized coaching recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Create Profile</button>
                  <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                    <Settings className="h-4 w-4 mr-2" />
                    View Settings
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-6">
                <h3 className="font-medium text-lg mb-4 flex items-center text-dart-black">
                  <Target className="h-5 w-5 mr-2 text-dart-green" />
                  Profile Information
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-500">Display Name</span>
                    <span className="font-medium text-dart-black">Not Set</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-500">Skill Level</span>
                    <span className="font-medium text-dart-black">Not Set</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-500">Playing Since</span>
                    <span className="font-medium text-dart-black">Not Set</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-500">Preferred Equipment</span>
                    <span className="font-medium text-dart-black">Not Set</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-500">Bio</span>
                    <span className="font-medium text-dart-black">Not Set</span>
                  </div>
                </div>
                
                <button className="mt-6 inline-flex items-center text-dart-green text-sm font-medium">
                  Complete your profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-6">
                <h3 className="font-medium text-lg mb-4 flex items-center text-dart-black">
                  <Award className="h-5 w-5 mr-2 text-dart-green" />
                  Quick Access
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="#" className="group block p-4 rounded-lg border border-neutral-200 hover:border-dart-green/50 hover:shadow-sm transition-all">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-md bg-dart-green/10 flex items-center justify-center mr-3">
                        <Calendar className="h-4 w-4 text-dart-green" />
                      </div>
                      <h4 className="font-medium group-hover:text-dart-green transition-colors">Practice Sessions</h4>
                    </div>
                    <p className="text-sm text-neutral-500">View your past practice sessions and results</p>
                  </a>
                  
                  <a href="#" className="group block p-4 rounded-lg border border-neutral-200 hover:border-dart-green/50 hover:shadow-sm transition-all">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-md bg-dart-green/10 flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-dart-green" />
                      </div>
                      <h4 className="font-medium group-hover:text-dart-green transition-colors">Achievements</h4>
                    </div>
                    <p className="text-sm text-neutral-500">Track your progress and unlock achievements</p>
                  </a>
                  
                  <a href="#" className="group block p-4 rounded-lg border border-neutral-200 hover:border-dart-green/50 hover:shadow-sm transition-all">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-md bg-dart-green/10 flex items-center justify-center mr-3">
                        <Settings className="h-4 w-4 text-dart-green" />
                      </div>
                      <h4 className="font-medium group-hover:text-dart-green transition-colors">Account Settings</h4>
                    </div>
                    <p className="text-sm text-neutral-500">Manage your account preferences and settings</p>
                  </a>
                  
                  <a href="#" className="group block p-4 rounded-lg border border-neutral-200 hover:border-dart-green/50 hover:shadow-sm transition-all">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-md bg-dart-green/10 flex items-center justify-center mr-3">
                        <Target className="h-4 w-4 text-dart-green" />
                      </div>
                      <h4 className="font-medium group-hover:text-dart-green transition-colors">Training Plans</h4>
                    </div>
                    <p className="text-sm text-neutral-500">View and customize your training programs</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
