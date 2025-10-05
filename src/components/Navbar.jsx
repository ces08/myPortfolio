// import {useState} from 'react';
import { Link } from 'react-router-dom';
import ces_logo from "../assets/logos/CES_logo.png"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center text-lg w-full px-10 py-5 text-quasi-black dark:text-white-back">
      
      <Link to="/" className="flex items-center">
        <img src={ces_logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      <div id="main-nav" className="flex gap-10">
        <Link to="/" className="nav-item flex items-center h-10">Projects</Link>
        <Link to="/contact" className="nav-item flex items-center h-10">Contact</Link>
      </div>
    </div>
  );
}
