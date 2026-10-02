import CustomIcon from "@/components/CustomIcon";
import CheckIcon from "./CheckIcon";

export type SupportingPointContent = {
    title: string;
    description: string;
};

const SupportingPoint = ({
    title,
    description,
}: SupportingPointContent) => {
    return (
        <li
            className="
                flex items-start gap-4"
        >
            <CheckIcon />
            <div
                className="
                    flex flex-col gap-2"
            >
                <h3
                    className="
                        text-my-md text-mainblue-original font-semibold leading-tight"
                >
                    {title}
                </h3>
                <p
                    className="
                        text-my-sm text-gray-600 leading-relaxed"
                >
                    {description}
                </p>
            </div>
        </li>
    );
};

export default SupportingPoint;
