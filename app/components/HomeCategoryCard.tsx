'use client'
import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface HomeCategoryCardProps {
    title: string;
    descriptionParagraphs: string[];
    href: string;
    linkText: string;
    imageUrl: string;
    imgW: number;
    imgH: number;
    imgClassName?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.065
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        transform: 'translateY(16px)'
    },
    visible: {
        opacity: 1,
        transform: 'translateY(0)',
        transition: {
            duration: 0.42,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
        }
    },
}

const HomeCategoryCard = ({
    title,
    descriptionParagraphs,
    href,
    linkText,
    imageUrl,
    imgW,
    imgH,
    imgClassName
}: HomeCategoryCardProps) => {
  return (
    <motion.div
        className="
            w-full lg:px-8
            flex flex-col lg:flex-row
            items-center gap-y-6 lg:gap-y-8 flex-wrap"
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-80px 0px' }}
    >
        {/* Div with title and image */}
        <motion.div
            className="
                w-full
                lg:w-auto lg:flex-1 lg:min-w-[300px]
                flex flex-col items-center justify-center gap-2"
            variants={itemVariants}
        >
            {/* Title */}
            <h3 className="
                mb-4 md:mb-8 text-2xl lg:text-4xl
                text-black text-center font-semibold leading-12"
            >
                {title}
            </h3>
            {/* Image */}
            <Image
                src={imageUrl}
                width={imgW}
                height={imgH}
                sizes="(min-width: 1024px) 340px, 100%)"
                className={clsx(
                    "w-full h-[240px] relative",
                    "object-cover media-zoom",
                    "md:w-full md:h-auto md:max-w-[340px] md:aspect-square",
                    "rounded-4xl overflow-hidden shadow-md",
                    imgClassName
                )}
                alt={title}
            />
        </motion.div>
        {/* Description */}
        <motion.div
            className="
                lg:flex-1 lg:min-w-[340px] px-4 lg:px-12
                flex flex-col justify-center items-center gap-4
                text-sky-800"
            variants={itemVariants}
        >
            {descriptionParagraphs.map((el, index) => (
                <p
                    key={index}
                    className="text-gray-600 text-center leading-6 md:leading-8"
                >
                    {el}
                </p>
            ))}
        </motion.div>
        {/* Link */}
        <motion.div
            className="lg:flex-1 self-stretch grid place-content-center"
            variants={itemVariants}
        >
            <Link
                href={href}
                className="
                    px-6 py-4
                    md:px-8 md:py-4
                    bg-br-gold-main
                    text-my-md text-white-1 whitespace-nowrap
                    rounded-full btn-hover pressable"
            >
                {linkText}
                <CustomIcon
                    iconId="arrowR"
                    className="ml-2"
                />
            </Link>
        </motion.div>
    </motion.div>
  )
}

export default HomeCategoryCard
