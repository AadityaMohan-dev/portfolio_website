import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  onNotify?: (title: string, desc?: string, type?: 'success' | 'info' | 'error') => void;
  onNavigateSection?: (sectionId: string) => void;
  onToggleTheme?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNotify,
  onNavigateSection,
  onToggleTheme,
}) => {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Pitch & Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_0_3px_rgba(22,128,60,0.15)] animate-pulse shrink-0"></span>
              <span className="font-bold text-paper-500 uppercase text-[9.5px] tracking-wider">
                Availability
              </span>
              <span className="px-1.5 py-0.5 rounded-[2px] text-[9.5px] font-extrabold bg-emerald-600 text-white shrink-0">
                200 OK
              </span>
              <span className="text-paper-300 dark:text-paper-700">|</span>
              <span className="text-paper-800 dark:text-paper-200 font-medium truncate">
                {portfolioData.availability.text}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5">
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-paper-950 dark:text-paper-50 leading-[0.98]">
                Aaditya<br />
                Mohan<span className="text-blue-600 dark:text-blue-500">.</span>
              </h1>
              <p className="text-base sm:text-lg text-paper-600 dark:text-paper-400 pt-1 leading-relaxed">
                <strong className="text-paper-950 dark:text-paper-100 font-semibold">Software Engineer</strong> — 3+ years designing and scaling enterprise applications with Spring Boot, microservices, and AWS. I turn legacy systems into modern, well-documented APIs.
              </p>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-[4px] bg-paper-100 dark:bg-paper-850 border border-paper-200 dark:border-paper-750 font-semibold text-paper-800 dark:text-paper-200">
                ☕ Java 17
              </span>
              <span className="px-2.5 py-1 rounded-[4px] bg-paper-100 dark:bg-paper-850 border border-paper-200 dark:border-paper-750 font-semibold text-paper-800 dark:text-paper-200">
                🍃 Spring Boot
              </span>
              <span className="px-2.5 py-1 rounded-[4px] bg-paper-100 dark:bg-paper-850 border border-paper-200 dark:border-paper-750 font-semibold text-paper-800 dark:text-paper-200">
                ☁️ AWS
              </span>
              <span className="px-2.5 py-1 rounded-[4px] bg-paper-100 dark:bg-paper-850 border border-paper-200 dark:border-paper-750 font-semibold text-paper-800 dark:text-paper-200">
                ⚛️ React
              </span>
              <span className="px-2.5 py-1 rounded-[4px] bg-paper-100 dark:bg-paper-850 border border-paper-200 dark:border-paper-750 font-semibold text-paper-800 dark:text-paper-200">
                🐬 MySQL / Postgres
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 font-mono">
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] text-xs font-bold bg-blue-600 hover:bg-paper-950 text-white transition active:scale-[0.98] shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                Download Résumé
              </a>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-[4px] text-xs font-bold border border-paper-300 dark:border-paper-700 bg-white dark:bg-paper-900 text-paper-900 dark:text-paper-100 hover:bg-paper-100 dark:hover:bg-paper-800 transition active:scale-[0.98]"
                >
                  <span className="text-orange-600 dark:text-orange-400 font-extrabold mr-1">POST</span>
                  /contact
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-[4px] text-xs font-bold border border-paper-300 dark:border-paper-700 bg-white dark:bg-paper-900 text-paper-900 dark:text-paper-100 hover:bg-paper-100 dark:hover:bg-paper-800 transition active:scale-[0.98]"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold mr-1">GET</span>
                  /projects
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-6 w-full"
          >
            <InteractiveTerminal 
              onNotify={onNotify}
              onNavigateSection={onNavigateSection}
              onToggleTheme={onToggleTheme}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
