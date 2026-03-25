import { getPromotions } from "@/lib/contentful-queries";
import Hero from "./components/Hero";
import Link from "next/link";
import HomeCategoryCard from "./components/HomeCategoryCard";
import HeroMob from "./components/HeroMob";
import PromotionsCarrousel from "@/components/PromotionsCarrousel";

export default async function Home() {
  const promotions = await getPromotions();

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
        <h3 className="mb-12 lg:mb-16 text-3xl lg:text-5xl text-center font-bold">En Plasma Vida Center encontrarás:</h3>
        {/* Service types (suero, plasma, enfermería) */}
        <HomeCategoryCard
          title="Sueroterapia"
          descriptionParagraphs={[
            'Nuestros sueros son una forma rápida y efectiva de revitalizar tu cuerpo a través de vitaminas, minerales y nutrientes esenciales. De esta forma potenciamos tu energía, fortalecemos tus defensas y mejoramos tu bienestar general.',
            'Dale a tu cuerpo el impulso que merece y siéntete mejor, más fuerte y equilibrado desde la primera sesión.',
          ]}
          href="/catalogo?category=suero"
          linkText="Mira nuestro catálogo de sueros"
          imageUrl="/assets/hero-img.webp"
        />
        <div className="h-16"></div>
        <HomeCategoryCard
          title="Plasma Rico en Plaquetas (PRP)"
          descriptionParagraphs={[
            'Nuestros sueros son una forma rápida y efectiva de revitalizar tu cuerpo a través de vitaminas, minerales y nutrientes esenciales. De esta forma potenciamos tu energía, fortalecemos tus defensas y mejoramos tu bienestar general.',
            'Dale a tu cuerpo el impulso que merece y siéntete mejor, más fuerte y equilibrado desde la primera sesión.',
          ]}
          href="/catalogo?category=plasma#productos"
          linkText="Mira nuestro catálogo de plasma"
          imageUrl="/assets/hero-img.webp"
        />
        <div className="h-16"></div>
        <HomeCategoryCard
          title="Servicios de Enfermería"
          descriptionParagraphs={[
            'Nuestros sueros son una forma rápida y efectiva de revitalizar tu cuerpo a través de vitaminas, minerales y nutrientes esenciales. De esta forma potenciamos tu energía, fortalecemos tus defensas y mejoramos tu bienestar general.',
            'Dale a tu cuerpo el impulso que merece y siéntete mejor, más fuerte y equilibrado desde la primera sesión.',
          ]}
          href="/catalogo"
          linkText="Mira nuestros servicios de enfermería"
          imageUrl="/assets/hero-img.webp"
        />
      </section>
    </main>
  );
}