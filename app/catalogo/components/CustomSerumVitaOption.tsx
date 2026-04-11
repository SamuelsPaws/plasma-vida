import numToPriceStr from "@/app/utils/numToPriceStr";
import Link from "next/link";

interface CustomSerumVitaOptionProps {
    name: string;
    description: string;
    price: number;
    slug: string;
}

const CustomSerumVitaOption = ({ name, description, price, slug }: CustomSerumVitaOptionProps) => {
  return (
    <Link
        href={`/sueros-personalizados/vitaminicos/${slug}`}
        className="
            w-full p-4
            flex gap-4 lg:gap-8 group cursor-pointer
            border-2 border-sky-600 rounded-2xl"
    >
        <div className="
            flex-1 lg:group-hover:pl-2 duration-200
            flex flex-col gap-1 lg:gap-2"
        >
            <h3 className="text-md lg:text-lg text-sky-600 font-semibold">{name}</h3>
            <p className="text-md lg:text-md text-maingold-original font-semibold">${numToPriceStr(price)}</p>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="
            w-[10%] self-stretch lg:group-hover:pl-2 duration-200
            grid place-content-center
            text-xl lg:text-2xl text-sky-600"
        >
            <i className="fa fa-arrow-right" aria-hidden="false"></i>
        </div>
    </Link>
  )
}

export default CustomSerumVitaOption