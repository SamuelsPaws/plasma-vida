import clsx from "clsx";
import React from "react";

interface CustomSerumHorVProps {
    name: string;
    isHomeo: boolean | null;
    setIsHomeo: React.Dispatch<React.SetStateAction<boolean | null>>;
    thisHomeo: boolean;
}

const CustomSerumHorV = ({ name, isHomeo, setIsHomeo, thisHomeo }: CustomSerumHorVProps) => {
    const isSelected = isHomeo === thisHomeo;

    const handleClick = () => {
        if (isSelected) {
            setIsHomeo(null)
        } else {
            setIsHomeo(thisHomeo)
        }
    }

  return (
    <div
        onClick={handleClick}
        className={clsx(
            'flex-1 text-md lg:text-xl',
            'pressable grid place-content-center cursor-pointer transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-out-premium)]',
            !isSelected && 'lg:hover:bg-[#b1cff6] lg:hover:border-[#b1cff6]',
            isSelected ? 'bg-mainblue-original text-white-1' : 'bg-white-1 text-gray-600',
            'border border-gray-400 rounded-2xl'
        )}
    >{name}</div>
  )
}

export default CustomSerumHorV
