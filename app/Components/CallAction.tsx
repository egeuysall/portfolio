import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

interface CallActionProps {
    name: string;
    link: string;
}

const CallAction = ({ name, link }: CallActionProps) => {
    return (
        <Link href={link} aria-label="Call-to-action button" className="w-full md:w-1/2 px-2">
            <button className={`${lato.className} bg-[#7f8c8f] w-full py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>
                {name}
            </button>
        </Link>
    );
}

export default CallAction;