'use client'
import { motion } from "motion/react";

const BannerPages = ({ title }: { title: string }) => {
  return (
    <div className="
        h-[216px] lg:h-[380px] p-8 lg:p-10 relative
        grid grid-cols-[80%_1fr] lg:grid-cols-2 gap-0
        bg-[url('/assets/banner.webp')] bg-cover lg:bg-position-[0_-164px]
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(to_right,#0009_60%,#0004)] lg:before:bg-[linear-gradient(to_right,#0008_30%,#0001)]"
    >
        {/* Left div */}
        <div className="lg:p-6 flex flex-col justify-end">
            <motion.h1
                className="
                    relative
                    text-2xl lg:text-5xl text-white-1 font-bold leading-8 lg:leading-16"
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
