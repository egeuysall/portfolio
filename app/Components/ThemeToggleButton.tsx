'use client';

import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDarkMode ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="hidden md:inline-block fixed bottom-4 left-4 p-3 rounded-full border-2 border-gray-400 dark:border-gray-400 hover:border-gray-500 dark:hover:border-gray-300 shadow-md transition-all duration-300"
    >
      {theme === 'light' ? (
        <img src="/assets/moon.svg" alt="Moon icon" width={20} height={20} />
      ) : (
        <img src="/assets/sun.svg" alt="Sun icon" width={20} height={20} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
