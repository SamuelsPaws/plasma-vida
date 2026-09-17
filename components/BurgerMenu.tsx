'use client'
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = (): void => {
            setIsOpen(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const links = [
        { href: '/catalogo', label: 'Catálogo' },
        { href: '/servicios-de-enfermeria', label: 'Servicios de Enfermería' },
        { href: '/quienes-somos', label: 'Quiénes somos' },
    ];

    return (
        <div className="
            h-7 aspect-square lg:hidden
            text-white-1"
        >
            {/* Burger icon */}
            <button
                onClick={toggleMenu}
                className="pressable w-full h-full z-110 relative"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
            >
                <div className={`
                    h-0.5 w-full bg-white-1
                    absolute top-1 left-0
                    transition-transform duration-200 ease-[var(--ease-out-premium)]
                    ${isOpen ? ' rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-white-1
                    absolute left-0 top-1/2 -translate-y-1/2
                    transition-opacity duration-150 ease-out
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-white-1
                    absolute bottom-1 left-0
                    transition-transform duration-200 ease-[var(--ease-out-premium)]
                    ${isOpen ? ' -rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
            </button>
            {/* Actual menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Cerrar menú"
                            className="fixed inset-0 z-90 bg-black/30 backdrop-blur-[2px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            className="fixed top-0 left-0 z-100 w-full h-[60vh] pt-mob-header-height px-8 bg-mainblue-original shadow-xl"
                            initial={{ opacity: 0, transform: 'translateY(-100%)' }}
                            animate={{ opacity: 1, transform: 'translateY(0)' }}
                            exit={{ opacity: 0, transform: 'translateY(-100%)' }}
                            transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
                        >
                            <motion.ul
                                className="w-full h-full flex flex-col justify-center items-end gap-8 text-xl font-semibold text-white-1"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
                                }}
                            >
                                {links.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        variants={{
                                            hidden: { opacity: 0, transform: 'translateY(-8px)' },
                                            visible: { opacity: 1, transform: 'translateY(0)' },
                                        }}
                                    >
                                        <Link href={link.href} className="pressable block px-2 py-1" onClick={toggleMenu}>
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BurgerMenu
