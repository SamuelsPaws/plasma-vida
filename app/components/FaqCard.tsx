'use client'
import CustomIcon from "@/components/CustomIcon";
import ExpandableArea from "@/components/ExpandableArea";
import clsx from "clsx";
import { useState } from "react";

interface Props {
    question: string;
    answer: string;
}

const FaqCard = ({ question, answer }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev)
    }

    return (
    <button
        onClick={toggleExpanded}
        className="
            w-full group
            p-4
            md:px-8 md:py-6
            text-left
            border border-gray-300 rounded-xl
            md:hover:border-mainblue-original duration-200"
    >
        {/* Upper part */}
        <div className="
            w-full
            flex items-center justify-between"
        >
            <h3 className="
                flex-1
                text-my-lg text-mainblue-original font-semibold"
            >
                {question}
            </h3>
            <div className="
                w-8 md:w-10 aspect-square
                flex justify-center items-center
                bg-lightblue-200
                text-xl md:text-2xl text-mainblue-original
                rounded-full
                md:group-hover:bg-lightblue-300 duration-200"
            >
                <CustomIcon
                    iconId="plus"
                    className={clsx(isExpanded ? "-rotate-45" : "rotate-0", "duration-400")}
                />
            </div>
        </div>
        <ExpandableArea
            isExpanded={isExpanded}
            className="w-full"
        >
            <p className="
                mt-4
                text-my-md text-gray-600"
            >
                {answer}
            </p>
        </ExpandableArea>
    </button>
    )
}

export default FaqCard