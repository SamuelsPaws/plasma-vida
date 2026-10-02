import type { Metadata } from "next";
import { organization } from "@/data/organization";
import CtaAndWrapper from "@/components/CtaAndWrapper";
import HeroMain from "@/components/HeroMain";
import SectionSt from "@/components/SectionSt";
import CenteredP from "@/components/reusable-ui/CenteredP";
import ServiceOverviewCard from "./components/ServiceOverviewCard";

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
		url: organization.urlFor("/servicios-de-enfermeria"),
		siteName: organization.name,
		locale: "es_EC",
		type: "website",
		images: [
			{
				url: organization.openGraphImageUrl,
				width: 1200,
				height: 630,
				alt: "Servicios de enfermería a domicilio en Quito",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Enfermería a Domicilio en Quito",
		description: "Cuidado profesional en casa para adultos mayores y pacientes en recuperación.",
		images: [organization.openGraphImageUrl],
	},
	alternates: {
		canonical: organization.urlFor("/servicios-de-enfermeria"),
	},
	metadataBase: new URL(organization.url),
};

const nursingServiceOverviewItems = [
    {
        title: "Cuidado al adulto mayor",
        description: "Atención de enfermería a domicilio para adultos mayores, con acompañamiento cercano, respetuoso y adaptado a sus necesidades.",
        href: "/servicios-de-enfermeria/adulto-mayor",
        imageSrc: "/assets/elderly.svg",
        imageAlt: "Ilustración de cuidado para adultos mayores",
    },
    {
        title: "Cuidado a personas con discapacidad",
        description: "Atención personalizada para personas con discapacidad, orientada al acompañamiento, la asistencia diaria y el bienestar.",
        href: "/servicios-de-enfermeria/cuidado-discapacidad",
        imageSrc: "/assets/disability.svg",
        imageAlt: "Ilustración de atención para personas con discapacidad",
    },
    {
        title: "Cuidado prehospitalario",
        description: "Atención profesional antes del traslado a un centro de salud, según las necesidades del paciente y el tipo de asistencia requerida.",
        href: "/servicios-de-enfermeria/cuidado-prehospitalario",
        imageSrc: "/assets/prehospital.svg",
        imageAlt: "Ilustración de atención prehospitalaria",
    },
    {
        title: "Cuidado posthospitalario",
        description: "Acompañamiento y cuidados de enfermería en casa después del alta médica, para apoyar una recuperación supervisada y cómoda.",
        href: "/servicios-de-enfermeria/cuidado-posthospitalario",
        imageSrc: "/assets/posthospital.svg",
        imageAlt: "Ilustración de cuidado posthospitalario",
    },
] as const;

export default async function Services() {
    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        <HeroMain
            eyebrow="SERVICIOS DE ENFERMERÍA"
            title="Enfermeras a domicilio en Quito"
            description="Recibe atención profesional y personalizada en la comodidad de tu hogar. Brindamos servicios de enfermería a domicilio para adultos mayores, personas con discapacidad y pacientes que necesitan cuidados antes o después de una hospitalización."
            primaryAction={{
                href: organization.whatsappUrlFor("¡Hola! Me interesa solicitar atención de enfermería a domicilio."),
                label: "Solicitar atención",
                external: true,
            }}
            secondaryAction={{
                href: "#servicios",
                label: "Conocer nuestros servicios",
                type: "secondary",
            }}
            imageSrc="/assets/nursing-banner.jpg"
            imageAlt="Enfermera atendiendo a una adulta mayor en su hogar"
            imagePosition="left"
        />
        <SectionSt
            id="servicios"
            eyebrow="SERVICIOS DE ENFERMERÍA A DOMICILIO"
            title="Encuentra el cuidado que necesitas"
            bgColor="bg-white-2"
        >
            <CenteredP
                text="Conoce nuestros servicios de enfermería a domicilio en Quito y encuentra la opción que mejor se adapta a las necesidades de cada paciente."
            />
            <div
                className="
                    mx-auto
                    max-w-7xl
                    grid grid-cols-1 gap-8 md:grid-cols-2"
            >
                {nursingServiceOverviewItems.map((item) => (
                    <ServiceOverviewCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        href={item.href}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                    />
                ))}
            </div>
        </SectionSt>
        <CtaAndWrapper />
    </main>
    )
}
