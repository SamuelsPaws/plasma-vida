'use client'
import { motion } from "motion/react"
import PromotionsCarousel from "./promotions-carousel/PromotionsCarousel";
import { Product } from "@/lib/models/product";
import Image from "next/image";

interface BannerProps {
    title: string;
    subheadline: string | null;
    promotions: Product[];
    bgSrc: string;
}

const Banner = ({ title, subheadline, promotions, bgSrc }: BannerProps) => {
  return (
    <div className="
        min-h-60 relative
        p-8
        md:px-12 md:py-16
        grid grid-cols-[80%_1fr] md:grid-cols-2 gap-0"
    >
        {/* Image bg */}
        <Image
            src={bgSrc}
            fill
            sizes="100%"
            className="w-full h-full object-cover z-0"
            alt="Banner de la empresa"
            priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        {/* Left div */}
        <div className="
            md:p-6 relative z-20
            flex flex-col justify-end"
        >
            <motion.h1
                className="
                    relative
                    text-2xl lg:text-5xl text-white-1
                    font-semibold leading-8 md:leading-18"
                initial={{ opacity: 0, transform: 'translateY(14px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                {title}
            </motion.h1>
            {subheadline &&
                <motion.p
                    className="mt-1 lg:mt-4 text-md lg:text-2xl text-white-1 font-semibold relative"
                    initial={{ opacity: 0, transform: 'translateY(10px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                    Te escuchamos, te entendemos y cuidamos de ti de forma natural.
                </motion.p>
            }
        </div>
        <PromotionsCarousel
            promotions={promotions}
            className="
                hidden lg:block z-20
                h-full w-full max-w-120
                md:w-100 xl:w-120
                place-self-center relative"
        />
    </div>
  )
}

export default Banner
