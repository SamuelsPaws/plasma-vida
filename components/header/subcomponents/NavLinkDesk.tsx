import { NavLinkType } from "@/lib/types/nav";
import Link from "next/link";

interface Props {
    item: NavLinkType;
}

const NavLinkDesk = ({ item }: Props) => {
    const cn = "pressable relative py-2 hover:text-white-1/80"

    if (item.external) {
        return (
        <li>
            <a
                href={item.href}
                target="_blank"
                className={cn}
            >
                {item.label}
            </a>
        </li>
        )
    }

    return (
    <li>
        <Link
            href={item.href}
            className={cn}
        >
            {item.label}
        </Link>
    </li>
    )
}

export default NavLinkDesk