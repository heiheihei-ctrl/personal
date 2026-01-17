
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: '作品集', path: '/' },
    { name: '关于我', path: '/about' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center space-x-1">
              <span className="text-3xl font-black italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all group-hover:tracking-widest">
                YY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-3 animate-pulse"></span>
            </Link>
          </div>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-blue-600 ${
                  location.pathname === link.path 
                    ? 'text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' 
                    : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
