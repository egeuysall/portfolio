import React from "react";
import { PenLine, Rocket, Link, CalendarSearch } from "lucide-react";

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
    title: "My Second Brain System",
    desc: "How I built a minimalist, frictionless Second Brain using Obsidian and why it completely changed my creative energy and flow forever.",
    link: "/blog/second-brain",
    linkTitle: "Read Article",
    slug: "second-brain",
    publishedAt: "22 April, 2025",
  },
  {
    id: "astraui-release",
    icon: React.createElement(Rocket, { size: 24 }),
    title: "Astra UI v1.0 Release",
    desc: "After 1.5 weeks of focused building, Astra UI v1.0 is officially live. Here's the story behind its creation, vision, and execution.",
    link: "/blog/astraui-release",
    linkTitle: "Read Release",
    slug: "release",
    publishedAt: "24 April, 2025",
  },
  {
    id: "links-release",
    icon: React.createElement(Link, { size: 24 }),
    title: "Links v1.1 Release",
    desc: "Links is a clean, free, fully customizable way to organize your online presence without limits. Professional design with total freedom built in.",
    link: "/blog/links-release",
    linkTitle: "Read Launch Post",
    slug: "links",
    publishedAt: "26 April, 2025",
  },
  {
    id: "spot-release",
    icon: React.createElement(CalendarSearch, { size: 24 }),
    title: "Spot v1.0 Release",
    desc: "Spot is a clean, smart, AI-powered event explorer that pulls from Ticketmaster and filters with ChatGPT. Simple idea, surprisingly useful.",
    link: "/blog/spot-release",
    linkTitle: "Read Launch Post",
    slug: "spot",
    publishedAt: "6 May, 2025",
  },
  {
    id: "muse-release",
    icon: React.createElement(PenLine, { size: 24 }),
    title: "Muse v1.0 Release",
    desc: "Muse is a minimalist platform for capturing and sharing quick ideas instantly, designed to inspire creativity and collaboration effortlessly.",
    link: "/blog/muse-release",
    linkTitle: "Read Launch Post",
    slug: "muse",
    publishedAt: "16 May, 2025",
  },
];

export default blogs;