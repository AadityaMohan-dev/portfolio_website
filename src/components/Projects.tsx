import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Microservices' },
    { id: 'ai_cloud', label: 'GenAI & Cloud' },
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-paper-200 dark:border-paper-800 bg-paper-100/60 dark:bg-paper-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500">
              <span className="px-1.5 py-0.5 rounded-[2px] font-extrabold text-[10px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                GET
              </span>
              <span>/projects</span>
              <span>→</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">200 OK</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-paper-950 dark:text-paper-50 tracking-tight">
              Selected projects
            </h2>
            
            <p className="text-paper-600 dark:text-paper-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              A mix of enterprise backend microservices, real-time streaming engines, and full-stack applications. More on{' '}
              <a 
                href={portfolioData.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700"
              >
                GitHub →
              </a>
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-[4px] bg-paper-200/80 dark:bg-paper-850 border border-paper-300 dark:border-paper-700 overflow-x-auto max-w-full self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-[2px] font-mono text-[11px] sm:text-xs whitespace-nowrap transition ${
                  filter === tab.id
                    ? 'bg-white dark:bg-paper-800 text-paper-950 dark:text-paper-50 font-bold border border-paper-200 dark:border-paper-700 shadow-sm'
                    : 'text-paper-600 dark:text-paper-400 hover:text-paper-950 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="flex flex-col rounded-[4px] p-6 sm:p-7 bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition group"
            >
              {/* Card Top */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-[2px] bg-paper-100 dark:bg-paper-900 text-paper-500 border border-paper-200 dark:border-paper-800">
                  0{idx + 1}
                </span>

                {project.metrics && (
                  <span className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-[2px] bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="truncate max-w-[180px] sm:max-w-none">{project.metrics}</span>
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="mb-2">
                <h3 className="font-mono text-lg sm:text-xl font-bold text-paper-950 dark:text-paper-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-paper-500 dark:text-paper-400 mt-0.5">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-paper-600 dark:text-paper-300 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              {project.architectureHighlights && (
                <div className="mb-4 p-3 rounded-[2px] bg-paper-50 dark:bg-paper-900 border border-paper-200 dark:border-paper-800">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-paper-400 mb-1.5">
                    Architecture Highlights
                  </p>
                  <ul className="space-y-1.5 text-[11px] sm:text-xs text-paper-700 dark:text-paper-300 font-mono">
                    {project.architectureHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-[2px] bg-paper-100 dark:bg-paper-900 text-paper-700 dark:text-paper-300 border border-paper-200 dark:border-paper-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer Links */}
              <div className="pt-3.5 border-t border-paper-100 dark:border-paper-800 flex items-center justify-between font-mono text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:underline group/link"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                <span className="text-paper-400 text-[11px]">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More GitHub Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-[4px] border border-dashed border-paper-300 dark:border-paper-700 bg-white/60 dark:bg-paper-850/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-[4px] bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-paper-950 dark:text-paper-50 text-sm">
                Looking for more open source projects &amp; experiments?
              </p>
              <p className="text-xs text-paper-500 dark:text-paper-400">
                Explore microservices prototypes, CI/CD templates, and algorithmic implementations.
              </p>
            </div>
          </div>

          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[2px] font-mono text-xs font-bold bg-paper-950 dark:bg-white text-white dark:text-paper-950 hover:bg-paper-800 dark:hover:bg-paper-100 transition whitespace-nowrap shadow-sm w-full sm:w-auto"
          >
            <GithubIcon className="w-4 h-4" />
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};
