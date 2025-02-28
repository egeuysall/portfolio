import Link from "next/link";

const CallAction = ( name:String ) => {
    return (
        <Link href="/" aria-label="Call-to-action button">
            <button className={`${lato.className} bg-[#7f8c8f] w-full md:w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1] hover:scale-105 hover:opacity-80 active:opacity-70 transition duration-300`}>
                {name}
            </button>
        </Link>
    );
}

export default CallAction;
