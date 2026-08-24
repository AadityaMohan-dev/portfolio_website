import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, Briefcase, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="space-y-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500 dark:text-paper-400">
            <span className="px-1.5 py-0.5 rounded-[2px] font-extrabold text-[10px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
              GET
            </span>
            <span>/experience</span>
            <span>→</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">200 OK</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-paper-950 dark:text-paper-50 tracking-tight">
            Professional experience
          </h2>
          
          <p className="text-paper-600 dark:text-paper-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Two enterprise engagements — modernizing HR systems for a global SAP client, and owning full-stack delivery across cloud migration and API optimization.
          </p>
        </div>

        {/* Experience Cards - Editorial Layout */}
        <div className="space-y-6">
          {portfolioData.experiences.map((exp, idx) => {
            const isFirst = idx === 0;


            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm overflow-hidden transition hover:border-paper-300 dark:hover:border-paper-700 border-l-[3px] ${
                  isFirst ? 'border-l-blue-600 dark:border-l-blue-500' : 'border-l-amber-600 dark:border-l-amber-500'
                }`}
              >
                {/* Role Header */}
                <div className="p-5 sm:p-7 pb-4 border-b border-paper-100 dark:border-paper-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-[4px] shrink-0 ${
                        isFirst
                          ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50'
                          : 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-paper-950 dark:text-paper-50">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-0.5 font-mono text-xs text-paper-500 dark:text-paper-400">
                          <span className={`font-bold px-2 py-0.5 rounded-[2px] ${
                            isFirst
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                              : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                          }`}>
                            {exp.company}
                          </span>
                          {exp.contractInfo && (
                            <>
                              <span className="text-paper-300 dark:text-paper-600">·</span>
                              <span className="font-medium text-paper-600 dark:text-paper-400">{exp.contractInfo}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-paper-500 dark:text-paper-400 self-start">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-paper-100 dark:bg-paper-900 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Badges */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.metrics.map(m => (
                        <div key={m.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-[11px] font-mono">
                          <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-paper-600 dark:text-paper-400">{m.label}:</span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Achievements & Highlights */}
                <div className="p-5 sm:p-7 pt-5">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-paper-800 dark:text-paper-200 leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFirst ? 'text-blue-600 dark:text-blue-400' : 'text-amber-600 dark:text-amber-400'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 mt-4 border-t border-dashed border-paper-200 dark:border-paper-800 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    <span className="font-bold text-paper-400 mr-1">Stack:</span>
                    {exp.stack.map(st => (
                      <span
                        key={st}
                        className="px-2 py-0.5 rounded-[2px] bg-paper-100 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 text-paper-700 dark:text-paper-300"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
