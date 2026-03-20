'use client'
import numToPriceStr from "@/app/utils/numToPriceStr";
import { Promotion } from "@/lib/models/promotion";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react"

const BannerPromotions = ({ promotions }: { promotions: Promotion[] }) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % promotions.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [promotions.length]);

  return (
    <div className="
        h-full w-[60%] py-12 place-self-center relative"
    >
        <AnimatePresence mode="wait">
            <motion.div
                className="w-[80%] h-full mx-auto flex flex-col gap-2"
                key={index}
                initial={{ opacity: 0, x: 30, y: 2 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -30, y: 2 }}
                transition={{ duration: 0.5 }}
            >
                {/* White part (card) */}
                <div className="
                    w-full flex-1 relative
                    p-4 bg-white-1
                    flex flex-col
                    rounded-2xl shadow-md"
                >
                    <p className="
                        self-start px-2 py-0 mb-2
                        bg-red-700
                        text-2xl text-white-1 font-bold"
                    >¡Promoción!</p>
                    {/* Title */}
                    <p className="mb-2 text-xl font-bold">{promotions[index].title}</p>
                    {/* Div with image, price and button */}
                    <div className="flex-1 flex">
                        {/* Image */}
                        <div className="w-[70%] h-[160px] self-center rounded-2xl overflow-hidden">
                            <img
                                src={promotions[index].imageUrls[0]}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        {/* Div with price and button */}
                        <div className="flex-1 flex flex-col justify-between items-end">
                            {/* Price */}
                            <div className="flex flex-col items-end gap-1">
                                {/* Previous price */}
                                <div className="relative text-lg text-gray-400">
                                    <div>${numToPriceStr(promotions[index].prevPrice)}</div>
                                    <div className="absolute h-[2px] w-[90%] left-0 top-1/2 bg-gray-500/50"></div>
                                </div>
                                {/* Current price */}
                                <div className="text-xl text-maingold-original font-semibold">
                                    ${numToPriceStr(promotions[index].currPrice)}
                                </div>
                            </div>
                            {/* Button */}
                            <button className="
                                px-6 py-1
                                bg-blue-700
                                text-md text-white-1 rounded-full"
                            >
                                Ver
                            </button>
                        </div>
                    </div>
                </div>
                {/* Little dots */}
                <div className="h-4"></div>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default BannerPromotions