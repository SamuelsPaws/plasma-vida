import numToPriceStr from "@/app/utils/numToPriceStr";
import { getCustomHomeoSerums, getCustomVitaSerums } from "@/lib/contentful-queries";
import Link from "next/link";

const queries = {
    homeopaticos: getCustomHomeoSerums,
    vitaminicos: getCustomVitaSerums,
} as const;

type ProductType = keyof typeof queries;

interface SimilarContainerProps {
    productSlug: string;
    productType: ProductType;
}

export default async function SimilarContainer({ productSlug, productType }: SimilarContainerProps) {
    const fn = queries[productType];

    if (!fn) {
        return <div></div>
    }

    const items = await fn();
    const similarItems = items.filter(item => item.slug !== productSlug).slice(0, 4);

    return (
        <div className="
            w-full flex-1
            flex flex-col gap-4 lg:gap-4"
        >
            {similarItems.map((item, index) =>
                <Link
                    key={index}
                    href={`/sueros-personalizados/${productType}/${item.slug}`}
                    className="
                        w-full px-3 lg:px-4 py-2 lg:py-3
                        flex gap-4
                        bg-white-1 lg:hover:bg-gray-100 cursor-pointer duration-200
                        border border-gray-300 shadow-sm lg:hover:shadow-md rounded-2xl"
                >
                    {/* Div with left part */}
                    <div className="
                        flex-1
                        flex flex-col justify-between"
                    >
                        <p className="mb-2 text-md text-gray-700 font-semibold">{item.name}</p>
                        <div className="text-md text-maingold-original font-semibold">${numToPriceStr(item.price)}</div>
                    </div>
                    {/* Image */}
                    {/* <div className="
                        h-20 lg:h-24 aspect-square
                        rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item.imageUrls[0]}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div> */}
                </Link>
            )}
        </div>
    )
}