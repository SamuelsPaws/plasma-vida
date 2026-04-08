import BannerPages from "@/components/BannerPages";
import ServiceCategoryCard from "./components/ServiceCategoryCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Enfermería a Domicilio en Quito | Cuidado Profesional",
  description:
    "Servicios de enfermería a domicilio en Quito para adultos mayores, personas con discapacidad y pacientes en recuperación. Atención profesional, personalizada y humana en la comodidad de tu hogar.",
  keywords: [
    "enfermería a domicilio Quito",
    "cuidado adulto mayor Quito",
    "enfermera a domicilio Ecuador",
    "cuidado de pacientes en casa",
    "atención posthospitalaria Quito",
    "cuidado de personas con discapacidad"
  ],
  openGraph: {
    title: "Enfermería a Domicilio en Quito | Cuidado Profesional y Humano",
    description:
      "Atención de enfermería en casa para adultos mayores y pacientes en recuperación en Quito.",
    url: "https://plasma-vida.vercel.app/servicios-de-enfermeria",
    siteName: "Plasma Vida Center",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: 'https://plasma-vida.vercel.app/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: "Servicios de enfermería a domicilio en Quito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enfermería a Domicilio en Quito",
    description:
      "Cuidado profesional en casa para adultos mayores y pacientes en recuperación.",
    images: ['https://plasma-vida.vercel.app/opengraph-image.jpg'],
  },
  alternates: {
    canonical: "https://plasma-vida.vercel.app/servicios-de-enfermeria",
  },
  metadataBase: new URL("https://plasma-vida.vercel.app"),
};

export default async function Services() {
    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        <BannerPages
            title="Servicios de Enfermería"
        />
        <section className="
            min-h-[300px] px-6 lg:px-12 py-12 lg:py-16 relative
            bg-white-1"
        >
            <h3 className="
                mb-12 lg:mb-16
                text-3xl lg:text-5xl text-center font-bold"
            >
                Te ofrecemos servicios a domicilio en Quito
            </h3>
            <ServiceCategoryCard
                title="Cuidado al adulto mayor"
                descriptionParagraphs={[
                    'Brindamos servicios profesionales de enfermería a domicilio para adultos mayores en Quito. Nos trasladamos hasta tu hogar o el lugar que prefieras, ofreciendo atención personalizada que garantiza comodidad, dignidad y bienestar en todo momento.',
                    'Nuestro compromiso es cuidar de tus seres queridos con calidez y responsabilidad, para que tú tengas la tranquilidad de que están en las mejores manos.'
                ]}
                href="/servicios-de-enfermeria/adulto-mayor"
                linkText="Ver más"
                imageUrl="/assets/elderly.svg"
            />
            <div className="h-12 lg:h-24"></div>
            <ServiceCategoryCard
                title="Cuidado a personas con discapacidad"
                descriptionParagraphs={[
                    'Brindamos atención profesional y personalizada a domicilio para personas con discapacidad en Quito. Nos adaptamos a las necesidades de cada persona, ofreciendo acompañamiento, asistencia diaria y cuidado especializado.',
                    'Nuestro compromiso es promover la autonomía, el bienestar y la calidad de vida, con un trato humano, respetuoso y cercano, para que tú y tus seres queridos tengan total tranquilidad.'
                ]}
                href="/servicios-de-enfermeria/cuidado-discapacidad"
                linkText="Ver más"
                imageUrl="/assets/disability.svg"
            />
            <div className="h-12 lg:h-24"></div>
            <ServiceCategoryCard
                title="Cuidado prehospitalario"
                descriptionParagraphs={[
                    'Ofrecemos atención prehospitalaria oportuna y profesional en Quito, brindando asistencia inmediata antes del traslado a un centro de salud.',
                    'Nuestro equipo está capacitado para actuar con rapidez y precisión, estabilizando al paciente y asegurando su bienestar en momentos críticos, con un enfoque humano que brinda tranquilidad al paciente y sus familiares.',
                ]}
                href="/servicios-de-enfermeria/cuidado-prehospitalario"
                linkText="Ver más"
                imageUrl="/assets/prehospital.svg"
            />
            <div className="h-12 lg:h-24"></div>
            <ServiceCategoryCard
                title="Cuidado posthospitalario"
                descriptionParagraphs={[
                    'Ofrecemos cuidados posthospitalarios a domicilio en Quito, acompañando a cada paciente en su proceso de recuperación tras el alta médica.',
                    'Brindamos atención personalizada para asegurar una transición segura, cómoda y supervisada, reduciendo riesgos y favoreciendo una recuperación adecuada en casa.'
                ]}
                href="/servicios-de-enfermeria/cuidado-posthospitalario"
                linkText="Ver más"
                imageUrl="/assets/posthospital.svg"
            />
        </section>
        <section className="h-mob-footer-height lg:h-footer-height bg-white-1"></section>
    </main>
    )
}