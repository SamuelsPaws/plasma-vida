import type { Metadata } from "next";

export const disabilityMetadata: Metadata = {
  title: "Cuidado para Personas con Discapacidad en Quito | Enfermería a Domicilio",
  description:
    "Atención domiciliaria para personas con discapacidad en Quito. Apoyo en higiene, alimentación, movilidad y acompañamiento, con cuidado profesional, humano y adaptado a cada necesidad.",

  keywords: [
    "cuidado personas con discapacidad Quito",
    "enfermería a domicilio discapacidad",
    "asistencia domiciliaria discapacidad",
    "cuidado especializado en casa Quito",
    "apoyo movilidad y cuidado personal",
    "atención domiciliaria Ecuador"
  ],

  openGraph: {
    title: "Cuidado para Personas con Discapacidad en Quito | Atención en Casa",
    description:
      "Servicio de cuidado domiciliario con atención personalizada, promoviendo autonomía y bienestar.",
    url: "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-discapacidad",
    siteName: "Plasma Vida Center",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "https://plasma-vida.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuidado para personas con discapacidad en Quito",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuidado para Personas con Discapacidad en Quito",
    description:
      "Atención domiciliaria profesional que promueve autonomía y calidad de vida.",
    images: ["https://plasma-vida.vercel.app/opengraph-image.jpg"],
  },

  alternates: {
    canonical:
      "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-discapacidad",
  },

  metadataBase: new URL("https://plasma-vida.vercel.app"),
};