// components/theme-provider.tsx
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    // Check for system preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme");

    // If there's a stored theme, use it. Otherwise, fallback to system preference
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body and save it in localStorage
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <>{children}</>;
}