import CustomIcon from "@/components/CustomIcon";
import Link from "next/link";

interface Props {
    slug: string;
}

const PromotionCtaBtn = ({ slug }: Props) => {
    return (
    <Link
        href={`/catalogo/${slug}`}
        className="
            px-4 lg:px-4 py-2
            flex items-center gap-2
            bg-mainblue-original pressable btn-hover motion-arrow
            text-sm lg:text-md text-white-1 rounded-full"
    >
        <span>Ver</span>
        <CustomIcon
            iconId="arrowR"
            className="motion-arrow-icon"
        />
    </Link>
    )
}

export default PromotionCtaBtn