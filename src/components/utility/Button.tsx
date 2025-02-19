import React from "react";

type ButtonVariant = "primary" | "secondary";

type Props = {
    text: string;
    variant?: ButtonVariant;
    onClick?: () => void;
};

const Button = ({ text, variant = "primary", onClick }: Props) => {
    const buttonVariants = {
        primary: "bg-cyan-400 hover:shadow-cyan-400/50",
        secondary: "bg-rose-400 hover:shadow-rose-400/50",
    };
    return (
        <button
            onClick={onClick}
            className={`text-xs sm:text-sm rounded-md px-4 py-2 text-neutral-100 transition-transform hover:-translate-y-1 hover:shadow-md hover:transition-transform ${buttonVariants[variant]} `}
        >
            {text}
        </button>
    );
};

export default Button;
