import type { Metadata } from "next";

export const elderlyMetadata: Metadata = {
  title: "Cuidado de Adultos Mayores en Quito | Enfermería a Domicilio",
  description:
    "Servicio de cuidado de adultos mayores en Quito con atención domiciliaria profesional. Control de signos vitales, medicación, higiene, alimentación y acompañamiento, con planes personalizados y horarios flexibles.",

  keywords: [
    "cuidado adulto mayor Quito",
    "enfermera a domicilio adulto mayor",
    "cuidado geriátrico en casa",
    "atención domiciliaria adultos mayores Quito",
    "cuidadores de ancianos Quito",
    "enfermería a domicilio Ecuador"
  ],

  openGraph: {
    title: "Cuidado de Adultos Mayores en Quito | Atención Profesional en Casa",
    description:
      "Atención domiciliaria para adultos mayores con cuidado profesional, humano y personalizado en Quito.",
    url: "https://plasma-vida.vercel.app/servicios-de-enfermeria/adulto-mayor",
    siteName: "Plasma Vida Center",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "https://plasma-vida.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuidado de adultos mayores en Quito",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuidado de Adultos Mayores en Quito",
    description:
      "Servicio de enfermería a domicilio con atención profesional y personalizada.",
    images: ["https://plasma-vida.vercel.app/opengraph-image.jpg"],
  },

  alternates: {
    canonical:
      "https://plasma-vida.vercel.app/servicios-de-enfermeria/adulto-mayor",
  },

  metadataBase: new URL("https://plasma-vida.vercel.app/"),
};