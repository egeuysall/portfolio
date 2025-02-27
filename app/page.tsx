import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#f2f2f2] dark:bg-[#2e2e2e]">
      <div className="bg-[#f2f2f2] h-screen w-[85vw] flex gap-8 flex-col dark:bg-[#2e2e2e]">
        <header className="w-full flex justify-center">
          <nav className="flex w-full">
            <div className="h-14 w-screen bg-[#2e2e2e] mt-8 rounded-md flex items-center justify-between shadow-md dark:bg-[#f2f2f2]">
              <Image
                src="/assets/logo.svg"
                width={24}
                height={24}
                alt="Logo"
                className="ml-6 dark:invert"
              />
              <div>
                <ul className="hidden sm:hidden md:flex lg:flex text-[#f2f2f2] dark:text-[#2e2e2e] gap-6 mr-6">
                  <li className={`${poppins.className}`}>Links</li>
                  <li className={`${poppins.className}`}>Contact</li>
                  <li className={`${poppins.className}`}>Skills</li>
                  <li className={`${poppins.className}`}>Projects</li>
                  <li className={`${poppins.className}`}>
                  <Image
                  src="/assets/magnifier.svg"
                  width={16}
                  height={16}
                  alt="Menu Icon"
                  className="dark:invert sm:flex md:hidden lg:hidden mr-6 dark:invert" />
                  </li>
                </ul>
                <Image
                  src="/assets/menu-icon.svg"
                  width={24}
                  height={24}
                  alt="Menu Icon"
                  className="dark:invert sm:flex md:hidden lg:hidden mr-6"
                />
              </div>
            </div>
          </nav>
        </header>

        <main className="flex flex-col flex-1 gap-3">
          <p className={`${poppins.className} text-lg mt-4 text-[#2e2e2e] font-medium dark:text-[#f2f2f2]`}>
            Hi, I&apos;m Ege Uysal.
          </p>
          <h1 className={`${lato.className} text-4xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
            Photographer
            <br />
            Developer
            <br />
            Founder
          </h1>
          <Analytics />
          <SpeedInsights />
          <div className="flex gap-3">
            <button className={`${poppins.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>Download CV</button>
            <button className={`${poppins.className} bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>Reach Out</button>
          </div>
        </main>
      </div>
    </div>
  );
}
