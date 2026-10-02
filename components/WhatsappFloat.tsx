import { organization } from "@/data/organization"

const WhatsappFloat = () => {
    return (
    <a
        href={organization.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
            fixed right-8 bottom-8 z-40
            w-16 h-16
            lg:w-16 lg:h-16
            grid place-content-center
            text-white-1 text-4xl lg:text-5xl
            bg-green-500 rounded-full shadow-lg whatsapp-float"
        aria-label="Chat on WhatsApp"
    >
        <i className="fa fa-whatsapp"></i>
    </a>
    )
}

export default WhatsappFloat
