'use client'
import { motion, stagger } from "motion/react";
import Image from "next/image";
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
            delayChildren: stagger(0.2)
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
            duration: 0.4
        }
    }
}

const HomeCategoryCard = ({ title, descriptionParagraphs, href, linkText, imageUrl }: HomeCategoryCardProps) => {
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
                lg:flex-1 lg:min-w-[300px]
                flex flex-col items-center justify-center gap-2"
            variants={itemVariants}
        >
            {/* Title */}
            <h3 className="
                text-3xl lg:text-4xl
                text-sky-800 text-center font-bold"
            >
                {title}
            </h3>
            {/* Image */}
            <div className="
                w-full h-[300px]
                lg:w-full lg:h-auto lg:max-w-[340px] lg:aspect-square
                rounded-2xl relative"
            >
                <Image
                    src={imageUrl}
                    fill
                    sizes="(min-width: 1024px) 340px, 100%)"
                    className="object-contain"
                    alt={title}
                />
            </div>
        </motion.div>
        {/* Description */}
        <motion.div
            className="
                lg:flex-1 lg:min-w-[340px] px-4 lg:px-12
                flex flex-col justify-center items-center gap-4
                text-sky-800"
            variants={itemVariants}
        >
            {descriptionParagraphs.map((el, index) =>
                <p key={index} className="text-md lg:text-xl text-center">{el}</p>
            )}
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
                    bg-teal-500
                    text-md lg:text-xl text-white-1 rounded-full"
            >
                {linkText}<i className="fa fa-arrow-right scale-90 ml-2"></i>
            </Link>
        </motion.div>
    </motion.div>
  )
}

export default HomeCategoryCard