import clsx from "clsx";

interface Props {
    text: string;
    centered?: boolean;
}

const Eyebrow = ({ text, centered }: Props) => {
    return (
    <span className={clsx(
        "w-fit block",
        "mb-2 md:mb-4",
        centered && "mx-auto",
        "text-my-md text-br-gold-main"
    )}>
        {text}
    </span>
    )
}

export default Eyebrow