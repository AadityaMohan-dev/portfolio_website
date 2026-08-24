import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 bg-[#111111] border-t border-[#222222] text-[#888888] font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span>© {new Date().getFullYear()} {portfolioData.name}.</span>
          <span className="hidden sm:inline text-[#444444]">|</span>
          <span className="hidden sm:inline text-[#666666]">
            React &amp; Tailwind CSS
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>200 OK</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-[2px] bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#CCCCCC] hover:text-white transition border border-[#333333] flex items-center gap-1 text-[11px]"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
