import { footerContent } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import FooterWhatsappLink from "./FooterWhatsappLink";

const FooterBrand = () => {
    return (
    <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-4">
        <Link href="/" className="pressable flex items-center gap-4" aria-label="Plasma Vida Center, inicio">
            <span className="w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-white-1 rounded-full shadow-lg">
                <Image
                    src="/assets/logo.webp"
                    width={371}
                    height={389}
                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                    alt=""
                />
            </span>
            <span className="flex flex-col">
                <span className="text-xl md:text-2xl text-white-1 font-semibold tracking-wide">
                    {footerContent.brandName}
                </span>
                <span className="text-sm text-lightblue-300">
                    {footerContent.tagline}
                </span>
            </span>
        </Link>
        <p className="hidden md:block max-w-md text-my-md text-lightblue-200 leading-relaxed">
            {footerContent.description}
        </p>
        <FooterWhatsappLink className="hidden md:inline-flex" />
    </div>
    )
}

export default FooterBrand
