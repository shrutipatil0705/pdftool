import React from 'react';
import { FileText, Github, Youtube, Linkedin } from 'lucide-react';

export default function Footer({ setActiveView, theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t transition-colors duration-200 py-10 ${
      isDark 
        ? 'bg-[#0b0f19] border-slate-800 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-500 p-0.5">
              <div className={`w-full h-full rounded-[6px] flex items-center justify-center ${isDark ? 'bg-[#0b0f19]' : 'bg-white'}`}>
                <FileText className="w-4 h-4 text-rose-500" />
              </div>
            </div>
            <span className={`font-extrabold text-lg tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              PDF Tools
            </span>
            <span className="text-xs text-slate-500 font-medium">Simple · Fast · Free</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <button 
              onClick={() => setActiveView('home')} 
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                setActiveView('home');
                setTimeout(() => {
                  document.getElementById('tools-grid-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
            >
              All Tools
            </button>
            <button 
              onClick={() => setActiveView('about')} 
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveView('contact')} 
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
            >
              Contact
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} PDF Tools. All rights reserved.</p>
          <p>Designed for privacy & performance. 100% Client-side processing.</p>
        </div>

      </div>
    </footer>
  );
}
