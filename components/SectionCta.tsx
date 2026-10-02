import CenteredP from "./reusable-ui/CenteredP"
import Eyebrow from "./reusable-ui/Eyebrow"
import PillCtaBtn from "./reusable-ui/PillCtaBtn"
import { organization } from "@/data/organization"

const SectionCta = () => {
    return (
    <section className="
        px-8 py-24
        md:px-16 md:py-32
        xl:px-32 xl:py-40
        flex flex-col items-center justify-center
        bg-lightblue-200"
    >
        <Eyebrow
            text="ESTAMOS AQUÍ PARA TI"
            centered
        />
        <h2 className="
            w-full md:w-2/3 mx-auto
            mb-4 md:mb-8
            text-most-h2 text-center text-mainblue-original font-semibold
            leading-10 md:leading-16"
        >
            Tu bienestar merece atención personalizada
        </h2>
        <CenteredP
            text="Cuéntanos qué necesitas y recibe orientación sobre nuestros servicios. Estamos aquí para ayudarte a dar el siguiente paso."
            smaller
        />
        <PillCtaBtn
            href={organization.whatsappUrl}
            label="Contáctanos"
            centered
        />
    </section>
    )
}

export default SectionCta
