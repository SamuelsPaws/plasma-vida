"use client";

import Link from "next/link";
import numToPriceStr from "../../utils/numToPriceStr";
import clsx from "clsx";
import getSalePercent from "@/app/utils/getSalePercent";
import Image from "next/image";
import { motion } from "motion/react";
import ProductSvg from "@/components/ProductSvg";

interface ProductCardProps {
    title: string;
    descriptionList: string[];
    price: number;
    noPromotionPrice: number | undefined;
    slug: string;
}

const ProductCard = ({ title, descriptionList, price, noPromotionPrice, slug }: ProductCardProps) => {
    const isOnSale = noPromotionPrice && noPromotionPrice > price;

    const splitTitle = title.split(' ')

    return (
    <motion.article
        layout
        initial={{ opacity: 0, transform: 'translateY(12px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
        className="
            interactive-card group
            w-full
            md:w-1/3 md:min-w-90
            p-4 md:p-4
            flex flex-col gap-2 lg:gap-6
            bg-white-1 rounded-2xl"
    >
        {/* Div with image */}
        <div className="
            w-full aspect-square relative
            rounded-2xl overflow-hidden"
        >
            <ProductSvg
                productCategory={splitTitle[0]}
                productName={[splitTitle.slice(1).join(' ')]}
                className="w-full h-full"
            />
        </div>
        {/* Div with title, desc, price and button */}
        <div className="flex-1 flex flex-col gap-8 justify-between">
            {/* Div with title and benefits */}
            <div className="w-full">
                <h3 className="lg:mb-2 text-lg lg:text-xl font-bold">
                    {title}
                </h3>
                {descriptionList.slice(0, 3).map((el, index) => (
                    <p
                        key={index}
                        className="mt-1 text-xs lg:text-[0.85rem] text-gray-600"
                    ><i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}</p>
                ))}
            </div>
            {/* Div with button and price */}
            <div className="flex justify-between items-end">
                <Link
                    href={`/catalogo/${slug}`}
                    className="
                        px-4 py-2
                        bg-mainblue-original lg:hover:bg-mainblue-dark-1 pressable
                        text-white-1 text-sm lg:text-md rounded-full"
                >
                    Ver producto
                </Link>
                <div className="flex flex-col items-end gap-0">
                    {/* Previous price if it's on sale */}
                    {isOnSale &&
                        <div className="
                            text-md lg:text-lg text-gray-500 relative
                            after:content-[''] after:absolute after:top-1/2 after:left-0
                            after:w-full after:h-[2px] after:bg-gray-500/70"
                        >
                            ${numToPriceStr(noPromotionPrice)}
                        </div>
                    }
                    {/* Div with tag (if on sale) and curr price */}
                    <div className="flex gap-3">
                        {/* Sale % tag */}
                        {isOnSale &&
                            <div className="
                                px-2 py-0 bg-red-600
                                text-md lg:text-lg text-white-1 rounded-none"
                            >
                                -{getSalePercent(noPromotionPrice, price)}%
                            </div>
                        }
                        {/* Current price */}
                        <div
                            className={clsx(
                                "text-md lg:text-lg font-bold",
                                noPromotionPrice ? 'text-maingold-original' : 'text-maingold-original'
                            )}
                        >
                            ${numToPriceStr(price)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.article>
  )
}

export default ProductCard
