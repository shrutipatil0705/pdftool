import React from 'react';
import { X, ShieldCheck, Zap, Lock, Cpu } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-xl w-full bg-[#131b2e] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          About PDF Tools
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">
          PDF Tools is a high-performance web application designed to empower users with essential PDF operations directly inside their browser—with zero server uploads and 100% privacy guarantee.
        </p>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white">100% Client-Side Privacy</h4>
              <p className="text-[11px] text-slate-400">Your documents never leave your device. All conversions, extractions, and rendering happen locally in WebAssembly and JavaScript.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <Zap className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white">Lightning Fast</h4>
              <p className="text-[11px] text-slate-400">Instant file parsing and multi-page processing powered by PDF.js and pdf-lib.</p>
            </div>
          </div>
        </div>

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
