// import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import ces_logo from "../assets/logos/CES_logo.png"

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between items-center text-lg w-screen px-10 py-3 text-quasi-black dark:text-white-back bg-white border-b border-gray-200 dark:bg-black-back dark:border-gray-400">
      
      <Link to="/" className="flex items-center">
        <img src={ces_logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      <div id="main-nav" className="flex gap-10">
        <Link to="/" className={`navbar-tab ${pathname === "/" ? "text-dark-accent dark:text-accent" : ""}`}>Projects</Link>
        <Link to="/about" className={`navbar-tab ${pathname === '/about' ? "text-dark-accent dark:text-accent" : ""}`}>About</Link>
      </div>
    </div>
  );
}
