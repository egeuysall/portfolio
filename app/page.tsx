import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import Project from "./Components/Project";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#f2f2f2] dark:bg-[#2e2e2e]">
      <div className="bg-[#f2f2f2] h-screen w-[85vw] flex gap-8 flex-col dark:bg-[#2e2e2e]">
        <header className="w-full flex justify-center">
          <nav className="flex fixed top-0 left-0 right-0 z-10 w-[85vw] mx-auto">
            <div className="h-14 w-full bg-[#2e2e2e] mt-8 rounded-md flex items-center justify-between shadow-md dark:bg-[#f2f2f2]">
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
                    <Link href="#"><li className={`hover:opacity-75 active:opacity-50 transition font-bold duration-300 ${lato.className}`}>Links</li></Link>
                    <Link href="#"><li className={`hover:opacity-75 active:opacity-50 transition font-bold duration-300 ${lato.className}`}>Contact</li></Link>
                    <Link href="#"><li className={`hover:opacity-75 active:opacity-50 font-bold transition duration-300 ${lato.className}`}>Skills</li></Link>
                    <Link href="#"><li className={`hover:opacity-75 active:opacity-50 font-bold transition duration-300 ${lato.className}`}>Projects</li></Link>
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

        <main className="flex flex-col flex-1 gap-3 mt-16">
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
            <button
              className={`${lato.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}
              aria-label="Download CV"
            >
              Download CV
            </button>
            <button
              className={`${lato.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}
              aria-label="Reach Out"
            >
              Reach Out
            </button>
          </div>
          <div className="mt-8">
            <h1 className={`${lato.className} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
              Latest Work
            </h1>
            <Project
              name="Timora"
              desc="Timora is a Pomodoro timer app designed to boost productivity with customizable intervals, task tracking, and simple, intuitive features."
              tags={["Productivity", "Web", "JS"]}
            />
          </div>
        </main>
      </div>
    </div>
  );
}