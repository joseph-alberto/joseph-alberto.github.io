"use client";
import Link from "next/link";
import React from "react";
import HighlightText from "@/src/components/utility/HighlightText";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="px-4 py-20 sm:px-16 md:px-12" id="about">
            <h1 className="mb-6 text-2xl font-bold xs:text-3xl md:text-4xl">
                <HighlightText text="About" variant="secondary" />
            </h1>
            <div className="grid gap-4 md:grid-cols-12 md:gap-4">
                <div className="col-span-3 flex h-60 w-60 place-items-center justify-center place-self-center rounded-md bg-zinc-600 shadow-lg sm:h-80 sm:w-80 md:col-span-6 md:w-auto md:place-self-auto lg:col-span-5 xl:col-span-4">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL}/images/about/photo3.jpeg`}
                        priority={true}
                        alt="Photo"
                        className="w-full h-full object-cover object-[100%_30%]"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="col-span-3 rounded-md px-4 py-4 text-xs shadow-lg sm:text-sm md:col-span-6 md:py-0 lg:col-span-7 xl:col-span-8">
                    <div className="mb-2 text-xl font-bold">Joseph Alberto</div>
                    <div className="flex flex-col gap-4">
                        <p>
                            I&apos;m a <span className="font-semibold">Software Engineer</span> who work at{" "}
                            <span className="font-semibold">Taniyuk Office</span> as a{" "}
                            <span className="font-semibold">Head of Development</span>, where I developed application
                            for over 1.500 rubber smallholder in South Sumatera, helping them to sell their crop
                            directly to industries through an application.
                        </p>
                        <p>
                            I like to explore about <span className="font-semibold">JavaScript</span> technology,
                            especially <span className="font-semibold">Node.JS</span> and{" "}
                            <span className="font-semibold">React.JS</span>, as you can see on my{" "}
                            <Link
                                target="_blank"
                                href="/portfolio"
                                className="font-medium text-cyan-400 hover:border-b-2 hover:border-dotted hover:border-cyan-500"
                            >
                                portfolio page
                            </Link>
                            , there is some project I&apos;ve made with it, and also I&apos;m using{" "}
                            <span className="font-semibold">TypeScript</span> which that is reliable to maintain errors
                            and bug at compile time, rather than at runtime.
                        </p>
                        <p>
                            And I&apos;m passionate to structure clean, neat, and sensible code with a new technique for
                            an advanced program, and I really love to stay update with the latest trends of software
                            development especially web development.
                        </p>
                    </div>
                </div>
            </div>
            {/* I really proud with what I have achived here, because we creating application 
        for saving over more than 1.000 life of rubber farmer that already trapped in long
        trading chain for a couple years that make them lose some much money.  */}
            {/* Bio:
      I'm Joseph Alberto a Software Engineer, currenlty I work Fulltime in Taniyuk as a Head of Development

      Technology I use:

      Why I choose to become a Software Engineer:

      About This Website: 
      1. Bio
2. Why I choose to become a Software Engineer
3. Career
4. This Website
5. Technology
6. Social Media/Contact
      */}
        </div>
    );
};

export default AboutSection;
