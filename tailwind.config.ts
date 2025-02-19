import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    xs: "384px",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                },
            },
            colors: {
                primary: "#22D3EE",
                secondary: "#FB7185",
            },
            dropShadow: {
                primaryTextShadow: "-2px 3px 2px rgba(45, 212, 191, 0.5)",
                secondaryTextShadow: "-2px 3px 2px rgba(251, 113, 133, 0.5)",
            },
        },
        screens: {
            xs: "384px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [],
};
export default config;
