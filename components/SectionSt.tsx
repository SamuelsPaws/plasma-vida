import clsx from "clsx";

interface Props {
    title?: string;
    bgColor: string;
    children?: React.ReactNode;
}

const SectionSt = ({ title, bgColor, children }: Props) => {
    return (
    <section className={clsx(
        "px-8 py-16 relative",
        "md:px-16 md:py-24",
        "xl:px-16 xl:py-24",
        bgColor,
        "overflow-hidden"
    )}>
        {title && (
            <h2 className="
                w-full md:w-2/3 mx-auto
                mb-4 md:mb-8
                text-most-h2 text-center text-mainblue-original font-semibold
                leading-10 md:leading-16"
            >
                {title}
            </h2>
        )}
        {children}
    </section>
    )
}

export default SectionSt