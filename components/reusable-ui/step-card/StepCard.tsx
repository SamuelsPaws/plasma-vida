import CustomIcon, { IconId } from "../../CustomIcon";
import IconCircle from "./subcomponents/IconCircle";
import NumberCircle from "./subcomponents/NumberCircle";

interface Props {
    num: number;
    iconId: IconId;
    title: string;
    copy: string;
}

const StepCard = ({ num, iconId, title, copy }: Props) => {
    return (
    <div className="
        w-full md:w-85 relative
        p-8
        flex flex-col items-center
        bg-white-1
        rounded-2xl"
    >
        <NumberCircle num={num} />
        <IconCircle iconId={iconId} />
        <h3 className="
            mb-4
            text-my-lg text-mainblue-original text-center
            font-semibold tracking-wide"
        >
            {title}
        </h3>
        <p className="text-my-sm text-gray-600 text-center">
            {copy}
        </p>
    </div>
    )
}

export default StepCard