import CustomIcon from "@/components/CustomIcon";
import { footerContent } from "@/data/footer";
import clsx from "clsx";

interface Props {
    className?: string;
}

const FooterWhatsappLink = ({ className }: Props) => {
    return (
    <a
        href={footerContent.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={clsx(
            "pressable px-8 py-4 items-center gap-2 bg-white-1 rounded-full text-mainblue-original text-sm md:text-md font-semibold shadow-lg hover:bg-lightblue-200",
            className,
        )}
    >
        <CustomIcon iconId="whatsapp" />
        {footerContent.whatsappLabel}
    </a>
    )
}

export default FooterWhatsappLink
