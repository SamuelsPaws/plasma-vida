'use client'
import { motion } from "motion/react"
import BannerPromotions from "./homepage-specific/BannerPromotions"
import { Promotion } from "@/lib/models/promotion"

const Banner = ({ promotions }: { promotions: Promotion[] }) => {
  return (
    <div className="
        h-[200px] lg:h-[420px] p-8 lg:p-10 relative
        grid grid-cols-[70%_1fr] lg:grid-cols-2 gap-0
        bg-[url('/assets/hero-img.webp')] bg-cover lg:bg-position-[0_-42px]
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0007_30%,#0002)]"
    >
        {/* Left div */}
        <div className="lg:p-6 flex flex-col justify-end">
            <motion.h1
                className="
                    relative
                    text-3xl lg:text-7xl text-white-1 font-bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Plasma Vida Center
            </motion.h1>
            <motion.p
                className="mt-1 lg:mt-4 text-sm lg:text-2xl text-white-1 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >Te escuchamos, te entendemos y cuidamos de ti de forma natural.</motion.p>
        </div>
        <BannerPromotions
            promotions={promotions}
            className="hidden lg:block h-full w-[60%] place-self-center relative"
        />
    </div>
  )
}

export default Banner