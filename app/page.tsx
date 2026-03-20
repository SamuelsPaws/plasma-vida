import { getCatalogItems, getCustomHomeoSerums, getCustomVitaSerums, getPromotions } from "@/lib/contentful-queries";
import CatalogItemCard from "./components/CatalogItemCard";
import Banner from "./components/Banner";
import CustomSerumContainer from "./components/homepage-specific/CustomSerumContainer";
import BannerPromotions from "./components/homepage-specific/BannerPromotions";

export default async function Home() {
  const catalogItems = await getCatalogItems();
  const customHomeoSerums = await getCustomHomeoSerums();
  const customVitaSerums = await getCustomVitaSerums();
  const promotions = await getPromotions();

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Banner */}
      <Banner promotions={promotions} />
      {/* Mobile carrousel section */}
      <section className="lg:hidden h-[400px] px-6 py-12 bg-[#ececec]">
        <BannerPromotions
            promotions={promotions}
            className="h-full w-full mx-auto py-0 relative"
        />
      </section>
      {/* Custom serum */}
      <section className="
        min-h-[300px] px-6 lg:px-12 py-12 lg:py-16 relative
        bg-[#ececec]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-black/20"></div>
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-black/20"></div>
        <h3 className="
          mb-12 lg:mb-16
          text-3xl lg:text-5xl text-center lg:text-left font-semibold"
        >Nuestro Catálogo</h3>
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left div with items */}
          <div className="
            w-full lg:w-[75%] lg:min-w-[1000px] lg:pr-4
            flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-8"
          >
            <div className="w-full lg:hidden">Filtros</div>
            {catalogItems.map((item, index) =>
              <CatalogItemCard
                key={index}
                title={item.title}
                descriptionList={item.descriptionList}
                price={item.price}
                imgUrl={item.imageUrls[0]}
              />
            )}
          </div>
          {/* Right div with table */}
          <div className="
            flex-1 lg:min-w-[260px] px-6 py-3 relative
            hidden lg:block
            bg-white-1 rounded-2xl"
          >
            <div className="w-full py-3 sticky top-mob-header-height lg:top-header-height">
              <p className="mb-2 font-bold text-xl">Categorías</p>
              <p className="text-md text-gray-600">Suero homeopático</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
