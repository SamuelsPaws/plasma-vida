import clsx from "clsx";

interface PromotionsDotProps {
    keyProp: number;
    index: number;
    handleClick: () => void;
}

const PromotionsDot = ({ keyProp, index, handleClick }: PromotionsDotProps) => {

  return (
    <button
        onClick={handleClick}
        className="h-[60%] w-4 aspect-square grid place-content-center"
    >
      <div className={clsx(
           "w-1.5 aspect-square rounded-full shadow-sm duration-500 cursor-pointer",
           index === keyProp ? 'bg-white-1' : 'bg-white-1/60'
        )}
      ></div>
    </button>
  )
}

export default PromotionsDot