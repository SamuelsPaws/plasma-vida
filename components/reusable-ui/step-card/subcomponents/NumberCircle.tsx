interface Props {
    num: number;
}

const NumberCircle = ({ num }: Props) => {
    return (
    <div className="
        absolute top-4 left-4
        w-8 md:w-10 aspect-square
        flex justify-center items-center
        bg-lightblue-200
        text-my-md text-mainblue-light-2 font-semibold
        rounded-full"
    >
        {num}
    </div>
    )
}

export default NumberCircle