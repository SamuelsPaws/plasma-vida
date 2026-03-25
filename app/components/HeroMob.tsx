'use client'
import { motion } from "motion/react"
import Link from "next/link"

const HeroMob = () => {
  return (
    <div className="
        h-[400px] px-12 py-0 relative
        flex lg:hidden flex-col justify-center items-center gap-8
        bg-[url('/assets/hero-img.webp')] bg-top-left bg-size-[180%]
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,#0009_40%,#0008)]"
    >
        <motion.h1
            className="relative text-3xl text-white-1 text-center font-bold leading-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Te escuchamos, te entendemos y cuidamos de ti de forma natural.
        </motion.h1>
        <Link
            href='/catalogo'
            className="relative px-4 py-2 bg-teal-500 text-white-1 text-lg rounded-full"
        >
            Mira Nuestro Catálogo<i className="fa fa-arrow-right ml-2"></i>
        </Link>
    </div>
  )
}

export default HeroMob