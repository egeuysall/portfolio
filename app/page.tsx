import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import Project from "./Components/Project";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex items-center h-screen justify-center bg-[#f2f2f2] dark:bg-[#2e2e2e] box-border">
      <div className="h-screen flex-1 flex flex-col gap-8 items-center dark:bg-[#2e2e2e]">
        <header className="w-[85vw] max-w-[85vw] flex justify-center rounded-md">
          <nav className="fixed top-0 z-10 w-[85vw] max-w-[85vw] mx-auto rounded-md">
            <div className="h-14 w-full bg-[#2e2e2e] mt-8 flex items-center justify-between shadow-md dark:bg-[#f2f2f2] rounded-md">
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  width={24}
                  height={24}
                  alt="Logo"
                  className="ml-6 dark:invert hover:opacity-75 active:scale-95 transition duration-300"
                />
              </Link>
              <div>
                <ul className="hidden md:flex text-[#f2f2f2] dark:text-[#2e2e2e] gap-6 mr-6">
                  <div className="flex items-center gap-6">
                    <Link href="#">
                      <li className={`hover:opacity-75 active:opacity-50 transition font-bold duration-300 ${lato.className}`}>Links</li>
                    </Link>
                    <Link href="#">
                      <li className={`hover:opacity-75 active:opacity-50 transition font-bold duration-300 ${lato.className}`}>Contact</li>
                    </Link>
                    <Link href="#">
                      <li className={`hover:opacity-75 active:opacity-50 font-bold transition duration-300 ${lato.className}`}>Skills</li>
                    </Link>
                    <Link href="#">
                      <li className={`hover:opacity-75 active:opacity-50 font-bold transition duration-300 ${lato.className}`}>Projects</li>
                    </Link>
                    <Link href="#">
                      <Image
                        src="/assets/magnifier.svg"
                        width={18}
                        height={18}
                        alt="Search Icon"
                        className="mr-6 dark:invert hover:opacity-75 active:opacity-50 transition duration-300"
                      />
                    </Link>
                  </div>
                </ul>
                <Image
                  src="/assets/menu-icon.svg"
                  width={24}
                  height={24}
                  alt="Menu Icon"
                  className="dark:invert sm:flex md:hidden lg:hidden mr-6 hover:opacity-75 active:opacity-50 transition duration-300"
                />
              </div>
            </div>
          </nav>
        </header>

        <main className="w-[85vw] max-w-[85vw] flex flex-col flex-1 gap-3 mt-16">
          <p className={`${lato.className} text-xl mt-6 text-[#2e2e2e] font-medium dark:text-[#f2f2f2]`}>
            Hi, I&apos;m Ege Uysal.
          </p>
          <h1 className={`${lato.className} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
            Photographer
            <br />
            Developer
            <br />
            Founder
          </h1>
          <Analytics />
          <SpeedInsights />
          <div className="flex gap-3">
            <button className={`${lato.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>
              Download CV
            </button>
            <button className={`${lato.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>
              Reach Out
            </button>
          </div>
          <div className="mt-8">
            <h1 className={`${lato.className} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
              Latest Work
            </h1>
            <div className={`mt-4 ${lato.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
              <Project
                name="Timora"
                desc="Timora is a Pomodoro timer app designed to boost productivity with customizable intervals, task tracking, and simple, intuitive features."
                tags={["Productivity", "Web", "JS"]}
                img="/assets/timora.png"
              />

              <Project
                name="Portfolio Website"
                desc="The portfolio website is a minimalist, mobile-first site showcasing my web development, photography, and design work, built with custom code for performance and simplicity."
                tags={["Design", "Code", "Site"]}
                img="/assets/portfolio.png"
              />

              <Project
                name="Loaner"
                desc="Loaner is a simple and intuitive mortgage calculator app that helps users estimate monthly payments by inputting loan amount, interest rate, and term length for accurate results."
                tags={["Design", "Code", "Swift"]}
                img="/assets/loaner.png"
              />

              <Project
                name="Productivity Guide"
                desc="The Productivity Guide offers practical strategies and methods for enhancing efficiency, focusing on actionable techniques to help individuals and teams maximize productivity and achieve their goals."
                tags={["Productivity", "Focus", "Workflow"]}
                img="/assets/productivity.png"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}