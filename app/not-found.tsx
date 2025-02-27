"use client";

import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function NotFound() {
  const [message, setMessage] = useState("It’s somewhere… but not here.");

  const handleClick = () => {
    setMessage((prevMessage) =>
      prevMessage === "It’s somewhere… but not here."
        ? "You’ve found a glitch in the system!"
        : "It’s somewhere… but not here."
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
          className={`${lato.className} text-3xl font-bold mb-4 text-[#2e2e2e] dark:text-[#f2f2f2] md:text-5xl`}
        >
          Page Lost in the Matrix
        </h2>
        <p
          className="text-lg mb-6 text-[#2e2e2e] cursor-pointer dark:text-[#f2f2f2] md:text-2xl"
          onClick={handleClick}
        >
          {message}
        </p>
        <Link href="/">
          <button className="bg-[#7f8c8f] text-[#f2f2f2] px-5 py-3 rounded cursor-pointer font-bold hover:opacity-75 transition duration-300 md:text-xl">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
