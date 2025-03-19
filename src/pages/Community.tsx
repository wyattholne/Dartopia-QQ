
import { Navbar } from "@/components/Navbar";
import { Users, MessageSquare, Award, Calendar, ArrowRight } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container-custom py-8">
          <div className="page-transition">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-dart-black">Community Hub</h1>
              <p className="text-neutral-500">Connect with other dart players and coaches here</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-xl border border-neutral-200 p-8 mb-10">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-dart-green/10 mb-4">
                  <Users className="h-7 w-7 text-dart-green" />
                </div>
                <h2 className="text-xl font-semibold text-dart-black mb-2">Join the Dartopia Community</h2>
                <p className="text-neutral-500 mb-6">
                  Connect with fellow dart enthusiasts, share your progress, get tips from coaches, and participate in virtual tournaments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Create Profile</button>
                  <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-dart-black shadow-sm hover:bg-neutral-50">
                    Browse Community
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 overflow-hidden">
                <div className="p-5 border-b border-neutral-200">
                  <h3 className="font-medium flex items-center text-dart-black">
                    <MessageSquare className="h-5 w-5 mr-2 text-dart-green" />
                    Discussion Forums
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-4">
                    <li className="pb-4 border-b border-neutral-100">
                      <h4 className="font-medium text-dart-black">Technique Tips</h4>
                      <p className="text-sm text-neutral-500 mb-2">Share and discuss dart throwing techniques</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>24 topics</span>
                        <span className="mx-2">•</span>
                        <span>142 posts</span>
                      </div>
                    </li>
                    <li className="pb-4 border-b border-neutral-100">
                      <h4 className="font-medium text-dart-black">Equipment Reviews</h4>
                      <p className="text-sm text-neutral-500 mb-2">Discuss dart equipment and accessories</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>18 topics</span>
                        <span className="mx-2">•</span>
                        <span>97 posts</span>
                      </div>
                    </li>
                    <li>
                      <h4 className="font-medium text-dart-black">Coaching Corner</h4>
                      <p className="text-sm text-neutral-500 mb-2">Get advice from community coaches</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>12 topics</span>
                        <span className="mx-2">•</span>
                        <span>76 posts</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <a href="#" className="inline-flex items-center text-dart-green text-sm font-medium">
                      View all forums 
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 overflow-hidden">
                <div className="p-5 border-b border-neutral-200">
                  <h3 className="font-medium flex items-center text-dart-black">
                    <Award className="h-5 w-5 mr-2 text-dart-green" />
                    Upcoming Tournaments
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-4">
                    <li className="pb-4 border-b border-neutral-100">
                      <div className="flex items-center mb-1">
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          Beginner Friendly
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Weekly Challenge: Precision Focus</h4>
                      <p className="text-sm text-neutral-500 mb-1">Practice your precision with this weekly challenge</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>Starts in 2 days</span>
                        <span className="mx-2">•</span>
                        <span>43 participants</span>
                      </div>
                    </li>
                    <li className="pb-4 border-b border-neutral-100">
                      <div className="flex items-center mb-1">
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          All Levels
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Monthly Dartopia Cup</h4>
                      <p className="text-sm text-neutral-500 mb-1">Our monthly community tournament with prizes</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>Starts in 12 days</span>
                        <span className="mx-2">•</span>
                        <span>128 participants</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mb-1">
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          Advanced
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Pro Challenge Series</h4>
                      <p className="text-sm text-neutral-500 mb-1">Test your skills against our top players</p>
                      <div className="flex items-center text-xs text-neutral-400">
                        <span>Starts in 18 days</span>
                        <span className="mx-2">•</span>
                        <span>32 participants</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <a href="#" className="inline-flex items-center text-dart-green text-sm font-medium">
                      View all tournaments 
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-neutral-200 overflow-hidden">
                <div className="p-5 border-b border-neutral-200">
                  <h3 className="font-medium flex items-center text-dart-black">
                    <Calendar className="h-5 w-5 mr-2 text-dart-green" />
                    Upcoming Events
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-4">
                    <li className="pb-4 border-b border-neutral-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-dart-black">June 12</span>
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          Webinar
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Improving Your Mental Game</h4>
                      <p className="text-sm text-neutral-500 mb-1">With professional coach Mark Johnson</p>
                      <div className="mt-2">
                        <button className="text-xs px-3 py-1 bg-dart-green/10 text-dart-green rounded-md hover:bg-dart-green/20 transition-colors">
                          Add to Calendar
                        </button>
                      </div>
                    </li>
                    <li className="pb-4 border-b border-neutral-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-dart-black">June 18</span>
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          Live Stream
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Pro Analysis Session</h4>
                      <p className="text-sm text-neutral-500 mb-1">Watch as we analyze pro matches live</p>
                      <div className="mt-2">
                        <button className="text-xs px-3 py-1 bg-dart-green/10 text-dart-green rounded-md hover:bg-dart-green/20 transition-colors">
                          Set Reminder
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-dart-black">June 25</span>
                        <span className="text-xs bg-dart-green/10 text-dart-green rounded-full px-2 py-0.5">
                          Q&A
                        </span>
                      </div>
                      <h4 className="font-medium text-dart-black">Ask a Pro: Open Session</h4>
                      <p className="text-sm text-neutral-500 mb-1">Get your questions answered by pros</p>
                      <div className="mt-2">
                        <button className="text-xs px-3 py-1 bg-dart-green/10 text-dart-green rounded-md hover:bg-dart-green/20 transition-colors">
                          Submit Question
                        </button>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <a href="#" className="inline-flex items-center text-dart-green text-sm font-medium">
                      View full calendar 
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
