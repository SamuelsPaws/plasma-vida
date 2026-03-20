const Footer = () => {
  return (
    <footer className='lg:h-[400px] px-6 lg:px-8 pb-6 lg:pb-8 bg-[#ececec]'>
        <div className="
            w-full lg:h-full p-8 lg:p-0
            flex flex-col lg:flex-row lg:justify-evenly items-center gap-8 lg:gap-0
            bg-maingold-original rounded-2xl"
        >
            <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start">
                <p className="mb-2 text-xl lg:text-2xl font-bold text-white-1">
                    Contacto
                </p>
                <p className="text-sm lg:text-lg text-white-1/80">
                    Teléfono: +593 97 877 4224
                </p>
                <p className="text-sm lg:text-lg text-white-1/80">
                    E-mail: cpaciente1626@gmail.com
                </p>
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start">
                <p className="mb-2 text-xl lg:text-2xl font-bold text-white-1">
                    Redes Sociales
                </p>
                <p className="text-sm lg:text-lg text-white-1/80">
                    <i className="fa fa-instagram mr-2"></i><span>@plasmavidacenter</span>
                </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 items-center">
                <p className="mb-2 text-xl lg:text-2xl font-bold text-white-1">
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