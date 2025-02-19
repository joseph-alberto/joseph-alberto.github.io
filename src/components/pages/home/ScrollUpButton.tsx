"use client";
import useScroll from "@/src/hooks/useScroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollUpButton = () => {
    const { isScrollDown, scrollToStart } = useScroll();

    return (
        <div
            className={`fixed bottom-12 right-4 sm:right-12 flex cursor-pointer justify-center rounded-full bg-neutral-500 p-4 align-middle ${!isScrollDown && "hidden"}`}
            onClick={() => {
                scrollToStart();
            }}
        >
            <MdOutlineKeyboardArrowUp size={20} />
        </div>
    );
};

export default ScrollUpButton;
