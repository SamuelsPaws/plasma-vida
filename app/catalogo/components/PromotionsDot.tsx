import clsx from "clsx";

interface PromotionsDotProps {
    keyProp: number;
    index: number;
    handleClick: () => void;
}

const PromotionsDot = ({ keyProp, index, handleClick }: PromotionsDotProps) => {

  return (
    <button
        type="button"
        aria-label={`Mostrar promoción ${keyProp + 1}`}
        aria-current={index === keyProp ? 'true' : undefined}
        className={clsx(
           "pressable w-1.5 aspect-square rounded-full shadow-sm transition-[transform,background-color] duration-200 ease-[var(--ease-out-premium)] cursor-pointer",
           index === keyProp ? 'bg-white-1 scale-125' : 'bg-white-1/60 scale-100'
        )}
        onClick={handleClick}
    />
  )
}

export default PromotionsDot
