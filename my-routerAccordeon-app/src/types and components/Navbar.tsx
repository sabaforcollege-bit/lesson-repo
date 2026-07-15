import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import myLogo from '../assets/fetch_API_logo.png';

function Navbar() {
  const location = useLocation();

  const linkClass = (path: string) => {
    const baseClass = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
    return location.pathname === path
      ? `${baseClass} bg-blue-600 text-white`
      : `${baseClass} text-gray-600 hover:bg-gray-100 hover:text-gray-900`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={myLogo} 
            alt="Logo" 
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            My Users App (Fetch)
          </span>
        </Link>
        
        <div className="flex gap-4">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/user" className={linkClass('/user')}>
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;