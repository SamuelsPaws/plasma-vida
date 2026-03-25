import Link from "next/link";
import numToPriceStr from "../../utils/numToPriceStr";

interface CatalogItemCardProps {
    imgUrl: string;
    title: string;
    descriptionList: string[];
    price: number;
    slug: string;
}

const CatalogItemCard = ({ imgUrl, title, descriptionList, price, slug }: CatalogItemCardProps) => {

  return (
    <div className="
        w-full h-[420px] lg:h-[540px] p-4 lg:p-6 place-self-center
        flex flex-col gap-2 lg:gap-6
        bg-white-1 rounded-2xl shadow-sm"
    >
        {/* Div with image */}
        <div className="h-[50%] lg:h-[55%] rounded-2xl overflow-hidden">
            <img
            src={imgUrl}
            className="w-full h-full object-cover drag-none"
            alt=""
            />
        </div>
        {/* Div with title, desc, price and button */}
        <div className="
            flex-1
            flex flex-col justify-between"
        >
            <div className="w-full">
                <p className="lg:mb-2 text-lg lg:text-xl font-bold">{title}</p>
                {descriptionList.map((el, index) => (
                    <p
                        key={index}
                        className="mt-1 text-xs lg:text-[0.85rem] text-gray-600"
                    ><i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}</p>
                ))}
            </div>
            {/* Div with button and price */}
            <div className="flex justify-between items-end">
                <Link
                    href={`/catalogo/${slug}`}
                    className="
                        px-4 py-2
                        bg-blue-700 lg:hover:bg-blue-800 duration-200
                        text-white-1 text-sm lg:text-md rounded-full"
                >Ver producto</Link>
                <div className="text-md lg:text-lg text-[#a69742] font-semibold">
                    ${numToPriceStr(price)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogItemCard