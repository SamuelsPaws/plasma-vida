import { getCatalogItems } from "@/lib/contentful-queries";
import CatalogItemCard from "./components/CatalogItemCard";

export default async function Home() {
  const catalogItems = await getCatalogItems();

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Banner */}
      <section className="
        lg:min-h-[340px] p-16 relative
        flex items-end
        bg-[url('/assets/hero-img.webp')] bg-cover
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0007_60%,#fff1)]"
      >
        <h1 className="relative text-7xl text-white-1 font-bold">
          Hola soy Salome Naranjo
        </h1>
      </section>
      <section className="
        lg:min-h-[640px] w-full p-12
        flex gap-8
        bg-[#ececec]"
      >
        {/* Left div with items */}
        <div className="
          w-[75%] pr-4
          grid grid-cols-3 gap-8"
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
        <div className="flex-1 px-6 py-3 relative bg-white-1 rounded-2xl">
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
