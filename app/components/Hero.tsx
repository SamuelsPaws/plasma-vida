import PromotionsCarousel from "@/components/PromotionsCarousel"
import { motion } from "motion/react"
import Link from "next/link"
import { Product } from "@/lib/models/product"
import Image from "next/image"
import CustomIcon from "@/components/CustomIcon"

const Hero = ({ promotions }: { promotions: Product[] }) => {
    // lg:h-[620px] p-8 lg:p-10 relative
    // grid grid-cols-1 lg:grid-cols-2 gap-0
    // bg-[url('/assets/hero-img.webp')] bg-size-[120%] lg:bg-position-[0_-180px]
    // before:content-[''] before:absolute before:inset-0
    // before:bg-[linear-gradient(to_right,#fffe_40%,#0000)]

  return (
    <section className="
        lg:h-[620px] p-0 lg:p-10 relative
        flex flex-col lg:flex-row gap-0 lg:gap-0"
    >
        {/* Desktop bg */}
        <div className="absolute inset-0 hidden lg:block">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fffe_40%,#fff0)] z-10"></div>
            <Image
                src='/assets/hero-img.webp'
                fill
                sizes="100%"
                priority
                className="object-cover object-left z-0"
                alt="Imagen publicitaria de Plasma Vida Center"
            />
        </div>
        {/* Left div */}
        <div className="
            w-full lg:w-1/2
            px-10 py-10 lg:p-4 relative
            flex flex-col justify-center items-center gap-6"
        >
            {/* Mobile bg */}
            <div className="absolute inset-0 p-4 lg:hidden">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fffd_80%,#fff9)] z-10"></div>
                    <Image
                        src='/assets/hero-img.webp'
                        fill
                        sizes="100%"
                        priority
                        className="object-cover z-0"
                        alt="Imagen publicitaria de Plasma Vida Center"
                    />

                </div>
            </div>
            <h1 className="
                text-sky-700 text-center font-bold z-20
                text-3xl leading-12
                xl:text-5xl xl:leading-16
                opacity-0 animate-fade-in-up-0"
            >
                Mejora tu salud con sueroterapia, terapia de plasma rico en plaquetas y más.
            </h1>
            <p className="
                w-[80%] z-20
                text-sm lg:text-lg text-gray-600 text-center
                opacity-0 animate-fade-in-up-300"
            >
                Echa un vistazo a nuestras terapias avanzadas de bienestar con sueros intravenosos y plasma rico en plaquetas (PRP) en Quito, Ecuador. Explora nuestros servicios de enfermería a domicilio con atención profesional, segura y personalizada.
            </p>
            <Link
                href='/catalogo'
                className="
                    px-6 lg:px-8 py-4 z-20
                    bg-teal-500 rounded-full
                    text-white-1 text-md md:text-lg xl:text-xl
                    opacity-0 animate-fade-in-600
                    md:hover:scale-105 duration-300"
            >
                <span>Mira nuestro catálogo</span>
                <CustomIcon
                    iconId="arrowR"
                    className="ml-2"
                />
            </Link>
        </div>
        {/* Right div */}
        <div className="
            w-full lg:w-1/2
            px-6 py-6 relative z-20
            bg-gray-200 lg:bg-transparent
            flex flex-col justify-center items-center gap-8 lg:gap-8"
        >
            <h2 className="text-xl lg:text-3xl font-bold text-gray-700">
                Aprovecha nuestras promociones
            </h2>
            <PromotionsCarousel
                promotions={promotions}
                className="
                    w-full h-[340px]
                    lg:w-[480px] lg:h-[380px]
                    relative"
            />
        </div>
    </section>
  )
}

export default Hero