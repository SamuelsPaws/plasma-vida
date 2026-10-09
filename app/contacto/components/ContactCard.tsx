import CustomIcon, { type IconId } from "@/components/CustomIcon"

interface Props {
    iconId: IconId
    title: string
    description: string
    label: string
    href: string
    action: string
    external?: boolean
}

export function ContactCard({ iconId, title, description, label, href, action, external = false }: Props) {
    return (
    <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="
            h-full min-w-0
            p-8
            flex flex-col items-start
            bg-white-1
            border border-mainblue-original/10 rounded-2xl
            interactive-card hover:border-mainblue-original/30"
    >
        <span
            aria-hidden="true"
            className="
                w-16 h-16 mb-8
                flex items-center justify-center
                bg-lightblue-200
                text-3xl text-mainblue-original
                rounded-full"
        >
            <CustomIcon iconId={iconId} />
        </span>
        <h3 className="text-my-xl text-mainblue-original font-semibold">
            {title}
        </h3>
        <p className="mt-4 text-my-md text-gray-600 leading-relaxed">
            {description}
        </p>
        <p className="mt-4 mb-8 text-my-md text-mainblue-original font-semibold break-words">
            {label}
        </p>
        <span className="
            mt-auto pt-4 w-full
            flex items-center justify-between gap-4
            text-my-md text-mainblue-original font-semibold
            border-t border-mainblue-original/10"
        >
            {action}
            <span aria-hidden="true">
                <CustomIcon iconId="arrowR" />
            </span>
        </span>
    </a>
    )
}
