import clsx from "clsx";

interface Props {
    title: string;
    eyebrow?: string;
    bgColor: string;
    underLeft?: React.ReactNode;
    rightNode?: React.ReactNode;
    children?: React.ReactNode;
}

const SectionSec = ({ title, eyebrow, bgColor, children, underLeft, rightNode }: Props) => {
    return (
    <section className={clsx(
        "px-8 py-16 relative",
        "md:px-16 md:py-32",
        "xl:px-16 xl:py-32",
        bgColor,
        "overflow-hidden"
    )}>
        {/* Upper part (base) */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
            {/* Left part */}
            <div className="w-full md:w-[60%]">
                <span className="
                    block mb-2 md:mb-4
                    text-my-md text-br-gold-main"
                >
                    {eyebrow}
                </span>
                <h2 className="
                    mb-4 md:mb-4
                    text-most-h2 text-mainblue-original dark:text-br-white
                    font-semibold leading-10 md:leading-12"
                >
                    {title}
                </h2>
                {underLeft}
            </div>
            {rightNode}
        </div>
        {children}
    </section>
    )
}

export default SectionSec