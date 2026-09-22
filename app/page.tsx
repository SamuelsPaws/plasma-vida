import { getProducts } from "@/lib/contentful-queries";
import Hero from "./components/Hero";
import HomeCategoryCard from "./components/HomeCategoryCard";
import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductSvg from "@/components/ProductSvg";
import SectionSec from "@/components/SectionSec";
import { p } from "motion/react-client";
import Image from "next/image";
import CustomIcon from "@/components/CustomIcon";
import AttentionItem from "./components/AttentionItem";
import SectionSt from "@/components/SectionSt";
import CenteredP from "@/components/reusable-ui/CenteredP";
import StepCard from "@/components/reusable-ui/step-card/StepCard";
import Link from "next/link";
import PillCtaBtn from "@/components/reusable-ui/PillCtaBtn";
import TestimonialCard from "./components/testimonial-card/TestimonialCard";
import FaqCard from "./components/FaqCard";
import Eyebrow from "@/components/reusable-ui/Eyebrow";
import SectionCta from "@/components/SectionCta";

export const metadata: Metadata = {
	title: "Plasma Vida Center | Mejora tu salud al instante",
	description:
		"Plasma Vida Center ofrece terapias avanzadas de bienestar como sueros intravenosos, plasma rico en plaquetas (PRP) y servicios de enfermería a domicilio. Mejora tu salud con atención profesional, segura y personalizada.",
	keywords: [
		"sueros intravenosos Ecuador",
		"plasma rico en plaquetas PRP",
		"terapias de bienestar",
		"enfermería a domicilio",
		"cuidado de adultos mayores",
		"salud y bienestar quito",
		"salud y bienestar ecuador",
		"salud y bienestar premium",
		"Plasma Vida Center"
	],
	applicationName: "Plasma Vida Center",
	authors: [{ name: "Plasma Vida Center" }],
	creator: "Plasma Vida Center",
	publisher: "Plasma Vida Center",

	openGraph: {
		title: "Plasma Vida Center - Siéntete bien y cuida tu salud.",
		description:
		"Terapias avanzadas de bienestar: sueros IV, PRP y atención de enfermería a domicilio con enfoque profesional y personalizado.",
		url: "https://plasmavidacenter.com/", // Canonical
		siteName: "Plasma Vida Center",
		locale: "es_EC",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Inicio - Plasma Vida Center",
		description:
		"Sueros IV, PRP y servicios de enfermería a domicilio con enfoque clínico y personalizado.",
		images: ["/opengraph-image.jpg"],
	},

	alternates: {
		canonical: "https://plasmavidacenter.com/",
	},

	metadataBase: new URL("https://plasmavidacenter.com/"),
};

