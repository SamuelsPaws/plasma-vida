'use client'

import { motion } from 'motion/react'
import { motionTokens, motionTransitions } from '@/lib/motion'

interface Props {
    children: React.ReactNode
    className?: string
    delay?: number
    distance?: number
    as?: 'div' | 'section' | 'article'
    id?: string
}

const Reveal = ({ children, className, delay = 0, distance = motionTokens.distance, as = 'div', id }: Props) => {
    const Component = motion[as]

    return (
    <Component
        id={id}
        data-reveal
        className={className}
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={motionTokens.viewport}
        transition={{ ...motionTransitions.reveal, delay }}
    >
        {children}
    </Component>
    )
}

export default Reveal
