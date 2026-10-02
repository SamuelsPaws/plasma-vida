import clsx from "clsx";

interface Props {
    text: string;
    centered?: boolean;
    noMargin?: boolean;
}

const Eyebrow = ({ text, centered, noMargin = false }: Props) => {
    return (
    <span className={clsx(
        "w-fit block",
        !noMargin && "mb-2 md:mb-4",
        centered && "mx-auto",
        "text-my-md text-br-gold-main"
    )}>
        {text}
    </span>
    )
}

export default Eyebrow