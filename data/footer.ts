import type { IconId } from "@/components/CustomIcon";

type FooterItem = {
    iconId: IconId;
    href: string;
    label: string;
    external?: boolean;
    labelClassName?: string;
}

export const footerContent = {
    brandName: "Plasma Vida Center",
    tagline: "Salud y bienestar personalizados",
    description: "Atención profesional y humana para acompañarte en cada etapa de tu bienestar.",
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappHref: "https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center.",
    copyright: "© 2026 Plasma Vida Center. Todos los derechos reservados.",
    closingMessage: "Cuidamos de ti con atención cercana y profesional.",
} as const

export const footerContactItems: FooterItem[] = [
    {
        iconId: "phone",
        href: "tel:+593978774224",
        label: "097 877 4224",
    },
    {
        iconId: "email",
        href: "mailto:cpaciente1626@gmail.com",
        label: "cpaciente1626@gmail.com",
        labelClassName: "break-all",
    },
]

export const footerVisitItems: FooterItem[] = [
    {
        iconId: "location",
        href: "https://maps.app.goo.gl/YGjuE4BiDqd9mkiM6",
        label: "Av. La Prensa y Edmundo Carvajal, Quito, Ecuador",
        external: true,
    },
    {
        iconId: "instagram",
        href: "https://www.instagram.com/plasma_vida_center/",
        label: "@plasma_vida_center",
        external: true,
    },
]
