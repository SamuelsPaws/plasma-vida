import type { NavLinkType } from "@/lib/types/nav"

export const navLinks = [
    {
        href: '/catalogo',
        label: 'Catálogo',
        external: false
    },
    {
        href: '/servicios-de-enfermeria',
        label: 'Servicios de Enfermería',
        external: false
    },
    {
        href: '/quienes-somos',
        label: 'Quiénes Somos',
        external: false
    },
] satisfies NavLinkType[]
