const whatsappGreeting = "¡Hola! Tengo una consulta sobre los productos o servicios de Plasma Vida Center."

export const organization = {
    name: "Plasma Vida Center",
    tagline: "Salud y bienestar personalizados",
    description: "Atención profesional y humana para acompañarte en cada etapa de tu bienestar.",
    shortDescription: "Cuidamos tu salud de forma natural.",
    url: "https://plasmavidacenter.com",
    logoPath: "/assets/logo.webp",
    logoUrl: "https://plasmavidacenter.com/assets/logo.png",
    openGraphImageUrl: "https://plasmavidacenter.com/opengraph-image.jpg",
    phone: "+593978774224",
    phoneLabel: "097 877 4224",
    email: "cpaciente1626@gmail.com",
    address: "Av. La Prensa y Edmundo Carvajal, Quito, Ecuador",
    mapUrl: "https://maps.app.goo.gl/YGjuE4BiDqd9mkiM6",
    instagramUrl: "https://www.instagram.com/plasma_vida_center/",
    instagramLabel: "@plasma_vida_center",
    whatsappUrl: `https://wa.me/593978774224?text=${encodeURIComponent(whatsappGreeting)}`,
    whatsappUrlFor(message: string) {
        return `https://wa.me/593978774224?text=${encodeURIComponent(message)}`
    },
    phoneUrl: "tel:+593978774224",
    emailUrl: "mailto:cpaciente1626@gmail.com",
    urlFor(path: string) {
        return `https://plasmavidacenter.com${path.startsWith("/") ? path : `/${path}`}`
    },
} as const
