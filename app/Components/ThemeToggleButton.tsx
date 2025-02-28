'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on client-side
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // You can store the preference in localStorage if needed
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-105 transition"
    >
      <Image
        src={isDarkMode ? "/assets/sun.svg" : "/assets/moon.svg"}
        width={24}
        height={24}
        alt="Theme Toggle"
      />
    </button>
  );
}
