"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import useScroll from "@/src/hooks/useScroll";
import { useRouter } from "next/navigation";
type Props = {};

type LinksType = {
    name: string | JSX.Element;
    path: string;
}[];

const links: LinksType = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
];

const Header = ({}: Props) => {
    const router = useRouter();
    const { isScrollDown } = useScroll();
    const [mobileNavigation, setmobileNavigation] = useState(false);

    const toggleMobileNavigation = () => {
        setmobileNavigation(!mobileNavigation);
    };

    const handleNavItemOnClick = (path: string) => {
        setmobileNavigation(false);
        router.push(path);
    };

    return (
        <nav className="fixed top-4 z-10 w-full px-2">
            <div
                className={`container mx-auto flex items-center justify-between rounded-full px-6 py-3 text-neutral-200 drop-shadow-lg transition-colors duration-300 md:px-12 ${isScrollDown ? "bg-neutral-700" : "bg-transparent"}`}
            >
                <h1 className="font-semibold">
                    <Link href="/">Jo Digital Space</Link>
                </h1>
                <ul className="hidden items-center gap-8 sm:flex">
                    {links.map((link, i) => (
                        <li key={i} onClick={() => handleNavItemOnClick(link.path)} className="cursor-pointer text-sm">
                            {link.name}
                        </li>
                    ))}
                </ul>
                <button className="block shadow-sm sm:hidden" onClick={toggleMobileNavigation}>
                    <FaBars size={18} />
                </button>
            </div>
            {mobileNavigation && (
                <div className="aboslute container mx-auto px-8">
                    <div className="mt-4 rounded-lg bg-neutral-700 px-6 py-6 shadow-2xl">
                        <ul className="flex flex-col gap-6">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleNavItemOnClick(link.path)}
                                    className="cursor-pointer text-sm text-neutral-200 transition-colors hover:text-neutral-400"
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
