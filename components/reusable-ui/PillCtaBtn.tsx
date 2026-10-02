import clsx from "clsx";
import Link from "next/link";
import CustomIcon from "../CustomIcon";

interface Props {
    href: string;
    label: string;
    external?: boolean;
    centered?: boolean;
    type?: 'main' | 'secondary';
}

const PillCtaBtn = ({ href, label, external = false, centered = false, type = 'main' }: Props) => {
    const cn = clsx(
        "w-fit block",
        "px-6 py-3",
        centered && "mx-auto",
        "md:px-8 md:py-4",
        "flex items-center gap-4",
        type === 'main' && "bg-br-gold-main",
        "text-my-md",
        type === 'main' ? "text-white-1" : "text-black",
        "rounded-full",
        type === 'secondary' && 'border border-black',
        "btn-hover pressable"
    )

    if (external) {
        return (
        <a
            href={href}
            target="_blank"
            className={cn}
        >
            <span>{label}</span>
            <CustomIcon
                iconId="arrowR"
                className="scale-120"
            />
        </a>
        )
    }

    return (
    <Link
        href={href}
        className={cn}
    >
        <span>{label}</span>
        <CustomIcon
            iconId="arrowR"
            className={clsx("scale-120", type === 'secondary' && "rotate-90")}
        />
    </Link>
    )
}

export default PillCtaBtn