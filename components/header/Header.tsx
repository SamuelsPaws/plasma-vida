import Link from "next/link"
import BurgerMenu from "@/components/BurgerMenu"
import Image from "next/image"
import { navLinks } from "@/data/nav"
import NavLinkDesk from "./subcomponents/NavLinkDesk"

const Header = () => {
  return (
    <header className="
		w-full h-mob-header-height lg:h-header-height px-8
		fixed top-0 left-0
		flex justify-between items-center
		bg-mainblue-original z-[999]"
    >
		<Link
			href="/"
			className="pressable text-white-1"
		>
			<Image
				src="/assets/logo.webp"
				width={371}
				height={389}
				className="w-[32px] h-[32px]"
				alt="Logo de Plasma Vida Center"
			/>
		</Link>
		<nav className="
			hidden lg:block
			text-white-1 text-md"
		>
			<ul className="flex gap-8">
				{navLinks.map((el) => (
					<NavLinkDesk
						key={el.href}
						item={el}
					/>
				))}
			</ul>
		</nav>
      <BurgerMenu />
    </header>
  )
}

export default Header
