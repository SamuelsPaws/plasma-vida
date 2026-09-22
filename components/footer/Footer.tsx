import { footerContactItems, footerContent, footerVisitItems } from "@/data/footer"
import { navLinks } from "@/data/nav"
import FooterBrand from "./subcomponents/FooterBrand"
import FooterColumn from "./subcomponents/FooterColumn"
import FooterNavLink from "./subcomponents/FooterNavLink"
import FooterWhatsappLink from "./subcomponents/FooterWhatsappLink"
import IconItem from "./subcomponents/IconItem"

const Footer = () => {
  return (
    <footer className='
        h-mob-footer-height md:h-footer-height w-full
        absolute bottom-0 left-0
        px-4 md:px-4 pb-4 md:pb-4
        bg-transparent'
    >
        {/* Codex: ONLY THIS DIV */}
        <div className="
            w-full h-full relative overflow-hidden
            px-8 py-8 md:px-12 md:py-12 xl:px-16
            bg-gray-800 rounded-4xl"
        >
            <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
                    <FooterBrand />

                    <FooterColumn title="Navegación" className="md:col-span-2">
                        <nav aria-label="Navegación del pie de página">
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((item) => (
                                    <li key={item.href}>
                                        <FooterNavLink item={item} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </FooterColumn>

                    <FooterColumn title="Contacto" className="md:col-span-3">
                        <div className="flex flex-col items-start gap-4 text-white-1">
                            {footerContactItems.map((item) => (
                                <IconItem key={item.href} {...item} />
                            ))}
                        </div>
                    </FooterColumn>

                    <FooterColumn title="Visítanos" className="col-span-2 md:col-span-3">
                        <div className="flex flex-col items-start gap-4">
                            {footerVisitItems.map((item) => (
                                <IconItem key={item.href} {...item} />
                            ))}
                        </div>
                    </FooterColumn>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-white/15">
                    <FooterWhatsappLink className="flex md:hidden w-full justify-center" />
                    <p className="text-sm text-lightblue-300 text-center md:text-left">
                        {footerContent.copyright}
                    </p>
                    <p className="hidden md:block text-sm text-lightblue-300">
                        {footerContent.closingMessage}
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
