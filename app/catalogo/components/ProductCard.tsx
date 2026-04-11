import Link from "next/link";
import numToPriceStr from "../../utils/numToPriceStr";
import clsx from "clsx";
import getSalePercent from "@/app/utils/getSalePercent";
import Image from "next/image";

interface ProductCardProps {
    imgUrl: string;
    title: string;
    descriptionList: string[];
    price: number;
    noPromotionPrice: number | undefined;
    slug: string;
}

const ProductCard = ({ imgUrl, title, descriptionList, price, noPromotionPrice, slug }: ProductCardProps) => {
    const isOnSale = noPromotionPrice && noPromotionPrice > price;

  return (
    <div className="
        w-full h-[420px] lg:h-[540px] place-self-center
        p-4 lg:p-6
        flex flex-col gap-2 lg:gap-6
        bg-white-1 rounded-2xl shadow-sm"
    >
        {/* Div with image */}
        <div className="
            w-full h-[50%] lg:h-[55%] relative
            rounded-2xl overflow-hidden"
        >
            <Image
                src={imgUrl}
                fill
                sizes="100%"
                className="object-cover drag-none"
                alt={title}
            />
        </div>
        {/* Div with title, desc, price and button */}
        <div className="
            flex-1
            flex flex-col justify-between"
        >
            {/* Div with title and benefits */}
            <div className="w-full">
                <p className="lg:mb-2 text-lg lg:text-xl font-bold">{title}</p>
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
                        bg-blue-700 lg:hover:bg-blue-800 duration-200
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
    </div>
  )
}

export default ProductCard