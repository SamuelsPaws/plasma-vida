import numToPriceStr from "../utils/numToPriceStr";

interface CatalogItemCardProps {
    imgUrl: string;
    title: string;
    description: string;
    price: number;
}

const CatalogItemCard = ({ imgUrl, title, description, price }: CatalogItemCardProps) => {
  return (
    <div className="
        w-full h-[420px] lg:h-[540px] p-4 lg:p-6
        flex flex-col gap-4 lg:gap-6
        bg-white-1 rounded-2xl shadow-sm"
    >
        {/* Div with image */}
        <div className="h-[60%] lg:h-[55%] rounded-2xl overflow-hidden">
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
                <p className="text-sm lg:text-md text-gray-600">{description}</p>
            </div>
            {/* Div with button and price */}
            <div className="flex justify-between items-end">
                <button className="
                    px-4 py-2
                    bg-blue-700 lg:hover:bg-blue-800 duration-200
                    text-white-1 text-sm lg:text-md rounded-full"
                >Ver producto</button>
                <div className="text-md lg:text-lg text-[#74671d]">
                    ${numToPriceStr(price)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogItemCard