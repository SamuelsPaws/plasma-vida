import numToPriceStr from "@/app/utils/numToPriceStr";
import { getCatalogItems } from "@/lib/contentful-queries";
import Link from "next/link";

export default async function SimilarContainer({ productSlug }: { productSlug: string }) {
    const items = await getCatalogItems();
    const similarItems = items.filter(item => item.slug !== productSlug);

    return (
        <div className="
            w-full
            flex flex-col gap-4"
        >
            {similarItems.map((item, index) =>
                <Link
                    key={index}
                    href={`/catalogo/${item.slug}`}
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
                        <p className="mb-2 text-md text-gray-700 font-semibold">{item.title}</p>
                        <div className="text-md text-maingold-original font-semibold">${numToPriceStr(item.price)}</div>
                    </div>
                    {/* Image */}
                    <div className="
                        h-20 lg:h-24 aspect-square
                        rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item.imageUrls[0]}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                </Link>
            )}
        </div>
    )
}