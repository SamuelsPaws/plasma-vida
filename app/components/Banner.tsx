'use client'
import { motion } from "motion/react"

const Banner = () => {
  return (
    <div className="
        h-[200px] lg:h-[340px] p-8 lg:p-16 relative
        flex flex-col justify-end
        bg-[url('/assets/hero-img.webp')] bg-cover
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0008_60%,#fff1)]"
    >
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
  )
}

export default Banner