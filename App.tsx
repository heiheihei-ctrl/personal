
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <footer className="bg-slate-950 text-slate-400 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-12 mb-12 space-y-8 md:space-y-0 text-center md:text-left">
              <div>
                <h2 className="text-white text-3xl font-black italic tracking-tighter mb-2">YY.</h2>
                <p className="text-sm text-slate-500 max-w-xs">Driven by curiosity, powered by code. 致力于创造有温度的数字产品。</p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium">
                <div className="space-y-3">
                  <p className="text-white text-xs uppercase tracking-widest font-bold opacity-50">快速链接</p>
                  <a href="/" className="block hover:text-blue-400 transition-colors">作品合集</a>
                  <a href="/about" className="block hover:text-blue-400 transition-colors">关于我</a>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-xs uppercase tracking-widest font-bold opacity-50">社交网络</p>
                  <a href="https://github.com/heiheihei-ctrl" target="_blank" className="block hover:text-blue-400 transition-colors">GitHub</a>
                  <a href="#" className="block hover:text-blue-400 transition-colors">WeChat</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-medium tracking-wide">
              <p className="uppercase">© {new Date().getFullYear()} YY Studio / 钱盈熠. ALL RIGHTS RESERVED.</p>
              <div className="flex items-center space-x-1">
                <span>Designed & Built with</span>
                <span className="text-red-500">❤️</span>
                <span>by YY</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