export default async function Home() {
  const products = await getProducts();
  const promotions = products.filter(el => el.noPromotionPrice);

  return (
    <main className="pt-mob-header-height lg:pt-header-height">
		<Hero promotions={promotions} />
		<section className="
			min-h-[300px]
			px-4 py-12
			md:px-16 md:py-24 relative
			bg-[#e2e2e9]"
		>
			<Reveal>
				<h2 className="mb-12 lg:mb-24 text-3xl lg:text-5xl text-center font-bold">
					En Plasma Vida Center encontrarás:
				</h2>
			</Reveal>
			{/* Service types (suero, plasma, enfermería) */}
			<HomeCategoryCard
				title="Sueroterapia"
				descriptionParagraphs={[
					'Nuestros sueros homeopáticos y vitaminados son una forma rápida y efectiva de revitalizar tu cuerpo a través de vitaminas, minerales y nutrientes esenciales. De esta forma potenciamos tu energía, fortalecemos tus defensas y mejoramos tu bienestar general.',
					'Dale a tu cuerpo el impulso que merece y siéntete mejor, más fuerte y equilibrado desde la primera sesión.',
				]}
				href="/catalogo"
				linkText="Mira nuestro catálogo"
				imageUrl="/assets/iv-cover.jpg"
				imgW={1672}
				imgH={941}
				imgClassName="object-[35%_50%]"
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
				imageUrl="/assets/plasma-cover.jpg"
				imgW={1254}
				imgH={1254}
			/>
			<div className="h-12 lg:h-24"></div>
			<HomeCategoryCard
				title="Servicios de Enfermería"
				descriptionParagraphs={[
					'Nuestros servicios de enfermería están diseñados para brindar atención profesional y humana a quienes más lo necesitan, incluyendo cuidado de adultos mayores, personas con discapacidad y acompañamiento antes y después de procedimientos de hospital.',
					'Ofrecemos un apoyo cercano y confiable que garantiza bienestar, seguridad y tranquilidad tanto para el paciente como para su familia.',
				]}
				href="/servicios-de-enfermeria"
				linkText="Mira nuestros servicios"
				imageUrl="/assets/nursing-cover.jpg"
				imgW={20}
				imgH={20}
				imgClassName="object-center"
			/>
      	</section>
		<SectionSec
			title="Atención que se adapta a ti"
			eyebrow="NUESTRA FORMA DE CUIDARTE"
			bgColor="bg-white-1"
			underLeft={(
				<>
				<p className="
					mb-4 md:mb-8
					text-my-md text-gray-600"
				>
					Cada persona tiene necesidades diferentes. Por eso, creemos en una atención cercana, donde escucharte y comprender lo que necesitas es parte fundamental de tu cuidado.
				</p>
				<div className="
					w-full h-[1px]
					mb-4 md:mb-8
					bg-gray-300"
				></div>
				<div className="flex flex-col gap-4 md:gap-8">
					<AttentionItem
						iconId="handshake-heart"
						title="Un trato cercano"
						copy="Queremos que te sientas escuchado y acompañado, con un trato humano y respetuoso durante tu atención."
					/>
					<AttentionItem
						iconId="people"
						title="Atención personalizada"
						copy="Nos tomamos el tiempo de conocer tus necesidades para brindarte orientación y atención de acuerdo con tu situación."
					/>
					<AttentionItem
						iconId="house"
						title="Cuidado donde lo necesitas"
						copy="Te atendemos en nuestro centro y ofrecemos servicios a domicilio, según el tipo de atención que necesites y su disponibilidad."
					/>
				</div>
				</>
			)}
			rightNode={(
				<Image
					src="/assets/content/face-injection.jpg"
					width={1200}
					height={800}
					sizes="(max-width: 768px) 100vw, 45vw"
					className="
						w-full md:w-[40%] aspect-square min-w-80
						object-cover object-top
						rounded-4xl"
					alt="Inyección facial"
				/>
			)}
		>
		</SectionSec>
		<SectionSt
			title="Cómo puedes recibir nuestra atención"
			bgColor="bg-[#e2e2e9]"
		>
			<CenteredP
				text="Desde conocer nuestros servicios hasta coordinar tu atención, queremos que cada paso sea claro y sencillo para ti."
			/>
			<div className="
				w-full md:w-fit
				mx-auto
				mb-16 md:mb-16
				flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-8"
			>
				<StepCard
					num={1}
					iconId="file-search"
					title="Explora nuestros servicios"
					copy="Conoce nuestras opciones de sueroterapia, plasma rico en plaquetas y enfermería para encontrar el servicio que te interesa."
				/>
				<StepCard
					num={2}
					iconId="message-bubble"
					title="Cuéntanos qué necesitas"
					copy="Ponte en contacto con nosotros. Te brindaremos información sobre nuestros servicios y te orientaremos según tus necesidades."
				/>
				<StepCard
					num={3}
					iconId="calendar-check"
					title="Coordina tu atención"
					copy="Consulta la disponibilidad y los detalles de tu atención, ya sea en nuestro centro o a domicilio, según el servicio que necesites."
				/>
			</div>
			<PillCtaBtn
				href="https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center."
				label="Solicitar información"
				centered
				external
			/>
		</SectionSt>
		{/* <SectionSt
			eyebrow="EXPERIENCIAS DE NUESTROS PACIENTES"
			title="Tu experiencia nos importa"
			bgColor="bg-white-1"
		>
			<CenteredP
				text="Cada persona vive su atención de una manera diferente. Conoce las experiencias de quienes nos han confiado su cuidado y lo que comparten sobre su paso por Plasma Vida Center."
			/>
			<div className="
				w-full md:w-fit
				mx-auto
				mb-16 md:mb-16
				flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-8"
			>
				<TestimonialCard
					name="María R."
					descriptor="Paciente de sueroterapia"
					message="Hola."
				/>
			</div>
		</SectionSt> */}
		<SectionSec
			eyebrow="PREGUNTAS FRECUENTES"
			title="¿Tienes alguna pregunta?"
			bgColor="bg-white-1"
			underLeft={(
				<>
				<p className="
					mb-4 md:mb-8
					text-my-md text-gray-600"
				>
					Encuentra respuestas a algunas de las dudas más comunes sobre nuestros servicios, atención y cómo empezar.
				</p>
				<Image
					src="/assets/content/thinking-woman-2.webp"
					width={1900}
					height={1000}
					sizes="(max-width: 768px) 100vw, 40vw"
					className="w-full object-contain"
					alt="Una mujer pensando"
				/>
				<div className="
					w-full -translate-y-0
					p-8
					flex items-center gap-8
					bg-white-1
					border-x border-b border-gray-300 rounded-b-2xl"
				>
					<div className="
						w-25 aspect-square
						flex justify-center items-center
						bg-lightblue-200
						text-4xl md:text-6xl text-mainblue-light-2
						rounded-full"
					>
						<CustomIcon
							iconId="message-bubble"
						/>
					</div>
					<div className="flex-1">
						<h2 className="
							mb-2
							text-my-md text-mainblue-original font-semibold tracking-wide"
						>
							Resolvemos tus dudas
						</h2>
						<p className="
							mb-4
							text-my-sm text-gray-600"
						>
							Nuestro equipo está listo para escucharte y brindarte la información que necesitas
						</p>
						<PillCtaBtn
							href="https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center."
							label="Contáctanos"
							external
						/>
					</div>
				</div>
				</>
			)}
			rightNode={(
				<div className="
					w-full md:w-[60%]
					flex flex-col gap-4"
				>
					<FaqCard
						question="¿Cómo puedo solicitar una cita o recibir información?"
						answer="Puedes ponerte en contacto con nuestro equipo para consultar sobre nuestros servicios, disponibilidad y los detalles necesarios para coordinar tu atención."
					/>
					<FaqCard
						question="¿Ofrecen atención a domicilio?"
						answer="Sí. Plasma Vida Center ofrece atención a domicilio para determinados servicios. Puedes consultarnos sobre la disponibilidad según el tipo de atención que necesites."
					/>
					<FaqCard
						question="¿Necesito saber qué servicio necesito antes de contactarlos?"
						answer="No. Puedes contarnos qué necesitas o qué servicio te interesa y te brindaremos información para orientarte sobre las opciones disponibles."
					/>
					<FaqCard
						question="¿Cómo sé qué tratamiento es adecuado para mí?"
						answer="La elección de un tratamiento depende de tus necesidades y situación particular. Nuestro equipo puede brindarte información sobre las opciones disponibles y orientarte sobre los pasos a seguir según el servicio."
					/>
				</div>
			)}
		/>
		<SectionCta />
      	<section className="h-mob-footer-height md:h-footer-height bg-mainblue-dark-1"></section>
    </main>
  	);
}
