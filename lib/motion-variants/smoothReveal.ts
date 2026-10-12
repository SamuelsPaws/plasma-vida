import type { Variants } from "motion/react"
import { motionTokens, motionTransitions, revealVariants } from "@/lib/motion"

// Compatibility exports for existing consumers; new sections use Reveal.
export const smoothReveal = revealVariants
export const smoothRevealSm = revealVariants
export const smoothRevealHover: Variants = {
    ...revealVariants,
    hovered: { scale: 1.02, transition: motionTransitions.ui },
}
export const smoothRevealRight: Variants = {
    hidden: { opacity: 0, x: -motionTokens.distance },
    visible: { opacity: 1, x: 0, transition: motionTransitions.reveal },
}
