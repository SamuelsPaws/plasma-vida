import Link from "next/link"
import BurgerMenu from "@/components/BurgerMenu"

const Header = () => {
  return (
    <header className="
      w-full h-mob-header-height lg:h-header-height px-8
      fixed top-0 left-0
      flex justify-between items-center
      bg-[#0f3b73] z-[999]"
    >
      <Link
        href="/"
        className="text-white-1"
      >
        <img
          src="/assets/logo.png"
          alt=""
          width={32}
          height={32}
        />
      </Link>
      <nav className="
        hidden lg:block
        text-white-1 text-md"
      >
        <ul className="flex gap-8">
          <li>
            <Link
              href='/catalogo'
              className="hover:text-white-1/80 duration-200"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              href='/servicios-de-enfermeria'
              className="hover:text-white-1/80 duration-200"
            >
              Servicios de Enfermería
            </Link>
          </li>
          <li className="hidden">
            <Link
              href='/'
              className="hover:text-white-1/80 duration-200"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href='/quienes-somos'
              className="hover:text-white-1/80 duration-200"
            >
              Quiénes Somos
            </Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  )
}

export default Header