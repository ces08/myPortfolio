// import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="flex justify-between items-center text-lg w-full px-10 py-5">
      
      <Link to="/" className="flex items-center">
        <img src="/CES_Gray.png" alt="Logo" className="h-10 w-auto" />
      </Link>

      <div id="main-nav" className="flex gap-10">
        <Link to="/" className="nav-item flex items-center h-10">Projects</Link>
        <Link to="/contact" className="nav-item flex items-center h-10">Contact</Link>
      </div>
    </div>
  );
}
