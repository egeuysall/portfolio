import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

interface CallActionProps {
    name: string;
    link: string;
}

const CallAction = ({ name, link }: CallActionProps) => {
    return (
        <Link href={link} aria-label="Call-to-action button">
            <button className={`${lato.className} bg-[#7f8c8f] w-full md:w-auto py-3 px-6 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300 mb-3 mr-3`}>
                {name}
            </button>
        </Link>
    );
}

export default CallAction;