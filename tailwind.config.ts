import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Ensure dark mode is based on the user's system preference
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Use CSS variable for background color
        foreground: "var(--foreground)",  // Use CSS variable for text color
      },
    },
  },
  plugins: [],
} satisfies Config;
