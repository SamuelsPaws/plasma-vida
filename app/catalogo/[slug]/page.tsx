import numToPriceStr from "@/app/utils/numToPriceStr";
import { getCatalogItemBySlug } from "@/lib/contentful-queries";
import ItemBuy from "../components/ItemBuy";
import { Suspense } from "react";
import SimilarContainer from "../components/SimilarContainer";
import getSalePercent from "@/app/utils/getSalePercent";

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function CatalogItemPage({ params }: Props) {
    const { slug } = await params;
    const catalogItem = await getCatalogItemBySlug(slug);

    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        <section className="
            min-h-[400px] p-6 lg:p-16
            flex flex-col lg:flex-row gap-8
            bg-[#ececec]"
        >
            {/* White part with product */}
            <div className="
                w-full lg:w-[70%] p-4 lg:p-8
                bg-white-1 rounded-2xl"
            >
                {/* Title */}
                <div className="mb-4 lg:mb-8 flex gap-4 lg:gap-8">
                    <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold">
                        {catalogItem.title}
                    </h1>
                    {catalogItem.noPromotionPrice &&
                        <div className="
                            px-2 py-0
                            grid place-content-center
                            bg-red-600 text-white-1 text-lg lg:text-3xl"
                        >
                            -{getSalePercent(catalogItem.noPromotionPrice, catalogItem.price)}%
                        </div>
                    }
                </div>
                {/* Price */}
                <p className="
                    mb-4 lg:mb-8
                    flex gap-2 lg:gap-4
                    text-xl lg:text-2xl"
                >
                    <span className="text-maingold-original font-bold">${numToPriceStr(catalogItem.price)}</span>
                    {catalogItem.noPromotionPrice &&
                        <span className="text-gray-500 crossed-out">${numToPriceStr(catalogItem.noPromotionPrice)}</span>
                    }
                </p>
                {/* Div with image and info */}
                <div className="
                    w-full relative
                    flex flex-col lg:flex-row gap-4 lg:gap-8"
                >
                    {/* Image */}
                    <div className="
                        w-full lg:w-1/2 aspect-square
                        rounded-2xl overflow-hidden"
                    >
                        <img
                            src={catalogItem.imageUrls[0]}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    {/* Right div */}
                    <div className="pb-32 lg:pb-0 lg:flex-1">
                        {/* Long description */}
                        <p className="text-md text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at, exercitationem ab magni non perspiciatis fugit harum commodi, fugiat molestias ducimus asperiores ex dolorum consequuntur quia! Nihil rem, consectetur, reprehenderit minima nesciunt voluptatum officia quo, cum quidem minus iste eos.</p>
                        {/* Benefits */}
                        <h2 className="
                            py-2 lg:py-4
                            text-xl lg:text-2xl text-sky-700 font-semibold"
                        >Beneficios:</h2>
                        {catalogItem.descriptionList.map((el, index) => (
                            <p
                                key={index}
                                className="mb-1 text-md lg:text-md text-gray-600"
                            ><i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}</p>
                        ))}
                    </div>
                    <ItemBuy item={catalogItem} />
                </div>
            </div>
            {/* Side bar */}
            <div className="
                lg:flex-1 p-4 lg:p-8 flex flex-col
                bg-white-1 rounded-2xl"
            >
                <h3 className="mb-4 text-lg lg:text-xl font-bold">Explora productos similares</h3>
                <Suspense fallback={
                    <div className="
                        w-full h-16
                        flex justify-center items-center gap-2
                        text-xl text-center text-gray-600"
                    >
                        Cargando
                        <i className="fa fa-clock-o"></i>
                    </div>
                }>
                    <SimilarContainer productSlug={slug} />
                </Suspense>
            </div>
        </section>
        <section className="h-mob-footer-height lg:h-footer-height bg-[#ececec]"></section>
    </main>
    )
}