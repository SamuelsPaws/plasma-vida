import Banner from "@/components/Banner";
import { getProducts } from "@/lib/contentful-queries";
import CustomSerumContainer from "./components/CustomSerumContainer";
import CatalogContainer from "./components/CatalogContainer";
import PromotionsCarousel from "@/components/promotions-carousel/PromotionsCarousel";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { organization } from "@/data/organization";
import CtaAndWrapper from "@/components/CtaAndWrapper";

export const metadata: Metadata = {
    title: `Catálogo de Sueros IV y Terapias PRP | ${organization.name}`,
    description:
        `Explora el catálogo de ${organization.name} con sueros intravenosos personalizados y terapias de plasma rico en plaquetas (PRP). Encuentra soluciones avanzadas para optimizar tu bienestar, recuperación y rendimiento.`,
    keywords: [
        "catálogo sueros intravenosos",
        "plasma rico en plaquetas PRP",
        "sueros vitamínicos Ecuador",
        "sueros vitamínicos Quito",
        "sueroterapia Ecuador",
        "sueroterapia Quito",
        "bienestar y recuperación avanzada",
        `${organization.name} catálogo`
    ],
    openGraph: {
        title: `Catálogo de Sueros IV y Terapias PRP | ${organization.name}`,
        description: "Sueros IV personalizados y PRP diseñados para mejorar tu bienestar, energía y recuperación.",
        url: organization.urlFor("/catalogo"),
        siteName: organization.name,
        locale: "es_EC",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Catálogo de Sueros IV y Terapias PRP | ${organization.name}`,
        description:
            "Explora sueros IV personalizados y PRP enfocados en rendimiento, recuperación y bienestar.",
        images: [organization.openGraphImageUrl],
    },
    alternates: {
        canonical: organization.urlFor("/catalogo"),
    },

    metadataBase: new URL(organization.url),
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Catalog({ searchParams }: { searchParams: SearchParams }) {
    const products = await getProducts();
    const promotions = products.filter(el => el.noPromotionPrice)
    const customHomeoSerums = products.filter(el => el.category === 'sueroHomeo');
    const customVitaSerums = products.filter(el => el.category === 'sueroVita');
    const params = await searchParams;

    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        {/* Banner */}
        <Banner
            title="Sueros y Plasma Rico en Plaquetas en Quito"
            subheadline={null}
            promotions={promotions}
            bgSrc="/assets/catalog-banner.jpg"
        />
        {/* Mobile carrousel section */}
        <section className="md:hidden px-8 py-16 bg-[#d5d5d5]">
            <PromotionsCarousel
                promotions={promotions}
                className="h-full w-full mx-auto py-0 relative"
            />
        </section>
        {/* Custom serum */}
        {/* <section className="
            min-h-[300px] px-6 lg:px-12 py-12 lg:py-16 relative
            bg-[#ececec]"
        >
            <h2 className="
                mb-12 lg:mb-16
                text-3xl lg:text-4xl text-center font-bold"
            >
                Obtén tu suero personalizado
            </h2>
            <CustomSerumContainer customHomeoSerums={customHomeoSerums} customVitaSerums={customVitaSerums} />
        </section> */}
        {/* Catalog */}
        <section className="
            lg:min-h-[400px] px-6 lg:px-12 py-12 lg:py-16 relative
            bg-[#ececec]"
        >
            {/* Navigation target */}
            <div id="productos" className="absolute left-0 -top-header-height"></div>
            <Reveal>
                <h2 className="mb-12 lg:mb-16 text-3xl lg:text-5xl text-center lg:text-left font-semibold">
                    Todos los Productos
                </h2>
            </Reveal>
            <CatalogContainer
                items={products.filter(el => el.category !== 'sueroHomeo' && el.category !== 'sueroVita')}
                categoryParam={params.category}
            />
        </section>
        <CtaAndWrapper />
    </main>
    )
}
