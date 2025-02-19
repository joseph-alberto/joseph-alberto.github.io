import Link from "next/link";

type HighlightTextVariant = "primary" | "secondary";

type Props = {
    href?: string;
    text: string;
    variant?: HighlightTextVariant;
};

const HighlightText = ({ href = "", text, variant = "primary" }: Props) => {
    const HighlightVariant = {
        primary: "text-primary drop-shadow-primaryTextShadow",
        secondary: "text-secondary drop-shadow-secondaryTextShadow",
    };

    return (
        <Link href={href} className={`inline-block transition-all hover:-translate-y-1 ${HighlightVariant[variant]}`}>
            {text}
        </Link>
    );
};
export default HighlightText;
