import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"], variable: "--lato" });

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#f2f2f2] dark:bg-[#2e2e2e]">
      {/* Navbar */}
      <nav className="fixed top-0 z-10 w-[85vw] mt-8 rounded-md">
        <div className="flex items-center justify-between h-14 bg-[#2e2e2e] dark:bg-[#f2f2f2] rounded-md shadow-md">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={24}
              height={24}
              alt="Logo"
              className="ml-6 dark:invert hover:opacity-75 active:scale-95 transition duration-300"
            />
          </Link>
          <ul className="hidden gap-6 mr-6 text-[#f2f2f2] md:flex dark:text-[#2e2e2e]">
            {["Links", "Contact", "Skills", "Projects"].map((item) => (
              <Link key={item} href="#">
                <li className={`${lato.variable} font-bold transition duration-300 hover:opacity-75 active:opacity-50`}>
                  {item}
                </li>
              </Link>
            ))}
            <Link href="#">
              <Image
                src="/assets/magnifier.svg"
                width={18}
                height={18}
                alt="Search Icon"
                className="mr-6 dark:invert hover:opacity-75 active:opacity-50 transition duration-300"
              />
            </Link>
          </ul>
          <Image
            src="/assets/menu-icon.svg"
            width={24}
            height={24}
            alt="Menu Icon"
            className="mr-6 md:hidden dark:invert hover:opacity-75 active:opacity-50 transition duration-300"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col flex-1 w-[85vw] mt-20">
        <p className={`${lato.variable} mt-6 text-xl font-medium text-[#2e2e2e] dark:text-[#f2f2f2]`}>
          Hi, I&apos;m Ege Uysal.
        </p>
        <h1 className={`${lato.variable} text-5xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
          Photographer <br />
          Developer <br />
          Founder
        </h1>

        {/* Buttons */}
        <div className="flex gap-3">
          {["Download CV", "Reach Out"].map((btn) => (
            <button
              key={btn}
              className={`${lato.variable} w-1/2 py-3 mt-6 font-bold bg-[#7f8c8f] text-[#ecf0f1] rounded-md transition duration-300 hover:scale-105 hover:opacity-80 active:opacity-70`}
            >
              {btn}
            </button>
          ))}
        </div>

        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}