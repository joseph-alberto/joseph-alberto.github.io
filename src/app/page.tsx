"use client";
import HomeSection from "../components/pages/section/HomeSection";
import AboutSection from "../components/pages/section/AboutSection";
import PortfolioSection from "../components/pages/section/PortfolioSection";

export default function Home() {
    return (
        <div className="container mx-auto min-h-[1200px]">
            <HomeSection />
            <AboutSection />
            <PortfolioSection />
        </div>
    );
}
