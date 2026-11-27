import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { lang, m, toggle } = useI18n();

  const navLinks = [
    { name: m.nav.work, path: '/' },
    { name: m.nav.blog, path: '/blog' },
    { name: m.nav.about, path: '/about' },
  ];

  const isActive = (path: string) =>
    path === '/blog' ? location.pathname.startsWith('/blog') : location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between min-h-16 items-center py-2 gap-2">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-1.5" aria-label="YY Studio">
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

          <div className="flex items-center gap-2 sm:gap-8 min-w-0">
            <div className="flex items-center gap-3 sm:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs sm:text-sm font-semibold whitespace-nowrap transition-all hover:text-blue-600 ${
                    isActive(link.path)
                      ? 'text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full'
                      : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={toggle}
              title={m.nav.switchLabel}
              aria-label={m.nav.switchLabel}
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-blue-100 bg-white text-[11px] sm:text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className={lang === 'zh' ? 'text-blue-600' : ''}>中文</span>
              <span className="text-slate-300">/</span>
              <span className={lang === 'en' ? 'text-blue-600' : ''}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
