import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/age-calculator-logo.png';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-zinc-100 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src={logoImg} 
            alt="Utility Hub Logo" 
            className="h-15 w-15 object-contain transition-transform group-hover:scale-105" 
          />
          <span className="text-base font-semibold text-zinc-800 tracking-tight">
            ასაკის გამომთვლელი
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-blue-600' 
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            მთავარი
          </Link>
          <Link 
            to="/age-calculator" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/age-calculator' 
                ? 'text-blue-600' 
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            ასაკის კალკულატორი
          </Link>
        </div>
      </div>
    </nav>
  );
}