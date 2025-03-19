
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Home, Layout, TrendingUp, Users, User } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <Logo />
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? "active" : ""}`}
              end
            >
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? "active" : ""}`}
            >
              <Layout className="w-4 h-4 mr-1" />
              <span>Coaching Dashboard</span>
            </NavLink>
            <NavLink 
              to="/progress" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? "active" : ""}`}
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>Progress Tracking</span>
            </NavLink>
            <NavLink 
              to="/community" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? "active" : ""}`}
            >
              <Users className="w-4 h-4 mr-1" />
              <span>Community Hub</span>
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? "active" : ""}`}
            >
              <User className="w-4 h-4 mr-1" />
              <span>Profile</span>
            </NavLink>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-neutral-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
