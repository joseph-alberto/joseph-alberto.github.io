"use client";
import useScroll from "@/src/hooks/useScroll";

const HomeBackground = () => {
    const { scrollY } = useScroll();
    return (
        <div
            className="absolute -z-50 min-h-screen min-w-full bg-[url(/images/landing-page-bg.jpg)] bg-cover"
            style={{
                transform: `translateY(${scrollY * 0.3}px)`, // Adjust the factor for speed control
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900"></div>
        </div>
    );
};

export default HomeBackground;
