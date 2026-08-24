import React from 'react';
import { 
  Sun, 
  Moon, 
  FileDown, 
  Menu, 
  X 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#projects', label: 'Work', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full nav-backdrop transition-colors duration-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
          </span>
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-paper-950 dark:text-paper-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            Aaditya Mohan
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-[4px] text-[13px] font-medium transition ${
                  isActive
                    ? 'bg-paper-200/80 dark:bg-paper-800 text-paper-950 dark:text-paper-50 font-semibold'
                    : 'text-paper-600 dark:text-paper-400 hover:text-paper-950 dark:hover:text-paper-100 hover:bg-paper-200/40 dark:hover:bg-paper-850'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          
          {/* Resume Download */}
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition text-xs font-medium"
            title="Download Résumé"
            aria-label="Download Resume"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Resume</span>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:text-paper-950 dark:hover:text-paper-50 hover:border-paper-300 dark:hover:border-paper-700 transition"
            title="GitHub"
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
            title="LinkedIn"
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
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[4px] border border-paper-200 dark:border-paper-800 bg-white dark:bg-paper-900 text-paper-700 dark:text-paper-300 hover:bg-paper-100 dark:hover:bg-paper-800 transition ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 bg-paper-50/98 dark:bg-paper-950/98 border-b border-paper-200 dark:border-paper-800 backdrop-blur-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-[4px] text-sm font-medium transition ${
                    isActive
                      ? 'bg-paper-200 dark:bg-paper-800 text-paper-950 dark:text-paper-50 font-semibold'
                      : 'text-paper-600 dark:text-paper-400 hover:bg-paper-100 dark:hover:bg-paper-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-3 pt-3 border-t border-paper-200 dark:border-paper-800 flex items-center justify-end text-xs text-paper-500 dark:text-paper-400">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for hire</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
