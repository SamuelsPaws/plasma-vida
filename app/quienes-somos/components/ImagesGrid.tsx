'use client'
import { motion } from "motion/react"

const ImagesGrid = () => {
  return (
    <div className="h-[380px] lg:h-auto lg:flex-1 grid grid-cols-2 auto-rows-fr lg:auto-rows-[240px]">
        <motion.div
            className="w-[110%] h-[110%] rounded-2xl overflow-hidden z-0"
            initial={{
                opacity: 0,
                x: -20
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.4
            }}
        >
            <img
                src="/assets/hero-img.webp"
                className="w-full h-full object-cover"
                alt=""
            />
        </motion.div>
        <div></div>
        <div></div>
        <motion.div
            className="w-[110%] h-[110%] place-self-end rounded-2xl overflow-hidden z-10"
            initial={{
                opacity: 0,
                x: 20
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.4,
                delay: 0.2
            }}
        >
            <img
                src="/assets/hero-img.webp"
                className="w-full h-full object-cover"
                alt=""
            />
        </motion.div>
    </div>
  )
}

export default ImagesGrid