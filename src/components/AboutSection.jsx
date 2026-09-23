import React from 'react';
import { Zap, ShieldCheck, Monitor, Heart, FileText, CheckCircle, Award } from 'lucide-react';

export default function AboutSection({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className={`py-12 ${isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Hero Banner */}
        <div className={`rounded-3xl p-8 sm:p-12 border ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border-indigo-900/40' 
            : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-indigo-100 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
                About Us
              </span>
              <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Simple Tools for <br />
                <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Your PDF Needs
                </span>
              </h1>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                PDF Tools is a free online platform that helps you convert, edit, merge, split, compress and manage PDF files easily — all in one place.
              </p>
            </div>

            {/* Illustration graphic matching screenshot */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs h-48 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                <div className="w-28 h-36 bg-gradient-to-b from-rose-500 to-pink-600 rounded-2xl p-4 shadow-xl text-white flex flex-col justify-between items-center transform -rotate-3">
                  <div className="w-6 h-1.5 bg-white/40 rounded-full" />
                  <span className="font-extrabold text-xl tracking-wider">PDF</span>
                  <FileText className="w-8 h-8 text-white/90" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Us Section matching screenshot */}
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Choose Us?
            </h2>
            <div className="w-12 h-1 bg-rose-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Fast & Easy */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#131b2e] border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mx-auto mb-4 font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Fast & Easy
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Get your work done in seconds with our simple interface.
              </p>
            </div>

            {/* Card 2: 100% Free */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#131b2e] border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                100% Free
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                All tools are completely free to use, with no hidden charges.
              </p>
            </div>

            {/* Card 3: Secure */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#131b2e] border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Secure
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Your files are safe and private. We don't store your data.
              </p>
            </div>

            {/* Card 4: Works on Any Device */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#131b2e] border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto mb-4 font-bold">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Works on Any Device
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Use it on your computer, tablet or mobile — anytime, anywhere.
              </p>
            </div>

          </div>
        </div>

        {/* Our Mission Section matching screenshot */}
        <div className={`rounded-3xl p-8 sm:p-12 border ${
          isDark 
            ? 'bg-[#131b2e] border-slate-800' 
            : 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-slate-200 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Laptop Graphic */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-40 bg-slate-800 rounded-t-xl border-4 border-slate-700 flex items-center justify-center shadow-xl">
                <div className="w-36 h-24 bg-white rounded p-2 flex flex-col justify-between items-center text-slate-800">
                  <FileText className="w-8 h-8 text-rose-500" />
                  <span className="text-[10px] font-bold">PDF Document</span>
                </div>
                <div className="absolute -bottom-3 -left-4 -right-4 h-3 bg-slate-700 rounded-b-xl" />
              </div>
            </div>

            {/* Mission Content */}
            <div className="md:col-span-7 space-y-3">
              <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Mission
              </h2>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Our mission is to make PDF file management simple, fast and accessible for everyone. We believe that powerful tools should be easy to use and available to all — without any cost.
              </p>
              <p className="font-semibold text-rose-500 text-sm tracking-wide pt-2">
                Your PDF, Our Priority
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
