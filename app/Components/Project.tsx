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
      <div className="p-4 border-2 border-[#cccccc] rounded-md bg-[#ffffff] dark:bg-[#595959] dark:border-[#7f7f7f]">
        <Image
          src={img}
          width={300}
          height={600}
          alt={`${name} image`}
          className="rounded-md"
        />
        <h2 className={`${lato.className} text-3xl font-bold text-[#2e2e2e] dark:text-[#f2f2f2]`}>
          {name}
        </h2>
        <p className="text-[#7f7f7f] dark:text-[#cccccc] text-xl">
          {desc}
        </p>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#cccccc] text-[#a5a5a5] dark:text-[#cccccc] dark:bg-[#7f7f7f] p-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;efault Project;