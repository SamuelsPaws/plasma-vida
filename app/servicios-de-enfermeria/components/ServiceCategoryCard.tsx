'use client'
import { motion, stagger } from "motion/react";
import Link from "next/link";

interface HomeCategoryCardProps {
    title: string;
    descriptionParagraphs: string[];
    href: string;
    linkText: string;
    imageUrl: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.5)
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const ServiceCategoryCard = ({ title, descriptionParagraphs, href, linkText, imageUrl }: HomeCategoryCardProps) => {
  return (
    <motion.div
        className="
            w-full lg:px-8
            flex flex-col lg:flex-row
            items-center gap-y-8 lg:gap-y-8 flex-wrap"
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-80px 0px' }}
    >
        {/* Div with title and image */}
        <motion.div
            className="
                flex-1 lg:min-w-[300px]
                flex flex-col items-center justify-center gap-4"
            variants={itemVariants}
        >
            {/* Title */}
            <h4 className="
                text-2xl lg:text-4xl
                text-sky-800 text-center font-bold"
            >
                {title}
            </h4>
            {/* Image */}
            <div className="
                w-full lg:w-auto
                h-[300px] lg:h-auto
                lg:w-full lg:max-w-[380px] lg:aspect-square
                rounded-2xl overflow-hidden"
            >
                <img
                    src={imageUrl}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
        </motion.div>
        {/* Description */}
        <motion.div
            className="
                lg:flex-1 lg:min-w-[340px] px-6 lg:px-12
                flex flex-col justify-center items-center gap-4
                text-sky-800"
            variants={itemVariants}
        >
            {descriptionParagraphs.map((el, index) =>
                <p key={index} className="text-lg lg:text-xl text-center">{el}</p>
            )}
        </motion.div>
        {/* Link */}
        <motion.div
            className="flex-1 self-stretch grid place-content-center"
            variants={itemVariants}
        >
            <Link
                href={href}
                className="
                    px-6 py-4
                    bg-teal-600
                    text-md lg:text-xl text-white-1 rounded-full"
            >
                {linkText}<i className="fa fa-arrow-right scale-90 ml-2"></i>
            </Link>
        </motion.div>
    </motion.div>
  )
}

export default ServiceCategoryCard