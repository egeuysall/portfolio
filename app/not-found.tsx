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
      className={`${lato.className} flex flex-col items-center justify-center h-screen text-center p-4 bg-[#f2f2f2] dark:bg-[#2e2e2e] md:flex-row md:gap-24`}
    >
      <div>
        <Image
          src="/assets/404.svg"
          alt="404 Illustration"
          width={300}
          height={300}
          className="mb-8 dark:brightness-125 hover:grayscale-[50%] transition duration-300 w-[28rem]"
        />
      </div>
      <div>
        <h1
          className={`${lato.className} text-7xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] hidden md:block md:text-9xl`}
        >
          404
        </h1>
        <h2
          className={`${lato.className} text-3xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] md:text-5xl cursor-pointer`}
          onClick={toggleMessage}
        >
          {message}
        </h2>
        <div className={`${lato.className} flex flex-col gap-3 md:gap-3 md:flex-row md:mr-3`}>
          <CallAction 
            name="Go Home"
          />
        </div>
      </div>
    </div>
  );
}
