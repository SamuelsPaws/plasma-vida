import { getCatalogItems } from "@/lib/contentful-queries";
import CatalogItemCard from "./components/CatalogItemCard";
import { motion } from "motion/react";
import Banner from "./components/Banner";

export default async function Home() {
  const catalogItems = await getCatalogItems();

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Banner */}
      <Banner />
      <section className="min-h-[300px] p-16 bg-[#ececec]">
        <h2 className="mb-16 text-5xl text-center font-bold">Obtén tu suero personalizado</h2>
        <div className="w-[500px] p-8 mx-auto bg-white-1 rounded-2xl">
          <p className="font-semibold text-center text-xl text-gray-700">Escoge las opciones que se adaptan a tus necesidades</p>
          <p>Quiero un suero:</p>
          <div className="w-full h-16 flex">
            <div className="flex-1 blue-border">Homeopático</div>
            <div className="flex-1 blue-border">Vitamínico</div>
          </div>
        </div>
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
              description={item.description}
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
            <p className="text-md text-gray-600">Articulaciones (8)</p>
            <p className="text-md text-gray-600">Cabeza (3)</p>
            <p className="text-md text-gray-600">Pies (6)</p>
            <p className="text-md text-gray-600">Manos (18)</p>
            <p className="text-md text-gray-600">Articulaciones (8)</p>
            <p className="text-md text-gray-600">Cabeza (3)</p>
            <p className="text-md text-gray-600">Pies (6)</p>
            <p className="text-md text-gray-600">Manos (18)</p>
            <p className="text-md text-gray-600">Articulaciones (8)</p>
            <p className="text-md text-gray-600">Cabeza (3)</p>
            <p className="text-md text-gray-600">Pies (6)</p>
            <p className="text-md text-gray-600">Manos (18)</p>
            <p className="text-md text-gray-600">Articulaciones (8)</p>
            <p className="text-md text-gray-600">Cabeza (3)</p>
            <p className="text-md text-gray-600">Pies (6)</p>
            <p className="text-md text-gray-600">Manos (18)</p>
          </div>
        </div>
      </section>
    </main>
  );
}
