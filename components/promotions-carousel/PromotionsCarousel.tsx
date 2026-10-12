'use client'
import { AnimatePresence, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import PromotionsDot from "./subcomponents/PromotionsDot"
import { Product } from "@/lib/models/product"
import CustomIcon from "../CustomIcon"
import PromotionCard from "./subcomponents/PromotionCard"

interface Props {
    promotions: Product[]
    className: string
}

const PromotionsCarousel = ({ promotions, className }: Props) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)
    const [isHovered, setIsHovered] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const reducedMotion = useReducedMotion()
    const carouselRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(carouselRef)
    const activeIndex = index % (promotions.length || 1)
    const shouldPlay = isInView && !reducedMotion && !isHovered && !hasFocus && !isPaused && promotions.length > 1

    // Stop while reading, offscreen, or in a background tab. Resume with a full interval.
    useEffect(() => {
        if (!shouldPlay) return

        let interval: ReturnType<typeof setInterval> | undefined
        const updatePlayback = () => {
            clearInterval(interval)
            if (document.hidden) return
            interval = setInterval(() => {
                setDirection(1)
                setIndex((current) => (current + 1) % promotions.length)
            }, 4500)
        }

        updatePlayback()
        document.addEventListener("visibilitychange", updatePlayback)
        return () => {
            clearInterval(interval)
            document.removeEventListener("visibilitychange", updatePlayback)
        }
    }, [shouldPlay, promotions.length])

    const handleDotClick = (nextIndex: number) => {
        setDirection(nextIndex > activeIndex ? 1 : -1)
        setIndex(nextIndex)
        setIsPaused(true)
    }

    if (!promotions.length) return null

    return (
    <div
        ref={carouselRef}
        className={className}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Promociones"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
        }}
    >
        <div aria-live={shouldPlay ? "off" : "polite"} aria-atomic="true">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
                {/* White part (card) */}
                <PromotionCard
                    key={activeIndex}
                    product={promotions[activeIndex]}
                    direction={direction}
                />
            </AnimatePresence>
        </div>
        {/* Little dots and playback control */}
        {promotions.length > 1 && (
            <div className="
                h-10 w-full
                flex justify-center items-center gap-2"
            >
                {promotions.map((item, i) => (
                    <PromotionsDot
                        key={item.slug}
                        keyProp={i}
                        index={activeIndex}
                        handleClick={() => handleDotClick(i)}
                    />
                ))}
                <button
                    type="button"
                    className="
                        motion-autoplay-control w-8 h-8
                        grid place-items-center
                        bg-mainblue-original/10
                        text-mainblue-original text-sm
                        rounded-full pressable"
                    aria-label={isPaused ? "Reanudar promociones" : "Pausar promociones"}
                    onClick={() => setIsPaused((paused) => !paused)}
                >
                    <span aria-hidden="true">
                        {isPaused ? <CustomIcon iconId="arrowR" /> : "Ⅱ"}
                    </span>
                </button>
            </div>
        )}
    </div>
    )
}

export default PromotionsCarousel
