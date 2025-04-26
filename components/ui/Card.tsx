import React from "react";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  date?: string;
};

const Card: React.FC<CardProps> = ({ icon, title, desc, date }) => {
  return (
    <article className="bordered flex flex-col gap-1 w-full rounded-lg p-4">
      <aside className="text-black dark:text-white">{icon}</aside>
      <section>
        <h6 className="w-full">{title}</h6>
        <p className="w-full opacity-50">{date}</p>
      </section>
      <p className="w-full !text-sm">{desc}</p>
    </article>
  );
};

export default Card;
