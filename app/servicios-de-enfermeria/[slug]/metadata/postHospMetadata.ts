import type { Metadata } from "next";

export const postHospMetadata: Metadata = {
  title: "Cuidados Posthospitalarios en Quito | Enfermería a Domicilio",
  description:
    "Servicio de cuidados posthospitalarios a domicilio en Quito para una recuperación segura tras el alta médica. Control de signos vitales, medicación, curación de heridas y seguimiento profesional en casa.",

  keywords: [
    "cuidados posthospitalarios Quito",
    "enfermería a domicilio recuperación",
    "cuidado después de cirugía en casa",
    "curación de heridas Quito",
    "atención domiciliaria postoperatoria",
    "recuperación en casa con enfermera"
  ],

  openGraph: {
    title: "Cuidados Posthospitalarios en Quito | Recuperación Segura en Casa",
    description:
      "Apoyo profesional en casa tras el alta médica, con atención personalizada en Quito.",
    url: "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-posthospitalario",
    siteName: "Plasma Vida Center",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "https://plasma-vida.vercel.app/opengraph-image.jpg", // ← tu asset aquí
        width: 1200,
        height: 630,
        alt: "Cuidados posthospitalarios en Quito",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuidados Posthospitalarios en Quito",
    description:
      "Recuperación segura en casa con atención profesional y seguimiento continuo.",
    images: ["https://plasma-vida.vercel.app/opengraph-image.jpg"],
  },

  alternates: {
    canonical:
      "https://plasma-vida.vercel.app/servicios-de-enfermeria/cuidado-posthospitalario",
  },

  metadataBase: new URL("https://plasma-vida.vercel.app"),
};