
import { Navbar } from "@/components/Navbar";
import { Target, ChevronRight, Zap, Activity, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 z-0" />
          <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-dart-green/5 rounded-tl-full z-0" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 page-transition">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-dart-green/10 text-dart-green mb-4">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Precision Dart Coaching</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dart-black">
                Elevate Your Dart Game with
                <span className="text-dart-green"> Dartopia</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-dart-black/70 max-w-3xl mx-auto">
                Democratizing elite dart coaching with advanced camera analysis, real-time feedback, and a supportive community. Improve your technique and track your progress like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link 
                  to="/dashboard" 
                  className="btn-primary px-8 py-3 rounded-lg text-base w-full sm:w-auto"
                >
                  Try Coaching Dashboard
                </Link>
                <Link 
                  to="/community" 
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-8 py-3 text-base font-medium text-dart-black shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-dart-accent focus:ring-offset-2 w-full sm:w-auto"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 page-transition">
              <h2 className="text-3xl font-bold tracking-tight text-dart-black sm:text-4xl">
                Everything You Need to Master Darts
              </h2>
              <p className="mt-4 text-lg text-dart-black/70">
                From beginners to advanced players, our comprehensive platform provides the tools and insights to help you reach the next level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md page-transition" style={{animationDelay: "100ms"}}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-dart-green/10">
                  <Zap className="h-6 w-6 text-dart-green" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-dart-black">Multi-Angle Analysis</h3>
                <p className="text-dart-black/70">
                  Connect multiple cameras to analyze your stance, throw, and follow-through from different perspectives.
                </p>
              </div>
              
              <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md page-transition" style={{animationDelay: "200ms"}}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-dart-green/10">
                  <Activity className="h-6 w-6 text-dart-green" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-dart-black">Real-Time Feedback</h3>
                <p className="text-dart-black/70">
                  Receive instant tips and corrections to improve your technique as you practice.
                </p>
              </div>
              
              <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md page-transition" style={{animationDelay: "300ms"}}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-dart-green/10">
                  <Award className="h-6 w-6 text-dart-green" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-dart-black">Progress Tracking</h3>
                <p className="text-dart-black/70">
                  Monitor your improvement over time with detailed statistics and performance metrics.
                </p>
              </div>
              
              <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md page-transition" style={{animationDelay: "400ms"}}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-dart-green/10">
                  <Users className="h-6 w-6 text-dart-green" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-dart-black">Community Support</h3>
                <p className="text-dart-black/70">
                  Connect with fellow dart enthusiasts, share tips, and participate in friendly competitions.
                </p>
              </div>
              
              <div className="sm:col-span-2 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md page-transition" style={{animationDelay: "500ms"}}>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="mb-4 sm:mb-0 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-dart-green/10">
                    <Target className="h-6 w-6 text-dart-green" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-dart-black">Ready to Transform Your Game?</h3>
                    <p className="text-dart-black/70 mb-4">
                      Start with our coaching dashboard to see how Dartopia can help you improve your skills and take your game to professional levels.
                    </p>
                    <Link 
                      to="/dashboard" 
                      className="inline-flex items-center text-dart-green font-medium hover:text-dart-green-dark"
                    >
                      Go to Coaching Dashboard
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-dart-black py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <Target className="h-10 w-10 text-dart-green" />
            </div>
            <p className="text-white/70 text-sm text-center max-w-md">
              Dartopia Coach Hub is dedicated to democratizing access to elite dart coaching through technology.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <p className="mt-8 text-white/30 text-sm">
              &copy; {new Date().getFullYear()} Dartopia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
