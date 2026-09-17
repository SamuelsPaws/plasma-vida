'use client'
import { motion } from "motion/react";
import Image from "next/image";

const BannerPages = ({ title, bgSrc }: { title: string, bgSrc: string }) => {
  return (
    <div className="
        h-[216px] lg:h-[400px] p-8 lg:p-10 relative
        grid grid-cols-[80%_1fr] lg:grid-cols-2 gap-0"
    >
        {/* Image bg */}
        <Image
            src={bgSrc}
            fill
            sizes="100%"
            className="w-full h-full object-cover object-[50%_30%] z-0"
            alt="Banner de la empresa"
            priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        {/* Left div */}
        <div className="lg:p-6 flex flex-col justify-end z-20 relative">
            <motion.h1
                className="
                    relative
                    text-2xl lg:text-5xl text-white-1 font-bold leading-8 lg:leading-18"
                initial={{ opacity: 0, transform: 'translateY(14px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                {title}
            </motion.h1>
            <motion.p
                className="mt-1 lg:mt-4 text-md lg:text-2xl text-white-1 font-semibold relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            ></motion.p>
        </div>
    </div>
  )
}

export default BannerPages
