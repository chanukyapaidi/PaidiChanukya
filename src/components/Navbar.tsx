import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Header Brand Title: Paidi in white & Chanukya in orange with gap */}
          <a
            href="#home"
            className="text-base sm:text-lg font-extrabold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span className="text-white">Paidi</span>
            <span className="text-[#ff5500]">Chanukya</span>
          </a>

          {/* Right Navigation & Resume Download */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-xs font-medium tracking-wide">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative py-1 transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavDot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Hairline Divider | Theme Toggle & Resume */}
            <div className="flex items-center gap-4 border-l border-white/15 pl-6">
              <ThemeToggle />
              <a
                href={personalInfo.resumeUrl}
                download="Paidi_Chanukya_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white border border-white/20 rounded-full hover:border-[#ff5500] hover:text-[#ff5500] hover:bg-[#ff5500]/10 transition-all shadow-sm"
              >
                Resume
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 text-zinc-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#0a0a0c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base tracking-wide transition-colors flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#ff5500] font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                  )}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#ff5500]">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#ff5500]">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download="Paidi_Chanukya_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#ff5500] rounded-full shadow-md"
                >
                   Resume
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

