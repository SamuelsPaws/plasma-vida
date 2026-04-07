'use client'
import numToPriceStr from "@/app/utils/numToPriceStr";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import PromotionsDot from "./PromotionsDot";
import { Product } from "@/lib/models/product";
import Link from "next/link";
import getSalePercent from "@/app/utils/getSalePercent";

type Interval = ReturnType<typeof setInterval>;

interface PromotionsCarrouselProps {
    promotions: Product[];
    className: string;
}

const PromotionsCarrousel = ({ promotions, className }: PromotionsCarrouselProps) => {
    const [index, setIndex] = useState<number>(0);
    const intervalRef = useRef<Interval | null>(null);

    const startInterval = () => {
        clearInterval(intervalRef.current!);
        intervalRef.current =  setInterval(() => {
            setIndex((i) => (i + 1) % promotions.length);
        }, 4500);
    };

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current!);
    }, [promotions.length]);

    const handleDotClick = (i: number) => {
        setIndex(i);
        startInterval();
    }

  return (
    <div className={className}>
        <AnimatePresence mode="wait">
            {/* White part (card) */}
            <motion.div
                className="
                    w-full flex-1 relative
                    p-4 bg-white-1/80 backdrop-blur-md
                    flex flex-col justify-between
                    rounded-2xl shadow-none lg:shadow-md"
                key={index}
                initial={{ opacity: 0, x: 30, y: 2 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -30, y: 2 }}
                transition={{ duration: 0.5 }}
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
                <p className="mb-2 text-xl font-bold">{promotions[index].title}</p>
                {/* Div with image, price and button */}
                <div className="h-[200px] lg:h-[180px] flex">
                    {/* Image */}
                    <div className="w-[70%] h-full self-center rounded-2xl overflow-hidden">
                        <img
                            src={promotions[index].imageUrls[0]}
                            className="w-full h-full object-cover"
                            alt=""
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
                                bg-blue-700
                                text-sm lg:text-md text-white-1 rounded-full"
                        >
                            Ver<i className="fa fa-arrow-right scale-90 ml-2"></i>
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

export default PromotionsCarrousel