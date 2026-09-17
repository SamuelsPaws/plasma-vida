'use client'
import numToPriceStr from "@/app/utils/numToPriceStr";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import PromotionsDot from "./PromotionsDot";
import { Product } from "@/lib/models/product";
import Link from "next/link";
import getSalePercent from "@/app/utils/getSalePercent";
import Image from "next/image";
import CustomIcon from "./CustomIcon";

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
            <motion.div
                className="
                    w-full flex-1 relative
                    p-4 bg-white-1/80 backdrop-blur-md
                    flex flex-col justify-between
                    rounded-2xl shadow-none lg:shadow-md"
                key={index}
                custom={direction}
                initial={{ opacity: 0, transform: `translateX(${direction * 18}px) scale(0.985)`, filter: 'blur(2px)' }}
                animate={{ opacity: 1, transform: 'translateX(0) scale(1)', filter: 'blur(0px)' }}
                exit={{ opacity: 0, transform: `translateX(${direction * -12}px) scale(0.99)`, filter: 'blur(2px)' }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
                {promotions[index].noPromotionPrice &&
                    <div className="
                        absolute top-4 right-4
                        px-2 py-1
                        bg-red-600 text-white-1 text-md lg:text-lg"
                    >
                        -{getSalePercent(promotions[index].noPromotionPrice, promotions[index].price)}%
                    </div>
                }
                <p className="
                    self-start px-2 py-0 mb-2
                    bg-red-700 -rotate-2
                    text-2xl text-white-1 font-bold rounded-sm"
                >
                    ¡Promoción!
                </p>
                {/* Title */}
                <p className="
                    mb-2
                    text-xl font-bold
                    whitespace-nowrap overflow-hidden text-ellipsis"
                >
                    {promotions[index].title}
                </p>
                {/* Div with image, price and button */}
                <div className="h-[200px] lg:h-[180px] flex">
                    {/* Image */}
                    <div className="
                        w-[70%] h-full
                        self-center relative
                        rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={promotions[index].imageUrls[0]}
                            fill
                            sizes="70%"
                            className="object-cover media-zoom"
                            alt={promotions[index].title}
                        />
                    </div>
                    {/* Div with price and button */}
                    <div className="flex-1 flex flex-col justify-between items-end gap-4 lg:gap-6">
                        {/* Price */}
                        <div className="flex flex-col items-end lg:gap-1">
                            {/* Previous price */}
                            <div className="relative text-mg lg:text-lg text-gray-600">
                                {promotions[index].noPromotionPrice && <div>${numToPriceStr(promotions[index].noPromotionPrice)}</div>}
                                <div className="absolute h-[2px] w-full left-0 top-1/2 bg-gray-600/70"></div>
                            </div>
                            {/* Current price */}
                            <div className="text-lg lg:text-xl text-maingold-original font-semibold">
                                ${numToPriceStr(promotions[index].price)}
                            </div>
                        </div>
                        {/* Button */}
                        <Link
                            href={`/catalogo/${promotions[index].slug}`}
                            className="
                                px-4 lg:px-4 py-2
                                flex items-center gap-2
                                bg-blue-700 pressable btn-hover
                                text-sm lg:text-md text-white-1 rounded-full"
                        >
                            <span>Ver</span>
                            <CustomIcon
                                iconId="arrowR"
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
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
