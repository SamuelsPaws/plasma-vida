import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface CustomSerumHorVProps {
    name: string;
    isHomeo: boolean | null;
    setIsHomeo: React.Dispatch<React.SetStateAction<boolean | null>>;
    thisHomeo: boolean;
}

const CustomSerumHorV = ({ name, isHomeo, setIsHomeo, thisHomeo }: CustomSerumHorVProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        const coincides = isHomeo === true && thisHomeo === true || isHomeo === false && thisHomeo === false;
        setIsSelected(coincides);
    }, [isHomeo]);

  return (
    <div
        onClick={() => {
            setIsHomeo(thisHomeo);
        }}
        className={clsx(
            'flex-1 text-md lg:text-xl',
            'grid place-content-center cursor-pointer duration-200',
            !isSelected && 'lg:hover:bg-[#b1cff6] lg:hover:border-[#b1cff6]',
            isSelected ? 'bg-mainblue-original text-white-1' : 'bg-white-1 text-gray-600',
            'border border-gray-400 rounded-2xl'
        )}
    >{name}</div>
  )
}

export default CustomSerumHorV