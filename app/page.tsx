import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import Project from "./Components/Project";
import ThemeToggleButton from './Components/ThemeToggleButton';
import CallAction from "./Components/CallAction";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex items-center h-screen justify-center bg-[#f2f2f2] dark:bg-[#2e2e2e]">
      <div className="h-screen flex-1 flex flex-col gap-8 items-center w-full max-w-screen-lg">

        {/* Header */}
        <header className="w-full flex justify-center">
          <nav className="fixed top-0 z-10 w-full max-w-screen-lg mx-auto">
            <div className="h-14 w-full bg-[#2e2e2e] mt-8 flex items-center justify-between shadow-lg dark:bg-[#f2f2f2] rounded-md px-6">
              <Link href="/" aria-label="Home">
                <Image
                  src="/assets/logo.svg"
                  width={24}
                  height={24}
                  alt="Logo"
                  className="dark:invert hover:opacity-75 active:scale-95 transition duration-300"
                  priority
                />
              </Link>
              <ul className="hidden md:flex text-[#f2f2f2] dark:text-[#2e2e2e] gap-6 items-center">
                {["Links", "Contact", "Skills", "Projects"].map((item, index) => (
                  <Link key={index} href="#">
                    <li className={`hover:opacity-75 active:opacity-50 transition font-bold duration-300 ${lato.className}`}>
                      {item}
                    </li>
                  </Link>
                ))}
                <Link href="#" aria-label="Search">
                  <Image
                    src="/assets/magnifier.svg"
                    width={18}
                    height={18}
                    alt="Search Icon"
                    className="dark:invert hover:opacity-75 active:opacity-50 transition duration-300"
                  />
                </Link>
              </ul>
              <Image
                src="/assets/menu-icon.svg"
                width={24}
                height={24}
                alt="Menu Icon"
                className="dark:invert sm:flex md:hidden hover:opacity-75 active:opacity-50 transition duration-300"
              />
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="w-full flex flex-col flex-1 gap-4 mt-16 max-w-screen-lg">
          <p className={`${lato.className} text-xl mt-6 text-[#2e2e2e] font-medium dark:text-[#f2f2f2]`}>
            Hi, I&apos;m Ege Uysal.
          </p>
          <h1 className={`${lato.className} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2] leading-tight mb-6`}>
            Photographer<br />Developer<br />Founder
          </h1>

          {/* Analytics */}
          <Analytics />
          <SpeedInsights />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
            <CallAction
              name="Download CV"
              link="/"
            />
            <CallAction
              name="Reach Out"
              link="/"
            />
          </div>

          {/* Latest Work */}
          <section className="mt-8 w-full">
            <h1 className={`${lato.className} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
              Latest Work
            </h1>
            <div className={`${lato.className} mt-4 grid grid-cols-1 md:grid-cols-2 gap-6`}>
              {[
                {
                  name: "Timora",
                  desc: "A Pomodoro timer app designed to boost productivity with customizable intervals, task tracking, and simple, intuitive features.",
                  tags: ["Productivity", "Web", "JS"],
                  img: "/assets/timora.png",
                },
                {
                  name: "Portfolio Website",
                  desc: "A minimalist, mobile-first site showcasing my web development, photography, and design work, built with custom code for performance and simplicity.",
                  tags: ["Design", "Code", "Site"],
                  img: "/assets/portfolio.png",
                },
                {
                  name: "Loaner",
                  desc: "A mortgage calculator app that helps users estimate monthly payments with loan amount, interest rate, and term length.",
                  tags: ["Design", "Code", "Swift"],
                  img: "/assets/loaner.png",
                },
                {
                  name: "Productivity Guide",
                  desc: "A guide offering practical strategies and methods for enhancing efficiency, focusing on actionable techniques to help individuals and teams maximize productivity.",
                  tags: ["Productivity", "Focus", "Book"],
                  img: "/assets/productivity.png",
                },
              ].map((project) => (
                <Project key={project.name} {...project} />
              ))}
            </div>
          </section>
        </main>
        <ThemeToggleButton />
      </div>
    </div>
  );
}