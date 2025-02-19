"use client";
import React from "react";
import data from "@/src/data/portfolio.json";
import { Portfolio } from "@/src/interfaces/Portfolio";
import HighlightText from "../../utility/HighlightText";
import PortfolioCard from "../portfolio/PortfolioCard";

const PortfolioSection = () => {
    const portfolios: Portfolio[] = data;
    return (
        <div className="px-4 py-20 sm:px-16 md:px-12" id="portfolio">
            <h1 className="mb-6 text-2xl font-bold xs:text-3xl md:text-4xl">
                <HighlightText text="Portfolio" />
            </h1>
            <p className="text-xs sm:text-sm">
                Step into my portfolio, a curated showcase of my work that spans personal passion projects and
                meaningful collaborations with esteemed organizations. I{`'`}m thrilled to share these achievements with
                you, and I hope you find inspiration within these pages.
            </p>
            <div className="mt-6">
                <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3`}>
                    {portfolios.map((portfolio, i) => (
                        <PortfolioCard key={i} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
