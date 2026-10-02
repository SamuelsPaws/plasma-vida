import type { IconId } from "@/components/CustomIcon";
import { organization } from "@/data/organization";

type FooterItem = {
    iconId: IconId;
    href: string;
    label: string;
    external?: boolean;
    labelClassName?: string;
}

export const footerContent = {
    brandName: organization.name,
    tagline: organization.tagline,
    description: organization.description,
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappHref: organization.whatsappUrl,
    copyright: `© 2026 ${organization.name}. Todos los derechos reservados.`,
    closingMessage: "Cuidamos de ti con atención cercana y profesional.",
} as const

export const footerContactItems: FooterItem[] = [
    {
        iconId: "phone",
        href: organization.phoneUrl,
        label: organization.phoneLabel,
    },
    {
        iconId: "email",
        href: organization.emailUrl,
        label: organization.email,
        labelClassName: "break-all",
    },
]

export const footerVisitItems: FooterItem[] = [
    {
        iconId: "location",
        href: organization.mapUrl,
        label: organization.address,
        external: true,
    },
    {
        iconId: "instagram",
        href: organization.instagramUrl,
        label: organization.instagramLabel,
        external: true,
    },
]
