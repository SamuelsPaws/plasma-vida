import Link from "next/link"

interface ServiceCategoryCardProps {
    title: string;
    descriptionParagraphs: string[];
    href: string;
    linkText: string;
    imageUrl: string;
}

const ServiceCategoryCard = ({ title, descriptionParagraphs, href, linkText, imageUrl }: ServiceCategoryCardProps) => {
  return (
    <div className="lg:px-8">
        <h4 className="mb-8 text-2xl lg:text-4xl text-sky-800 text-center font-bold">{title}</h4>
        {/* Div with 3 parts */}
        <div className="
            w-full
            flex flex-col lg:flex-row gap-y-8 lg:gap-y-8 flex-wrap"
        >
            {/* Image */}
            <div className="
                lg:flex-1 w-full lg:w-auto h-[300px] lg:h-[420px] lg:min-w-[400px]
                rounded-2xl overflow-hidden"
            >
                <img
                    src={imageUrl}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            {/* Description */}
            <div className="
                lg:flex-1 lg:min-w-[400px] px-6 lg:px-16
                flex flex-col justify-center items-center gap-4
                text-sky-800"
            >
                {descriptionParagraphs.map((el, index) =>
                    <p key={index} className="text-lg lg:text-xl text-center">{el}</p>
                )}
            </div>
            {/* Link */}
            <div className="flex-1 grid place-content-center">
                <Link
                    href={href}
                    className="
                        lg:min-w-[200px] px-4 lg:px-6 py-2 lg:py-4
                        flex justify-center items-center
                        text-lg lg:text-xl text-white-1 bg-teal-500 rounded-full"
                >
                    {linkText}<i className="fa fa-arrow-right scale-90 ml-2"></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCategoryCard