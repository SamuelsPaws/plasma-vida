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
            <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-mainblue-light-2/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-mainblue-original/20 blur-3xl"
            />

            <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-5 flex flex-col items-start gap-4">
                        <a href="/" className="pressable flex items-center gap-4" aria-label="Plasma Vida Center, inicio">
                            <span className="w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-white-1 rounded-full shadow-lg">
                                <img
                                    src="/assets/logo.webp"
                                    width="371"
                                    height="389"
                                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                                    alt=""
                                />
                            </span>
                            <span className="flex flex-col">
                                <span className="text-xl md:text-2xl text-white-1 font-semibold tracking-wide">
                                    Plasma Vida Center
                                </span>
                                <span className="text-sm text-lightblue-300">
                                    Salud y bienestar personalizados
                                </span>
                            </span>
                        </a>
                        <p className="hidden md:block max-w-md text-my-md text-lightblue-200 leading-relaxed">
                            Atención profesional y humana para acompañarte en cada etapa de tu bienestar.
                        </p>
                        <a
                            href="https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center."
                            target="_blank"
                            rel="noreferrer"
                            className="pressable hidden md:inline-flex px-8 py-4 items-center gap-2 bg-white-1 rounded-full text-mainblue-original text-my-md font-semibold shadow-lg hover:bg-lightblue-200"
                        >
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            Escríbenos por WhatsApp
                        </a>
                    </div>

                    <div className="md:col-span-3 flex flex-col items-start gap-4">
                        <p className="text-sm text-br-gold-main font-semibold tracking-widest uppercase">
                            Contacto
                        </p>
                        <div className="flex flex-col items-start gap-4 text-white-1">
                            <a href="tel:+593978774224" className="pressable flex items-center gap-4 hover:text-lightblue-300">
                                <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-white/20">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                <span className="text-my-md">097 877 4224</span>
                            </a>
                            <a href="mailto:cpaciente1626@gmail.com" className="pressable flex items-center gap-4 hover:text-lightblue-300">
                                <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-white/20">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                <span className="text-sm md:text-md">cpaciente1626@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-start gap-4">
                        <p className="text-sm text-br-gold-main font-semibold tracking-widest uppercase">
                            Visítanos
                        </p>
                        <a
                            href="https://maps.app.goo.gl/YGjuE4BiDqd9mkiM6"
                            target="_blank"
                            rel="noreferrer"
                            className="pressable flex items-start gap-4 text-white-1 hover:text-lightblue-300"
                        >
                            <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-white/20">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <span className="max-w-xs text-sm md:text-md leading-relaxed">
                                Av. La Prensa y Edmundo Carvajal, Quito, Ecuador
                            </span>
                        </a>
                        <a
                            href="https://www.instagram.com/plasma_vida_center/"
                            className="pressable flex items-center gap-4 text-white-1 hover:text-lightblue-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-white/20">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                            <span className="text-sm md:text-md">@plasma_vida_center</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-white/15">
                    <a
                        href="https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center."
                        target="_blank"
                        rel="noreferrer"
                        className="pressable md:hidden w-full px-8 py-4 flex items-center justify-center gap-2 bg-white-1 rounded-full text-mainblue-original text-sm font-semibold"
                    >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        Escríbenos por WhatsApp
                    </a>
                    <p className="text-sm text-lightblue-300 text-center md:text-left">
                        © 2026 Plasma Vida Center. Todos los derechos reservados.
                    </p>
                    <p className="hidden md:block text-sm text-lightblue-300">
                        Cuidamos de ti con atención cercana y profesional.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
