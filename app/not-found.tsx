"use client";

import { Lato } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import CallAction from "./Components/CallAction";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

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
      className={`${lato.className} flex flex-col items-center justify-center min-h-screen text-center p-4 bg-[#f2f2f2] dark:bg-[#2e2e2e] md:flex-row md:gap-24 lg:gap-32`}
    >
      <div className="flex-shrink-0">
        <Image
          src="/assets/404.svg"
          alt="404 Illustration"
          width={300}
          height={300}
          className="mb-8 dark:brightness-125 hover:grayscale-[50%] transition duration-300 w-[28rem] max-w-full"
        />
      </div>
      <div className="flex-grow">
        <h1
          className={`${lato.className} text-7xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] hidden md:block md:text-9xl`}
        >
          404
        </h1>
        <h2
          className={`${lato.className} text-3xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] md:text-5xl`}
        >
          Page Not Found
        </h2>
        <p
          className={`${lato.className} text-xl mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] cursor-pointer`}
          onClick={toggleMessage}
        >
          {message}
        </p>
        <div className="w-full max-w-xs">
          <CallAction 
            name="Go Home"
            link="/"
          />
        </div>
      </div>
    </div>
  );
}