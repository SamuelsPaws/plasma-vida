import Link from "next/link"

interface HomeCategoryCardProps {
    title: string;
    descriptionParagraphs: string[];
    href: string;
    linkText: string;
    imageUrl: string;
}

const HomeCategoryCard = ({ title, descriptionParagraphs, href, linkText, imageUrl }: HomeCategoryCardProps) => {
  return (
    <div className="lg:px-8">
        {/* Div with 3 parts */}
        <div className="
            w-full
            flex flex-col lg:flex-row
            items-center gap-y-8 lg:gap-y-8 flex-wrap"
        >
            {/* Div with title and image */}
            <div className="
                flex-1 lg:min-w-[300px]
                flex flex-col items-center justify-center gap-2"
            >
                {/* Title */}
                <h4 className="
                    text-2xl lg:text-4xl
                    text-sky-800 text-center font-bold"
                >
                    {title}
                </h4>
                {/* Image */}
                <div className="
                    w-full lg:w-auto
                    h-[300px] lg:h-auto
                    lg:w-full lg:max-w-[340px] lg:aspect-square
                    rounded-2xl overflow-hidden"
                >
                    <img
                        src={imageUrl}
                        className="w-full h-full object-contain"
                        alt=""
                    />
                </div>
            </div>
            {/* Description */}
            <div className="
                lg:flex-1 lg:min-w-[340px] px-6 lg:px-12
                flex flex-col justify-center items-center gap-4
                text-sky-800"
            >
                {descriptionParagraphs.map((el, index) =>
                    <p key={index} className="text-lg lg:text-xl text-center">{el}</p>
                )}
            </div>
            {/* Link */}
            <div className="flex-1 self-stretch grid place-content-center">
                <Link
                    href={href}
                    className="
                        lg:min-w-[300px] px-6 py-4
                        bg-teal-600
                        text-md lg:text-xl text-white-1 rounded-full"
                >
                    {linkText}<i className="fa fa-arrow-right scale-90 ml-2"></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeCategoryCard