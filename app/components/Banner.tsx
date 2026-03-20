'use client'
import { motion } from "motion/react"

const Banner = () => {
  return (
    <div className="
        h-[200px] lg:h-[420px] p-8 lg:p-16 relative
        grid grid-cols-2 gap-0
        bg-[url('/assets/hero-img.webp')] bg-cover bg-position-[0_-42px]
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0006,#0002)]"
    >
        <div className="flex flex-col justify-end">
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
        <div className="
            h-full w-[60%] place-self-center relative"
        >
            <div className="w-[80%] h-full mx-auto flex flex-col gap-2">
                <div className="w-full flex-1 bg-white-1 rounded-2xl shadow-md"></div>
                <div className="h-4"></div>
            </div>
        </div>
    </div>
  )
}

export default Banner