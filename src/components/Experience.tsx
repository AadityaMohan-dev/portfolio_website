import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500">
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
            Two enterprise engagements — one modernizing HR systems for a global SAP client, one owning full-stack delivery end-to-end.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-paper-300 dark:before:via-paper-700 before:to-transparent">
          {portfolioData.experiences.map((exp, idx) => {
            const isFirst = idx === 0;
            const accentBorder = isFirst ? 'border-l-blue-600 dark:border-l-blue-500' : 'border-l-amber-600 dark:border-l-amber-500';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="relative pl-7 sm:pl-12 md:pl-14"
              >
                {/* Timeline Marker Dot */}
                <div className={`absolute left-3 sm:left-6 top-6 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white dark:border-paper-950 ${isFirst ? 'bg-blue-600' : 'bg-amber-600'} shadow-md ring-4 ring-blue-100 dark:ring-blue-950/60`} />

                {/* Experience Card */}
                <div className={`rounded-[4px] p-5 sm:p-7 bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 border-l-[3px] ${accentBorder} shadow-sm hover:border-paper-300 dark:hover:border-paper-700 transition`}>
                  
                  {/* Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3.5 border-b border-paper-100 dark:border-paper-800">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-mono text-base sm:text-xl font-bold text-paper-950 dark:text-paper-50">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[2px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-xs text-paper-500 dark:text-paper-400 mt-1.5 font-mono">
                        {exp.contractInfo && (
                          <span className="font-medium text-paper-700 dark:text-paper-300">
                            {exp.contractInfo}
                          </span>
                        )}
                        {exp.contractInfo && <span>•</span>}
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-paper-100 dark:bg-paper-900 text-paper-700 dark:text-paper-300 font-mono text-[11px] sm:text-xs font-semibold self-start shrink-0">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Metrics Pill row */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 my-3.5">
                      {exp.metrics.map(m => (
                        <div key={m.label} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-[11px] font-mono">
                          <span className="text-paper-500 dark:text-paper-400">{m.label}:</span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 my-4 text-xs sm:text-sm text-paper-800 dark:text-paper-200 leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-3.5 border-t border-dashed border-paper-200 dark:border-paper-800 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    <span className="font-bold text-paper-500 mr-1">Stack:</span>
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
