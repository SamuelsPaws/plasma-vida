'use client'
import { motion } from "motion/react"

const ImagesGrid = () => {
  return (
    <div className="h-[380px] lg:h-auto lg:flex-1 grid grid-cols-2 auto-rows-fr lg:auto-rows-[240px]">
        <motion.div
            className="w-[110%] h-[110%] rounded-2xl overflow-hidden z-0"
            initial={{
                opacity: 0,
                transform: 'translateX(-16px)'
            }}
            animate={{
                opacity: 1,
                transform: 'translateX(0)'
            }}
            transition={{
                duration: 0.42,
                ease: [0.23, 1, 0.32, 1]
            }}
        >
            <img
                src="/assets/elderly.svg"
                className="w-full h-full object-contain"
                alt="El equipo de Plasma Vida Center"
            />
        </motion.div>
        <div></div>
        <div></div>
        <motion.div
            className="w-[110%] h-[110%] place-self-end rounded-2xl overflow-hidden z-10"
            initial={{
                opacity: 0,
                transform: 'translateX(16px)'
            }}
            animate={{
                opacity: 1,
                transform: 'translateX(0)'
            }}
            transition={{
                duration: 0.42,
                delay: 0.07,
                ease: [0.23, 1, 0.32, 1]
            }}
        >
            <img
                src="/assets/prehospital.svg"
                className="w-full h-full object-contain"
                alt="El equipo de Plasma Vida Center"
            />
        </motion.div>
        <motion.div
            className="w-[110%] h-[110%] place-self-start rounded-2xl overflow-hidden z-10"
            initial={{
                opacity: 0,
                transform: 'translateX(-16px)'
            }}
            animate={{
                opacity: 1,
                transform: 'translateX(0)'
            }}
            transition={{
                duration: 0.42,
                delay: 0.14,
                ease: [0.23, 1, 0.32, 1]
            }}
        >
            <img
                src="/assets/scientist.svg"
                className="w-full h-full object-contain"
                alt="El equipo de Plasma Vida Center"
            />
        </motion.div>
    </div>
  )
}

export default ImagesGrid
