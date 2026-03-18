import { getCatalogItems } from "@/lib/contentful-queries";
import CatalogItemCard from "./components/CatalogItemCard";

export default async function Home() {
  const catalogItems = await getCatalogItems();

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Banner */}
      <section className="
        h-[200px] lg:h-[340px] p-8 lg:p-16 relative
        flex items-end
        bg-[url('/assets/hero-img.webp')] bg-cover
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0007_60%,#fff1)]"
      >
        <h1 className="
          relative
          text-3xl lg:text-7xl text-white-1 font-bold"
        >
          Hola soy Salome Naranjo
        </h1>
      </section>
      <section className="
        lg:min-h-[400px] p-8 lg:p-12
        flex flex-col lg:flex-row gap-8
        bg-[#ececec]"
      >
        {/* Left div with items */}
        <div className="
          w-full lg:w-[75%] lg:min-w-[1000px] lg:pr-4
          flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-8"
        >
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
