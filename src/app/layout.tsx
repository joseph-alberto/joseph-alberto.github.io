import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/src/components/layouts/Header";
import Footer from "@/src/components/layouts/Footer";
import HomeBackground from "@/src/components/pages/home/HomeBackground";
import "./globals.css";
import ScrollUpButton from "../components/pages/home/ScrollUpButton";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "JA Digital Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-zinc-900 text-neutral-200`} id="home">
                <ScrollUpButton />
                <HomeBackground />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
