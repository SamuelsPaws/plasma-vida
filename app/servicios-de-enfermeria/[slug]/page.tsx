import nursingSlugImageMapper from "@/app/utils/nursingSlugImageMapper";
import { getNursingServiceBySlug } from "@/lib/contentful-queries";
import ItemRequest from "../components/ItemRequest";
import { Suspense } from "react";
import SimilarContainer from "../components/SimilarContainer";

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function ServiceItemPage({ params }: Props) {
    const { slug } = await params;
    const serviceItem = await getNursingServiceBySlug(slug);

    const svgName = nursingSlugImageMapper(serviceItem.slug);
    const descriptionParagraphs = serviceItem.description.split('\n').filter(el => el.length);

    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        <section className="
            min-h-[400px] p-6 lg:p-16
            flex flex-col lg:flex-row gap-8
            bg-[#ececec]"
        >
            {/* White part with service */}
            <div className="
                w-full lg:w-[70%] p-4 lg:p-8
                bg-white-1 rounded-2xl"
            >
                {/* Title */}
                <h1 className="
                    mb-4 lg:mb-4 text-2xl lg:text-5xl text-center lg:text-left font-bold"
                >
                    {serviceItem.title}
                </h1>
                {/* Price disclaimer */}
                <p className="
                    mb-4 lg:mb-8
                    text-md lg:text-2xl text-maingold-dark-2 font-bold"
                >
                    Nuestros precios por servicios de enfermería varían según el caso. ¡Solicítanos y cuéntanos lo que necesitas!
                </p>
                {/* Div with image and info */}
                <div className="
                    w-full relative
                    flex flex-col lg:flex-row gap-4 lg:gap-8"
                >
                    {/* Image */}
                    <div className="
                        w-full lg:w-1/2 lg:aspect-square h-[400px] lg:h-auto
                        rounded-2xl overflow-hidden"
                    >
                        <img
                            src={`/assets/${svgName}.svg`}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>
                    {/* Right div */}
                    <div className="pb-32 lg:pb-0 lg:flex-1">
                        {/* Long description */}
                        {descriptionParagraphs.map((el, index) =>
                            <p key={index} className="mb-2 text-sm text-gray-600">{el}</p>
                        )}
                        {/* Benefits */}
                        <h2 className="
                            py-2 lg:py-2
                            text-lg lg:text-xl text-sky-700 font-semibold"
                        >Garantizamos:</h2>
                        {serviceItem.benefitsList.map((el, index) => (
                            <p
                                key={index}
                                className="mb-1 text-sm lg:text-md text-gray-600"
                            >
                                <i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}
                            </p>
                        ))}
                    </div>
                    <ItemRequest item={serviceItem} />
                </div>
            </div>
            <div className="
                lg:flex-1 p-4 lg:p-8 flex flex-col
                bg-white-1 rounded-2xl"
            >
                <h3 className="mb-4 text-lg lg:text-xl font-bold">Explora servicios similares</h3>
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
    </main>
    )
}