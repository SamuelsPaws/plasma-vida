import type { Metadata } from "next"
import HeroMain from "@/components/HeroMain"
import SectionSt from "@/components/SectionSt"
import CtaAndWrapper from "@/components/CtaAndWrapper"
import Eyebrow from "@/components/reusable-ui/Eyebrow"
import CenteredP from "@/components/reusable-ui/CenteredP"
import PillCtaBtn from "@/components/reusable-ui/PillCtaBtn"
import FaqCard from "@/app/components/FaqCard"
import { organization } from "@/data/organization"
import { ContactCard } from "./components/ContactCard"

const title = `Contacto | ${organization.name} Quito`
const description = `Contacta con ${organization.name} en Quito. Escríbenos por WhatsApp, llámanos o consulta nuestra ubicación para coordinar tu atención.`

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: organization.urlFor("/contacto"),
    },
    openGraph: {
        title,
        description,
        url: organization.urlFor("/contacto"),
        siteName: organization.name,
        locale: "es_EC",
        type: "website",
        images: [{
            url: organization.openGraphImageUrl,
            width: 1200,
            height: 630,
            alt: organization.name,
        }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [organization.openGraphImageUrl],
    },
}

const contactQuestions = [
    {
        question: "¿Cómo puedo coordinar una cita?",
        answer: "Escríbenos por WhatsApp o llámanos al " + organization.phoneLabel + ". Cuéntanos qué servicio te interesa y nuestro equipo te ayudará a consultar la disponibilidad y coordinar los detalles de tu atención.",
    },
    {
        question: "¿Dónde están ubicados?",
        answer: `Nos encontramos en ${organization.address}. Puedes abrir el enlace de Google Maps de esta página para consultar cómo llegar. Contáctanos antes de tu visita para coordinar tu atención.`,
    },
    {
        question: "¿Cuál es el horario de atención?",
        answer: "Consulta los horarios y la disponibilidad directamente con nuestro equipo por WhatsApp o teléfono. Así podremos ayudarte a coordinar una visita según el servicio que necesitas.",
    },
    {
        question: "¿Puedo solicitar atención de enfermería a domicilio?",
        answer: "Sí, ofrecemos servicios de enfermería a domicilio en Quito. Cuéntanos qué tipo de cuidado necesitas y en qué sector te encuentras para consultar la cobertura, disponibilidad y detalles del servicio.",
    },
    {
        question: "¿Puedo consultar precios antes de agendar?",
        answer: "Claro. Puedes explorar nuestro catálogo o contactarnos para solicitar información sobre el servicio que te interesa. Nuestro equipo te orientará sobre los precios y los detalles necesarios antes de coordinar tu atención.",
    },
]

export default function Contact() {
    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        {/* Hero */}
        <HeroMain
            eyebrow="CONTACTO | QUITO, ECUADOR"
            title="Tu bienestar empieza con una conversación"
            description="Estamos aquí para escucharte. Consulta sobre nuestros servicios, resuelve tus dudas o coordina tu atención con un equipo cercano y comprometido contigo."
            primaryAction={{
                href: organization.whatsappUrl,
                label: "Escríbenos por WhatsApp",
                external: true,
            }}
            secondaryAction={{
                href: "#contacto",
                label: "Ver datos de contacto",
                type: "secondary",
            }}
            imageSrc="/assets/nursing-banner.jpg"
            imageAlt="Atención cercana de una enfermera a una paciente"
            imagePosition="left"
        />

        {/* Contact information */}
        <SectionSt
            id="contacto"
            eyebrow="HABLEMOS DE LO QUE NECESITAS"
            title="Estamos cerca de ti"
            bgColor="bg-white-2"
        >
            <CenteredP text="Elige la forma más cómoda de contactarnos. Te ayudamos a dar el siguiente paso y a coordinar los detalles de tu visita." />
            <div className="
                max-w-7xl mx-auto
                grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
                <ContactCard
                    iconId="phone"
                    title="Llámanos"
                    description="Conversa con nuestro equipo sobre el servicio que necesitas."
                    label={organization.phoneLabel}
                    href={organization.phoneUrl}
                    action="Llamar ahora"
                />
                <ContactCard
                    iconId="email"
                    title="Envíanos un correo"
                    description="Escríbenos tus consultas y solicita más información sobre nuestra atención."
                    label={organization.email}
                    href={organization.emailUrl}
                    action="Escribir un correo"
                />
                <ContactCard
                    iconId="location"
                    title="Visítanos en Quito"
                    description="Coordina tu visita y encuentra la mejor ruta para llegar a nuestro centro."
                    label={organization.address}
                    href={organization.mapUrl}
                    action="Abrir Google Maps"
                    external
                />
            </div>
        </SectionSt>

        {/* Social channels */}
        <SectionSt
            eyebrow="SIGAMOS EN CONTACTO"
            title="También nos encuentras aquí"
            bgColor="bg-gray-200"
        >
            <CenteredP text="Conoce más de nosotros en Instagram o abre una conversación directa por WhatsApp. Nos encantará saber de ti." />
            <div className="
                max-w-5xl mx-auto
                grid grid-cols-1 gap-8 md:grid-cols-2"
            >
                <ContactCard
                    iconId="instagram"
                    title="Instagram"
                    description="Conoce nuestro centro y descubre las novedades de nuestros servicios."
                    label={organization.instagramLabel}
                    href={organization.instagramUrl}
                    action="Visitar nuestro perfil"
                    external
                />
                <ContactCard
                    iconId="whatsapp"
                    title="WhatsApp"
                    description="Cuéntanos qué necesitas y consulta cómo coordinar tu atención."
                    label={organization.phoneLabel}
                    href={organization.whatsappUrl}
                    action="Iniciar una conversación"
                    external
                />
            </div>
        </SectionSt>

        {/* Frequently asked questions */}
        <section className="
            px-8 py-16 md:px-16 md:py-24
            bg-white-1"
        >
            <div className="
                max-w-7xl mx-auto
                grid grid-cols-1 items-start gap-8 xl:grid-cols-3 xl:gap-16"
            >
                <div>
                    <Eyebrow text="ANTES DE CONTACTARNOS" />
                    <h2 className="
                        mb-4
                        text-most-h2 text-mainblue-original font-semibold leading-tight"
                    >
                        Resolvemos tus primeras dudas
                    </h2>
                    <p className="mb-8 text-my-md text-gray-600 leading-relaxed">
                        Aquí encontrarás información para organizar tu visita. Si necesitas algo más, estamos a una conversación de distancia.
                    </p>
                    <PillCtaBtn
                        href={organization.whatsappUrl}
                        label="Consultar con el equipo"
                        external
                    />
                </div>
                <div className="
                    min-w-0
                    flex flex-col gap-4
                    xl:col-span-2"
                >
                    {contactQuestions.map((item) => (
                        <FaqCard
                            key={item.question}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* Shared call to action and footer spacing */}
        <CtaAndWrapper />
    </main>
    )
}
