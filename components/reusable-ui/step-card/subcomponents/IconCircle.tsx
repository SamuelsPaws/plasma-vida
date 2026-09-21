import CustomIcon, { IconId } from "@/components/CustomIcon"

interface Props {
    iconId: IconId;
}

const IconCircle = ({ iconId }: Props) => {
    return (
    <div className="
        w-[35%] aspect-square
        mb-4
        flex justify-center items-center
        bg-lightblue-200
        text-5xl text-mainblue-light-2
        rounded-full"
    >
        <CustomIcon
            iconId={iconId}
        />
    </div>
    )
}

export default IconCircle