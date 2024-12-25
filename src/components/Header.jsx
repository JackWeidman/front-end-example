import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: "Hello, UpUnikSelf Team!" */}
        <h1 className="text-2xl font-bold">
          <a href="/">Hello, UpUnikSelf Team!</a>
        </h1>

        {/* Right side: Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/about-me" className="text-white">
            About Me
          </Link>
          <Link to="/nasa-fun" className="text-white">
            Something Fun
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleDrawer}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden absolute top-0 right-0 w-3/4 h-full bg-slate-900 z-50 shadow-lg p-4">
          <button
            className="text-white absolute top-2 right-2"
            onClick={toggleDrawer}
            aria-label="Close navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col space-y-4 mt-8">
            <Link to="/about-me" className="text-white" onClick={toggleDrawer}>
              About Me
            </Link>
            <Link to="/nasa-fun" className="text-white" onClick={toggleDrawer}>
              Something Fun
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
