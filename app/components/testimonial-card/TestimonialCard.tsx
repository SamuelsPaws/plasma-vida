import { IconId } from "@/components/CustomIcon";
import PhotoCircle from "./subcomponents/PhotoCircle";
import IconCircle from "./subcomponents/IconCircle";

interface Props {
    name: string;
    descriptor: string;
    imgSrc?: string;
    message: string;
}

const TestimonialCard = ({ name, descriptor, imgSrc, message }: Props) => {
    return (
    <div className="
        w-full md:w-85 relative
        p-8
        flex flex-col items-center
        bg-white-1
        rounded-2xl border border-gray-300"
    >
        <IconCircle />
        <PhotoCircle src={imgSrc} />
        <h3 className="
            mb-2
            text-my-lg text-mainblue-original text-center
            font-semibold tracking-wide"
        >
            {name}
        </h3>
        <span className="
            block mb-4
            text-my-sm text-gray-500 text-center"
        >
            {descriptor}
        </span>
        <p className="text-my-sm text-gray-600 text-center">
            {message}
        </p>
    </div>
    )
}

export default TestimonialCard