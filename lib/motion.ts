import type { CSSProperties } from "react"
import type { Transition, Variants } from "motion/react"

// Shared by Motion and CSS. Durations are seconds; CSS values are derived below.
export const motionTokens = {
    duration: { press: 0.14, fast: 0.18, ui: 0.24, drawer: 0.32, reveal: 0.42 },
    ease: {
        out: [0.23, 1, 0.32, 1],
        inOut: [0.77, 0, 0.175, 1],
        drawer: [0.32, 0.72, 0, 1],
    },
    distance: 14,
    stagger: 0.06,
    viewport: { once: true, margin: "0px 0px -32px 0px" },
} as const

export const motionTransitions = {
    ui: { duration: motionTokens.duration.ui, ease: motionTokens.ease.out },
    fast: { duration: motionTokens.duration.fast, ease: motionTokens.ease.out },
    reveal: { duration: motionTokens.duration.reveal, ease: motionTokens.ease.out },
    drawer: { duration: motionTokens.duration.drawer, ease: motionTokens.ease.drawer },
    layout: { type: "spring", duration: motionTokens.duration.drawer, bounce: 0 },
} satisfies Record<string, Transition>

export const revealVariants: Variants = {
    hidden: { opacity: 0, y: motionTokens.distance },
    visible: { opacity: 1, y: 0, transition: motionTransitions.reveal },
}

export const staggerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: motionTokens.stagger } },
}

// x/y/scale let MotionConfig remove spatial motion for reduced-motion users.
// CSS interactions use individual translate/scale properties to coexist with layout transforms.
export const actionVariants: Variants = {
    hidden: { opacity: 0, x: 10, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1, transition: motionTransitions.ui },
    exit: { opacity: 0, x: 6, scale: 0.98, transition: motionTransitions.fast },
}

export const motionCssVariables = {
    "--motion-press": `${motionTokens.duration.press}s`,
    "--motion-fast": `${motionTokens.duration.fast}s`,
    "--motion-ui": `${motionTokens.duration.ui}s`,
    "--motion-drawer": `${motionTokens.duration.drawer}s`,
    "--motion-reveal": `${motionTokens.duration.reveal}s`,
    "--motion-stagger": `${motionTokens.stagger}s`,
    "--motion-distance": `${motionTokens.distance}px`,
    "--ease-out-premium": `cubic-bezier(${motionTokens.ease.out.join(",")})`,
    "--ease-in-out-premium": `cubic-bezier(${motionTokens.ease.inOut.join(",")})`,
    "--ease-drawer": `cubic-bezier(${motionTokens.ease.drawer.join(",")})`,
} as CSSProperties
