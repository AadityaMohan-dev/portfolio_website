import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cloud_db', label: 'Cloud & DB' },
    { id: 'testing_practices', label: 'Testing & Practices' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-b border-paper-200 dark:border-paper-800 bg-paper-100/60 dark:bg-paper-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500">
            <span className="px-1.5 py-0.5 rounded-[2px] font-extrabold text-[10px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
              GET
            </span>
            <span>/about</span>
            <span>→</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">200 OK</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-paper-950 dark:text-paper-50 tracking-tight">
            Profile summary
          </h2>
          
          <p className="text-paper-600 dark:text-paper-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            A results-driven Software Engineer with hands-on experience across the entire SDLC — from designing REST APIs and optimizing SQL queries to migrating legacy monolithic platforms to AWS cloud microservices.
          </p>
        </div>

        {/* Quantitative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {portfolioData.metrics.map((metric, idx) => {
            const icons = [Layers, Zap, ShieldCheck];
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    {metric.number}
                  </span>
                  <div className="p-2.5 rounded-[4px] bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-bold text-paper-950 dark:text-paper-50 text-sm sm:text-base mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-paper-500 dark:text-paper-400 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Container with Interactive Tabs */}
        <div className="p-5 sm:p-7 rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-paper-950 dark:text-paper-50">
                Technical competencies &amp; stack
              </h3>
              <p className="text-xs text-paper-500 dark:text-paper-400 mt-0.5">
                Frameworks, languages, and architecture toolkits used in production.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-[4px] bg-paper-100 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 overflow-x-auto self-start md:self-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-[2px] font-mono text-[11px] whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-white dark:bg-paper-800 text-paper-950 dark:text-paper-50 font-bold border border-paper-200 dark:border-paper-700 shadow-sm'
                      : 'text-paper-600 dark:text-paper-400 hover:text-paper-950 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Tag Cloud */}
          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill) => (
              <motion.span
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.12 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] font-mono text-xs sm:text-sm transition-all border ${
                  skill.featured
                    ? 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-900/60 font-semibold hover:border-blue-500 dark:hover:border-blue-400 shadow-sm'
                    : 'bg-paper-50 dark:bg-paper-900 text-paper-800 dark:text-paper-200 border-paper-200 dark:border-paper-800 hover:border-paper-400 dark:hover:border-paper-600'
                }`}
              >
                {skill.featured && <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />}
                {skill.name}
              </motion.span>
            ))}
          </div>

          {/* Architecture Principles Footer note */}
          <div className="mt-7 pt-4 border-t border-paper-100 dark:border-paper-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-paper-500 dark:text-paper-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Clean Architecture, Domain-Driven Design &amp; SOLID Principles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Microservice Orchestration &amp; Continuous Integration
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
