import clsx from "clsx";
import React from "react";

type Interval = ReturnType<typeof setInterval>;

interface PromotionsDotProps {
    keyProp: number;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    intervalRef: Interval | null;
    createInterval: () => Interval;
    setIntervalRef: React.Dispatch<React.SetStateAction<Interval | null>>;
}

const PromotionsDot = ({ keyProp, index, setIndex, intervalRef, createInterval, setIntervalRef }: PromotionsDotProps) => {
    const handleClick = () => {
        if (index !== keyProp) {
            setIndex(keyProp);
            if (intervalRef !== null) {
                clearInterval(intervalRef);
                const newInterval = createInterval();
                setIntervalRef(newInterval);
            }
        }
    }

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