import React from 'react';
import { FileText, Zap, Sun, Moon } from 'lucide-react';

export default function Header({ activeView, setActiveView, theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark 
        ? 'bg-[#0f172a]/95 border-slate-800 shadow-lg' 
        : 'bg-white/95 border-slate-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveView('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-500 via-rose-500 to-pink-500 p-0.5 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-[#0f172a]' : 'bg-white'}`}>
              <FileText className="w-5 h-5 text-rose-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className={`font-extrabold text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                PDF Tools
              </span>
            </div>
            <span className={`text-[10px] uppercase font-medium tracking-wider block -mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Simple · Fast · Free
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border ${
          isDark 
            ? 'bg-slate-900/60 border-slate-800/80' 
            : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveView('home')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeView === 'home'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveView('all-tools')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeView === 'all-tools'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            All Tools
          </button>

          <button
            onClick={() => setActiveView('about')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeView === 'about'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveView('contact')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeView === 'contact'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right side controls: Pill badge + ICON ONLY Theme Toggle Button */}
        <div className="flex items-center gap-3">
          
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 text-purple-400 text-xs font-semibold shadow-inner">
            <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>⚡ 100% Free Online Tools</span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer ${
              isDark 
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-400 hover:border-amber-400/50' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-indigo-600 hover:border-indigo-400'
            }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}
