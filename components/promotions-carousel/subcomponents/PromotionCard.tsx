import getSalePercent from "@/app/utils/getSalePercent";
import numToPriceStr from "@/app/utils/numToPriceStr";
import CustomIcon from "@/components/CustomIcon";
import { Product } from "@/lib/models/product"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import PromotionCtaBtn from "./PromotionCtaBtn";
import ProductSvg from "@/components/ProductSvg";

interface Props {
    product: Product;
    direction: -1 | 1;
}

const PromotionCard = ({ product, direction }: Props) => {
    const splitTitle = product.title.split(' ')

    return (
    <motion.div
        className="
            w-full relative
            p-4
            flex flex-col justify-between
            bg-white-1
            rounded-2xl"
        custom={direction}
        initial={{ opacity: 0, transform: `translateX(${direction * 18}px) scale(0.985)`, filter: 'blur(2px)' }}
        animate={{ opacity: 1, transform: 'translateX(0) scale(1)', filter: 'blur(0px)' }}
        exit={{ opacity: 0, transform: `translateX(${direction * -12}px) scale(0.99)`, filter: 'blur(2px)' }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
        {/* Promotion percent */}
        {product.noPromotionPrice &&
            <div className="
                absolute top-4 right-4
                px-2 py-1
                bg-red-700 text-white-1 text-md lg:text-lg"
            >
                -{getSalePercent(product.noPromotionPrice, product.price)}%
            </div>
        }
        <p className="
            w-fit mb-2 md:mb-4
            px-2 py-0
            bg-red-700 -rotate-2
            text-2xl text-white-1 font-bold rounded-sm"
        >
            ¡Promoción!
        </p>
        {/* Title */}
        <p className="
            mb-2 md:mb-4
            text-xl font-bold
            whitespace-nowrap overflow-hidden text-ellipsis"
        >
            {product.title}
        </p>
        {/* Div with image, price and button */}
        <div className="flex">
            {/* Image */}
            <div className="
                w-[70%] h-full relative
                rounded-2xl overflow-hidden"
            >
                <ProductSvg
                    productCategory={splitTitle[0]}
                    productName={[splitTitle.slice(1).join(' ')]}
                    className="w-full h-full"
                />
            </div>
            {/* Div with price and button */}
            <div className="
                flex-1
                flex flex-col justify-between items-end gap-4 lg:gap-6"
            >
                {/* Price */}
                <div className="flex flex-col items-end lg:gap-1">
                    {/* Previous price */}
                    {product.noPromotionPrice && (
                        <span className="
                            text-my-md text-gray-600
                            crossed-out"
                        >
                            ${numToPriceStr(product.noPromotionPrice)}
                        </span>
                    )}
                    {/* Current price */}
                    <div className="text-lg lg:text-xl text-br-gold-main font-semibold">
                        ${numToPriceStr(product.price)}
                    </div>
                </div>
                <PromotionCtaBtn slug={product.slug} />
            </div>
        </div>
    </motion.div>
    )
}

export default PromotionCard