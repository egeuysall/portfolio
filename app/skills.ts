import React from "react";
import { Rocket, Infinity, MonitorSmartphone, Settings } from "lucide-react";

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
    desc: "Expert in HTML, CSS, JavaScript, and TypeScript with a strong focus on responsive design using Tailwind CSS and minimalistic UI principles. Proficient in React, Next.js, and Astro.",
  },
  {
    id: "design-media",
    icon: React.createElement(MonitorSmartphone, { size: 24 }),
    title: "Design & Media",
    desc: "Experienced in UI/UX design with Figma and content creation using Final Cut Pro for engaging visuals.",
  },
  {
    id: "full-stack-foundation",
    icon: React.createElement(Infinity, { size: 24 }),
    title: "Full Stack Foundation",
    desc: "Solid backend understanding with Python and SQLite, capable of building and maintaining lightweight APIs and managing data flow effectively.",
  },
  {
    id: "dev-tools-linux",
    icon: React.createElement(Settings, { size: 24 }),
    title: "Linux & Dev Tools",
    desc: "Efficient in Linux environments, shell tools, and terminal workflows using setups like Warp, Neovim, and Oh My Zsh for streamlined development.",
  },
  {
    id: "performance",
    icon: React.createElement(Rocket, { size: 24 }),
    title: "Performance Optimization",
    desc: "Focused on fast-loading, SEO-optimized apps that score high in Core Web Vitals and deliver a seamless user experience.",
  },
];

export default skills;
