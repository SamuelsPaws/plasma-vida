const Footer = () => {
  return (
    <footer className='lg:h-[400px] px-6 lg:px-8 pb-6 lg:pb-8 bg-[#ececec]'>
        <div className="
            w-full lg:h-full py-12 lg:py-0
            flex flex-col lg:flex-row lg:justify-evenly items-center gap-16 lg:gap-0
            bg-maingold-dark-1 rounded-2xl"
        >
            <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start">
                <p className="mb-2 text-2xl lg:text-2xl font-bold text-white-1">
                    Contacto
                </p>
                <p className="text-md lg:text-lg text-white-1/80">
                    Teléfono: <a href={`tel:+593978774224`} className="underline decoration-dotted">097 877 4224</a>
                </p>
                <p className="text-md lg:text-lg text-white-1/80">
                    E-mail: <a href="mailto:cpaciente1626@gmail.com" className="underline decoration-dotted">cpaciente1626@gmail.com</a>
                </p>
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start">
                <p className="mb-2 text-2xl lg:text-2xl font-bold text-white-1">
                    Redes Sociales
                </p>
                <p className="text-md lg:text-lg text-white-1/80">
                    <i className="fa fa-instagram scale-[1.1] mr-2"></i>
                    <a
                        href="https://www.instagram.com/plasma_vida_center/"
                        className="underline underline-offset-2"
                        target="_blank"
                    >@plasma_vida_center</a>
                </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 items-center">
                <p className="mb-2 text-2xl lg:text-2xl font-bold text-white-1">
                    Ubicación
                </p>
                <p className="text-7xl text-white/50"><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                <p className="text-md lg:text-lg text-white-1/80">Quito, Ecuador</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer