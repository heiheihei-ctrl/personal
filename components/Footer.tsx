import React from 'react';
import { Link } from 'react-router-dom';
import wechatQr from '../assets/wechat-qr.png';
import { useI18n } from '../i18n';

const Footer: React.FC = () => {
  const { m } = useI18n();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-12 mb-12 space-y-8 md:space-y-0 text-center md:text-left">
          <div>
            <h2 className="text-white text-3xl font-black italic leading-none py-1 mb-2">YY.</h2>
            <p className="text-sm text-slate-500 max-w-xs">{m.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium">
            <div className="space-y-3">
              <p className="text-white text-xs uppercase tracking-widest font-bold opacity-50">{m.footer.quickLinks}</p>
              <Link to="/" className="block hover:text-blue-400 transition-colors">{m.footer.work}</Link>
              <Link to="/blog" className="block hover:text-blue-400 transition-colors">{m.footer.blog}</Link>
              <Link to="/about" className="block hover:text-blue-400 transition-colors">{m.footer.about}</Link>
            </div>
            <div className="space-y-3">
              <p className="text-white text-xs uppercase tracking-widest font-bold opacity-50">{m.footer.social}</p>
              <div className="relative group inline-block">
                <button type="button" className="block hover:text-blue-400 transition-colors cursor-pointer">
                  WeChat
                </button>
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <div className="bg-white rounded-xl shadow-2xl p-3 w-[160px] border border-slate-100">
                    <img src={wechatQr} alt="WeChat QR code" className="w-full aspect-square rounded-lg object-cover" />
                    <p className="mt-2 text-[10px] text-slate-500 text-center leading-tight">{m.footer.wechatTip}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-medium tracking-wide">
          <p className="uppercase">© {new Date().getFullYear()} YY Studio / {m.about.name}. {m.footer.rights}</p>
          <div className="flex items-center space-x-1">
            <span>{m.footer.built}</span>
            <span className="text-red-500">❤️</span>
            <span>{m.footer.by}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
