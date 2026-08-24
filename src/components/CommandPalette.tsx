import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Mail, Phone, Moon, Sun, ArrowRight, ExternalLink, Code2, Briefcase, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
  onCopyText: (text: string, title: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  onNavigate,
  onCopyText,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : undefined;
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      category: 'Navigation',
      items: [
        { id: 'nav-about', label: 'Go to /about', method: 'GET', icon: User, action: () => { onNavigate('about'); onClose(); } },
        { id: 'nav-exp', label: 'Go to /experience', method: 'GET', icon: Briefcase, action: () => { onNavigate('experience'); onClose(); } },
        { id: 'nav-proj', label: 'Go to /projects', method: 'GET', icon: Code2, action: () => { onNavigate('projects'); onClose(); } },
        { id: 'nav-contact', label: 'Go to /contact', method: 'POST', icon: Mail, action: () => { onNavigate('contact'); onClose(); } },
      ]
    },
    {
      category: 'Actions',
      items: [
        { id: 'act-resume', label: 'Download Résumé (PDF)', method: 'GET', icon: FileText, action: () => { window.open(portfolioData.resumeUrl, '_blank'); onClose(); } },
        { id: 'act-email', label: `Copy Email (${portfolioData.email})`, method: 'COPY', icon: Mail, action: () => { onCopyText(portfolioData.email, 'Email copied to clipboard'); onClose(); } },
        { id: 'act-phone', label: `Copy Phone (${portfolioData.phone})`, method: 'COPY', icon: Phone, action: () => { onCopyText(portfolioData.phone, 'Phone copied to clipboard'); onClose(); } },
        { id: 'act-theme', label: `Toggle ${isDark ? 'Light' : 'Dark'} Mode`, method: 'THEME', icon: isDark ? Sun : Moon, action: () => { onToggleTheme(); onClose(); } },
      ]
    },
    {
      category: 'Profiles',
      items: [
        { id: 'ext-gh', label: 'GitHub Profile', method: 'LINK', icon: ExternalLink, action: () => { window.open(portfolioData.githubUrl, '_blank'); onClose(); } },
        { id: 'ext-li', label: 'LinkedIn Profile', method: 'LINK', icon: ExternalLink, action: () => { window.open(portfolioData.linkedinUrl, '_blank'); onClose(); } },
      ]
    }
  ];

  const filtered = actions.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase()) || 
      item.method.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -6 }}
          className="relative w-full max-w-lg rounded-[4px] shadow-2xl bg-white dark:bg-[#1E1E1E] border border-paper-300 dark:border-[#383838] overflow-hidden z-10 font-mono"
        >
          <div className="flex items-center px-4 py-3 border-b border-paper-200 dark:border-[#333333] gap-3">
            <Search className="w-4 h-4 text-paper-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search endpoints or actions..."
              className="flex-1 bg-transparent border-none outline-none text-paper-950 dark:text-[#FAFAF9] placeholder:text-paper-400 text-xs sm:text-sm focus:ring-0"
              autoFocus
            />
            <kbd className="text-[10px] bg-paper-100 dark:bg-[#2A2A2A] text-paper-500 border border-paper-200 dark:border-[#383838] px-1.5 py-0.5 rounded-[2px]">
              ESC
            </kbd>
          </div>

          <div className="max-h-72 overflow-y-auto p-2 space-y-2">
            {filtered.length === 0 ? (
              <div className="py-6 text-center text-paper-400 text-xs">
                No matching actions for "{query}"
              </div>
            ) : (
              filtered.map(cat => (
                <div key={cat.category}>
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-paper-400 font-bold">
                    {cat.category}
                  </div>
                  <div className="space-y-0.5 mt-0.5">
                    {cat.items.map(item => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-[2px] text-left text-xs text-paper-800 dark:text-[#E0E0E0] hover:bg-paper-100 dark:hover:bg-[#282828] transition group"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="w-3.5 h-3.5 text-paper-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition shrink-0" />
                            <span className="truncate">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <span className="text-[9px] font-bold px-1 py-0.5 rounded-[2px] bg-paper-100 dark:bg-[#2A2A2A] text-paper-500 border border-paper-200 dark:border-[#383838]">
                              {item.method}
                            </span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-blue-500" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
