import Banner from "@/components/Banner";
import { getCatalogItems, getCustomHomeoSerums, getCustomVitaSerums } from "@/lib/contentful-queries";
import CustomSerumContainer from "./components/CustomSerumContainer";
import CatalogContainer from "./components/CatalogContainer";
import PromotionsCarrousel from "@/components/PromotionsCarrousel";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Catalog({ searchParams }: { searchParams: SearchParams }) {
    const catalogItems = await getCatalogItems();
    const promotions = catalogItems.filter(el => el.noPromotionPrice)
    const customHomeoSerums = await getCustomHomeoSerums();
    const customVitaSerums = await getCustomVitaSerums();
    const params = await searchParams;

    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        {/* Banner */}
        <Banner
            title="Nuestro Catálogo"
            subheadline={null}
            promotions={promotions}
        />
        {/* Mobile carrousel section */}
        <section className="lg:hidden h-[400px] px-6 py-12 bg-[#d5d5d5]">
            <PromotionsCarrousel
                promotions={promotions}
                className="h-full w-full mx-auto py-0 relative"
            />
        </section>
        {/* Custom serum */}
        <section className="
            min-h-[300px] px-6 lg:px-12 py-12 lg:py-16 relative
            bg-[#ececec]"
        >
            <h2 className="
                mb-12 lg:mb-16
                text-3xl lg:text-5xl text-center font-bold"
            >Obtén tu suero personalizado</h2>
            <CustomSerumContainer customHomeoSerums={customHomeoSerums} customVitaSerums={customVitaSerums} />
        </section>
        {/* Catalog */}
        <section className="
            lg:min-h-[400px] px-6 lg:px-12 py-12 lg:py-16 relative
            bg-[#ececec]"
        >
            {/* Navigation target */}
            <div id="productos" className="absolute left-0 -top-header-height"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-black/20"></div>
            <h3 className="
                mb-12 lg:mb-16
                text-3xl lg:text-5xl text-center lg:text-left font-semibold"
            >Todos los Productos</h3>
            <CatalogContainer
                items={catalogItems}
                categoryParam={params.category}
            />
        </section>
    </main>
    )
}