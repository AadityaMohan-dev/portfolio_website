import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCerts } from './components/EducationCerts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Toast, ToastMessage } from './components/Toast';

export function App() {
  // Theme state: defaults to light (warm editorial paper) like original website, supports dark
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // default light paper like original site
  });

  const [activeSection, setActiveSection] = useState<string>('about');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Apply theme class to root HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Scroll spy to update active navigation endpoint
  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 3500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    addToast(
      `Theme Toggled`,
      `Switched to ${!isDark ? 'Dark Charcoal' : 'Warm Paper'} Mode`,
      'info'
    );
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyText = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    addToast('Copied to Clipboard', title, 'success');
  };

  return (
    <div className="min-h-screen relative text-paper-950 dark:text-paper-50 transition-colors duration-150">
      
      {/* Subtle blueprint grid texture */}
      <div className="blueprint-grid" />

      {/* Global Navbar */}
      <div className="relative z-30">
        <Navbar
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          activeSection={activeSection}
        />
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onNotify={addToast}
          onNavigateSection={handleNavigateSection}
          onToggleTheme={handleToggleTheme}
        />
        <About />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigateSection}
        onCopyText={handleCopyText}
      />

      {/* Interactive Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
