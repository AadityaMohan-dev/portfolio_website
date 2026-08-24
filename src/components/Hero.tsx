import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight, Mail } from 'lucide-react';
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
    <section id="hero" className="relative overflow-hidden border-b border-paper-200/70 dark:border-paper-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-4 border-x border-paper-200/70 dark:border-paper-800/70 px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
         

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 lg:pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
              className="space-y-6 sm:space-y-7 lg:col-span-7"
          >
              <div className="space-y-3">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  {portfolioData.name} / {portfolioData.title}
                </p>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-paper-950 dark:text-paper-50 sm:text-6xl lg:text-[4.25rem]">
                  Building software that stays useful under pressure<span className="text-blue-600 dark:text-blue-500">.</span>
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-paper-600 dark:text-paper-400 sm:text-base">
                  Backend-focused software engineer with <strong>3+ years of experience</strong> modernizing enterprise systems, designing resilient APIs, and shipping cloud-ready products with <strong>Java 17, Spring Boot, React, and AWS</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection?.('projects');
                }}
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
              >
                <span>View Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Secondary CTA: Let's Connect */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection?.('contact');
                }}
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-paper-300 bg-white px-4 py-3 text-xs font-bold text-paper-900 transition hover:bg-paper-100 active:scale-[0.98] dark:border-paper-700 dark:bg-paper-900 dark:text-paper-100 dark:hover:bg-paper-800"
              >
                <Mail className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>Let's Connect</span>
              </a>

              {/* Resume CTA */}
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-paper-200 bg-paper-50 px-4 py-3 text-xs font-bold text-paper-700 transition hover:text-paper-950 active:scale-[0.98] dark:border-paper-800 dark:bg-paper-850 dark:text-paper-300 dark:hover:text-white"
              >
                <FileDown className="w-3.5 h-3.5 text-paper-500" />
                <span>Résumé</span>
              </a>
              </div>

              <div className="grid max-w-2xl grid-cols-3 border-y border-paper-200 dark:border-paper-800 py-4">
                {portfolioData.metrics.map((metric) => (
                  <div key={metric.label} className="border-r border-paper-200 px-3 first:pl-0 last:border-r-0 dark:border-paper-800">
                    <p className="font-display text-2xl font-bold text-paper-950 dark:text-paper-50 sm:text-3xl">{metric.number}</p>
                    <p className="mt-1 font-mono text-[9px] font-bold uppercase leading-tight tracking-wider text-paper-500 dark:text-paper-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="relative lg:col-span-5 lg:pt-2"
            >
              <div className="mb-2 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-wider text-paper-400">
                <span>Interactive Terminal</span>
                <span>zsh v5.9</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-3 dark:border-blue-500 sm:pl-4">
                <InteractiveTerminal
                  onNotify={onNotify}
                  onNavigateSection={onNavigateSection}
                  onToggleTheme={onToggleTheme}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-[10px] text-paper-500 dark:text-paper-400">
                <span className="border border-paper-200 px-2 py-1 dark:border-paper-800">JAVA 17</span>
                <span className="border border-paper-200 px-2 py-1 dark:border-paper-800">SPRING BOOT</span>
                <span className="border border-paper-200 px-2 py-1 dark:border-paper-800">AWS READY</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
