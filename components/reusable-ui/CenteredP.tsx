import clsx from "clsx";

interface Props {
    text: string;
    altColor?: string;
    smaller?: boolean;
}

const CenteredP = ({ text, altColor, smaller = false }: Props) => {
    return (
    <p className={clsx(
        smaller ? "w-[80%] lg:w-1/2" : "w-full md:w-2/3",
        "mx-auto mb-8 md:mb-8",
        "text-my-md text-center",
        altColor ? altColor : "text-gray-600"
    )}>
        {text}
    </p>
    )
}

export default CenteredP