'use client'
import PromotionsCarrousel from "@/components/PromotionsCarrousel"
import { motion } from "motion/react"
import { Promotion } from "@/lib/models/promotion"
import Link from "next/link"

const Hero = ({ promotions }: { promotions: Promotion[] }) => {
  return (
    <div className="
        h-[400px] lg:h-[620px] p-8 lg:p-10 relative
        hidden lg:grid grid-cols-2 gap-0
        bg-[url('/assets/hero-img.webp')] bg-size-[120%] lg:bg-position-[0_-180px]
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(to_right,#fffd_40%,#0000)]"
    >
        {/* Left div */}
        <div className="lg:p-6 flex flex-col justify-center items-center gap-8 relative">
            <motion.h1
                className="text-5xl text-sky-700 text-center font-bold leading-16"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Te escuchamos, te entendemos y cuidamos de ti de forma natural.
            </motion.h1>
            <Link
                href='/catalogo'
                className="px-6 py-4 bg-teal-500 text-white-1 text-2xl rounded-full"
            >
                Mira Nuestro Catálogo<i className="fa fa-arrow-right ml-4"></i>
            </Link>
        </div>
        {/* Right div */}
        <div className="relative flex flex-col justify-center items-center gap-8">
            <h2 className="text-3xl font-bold text-black">Aprovecha nuestras promociones</h2>
            <PromotionsCarrousel
                promotions={promotions}
                className="w-[480px] h-[380px] relative"
            />
        </div>
    </div>
  )
}

export default Hero