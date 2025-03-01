"use client";

import { Lato } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import CallAction from "./Components/CallAction";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function NotFound() {
  const [message, setMessage] = useState("Page Lost in the Matrix");

  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Page Lost in the Matrix"
        ? "You’ve found a glitch in the system!"
        : "Page Lost in the Matrix"
    );
  };

  return (
    <div
      className={`${lato.className} flex flex-col items-center justify-center h-screen w-screen text-center p-4 bg-[#f2f2f2] dark:bg-[#2e2e2e]`}
    >
      <div className="flex-shrink-0 mb-8">
        <Image
          src="/assets/404.svg"
          alt="404 Illustration"
          width={300}
          height={300}
          className="w-full max-w-xs lg:max-w-sm dark:brightness-125 hover:grayscale-[50%] transition duration-300"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h1
          className={`${lato.className} text-7xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] hidden md:block md:text-9xl`}
        >
          404
        </h1>
        <h2
          className={`${lato.className} text-3xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] md:text-5xl`}
        >
          Page Lost in the Matrix
        </h2>
        <div className="mb-4">
          <p
            className={`${lato.className} text-xl text-[#2e2e2e] dark:text-[#f2f2f2] cursor-pointer font-normal`}
            onClick={toggleMessage}
          >
            {message}
          </p>
        </div>
        <div className="w-full max-w-xs mx-auto">
          <CallAction 
            name="Go Home"
            link="/"
            className="text-sm py-2 px-4 md:text-lg md:py-3 md:px-6" // smaller on mobile, larger on desktop
          />
        </div>
      </div>
    </div>
  );
}