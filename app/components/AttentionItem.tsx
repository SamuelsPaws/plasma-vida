'use client'
import CustomIcon, { IconId } from "@/components/CustomIcon"
import { smoothReveal } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    iconId: IconId;
    title: string;
    copy: string;
}

const AttentionItem = ({ iconId, title, copy }: Props) => {
    return (
    <motion.div
        className="
            w-full md:w-full
            flex flex-col gap-2 md:gap-2"
        variants={smoothReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <div className="text-my-xl text-mainblue-original">
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <h3 className="text-mainblue-original text-my-lg font-semibold tracking-wide">
            {title}
        </h3>
        <p className="text-my-md text-gray-600">
            {copy}
        </p>
    </motion.div>
    )
}

export default AttentionItem