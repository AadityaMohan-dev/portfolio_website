import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Zap, 
  Cpu, 
  Lock, 
  MessageSquareCode, 
  FileText 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeTabByProject, setActiveTabByProject] = useState<Record<string, 'overview' | 'challenge' | 'architecture'>>({
    financeflow: 'overview',
    'auth-app': 'overview',
    chatpal: 'overview',
    byteblog: 'overview',
  });

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Microservices' },
    { id: 'ai_cloud', label: 'GenAI & Streaming' },
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'financeflow':
        return Layers;
      case 'auth-app':
        return Lock;
      case 'chatpal':
        return MessageSquareCode;
      case 'byteblog':
        return FileText;
      default:
        return Cpu;
    }
  };

  const handleTabChange = (projectId: string, tab: 'overview' | 'challenge' | 'architecture') => {
    setActiveTabByProject(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-14 sm:py-20 border-t border-paper-200 dark:border-paper-800 bg-paper-100/60 dark:bg-paper-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500 dark:text-paper-400">
              <span className="px-1.5 py-0.5 rounded-[2px] font-extrabold text-[10px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                GET
              </span>
              <span>/projects</span>
              <span>→</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">200 OK</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-paper-950 dark:text-paper-50 tracking-tight">
              Selected projects &amp; case studies
            </h2>
            
            <p className="text-paper-600 dark:text-paper-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Engineering case studies highlighting architectural decisions, scalability challenges, and production implementations.
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

        {/* Project Showcase List (Asymmetric Case Studies) */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => {
            const Icon = getProjectIcon(project.id);
            const activeTab = activeTabByProject[project.id] || 'overview';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm hover:border-paper-300 dark:hover:border-paper-700 transition overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="p-5 sm:p-6 pb-4 border-b border-paper-100 dark:border-paper-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="font-mono text-sm font-extrabold px-2.5 py-1 rounded-[3px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-paper-950 dark:text-paper-50">
                          {project.title}
                        </h3>
                        {project.metrics && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-[2px] bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
                            <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>{project.metrics}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-paper-500 dark:text-paper-400 mt-0.5 font-mono">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Case Study Tab Switcher */}
                  <div className="flex items-center gap-1 p-1 rounded-[3px] bg-paper-100 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 text-xs font-mono self-start md:self-auto">
                    <button
                      onClick={() => handleTabChange(project.id, 'overview')}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] transition ${
                        activeTab === 'overview'
                          ? 'bg-white dark:bg-paper-800 text-paper-950 dark:text-white font-bold shadow-sm'
                          : 'text-paper-500 hover:text-paper-950 dark:hover:text-white'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => handleTabChange(project.id, 'challenge')}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] transition ${
                        activeTab === 'challenge'
                          ? 'bg-white dark:bg-paper-800 text-paper-950 dark:text-white font-bold shadow-sm'
                          : 'text-paper-500 hover:text-paper-950 dark:hover:text-white'
                      }`}
                    >
                      Technical Challenge
                    </button>
                    <button
                      onClick={() => handleTabChange(project.id, 'architecture')}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] transition ${
                        activeTab === 'architecture'
                          ? 'bg-white dark:bg-paper-800 text-paper-950 dark:text-white font-bold shadow-sm'
                          : 'text-paper-500 hover:text-paper-950 dark:hover:text-white'
                      }`}
                    >
                      Architecture
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-7 space-y-5">
                  
                  {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      {/* Problem & Solution */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-paper-400 mb-1">
                            <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                            <span>The Problem</span>
                          </div>
                          <p className="text-xs sm:text-sm text-paper-700 dark:text-paper-300 leading-relaxed font-sans">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-paper-400 mb-1">
                            <Zap className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Engineering Approach</span>
                          </div>
                          <p className="text-xs sm:text-sm text-paper-700 dark:text-paper-300 leading-relaxed font-sans">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Outcome & Tech Breakdown */}
                      <div className="p-4 rounded-[3px] bg-paper-50 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-paper-500 dark:text-paper-400">
                          <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span>Delivered Outcome</span>
                        </div>
                        <p className="text-xs sm:text-sm text-paper-800 dark:text-paper-200 leading-relaxed font-sans">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenge' && (
                    <div className="p-4 sm:p-5 rounded-[3px] bg-paper-50 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 space-y-2.5">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                        <Cpu className="w-4 h-4" />
                        <span>Key Technical Challenge &amp; Resolution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-paper-800 dark:text-paper-200 leading-relaxed font-sans">
                        {project.keyChallenge}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-paper-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Resolution verified with automated tests and production benchmarks.</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="p-4 sm:p-5 rounded-[3px] bg-paper-50 dark:bg-paper-900 border border-paper-200 dark:border-paper-800 space-y-3">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-paper-400">
                        Architectural Highlights &amp; Invariants
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-paper-800 dark:text-paper-200 font-mono">
                        {project.architectureHighlights?.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 p-2 rounded-[2px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Chips & Action Links */}
                  <div className="pt-4 border-t border-paper-100 dark:border-paper-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                    
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-paper-400 mr-1">Stack:</span>
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[2px] bg-paper-100 dark:bg-paper-900 text-paper-700 dark:text-paper-300 border border-paper-200 dark:border-paper-800 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition group/link shrink-0"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Inspect Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-[4px] border border-dashed border-paper-300 dark:border-paper-700 bg-white/60 dark:bg-paper-850/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-[4px] bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-paper-950 dark:text-paper-50 text-sm">
                Explore more implementations &amp; microservice designs
              </p>
              <p className="text-xs text-paper-500 dark:text-paper-400">
                Additional enterprise prototypes, REST contracts, and architectural experiments on GitHub.
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
            <span>github.com/AadityaMohan-dev</span>
          </a>
        </div>

      </div>
    </section>
  );
};
