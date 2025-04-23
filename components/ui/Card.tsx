import React from 'react'
import Link from "next/link"

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ icon, title, desc}) => {
  return (
    <article className="bordered flex flex-col gap-1 w-full rounded-lg p-4">
      <aside className="text-black dark:text-white">{icon}</aside>
      <h6 className='w-full'>{title}</h6>
      <p className='w-full'>{desc}</p>
    </article>
  );
}

export default Card;