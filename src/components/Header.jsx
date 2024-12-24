import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: "Hello, UpUnikSelf Team!" */}
        <h1 className="text-2xl font-bold">
          <a href="/">Hello, UpUnikSelf Team!</a>
        </h1>

        {/* Right side: Links */}
        <div className="flex space-x-4">
          <Link to="/about-me" className="text-white">
            About Me
          </Link>
          <Link to="/nasa-fun" className="text-white">
            Something Fun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
