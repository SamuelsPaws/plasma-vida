'use client'
import { motion } from "motion/react"
import { revealVariants } from "@/lib/motion"
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
                variants={revealVariants}
                initial="hidden"
                animate="visible"
            >
                {title}
            </motion.h1>
            {subheadline &&
                <motion.p
                    className="mt-1 lg:mt-4 text-md lg:text-2xl text-white-1 font-semibold relative"
                    variants={revealVariants}
                initial="hidden"
                animate="visible"
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
