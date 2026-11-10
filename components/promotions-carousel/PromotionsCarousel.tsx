'use client'
import { AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import PromotionsDot from "./subcomponents/PromotionsDot"
import { Product } from "@/lib/models/product"
import PromotionCard from "./subcomponents/PromotionCard"

interface Props {
    promotions: Product[]
    className: string
}

const PromotionsCarousel = ({ promotions, className }: Props) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)
    const activeIndex = index % (promotions.length || 1)

    // Restart automatic swapping after a card change, including dot clicks.
    useEffect(() => {
        if (promotions.length < 2) return

        const interval = setInterval(() => {
            setDirection(1)
            setIndex((current) => (current + 1) % promotions.length)
        }, 4500)

        return () => clearInterval(interval)
    }, [index, promotions.length])

    const handleDotClick = (nextIndex: number) => {
        setDirection(nextIndex > activeIndex ? 1 : -1)
        setIndex(nextIndex)
    }

    if (!promotions.length) return null

    return (
    <div className={className}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
            {/* White part (card) */}
            <PromotionCard
                key={activeIndex}
                product={promotions[activeIndex]}
                direction={direction}
            />
        </AnimatePresence>
        {/* Little dots */}
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
            </div>
        )}
    </div>
    )
}

export default PromotionsCarousel
