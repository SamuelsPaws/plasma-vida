import clsx from "clsx";
import Link from "next/link";
import CustomIcon from "../CustomIcon";

interface Props {
    href: string;
    label: string;
    external?: boolean;
    centered?: boolean;
}

const PillCtaBtn = ({ href, label, external = false, centered = false }: Props) => {
    const cn = clsx(
        "w-fit block",
        "px-6 py-3",
        centered && "mx-auto",
        "md:px-8 md:py-4",
        "flex items-center gap-4",
        "bg-br-gold-main",
        "text-my-md text-white-1",
        "rounded-full",
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
            className="scale-120"
        />
    </Link>
    )
}

export default PillCtaBtn