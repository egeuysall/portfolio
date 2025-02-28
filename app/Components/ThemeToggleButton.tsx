'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

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
      className="hidden md:inline-block fixed bottom-4 left-4 p-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm transition duration-300"
    >
      {theme === 'light' ? (
        <Image src="/assets/moon.svg" alt="Moon icon" width={20} height={20} />
      ) : (
        <Image src="/assets/sun.svg" alt="Sun icon" width={20} height={20} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
