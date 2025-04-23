import React from "react";
import {
  Rocket,
  Infinity,
  MonitorSmartphone,
  Settings,
  Code,
  Terminal,
} from "lucide-react";

interface FeaturesProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const skills: FeaturesProps[] = [
  {
    id: "frontend-ui",
    icon: React.createElement(Rocket, { size: 24 }),
    title: "Frontend & UI",
    desc: "Proficient in React, Tailwind, and TypeScript, with a sharp eye for minimalist and responsive UIs.",
  },
  {
    id: "design-media",
    icon: React.createElement(MonitorSmartphone, { size: 24 }),
    title: "Design & Media",
    desc: "Skilled in Figma, Final Cut Pro, and content creation with a clean aesthetic for web and social media.",
  },
  {
    id: "full-stack-foundation",
    icon: React.createElement(Infinity, { size: 24 }),
    title: "Full Stack Foundation",
    desc: "Built solid skills in Python and SQLite, creating efficient APIs with simple, reliable data management.",
  },
  {
    id: "linux-dev-tools",
    icon: React.createElement(Settings, { size: 24 }),
    title: "Linux & Dev Tools",
    desc: "Comfortable with Neovim, Warp, Oh My Zsh, and CLI workflows across macOS and Debian for full control.",
  },
  {
    id: "performance",
    icon: React.createElement(Code, { size: 24 }),
    title: "Performance Optimization",
    desc: "Delivers fast-loading, SEO-first apps that excel in Core Web Vitals and Lighthouse performance audits.",
  },
  {
    id: "terminal-efficiency",
    icon: React.createElement(Terminal, { size: 24 }),
    title: "Terminal Efficiency",
    desc: "Fluent in automating tasks and workflows with shell scripting, Git, and dotfiles for maximum speed.",
  },
];

export default skills;
