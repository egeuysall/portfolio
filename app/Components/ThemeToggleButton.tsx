'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Function to apply the theme
    const applyTheme = (theme: 'light' | 'dark') => {
      setTheme(theme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    };

    // Check the user's system theme preference (light or dark)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set the theme based on system preference
    const initialTheme = prefersDarkMode ? 'dark' : 'light';
    applyTheme(initialTheme);

    // Listen for changes to the system theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      applyTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  const applyTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
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