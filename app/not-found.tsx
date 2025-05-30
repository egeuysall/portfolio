import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="w-full h-[calc(100vh-16rem)] flex flex-col items-center justify-center text-center gap-6 bg-white dark:bg-black">
      <h2>Sorry, we couldn&apos;t find that page.</h2>
      <Link href="/">
        <button className="btn-2">Go home</button>
      </Link>
    </main>
  );
}
