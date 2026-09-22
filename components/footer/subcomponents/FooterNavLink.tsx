import { NavLinkType } from "@/lib/types/nav";
import Link from "next/link";

interface Props {
    item: NavLinkType;
}

const FooterNavLink = ({ item }: Props) => {
    const className = "pressable block text-sm md:text-md text-white-1 hover:text-lightblue-300"

    if (item.external) {
        return (
        <a href={item.href} target="_blank" rel="noreferrer" className={className}>
            {item.label}
        </a>
        )
    }

    return (
    <Link href={item.href} className={className}>
        {item.label}
    </Link>
    )
}

export default FooterNavLink
