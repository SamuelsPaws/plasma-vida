import clsx from "clsx";
import React from "react";

type Interval = ReturnType<typeof setInterval>;

interface PromotionsDotProps {
    keyProp: number;
    index: number;
    handleClick: () => void;
}

const PromotionsDot = ({ keyProp, index, handleClick }: PromotionsDotProps) => {

  return (
    <div
        className={clsx(
           "w-1.5 aspect-square rounded-full shadow-sm duration-500 cursor-pointer",
           index === keyProp ? 'bg-white-1' : 'bg-white-1/60'
        )}
        onClick={handleClick}
    ></div>
  )
}

export default PromotionsDot