'use client'

import { motion } from 'motion/react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
}

const Reveal = ({ children, className, delay = 0, distance = 14 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, transform: `translateY(${distance}px)` }}
    whileInView={{ opacity: 1, transform: 'translateY(0)' }}
    viewport={{ once: true, margin: '-72px 0px' }}
    transition={{ duration: 0.42, delay, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
)

export default Reveal
