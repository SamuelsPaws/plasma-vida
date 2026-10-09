import type { Metadata } from "next";
import { organization } from "@/data/organization";
import CtaAndWrapper from "@/components/CtaAndWrapper";
import HeroMain from "@/components/HeroMain";
import SectionSt from "@/components/SectionSt";
import CenteredP from "@/components/reusable-ui/CenteredP";
import ServiceOverviewCard from "./components/ServiceOverviewCard";
import ServiceDetailSection from "./components/service-detail-section/ServiceDetailSection";

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
        href: "/servicios-de-enfermeria/cuidado-adulto-mayor",
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
            imageSrc="/assets/nursing-cover.jpg"
            imageAlt="Enfermera atendiendo a una adulta mayor en su hogar"
            imagePosition="top"
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
        <ServiceDetailSection
            id="cuidado-adulto-mayor"
            eyebrow="SERVICIO DE ENFERMERÍA"
            title="Cuidado al adulto mayor a domicilio"
            introParagraphs={[
                "Brindamos atención de enfermería a domicilio para adultos mayores en Quito, con un trato cercano, respetuoso y adaptado a las necesidades de cada persona.",
                "Nuestro objetivo es acompañar al paciente en un entorno familiar y cómodo, ofreciendo apoyo profesional que también brinde tranquilidad a sus seres queridos.",
            ]}
            supportingPoints={[
                {
                    title: "Atención personalizada",
                    description: "Adaptamos el acompañamiento a las necesidades, rutinas y nivel de asistencia que requiere cada paciente.",
                },
                {
                    title: "Trato humano y respetuoso",
                    description: "Cuidamos a cada persona con cercanía, dignidad y consideración durante todo el proceso de atención.",
                },
                {
                    title: "Apoyo para la familia",
                    description: "Brindamos una alternativa de cuidado profesional en casa para que la familia se sienta acompañada y respaldada.",
                },
            ]}
            action={{
                href: '/servicios-de-enfermeria/cuidado-adulto-mayor',
                label: "Ver servicio",
                external: true,
            }}
            imageSrc="/assets/elderly.svg"
            imageAlt="Enfermera acompañando a una adulta mayor en su hogar"
            imageSide="right"
            backgroundTone="white"
        />
        <ServiceDetailSection
            id="cuidado-discapacidad"
            eyebrow="SERVICIO DE ENFERMERÍA"
            title="Cuidado a personas con discapacidad a domicilio"
            introParagraphs={[
                "Brindamos atención de enfermería a domicilio para personas con discapacidad en Quito, con un enfoque personalizado, cercano y respetuoso.",
                "Nos adaptamos a las necesidades de cada persona para ofrecer acompañamiento y apoyo profesional en casa, promoviendo su bienestar y brindando tranquilidad a sus familiares o cuidadores.",
            ]}
            supportingPoints={[
                {
                    title: "Atención adaptada a cada persona",
                    description: "Cada paciente tiene necesidades diferentes. Por eso, ofrecemos una atención que considera su situación particular y el tipo de apoyo que requiere.",
                },
                {
                    title: "Acompañamiento cercano y respetuoso",
                    description: "Brindamos un trato humano, respetuoso y profesional, favoreciendo una experiencia de cuidado más cómoda y confiable.",
                },
                {
                    title: "Apoyo para el bienestar diario",
                    description: "Ofrecemos acompañamiento y asistencia en casa para contribuir al bienestar de la persona y facilitar el cuidado en su entorno cotidiano.",
                },
            ]}
            action={{
                href: "/servicios-de-enfermeria/cuidado-discapacidad",
                label: "Ver servicio",
                external: true,
            }}
            imageSrc="/assets/disability.svg"
            imageAlt="Ilustración de cuidado a domicilio para personas con discapacidad"
            imageSide="left"
            backgroundTone="soft"
        />
        <ServiceDetailSection
            id="cuidado-prehospitalario"
            eyebrow="SERVICIO DE ENFERMERÍA"
            title="Cuidado prehospitalario en Quito"
            introParagraphs={[
                "Brindamos atención prehospitalaria en Quito para personas que requieren asistencia antes de ser trasladadas a un centro de salud.",
                "Nuestro equipo ofrece acompañamiento profesional y oportuno, con una atención cercana que busca responder a las necesidades del paciente y brindar tranquilidad a sus familiares durante el proceso.",
            ]}
            supportingPoints={[
                {
                    title: "Atención oportuna",
                    description: "Actuamos con rapidez para brindar asistencia inicial antes del traslado a un centro de salud.",
                },
                {
                    title: "Acompañamiento profesional",
                    description: "Ofrecemos apoyo de enfermería durante esta etapa, de acuerdo con la situación y las necesidades del paciente.",
                },
                {
                    title: "Trato humano en momentos delicados",
                    description: "Mantenemos una atención cercana y respetuosa para acompañar tanto al paciente como a sus familiares.",
                },
            ]}
            action={{
                href: "/servicios-de-enfermeria/cuidado-prehospitalario",
                label: "Ver servicio",
                external: true,
            }}
            imageSrc="/assets/prehospital.svg"
            imageAlt="Ilustración de atención prehospitalaria en Quito"
            imageSide="right"
            backgroundTone="white"
        />
        <ServiceDetailSection
            id="cuidado-posthospitalario"
            eyebrow="SERVICIO DE ENFERMERÍA"
            title="Cuidado posthospitalario a domicilio"
            introParagraphs={[
                "Brindamos cuidados de enfermería a domicilio en Quito para pacientes que necesitan acompañamiento después de recibir el alta médica.",
                "Nuestro objetivo es facilitar una transición más cómoda y organizada del centro de salud al hogar, ofreciendo atención personalizada de acuerdo con las necesidades de cada paciente y las indicaciones de su proceso de recuperación.",
            ]}
            supportingPoints={[
                {
                    title: "Acompañamiento durante la recuperación",
                    description: "Ofrecemos apoyo profesional en casa para acompañar al paciente durante los días o etapas posteriores a su hospitalización.",
                },
                {
                    title: "Atención según sus necesidades",
                    description: "Adaptamos el cuidado al estado y requerimientos de cada persona, procurando una atención cómoda, cercana y supervisada.",
                },
                {
                    title: "Mayor tranquilidad en casa",
                    description: "Brindamos acompañamiento al paciente y su familia para que el proceso de recuperación se sienta más claro, cuidado y respaldado.",
                },
            ]}
            action={{
                href: "/servicios-de-enfermeria/cuidado-posthospitalario",
                label: "Ver servicio",
                external: true,
            }}
            imageSrc="/assets/posthospital.svg"
            imageAlt="Ilustración de cuidado posthospitalario a domicilio"
            imageSide="left"
            backgroundTone="soft"
        />
        <CtaAndWrapper />
    </main>
    )
}
