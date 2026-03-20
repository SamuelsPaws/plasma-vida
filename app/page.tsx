import { getCatalogItems, getCustomHomeoSerums, getCustomVitaSerums } from "@/lib/contentful-queries";
import CatalogItemCard from "./components/CatalogItemCard";
import Banner from "./components/Banner";
import CustomSerumContainer from "./components/homepage-specific/CustomSerumContainer";

export default async function Home() {
  const catalogItems = await getCatalogItems();
  const customHomeoSerums = await getCustomHomeoSerums();
  const customVitaSerums = await getCustomVitaSerums();

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Banner */}
      <Banner />
      <section className="min-h-[300px] p-16 bg-[#ececec]">
        <h2 className="mb-16 text-5xl text-center font-bold">Obtén tu suero personalizado</h2>
        <CustomSerumContainer customHomeoSerums={customHomeoSerums} customVitaSerums={customVitaSerums} />
      </section>
      <section className="
        lg:min-h-[400px] p-6 lg:p-12
        flex flex-col lg:flex-row gap-6 lg:gap-8
        bg-[#ececec]"
      >
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
      </section>
    </main>
  );
}
