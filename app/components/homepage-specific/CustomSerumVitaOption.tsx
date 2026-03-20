interface CustomSerumVitaOptionProps {
    name: string;
    description: string;
    price: number
}

const CustomSerumVitaOption = ({ name, description, price }: CustomSerumVitaOptionProps) => {
  return (
    <div className="
        w-full p-4
        flex gap-4 lg:gap-8 lg:group cursor-pointer
        border-2 border-green-600 rounded-2xl"
    >
        <div className="
            flex-1 group-hover:pl-2 duration-200
            flex flex-col gap-1 lg:gap-2"
        >
            <p className="text-md lg:text-lg text-black font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="
            w-[10%] self-stretch group-hover:pl-2 duration-200
            grid place-content-center
            text-xl lg:text-2xl text-green-600"
        >
            <i className="fa fa-arrow-right" aria-hidden="false"></i>
        </div>
    </div>
  )
}

export default CustomSerumVitaOption