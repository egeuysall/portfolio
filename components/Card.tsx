import React from 'react'
import Link from "next/link"

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  linkTitle?: string
  link?: string
  desc: string;
}

const Card: React.FC<CardProps> = ({ icon, title, desc, link, linkTitle}) => {
  return (
    <article className="bordered flex flex-col gap-1 w-full rounded-lg p-4">
      <aside className="text-black dark:text-white">{icon}</aside>
      <h6>{title}</h6>
      <Link href={link || "/"} className="text-black dark:text-white underline opacity-50">
        <p>{linkTitle}</p>
      </Link>
      <p>{desc}</p>
    </article>
  );
}

export default Card;