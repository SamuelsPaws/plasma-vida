import { getProducts } from "@/lib/contentful-queries";
import Hero from "./components/Hero";
import HomeCategoryCard from "./components/HomeCategoryCard";
import HeroMob from "./components/HeroMob";
import PromotionsCarrousel from "@/components/PromotionsCarrousel";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Inicio - Plasma Vida Center",
//   description:
//     "Plasma Vida Center ofrece terapias avanzadas de bienestar como sueros intravenosos, plasma rico en plaquetas (PRP) y servicios de enfermería a domicilio. Mejora tu salud con atención profesional, segura y personalizada.",
//   keywords: [
//     "sueros intravenosos Ecuador",
//     "plasma rico en plaquetas PRP",
//     "terapias de bienestar",
//     "enfermería a domicilio",
//     "cuidado de adultos mayores",
//     "salud y bienestar quito",
//     "salud y bienestar ecuador",
//     "salud y bienestar premium",
//     "Plasma Vida Center"
//   ],
//   applicationName: "Plasma Vida Center",
//   authors: [{ name: "Plasma Vida Center" }],
//   creator: "Plasma Vida Center",
//   publisher: "Plasma Vida Center",

//   openGraph: {
//     title: "Inicio - Plasma Vida Center",
//     description:
//       "Terapias avanzadas de bienestar: sueros IV, PRP y atención de enfermería a domicilio con enfoque profesional y personalizado.",
//     url: "https://plasma-vida.vercel.app/", // Canonical
//     siteName: "Plasma Vida Center",
//     locale: "es_EC",
//     type: "website",
//     images: [
//       {
//         url: "/opengraph-image.jpg",
//         width: 366,
//         height: 389,
//         alt: "Plasma Vida Center - Bienestar y salud avanzada",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Inicio - Plasma Vida Center",
//     description:
//       "Sueros IV, PRP y servicios de enfermería a domicilio con enfoque clínico y personalizado.",
//     images: ["/opengraph-image.jpg"],
//   },

//   alternates: {
//     canonical: "https://plasma-vida.vercel.app/",
//   },

//   metadataBase: new URL("https://plasma-vida.vercel.app/"),
// };

export default async function Home() {
  const products = await getProducts();
  const promotions = products.filter(el => el.noPromotionPrice);

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
      <Hero promotions={promotions} />
      <HeroMob />
      {/* Mobile carrousel section */}
      <section className="lg:hidden h-[400px] px-6 py-12 bg-[#e2e2e2]">
          <PromotionsCarrousel
              promotions={promotions}
              className="h-full w-full mx-auto py-0 relative"
          />
      </section>
      <section className="
        min-h-[300px] px-6 lg:px-12 py-12 lg:py-16 relative
        bg-white-1"
      >
        <h3 className="mb-12 lg:mb-24 text-3xl lg:text-5xl text-center font-bold">En Plasma Vida Center encontrarás:</h3>
        {/* Service types (suero, plasma, enfermería) */}
        <HomeCategoryCard
          title="Sueroterapia"
          descriptionParagraphs={[
            'Nuestros sueros son una forma rápida y efectiva de revitalizar tu cuerpo a través de vitaminas, minerales y nutrientes esenciales. De esta forma potenciamos tu energía, fortalecemos tus defensas y mejoramos tu bienestar general.',
            'Dale a tu cuerpo el impulso que merece y siéntete mejor, más fuerte y equilibrado desde la primera sesión.',
          ]}
          href="/catalogo"
          linkText="Mira nuestro catálogo"
          imageUrl="/assets/serum.png"
        />
        <div className="h-12 lg:h-24"></div>
        <HomeCategoryCard
          title="Plasma Rico en Plaquetas (PRP)"
          descriptionParagraphs={[
            'El Plasma Rico en Plaquetas (PRP) es un tratamiento regenerativo que utiliza los factores de crecimiento de tu propia sangre para estimular la reparación natural de los tejidos. Ayuda a mejorar la calidad de la piel, acelerar la recuperación y promover la regeneración celular.',
            'Impulsa la capacidad de sanar natural de tu cuerpo, ayúdale a rejuvenecer y fortalecerse desde adentro.',
          ]}
          href="/catalogo#productos"
          linkText="Mira nuestro catálogo"
          imageUrl="/assets/plasma.png"
        />
        <div className="h-12 lg:h-24"></div>
        <HomeCategoryCard
          title="Servicios de Enfermería"
          descriptionParagraphs={[
            'Nuestros servicios de enfermería están diseñados para brindar atención profesional y humana a quienes más lo necesitan, incluyendo cuidado de adultos mayores, personas con discapacidad y acompañamiento antes y después de procedimientos de hospital.',
            'Ofrecemos un apoyo cercano y confiable que garantiza bienestar, seguridad y tranquilidad tanto para el paciente como para su familia.',
          ]}
          href="/servicios-de-enfermeria"
          linkText="Mira nuestros servicios de enfermería"
          imageUrl="/assets/nurse.png"
        />
      </section>
      <section className="h-mob-footer-height lg:h-footer-height bg-white-1"></section>
    </main>
  );
}