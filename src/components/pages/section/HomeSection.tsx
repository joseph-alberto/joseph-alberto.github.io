"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Button from "@/src/components/utility/Button";
import HighlightText from "@/src/components/utility/HighlightText";
import TeaImg from "@/src/images/tea.png";
import SmileImg from "@/src/images/smile.png";

const HomeSection = () => {
    const router = useRouter();
    const tea = <Image src={TeaImg} alt="" width={23} height={23} className="inline" />;
    const smile = <Image src={SmileImg} alt="" width={18} height={18} className="inline" />;

    return (
        <div className="flex min-h-screen flex-col items-center gap-4 px-4 pt-40 text-center">
            <p className="w-10/12 text-2xl font-bold leading-tight sm:text-3xl">
                Hi, I&apos;m{" "}
                <span className="text-nowrap">
                    <HighlightText href="#about" text="Joseph Alberto" variant="secondary" />!
                </span>
                <br />
                <HighlightText href="#portfolio" text="Software Engineer" variant="primary" /> from Palembang
            </p>
            <div className="flex flex-col gap-4 rounded-lg px-2 pt-4 text-xs sm:text-sm">
                <p className="px-0 sm:px-16 md:px-32 lg:px-64">
                    Basically, I&apos;m just an ordinary man. I wrote ideas into a bunch of code. Passionate to
                    structure clean, neat, and sensible code with a modern technique for an advanced program.
                </p>
                <p className="px-0 sm:px-16 md:px-32 lg:px-64">
                    So, that&apos;s our small chat. You&apos;ve been here looking through my website. Let me spill the
                    tea {tea}. Welcome to my art-work and don&apos;t hesitate to discover more thing about me {smile}.
                </p>
            </div>
            <div className="flex w-full justify-center gap-2 rounded-lg text-sm">
                <Button
                    text="Work Result"
                    variant="primary"
                    onClick={() => {
                        router.push("#portfolio");
                    }}
                />
                <Button
                    text="More about me"
                    variant="secondary"
                    onClick={() => {
                        router.push("#about");
                    }}
                />
            </div>
        </div>
    );
};

export default HomeSection;
