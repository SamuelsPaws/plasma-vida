'use client'
import numToPriceStr from "@/app/utils/numToPriceStr";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import PromotionsDot from "./subcomponents/PromotionsDot";
import { Product } from "@/lib/models/product";
import Link from "next/link";
import getSalePercent from "@/app/utils/getSalePercent";
import Image from "next/image";
import CustomIcon from "../CustomIcon";
import PromotionCard from "./subcomponents/PromotionCard";

type Interval = ReturnType<typeof setInterval>;

interface PromotionsCarouselProps {
    promotions: Product[];
    className: string;
}

const PromotionsCarousel = ({ promotions, className }: PromotionsCarouselProps) => {
    const [index, setIndex] = useState<number>(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const intervalRef = useRef<Interval | null>(null);

    const startInterval = useCallback(() => {
        clearInterval(intervalRef.current!);
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setIndex((i) => (i + 1) % promotions.length);
        }, 4500);
    }, [promotions.length]);

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current!);
    }, [startInterval]);

    const handleDotClick = (i: number) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
        startInterval();
    }

    if (!promotions.length) return null;

  return (
    <div className={className}>
        <AnimatePresence mode="wait" custom={direction}>
            {/* White part (card) */}
            <PromotionCard
                key={index}
                product={promotions[index]}
                direction={direction}
            />
        </AnimatePresence>
        {/* Little dots */}
        <div className="
            h-8 w-full
            flex justify-center items-center gap-0"
        >
            {promotions.map((item, i) => (
                <PromotionsDot
                    key={i}
                    keyProp={i}
                    index={index}
                    handleClick={() => handleDotClick(i)}
                />
            ))}
        </div>
    </div>
  )
}

export default PromotionsCarousel
