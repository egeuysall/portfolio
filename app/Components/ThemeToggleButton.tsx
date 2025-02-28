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
      className="hidden md:inline-block fixed bottom-4 left-4 p-3 rounded-full border-gray-400 dark:border-gray-400 hover:bg-gray-500 dark:hover:bg-gray-300 shadow-sm"
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
