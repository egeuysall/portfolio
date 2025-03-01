import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type ProjectProps = {
  img: string;
  name: string;
  desc: string;
  tags: string[];
};

const Project = ({ img, name, desc, tags }: ProjectProps) => {
  return (
    <Link href="/">
      <div className="p-6 border-2 border-[#cccccc] rounded-md bg-[#ffffff] dark:bg-[#595959] dark:border-[#7f7f7f] box-border h-[35rem] md:h-[28rem] lg:h-[30rem] flex flex-col gap-6">
        {/* Image Section */}
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt={`${name} image`}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Project Title */}
        <h2 className={`${lato.className} text-3xl font-bold text-[#2e2e2e] dark:text-[#f2f2f2] mt-3`}>
          {name}
        </h2>

        {/* Project Description (fills space) */}
        <p className="text-[#7f7f7f] dark:text-[#cccccc] text-xl font-normal mt-2 flex-grow">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-4 justify-end flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#f2f2f2] text-[#7f7f7f] dark:text-[#cccccc] dark:bg-[#7f7f7f] p-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;