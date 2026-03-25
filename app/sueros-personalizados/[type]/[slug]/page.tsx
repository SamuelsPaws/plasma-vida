import numToPriceStr from "@/app/utils/numToPriceStr";
import { getCustomHomeoSerumFromSlug, getCustomVitaSerumFromSlug } from "@/lib/contentful-queries";
import { Suspense } from "react";
import SimilarContainer from "../../components/SimilarContainer";
import ItemBuy from "../../components/ItemBuy";
import { notFound } from "next/navigation";

const queries = {
    homeopaticos: getCustomHomeoSerumFromSlug,
    vitaminicos: getCustomVitaSerumFromSlug,
} as const;

type ProductType = keyof typeof queries;

type Props = {
    params: Promise<{
        type: ProductType;
        slug: string;
    }>
}

export default async function CustomSerumPage({ params }: Props) {
    const { slug, type } = await params;
    const fn = queries[type];

    if (!fn) {
        notFound();
    }
    const serum = await fn(slug);

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
                    <h1 className="
                        mb-4 lg:mb-8 text-2xl lg:text-5xl text-center lg:text-left font-bold"
                    >{serum.name}</h1>
                    {/* Price */}
                    <p className="
                        mb-4 lg:mb-8
                        text-xl lg:text-2xl text-maingold-original font-bold"
                    >${numToPriceStr(serum.price)}</p>
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
                                src='/assets/hero-img.webp'
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        {/* Right div */}
                        <div className="pb-32 lg:pb-0 lg:flex-1">
                            {/* Long description */}
                            <p className="text-md text-gray-600">{serum.description}</p>
                            {/* Benefits */}
                            <h2 className="
                                py-2 lg:py-4
                                text-xl lg:text-2xl text-sky-700 font-semibold"
                            >Beneficios:</h2>
                            {serum.benefitsList.map((el, index) => (
                                <p
                                    key={index}
                                    className="mb-1 text-md lg:text-md text-gray-600"
                                ><i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}</p>
                            ))}
                        </div>
                        <ItemBuy item={serum} />
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
                        <SimilarContainer productSlug={slug} productType={type} />
                    </Suspense>
                </div>
            </section>
        </main>
    )
}