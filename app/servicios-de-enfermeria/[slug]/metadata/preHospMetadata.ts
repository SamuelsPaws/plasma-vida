import type { Metadata } from "next";

export const preHospMetadata: Metadata = {
  title: "Atención Prehospitalaria en Quito | Enfermería de Urgencias a Domicilio",
  description:
    "Servicio de atención prehospitalaria en Quito con respuesta rápida ante emergencias. Evaluación inicial, control de signos vitales, primeros auxilios y estabilización antes del traslado a un centro de salud.",

  keywords: [
    "atención prehospitalaria Quito",
    "enfermería de urgencias Quito",
    "primeros auxilios a domicilio",
    "asistencia médica inmediata Quito",
    "traslado y estabilización de pacientes",
    "emergencias médicas Quito"
  ],

  openGraph: {
    title: "Atención Prehospitalaria en Quito | Respuesta Rápida y Profesional",
    description:
      "Asistencia inmediata ante emergencias en Quito con personal capacitado y atención segura.",
    url: "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-prehospitalario",
    siteName: "Plasma Vida Center",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "https://plasma-vida.vercel.app/opengraph-image.jpg", // ← tu asset aquí
        width: 1200,
        height: 630,
        alt: "Atención prehospitalaria en Quito",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Atención Prehospitalaria en Quito",
    description:
      "Respuesta rápida ante emergencias con atención profesional y segura.",
    images: ["https://plasma-vida.vercel.app/opengraph-image.jpg"],
  },

  alternates: {
    canonical:
      "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-prehospitalario",
  },

  metadataBase: new URL("https://plasma-vida.vercel.app"),
};