'use client'
import BannerPages from "../components/BannerPages"
import AboutP from "./components/AboutP"
import ImagesGrid from "./components/ImagesGrid"

export default function About() {
    return (
        <main className="pt-mob-header-height lg:pt-header-height">
            {/* Banner */}
            <BannerPages
                title="¿Quiénes somos?"
            />
            <section className="
                lg:min-h-[400px] p-6 lg:p-12
                flex flex-col lg:flex-row gap-8
                bg-[#ececec]"
            >
                <div className="
                    w-full lg:w-[60%] px-8 lg:px-16 py-8
                    bg-white-1 rounded-2xl"
                >
                    <h2 className="
                        mb-4 lg:mb-4
                        text-2xl lg:text-3xl text-center lg:text-left font-bold lg:leading-10"
                    >Un equipo comprometido en ofrecer productos y servicios de calidad.</h2>
                    <AboutP margin={true}>Plasma Vida Center nació en Quito del esfuerzo y la determinación de cuatro personas que, movidas por la necesidad de crecer y salir adelante, decidieron construir algo con propósito.</AboutP>
                    <AboutP margin={false}>Más que un emprendimiento, somos un equipo comprometido con el bienestar natural del paciente, convencidos de que la salud debe tratarse con responsabilidad, calidez humana y verdadera vocación de servicio.</AboutP>
                    <h3 className="
                        my-4
                        text-xl lg:text-2xl text-sky-700 font-bold"
                    ><i className="fa fa-shield mr-2"></i>Nuestra Misión</h3>
                    <AboutP margin={true}>En Plasma Vida Center brindamos atención personalizada, ética y humana, enfocada en el bienestar integral de cada paciente. Nos especializamos en sueros y terapias diseñadas según las necesidades individuales, priorizando la seguridad y el fortalecimiento natural del organismo.</AboutP>
                    <AboutP margin={false}>Complementamos nuestros servicios con tratamientos de plasma y cuidado al adulto mayor, ofreciendo acompañamiento cercano y seguimiento continuo. Trabajamos con responsabilidad, compromiso y mejora constante para ofrecer una atención accesible, confiable y de calidad.</AboutP>
                    <h3 className="
                        my-4
                        text-xl lg:text-2xl text-sky-700 font-bold"
                    ><i className="fa fa-star-o mr-2"></i>Nuestra Visión</h3>
                    <AboutP margin={true}>Nuestra visión es consolidarnos como un referente en Quito en terapias de bienestar integral, destacándonos por nuestros sueros personalizados y un enfoque individualizado orientado a resultados reales. Aspiramos a expandir nuestros servicios a domicilio y a nivel nacional, facilitando el acceso a un cuidado profesional sin que la distancia sea una limitación.</AboutP>
                    <AboutP margin={true}>Buscamos fortalecer nuestras áreas especializadas, como el plasma articular y facial y el cuidado integral del adulto mayor, manteniendo siempre una atención humana, ética y cercana. Queremos ser reconocidos por nuestra calidad, compromiso y acompañamiento constante, generando un impacto positivo en cada paciente.</AboutP>
                    <AboutP margin={false}>Con el tiempo, buscamos convertirnos en un centro sólido, reconocido por su calidad humana y profesionalismo, generando oportunidades de empleo y crecimiento para personas que compartan nuestra filosofía de servicio y amor por la salud natural.</AboutP>
                </div>
                {/* Right div with images */}
                <ImagesGrid />
            </section>
        </main>
    )
}