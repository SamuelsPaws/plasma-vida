import clsx from "clsx";

interface Props {
    title: string;
    className?: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, className, children }: Props) => {
    return (
    <section className={clsx("flex flex-col items-start gap-4", className)}>
        <h2 className="text-sm text-br-gold-main font-semibold tracking-widest uppercase">
            {title}
        </h2>
        {children}
    </section>
    )
}

export default FooterColumn
