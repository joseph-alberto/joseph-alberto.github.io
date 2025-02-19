"use client";
import { useEffect, useState } from "react";

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const scrollToStart = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsScrollDown(currentScrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return { scrollY, isScrollDown, scrollToStart };
};

export default useScroll;
