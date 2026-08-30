import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      setIsDark(true);
      localStorage.setItem('portfolio-theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
      className="p-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-[#ff5500] hover:border-[#ff5500] transition-all focus:outline-none shadow-sm cursor-pointer"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-[#ff5500]" />
      )}
    </button>
  );
};
