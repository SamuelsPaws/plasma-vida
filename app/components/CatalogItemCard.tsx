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
        w-full h-[540px] p-6
        flex flex-col gap-6
        bg-white-1 rounded-2xl shadow-sm"
    >
        {/* Div with image */}
        <div className="h-[55%] rounded-2xl overflow-hidden">
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
                <p className="mb-2 text-xl font-bold">{title}</p>
                <p className="text-md text-gray-600">{description}</p>
            </div>
            {/* Div with button and price */}
            <div className="flex justify-between items-end">
                <button className="
                    px-4 py-2
                    bg-blue-700 lg:hover:bg-blue-800 duration-200
                    text-white-1 text-md rounded-full"
                >Ver producto</button>
                <div className="text-lg text-[#74671d]">
                    ${numToPriceStr(price)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogItemCard