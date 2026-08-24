import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
  FileDown, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenCommandPalette,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: '/about', method: 'GET', id: 'about' },
    { href: '#experience', label: '/experience', method: 'GET', id: 'experience' },
    { href: '#projects', label: '/projects', method: 'GET', id: 'projects' },
    { href: '#contact', label: '/contact', method: 'POST', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full nav-backdrop transition-colors duration-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-blue-500"></span>
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-paper-950 dark:text-paper-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            aaditya<span className="text-blue-600 dark:text-blue-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isPost = link.method === 'POST';
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-[4px] font-mono text-xs flex items-center gap-1.5 transition ${
                  isActive
                    ? 'bg-paper-200 dark:bg-paper-800 text-paper-950 dark:text-paper-50 font-bold border border-paper-300 dark:border-paper-700 shadow-sm'
                    : 'text-paper-600 dark:text-paper-400 hover:text-paper-950 dark:hover:text-paper-100 hover:bg-paper-200/50 dark:hover:bg-paper-850'
                }`}
              >
                <span
                  className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-[2px] tracking-wider ${
                    isPost
                      ? 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20'
                      : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20'
                  }`}
                >
                  {link.method}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Quick Search */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-500 dark:text-paper-400 hover:border-paper-300 dark:hover:border-paper-700 transition text-xs font-mono"
            title="Open Command Palette (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">Search commands...</span>
            <kbd className="px-1.5 py-0.2 rounded text-[10px] bg-paper-100 dark:bg-paper-800 border border-paper-200 dark:border-paper-700 text-paper-600 dark:text-paper-300 font-bold">
              ⌘K
            </kbd>
          </button>

          {/* Resume Download */}
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-paper-300 dark:hover:border-paper-700 transition"
            title="Download Résumé (PDF)"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:text-paper-950 dark:hover:text-paper-50 hover:border-paper-300 dark:hover:border-paper-700 transition"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-paper-300 dark:hover:border-paper-700 transition"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:bg-paper-100 dark:hover:bg-paper-800 transition"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-paper-700" />}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:bg-paper-100 dark:hover:bg-paper-800 transition ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-paper-50/98 dark:bg-paper-950/98 border-b border-paper-200 dark:border-paper-800 backdrop-blur-lg">
          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-800 dark:text-paper-200 font-mono text-xs active:bg-paper-100 dark:active:bg-paper-800 transition"
              >
                <span
                  className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded ${
                    link.method === 'POST'
                      ? 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
                      : 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
                  }`}
                >
                  {link.method}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-3 pt-3 border-t border-paper-200 dark:border-paper-800 flex items-center justify-between text-xs font-mono text-paper-500">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCommandPalette(); }}
              className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search (⌘K)</span>
            </button>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Available for Hire</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
