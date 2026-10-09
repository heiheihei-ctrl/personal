import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: '作品集', path: '/' },
    // { name: '博客', path: '/blog' },
    { name: '关于我', path: '/about' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between min-h-16 items-center py-2">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-1.5" aria-label="YY 首页">
              {/* SVG 避免 bg-clip-text / backdrop-blur 裁切斜体字形 */}
              <svg
                viewBox="0 0 52 36"
                className="h-9 w-[52px] overflow-visible transition-transform duration-300 group-hover:scale-105"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="yy-logo-grad" x1="0" y1="0" x2="52" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <text
                  x="2"
                  y="28"
                  fill="url(#yy-logo-grad)"
                  fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                  fontSize="26"
                  fontWeight="900"
                  fontStyle="italic"
                >
                  YY
                </text>
              </svg>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse translate-y-1"></span>
            </Link>
          </div>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-blue-600 ${
                  (link.path === '/blog' ? location.pathname.startsWith('/blog') : location.pathname === link.path)
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
