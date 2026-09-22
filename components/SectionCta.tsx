import CenteredP from "./reusable-ui/CenteredP"
import Eyebrow from "./reusable-ui/Eyebrow"
import PillCtaBtn from "./reusable-ui/PillCtaBtn"

const SectionCta = () => {
    return (
    <section className="
        px-8 py-24
        md:px-16 md:py-32
        xl:px-32 xl:py-40
        flex flex-col items-center justify-center
        bg-mainblue-dark-1"
    >
        <Eyebrow
            text="ESTAMOS AQUÍ PARA TI"
            centered
        />
        <h2 className="
            w-full md:w-2/3 mx-auto
            mb-4 md:mb-8
            text-most-h2 text-center text-white-1 font-semibold
            leading-10 md:leading-16"
        >
            Tu bienestar merece atención personalizada
        </h2>
        <CenteredP
            text="Cuéntanos qué necesitas y recibe orientación sobre nuestros servicios. Estamos aquí para ayudarte a dar el siguiente paso."
            altColor="text-lightblue-200"
            smaller
        />
        <PillCtaBtn
            href="https://wa.me/593978774224?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20los%20productos%20o%20servicios%20de%20Plasma%20Vida%20Center."
            label="Contáctanos"
            centered
        />
    </section>
    )
}

export default SectionCta