'use client'
import { motion } from "motion/react"
import BannerPromotions from "./homepage-specific/BannerPromotions"
import { Promotion } from "@/lib/models/promotion"

const Banner = ({ promotions }: { promotions: Promotion[] }) => {
  return (
    <div className="
        h-[200px] lg:h-[420px] p-8 lg:p-0 relative
        grid grid-cols-2 gap-0
        bg-[url('/assets/hero-img.webp')] bg-cover bg-position-[0_-42px]
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0006,#0002)]"
    >
        {/* Left div */}
        <div className="lg:p-16 flex flex-col justify-end">
            <motion.h1
                className="
                    relative
                    text-3xl lg:text-7xl text-white-1 font-bold"
                initial={{
                    opacity: 0,
                    y: -20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6
                }}
            >
                Plasma Vida Center
            </motion.h1>
            <p className="mt-4 text-2xl text-white-1 relative">Te escuchamos, te entendemos y cuidamos de ti de forma natural.</p>
        </div>
        <BannerPromotions promotions={promotions} />
    </div>
  )
}

export default Banner