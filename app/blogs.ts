import React from "react";
import { PenLine, Library, Flame } from "lucide-react";

interface blogsProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
  linkTitle?: string;
  slug?: string;
  publishedAt?: string;
}

const blogs: blogsProps[] = [
  {
    id: "second-brain",
    icon: React.createElement(PenLine, { size: 24 }),
    title: "Building a Second Brain with Obsidian",
    desc: "How I built a minimalist, frictionless Second Brain using Obsidian and why it changed my creative flow.",
    link: "/blog/second-brain",
    linkTitle: "Read Article",
    slug: "second-brain",
    publishedAt: "2025-04-01",
  },
  {
    id: "nextjs-pwa",
    icon: React.createElement(Flame, { size: 24 }),
    title: "Next.js as a PWA: A Simple Guide",
    desc: "Make your Next.js app installable and offline-ready in minutes with this performance-first approach.",
    link: "/blog/nextjs-pwa",
    linkTitle: "Read Article",
    slug: "nextjs-pwa",
    publishedAt: "2025-03-25",
  },
  {
    id: "astro-nextjs",
    icon: React.createElement(Library, { size: 24 }),
    title: "Astro vs Next.js: Choosing the Right Tool",
    desc: "Astro or Next.js? Here's how I choose the right framework for my projects and their long-term goals.",
    link: "/blog/astro-nextjs",
    linkTitle: "Read Article",
    slug: "astro-nextjs",
    publishedAt: "2025-03-10",
  },
];

export default blogs;