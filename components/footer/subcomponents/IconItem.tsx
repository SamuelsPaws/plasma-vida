import CustomIcon, { IconId } from "@/components/CustomIcon"
import clsx from "clsx";

interface Props {
    iconId: IconId;
    href?: string;
    label: string;
    external?: boolean;
    className?: string;
    labelClassName?: string;
}

const IconItem = ({
    iconId,
    href,
    label,
    external = false,
    className,
    labelClassName,
}: Props) => {
    const cn = clsx(
        "flex items-center gap-4 text-white-1",
        href && "pressable hover:text-lightblue-300",
        className,
    )

    const content = (
        <>
            <span className="w-8 h-8 shrink-0 flex items-center justify-center text-my-lg rounded-full border border-white/20">
                <CustomIcon iconId={iconId} />
            </span>
            <span className={clsx("text-my-md", labelClassName)}>
                {label}
            </span>
        </>
    )

    if (href) {
        return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={cn}
        >
            {content}
        </a>
        )
    }
    
    return (
    <div className={cn}>
        {content}
    </div>
    )
}

export default IconItem
