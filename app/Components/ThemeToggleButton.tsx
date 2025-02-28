import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Detect the system's theme preference on mount and listen for changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = (e?: MediaQueryListEvent) => {
      const newTheme = e?.matches || mediaQuery.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    updateTheme();
    mediaQuery.addEventListener('change', updateTheme);

    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 left-5 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 
        bg-gray-900 text-white dark:bg-white dark:text-gray-900 
        hover:scale-110 shadow-lg"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
};

export default ThemeToggleButton;
