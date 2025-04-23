import React from "react";
import Image from "next/image";

interface TestimonialProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const Testimonial = ({ img, name, username, body }: TestimonialProps) => {
  return (
    <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-lg bordered p-4">
      <div className="flex items-center gap-2">
        <Image
          src={img}
          className="rounded-full"
          width="32"
          height="32"
          alt={`${username} profile image`}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-black dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-normal text-black dark:text-white opacity-50">@{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-normal text-black dark:text-white">
        {body}
      </blockquote>
    </figure>
  );
};

export default Testimonial;
