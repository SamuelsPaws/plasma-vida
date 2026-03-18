import Link from "next/link"

const Header = () => {
  return (
    <header className="
      w-full h-mob-header-height lg:h-header-height px-8
      fixed top-0 left-0
      flex justify-between items-center
      bg-[#0055d5] z-50"
    >
      <Link
        href="/"
        className="text-white-1"
      >INICIO</Link>
      <nav className="text-white-1 text-lg">
        <ul className="flex gap-8">
          <li><Link
            href='/nigga'
            className="hover:text-white-1/80 duration-200"
          >
            Catálogo
          </Link></li>
          <li><Link
            href='/nigga'
            className="hover:text-white-1/80 duration-200"
          >
            Contacto
          </Link></li>
          <li><Link
            href='/nigga'
            className="hover:text-white-1/80 duration-200"
          >
            Quiénes Somos
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header