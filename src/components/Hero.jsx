import React from 'react';
import { ShieldCheck, Monitor, Zap, FileText, Image as ImageIcon } from 'lucide-react';

export default function Hero({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section className={`relative overflow-hidden py-12 md:py-16 transition-colors duration-200 border-b ${
      isDark 
        ? 'bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b0f19] border-slate-800/80 text-white' 
        : 'bg-gradient-to-b from-indigo-50/80 via-purple-50/50 to-white border-slate-200 text-slate-900'
    }`}>
      
      {/* Background glow effects */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] pointer-events-none rounded-full ${
        isDark ? 'bg-indigo-600/15' : 'bg-indigo-300/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              All Your PDF Needs <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                in One Place
              </span>
            </h1>

            <p className={`text-lg sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Convert, edit, merge, split, compress and more. <br className="hidden sm:inline" />
              Fast, easy and completely free!
            </p>

            {/* Value Props Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <Zap className="w-4 h-4 text-amber-500" />
                <span>No Installation</span>
              </div>
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Safe & Secure</span>
              </div>
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <Monitor className="w-4 h-4 text-indigo-500" />
                <span>Works on Any Device</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic matching screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className={`relative w-full max-w-md p-6 rounded-3xl border backdrop-blur-sm shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/20 shadow-indigo-950/50' 
                : 'bg-gradient-to-br from-indigo-100/60 to-purple-100/60 border-indigo-200 shadow-indigo-100'
            }`}>
              
              <div className="relative h-64 flex items-center justify-center">
                
                {/* Central Red PDF card */}
                <div className="relative z-20 w-32 h-40 bg-gradient-to-b from-red-500 to-rose-600 rounded-2xl p-4 shadow-2xl shadow-red-500/30 border border-red-400/40 flex flex-col justify-between items-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-8 h-2 bg-white/40 rounded-full" />
                  <div className="text-center">
                    <span className="text-2xl font-black text-white tracking-widest block">PDF</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Conversion arrows */}
                <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 flex items-center justify-between pointer-events-none">
                  <svg className="w-full h-full text-indigo-500/80 animate-pulse" viewBox="0 0 200 60" fill="none">
                    <path d="M 40 30 C 90 5, 110 5, 160 30" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" />
                    <polygon points="160,30 150,22 152,35" fill="currentColor" />
                  </svg>
                </div>

                {/* Converted Image cards floating behind */}
                <div className="absolute z-10 right-4 top-6 w-28 h-36 bg-gradient-to-tr from-sky-400 to-cyan-500 rounded-xl p-3 shadow-xl border border-sky-300/40 transform rotate-6 flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <ImageIcon className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-bold text-white uppercase">JPG</span>
                  </div>
                  <div className="w-full h-16 bg-white/20 rounded-md flex items-center justify-center">
                    <span className="text-[10px] text-white/90 font-medium">Page 1</span>
                  </div>
                </div>

                <div className="absolute z-10 right-12 bottom-4 w-28 h-36 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl p-3 shadow-xl border border-purple-300/40 transform rotate-12 flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <ImageIcon className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-bold text-white uppercase">PNG</span>
                  </div>
                  <div className="w-full h-16 bg-white/20 rounded-md flex items-center justify-center">
                    <span className="text-[10px] text-white/90 font-medium">Page 2</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
