import Image from "next/image";
import React from "react";
import { Portfolio } from "@/src/interfaces/Portfolio";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";

type Props = {
    portfolio: Portfolio;
};

const PortfolioCard = ({ portfolio }: Props) => {
    return (
        <div className="flex min-h-full min-w-40 flex-col gap-4 overflow-hidden rounded-xl bg-neutral-600 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-neutral-400/50">
            <div className="relative justify-self-center">
                {/* Should use 600x300 thumbnail */}
                <Image
                    src={`${process.env.NEXT_PUBLIC_URL}${portfolio.image_path}`}
                    priority={true}
                    alt="img"
                    className="h-60"
                    width={0}
                    height={0}
                    style={{
                        width: "100%",
                        objectFit: "contain",
                    }}
                />
                <div className="absolute -bottom-4 mb-4 flex w-full place-items-center justify-between gap-2 bg-gray-800/70 px-4 py-2 text-sm">
                    <div className="font-bold text-white">{portfolio.title}</div>
                    <div className="rounded-md bg-cyan-500 px-1.5 py-0.5 font-bold text-white">{portfolio.year}</div>
                </div>
            </div>
            <div className="flex h-full flex-col gap-2 px-4 pb-6">
                <div className="text-xs sm:text-sm">{portfolio.description}</div>
                <div className="flex h-full flex-row-reverse place-items-end gap-1">
                    {typeof portfolio.link == "string" && (
                        <Link href={portfolio.link} target="_blank">
                            <button className="rounded-md border p-2 shadow-md hover:bg-gray-200">
                                <IoIosGlobe size={16} />
                            </button>
                        </Link>
                    )}
                    {typeof portfolio.github_link == "string" && (
                        <Link href={portfolio.github_link} target="_blank">
                            <button className="rounded-md border p-2 shadow-md hover:bg-gray-200">
                                <FaGithub size={16} />
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
