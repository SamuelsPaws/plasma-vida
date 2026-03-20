'use client'
import { useState } from "react"
import CustomSerumHorV from "./CustomSerumHorV";
import { motion } from "motion/react";
import CustomSerumHomeoOption from "./CustomSerumHomeoOption";
import type { CustomSerum } from "@/lib/models/customSerum";
import CustomSerumVitaOption from "./CustomSerumVitaOption";

interface CustomSerumContainerProps {
    customHomeoSerums: CustomSerum[];
    customVitaSerums: CustomSerum[];
}

const CustomSerumContainer = ({ customHomeoSerums, customVitaSerums }: CustomSerumContainerProps ) => {
    const [isHomeo, setIsHomeo] = useState<boolean | null>(null);

  return (
    <div className="
        w-full lg:w-[640px] p-6 lg:p-8 mx-auto
        bg-white-1 rounded-2xl"
    >
        <p className="
            mb-6 lg:mb-8
            font-semibold text-center text-xl lg:text-2xl text-gray-800"
        >
            Escoge las opciones que se adaptan a tus necesidades
        </p>
        <p className="mb-4 text-gray-600 text-md lg:text-lg">Me interesa un suero:</p>
        {/* Div with HorV */}
        <div className="w-full h-12 lg:h-16 flex gap-4 lg:gap-8">
            <CustomSerumHorV
                name="Homeopático"
                isHomeo={isHomeo}
                setIsHomeo={setIsHomeo}
                thisHomeo={true}
            />
            <CustomSerumHorV
                name="Vitamínico"
                isHomeo={isHomeo}
                setIsHomeo={setIsHomeo}
                thisHomeo={false}
            />
        </div>
        {isHomeo !== null && (
            <motion.div
                className="w-full mt-6 lg:mt-8"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.2, opacity: { delay: 0.2 } }}
            >
                <p className="
                    mb-6 lg:mb-8
                    text-md lg:text-lg text-gray-600"
                >Escoge tu suero {isHomeo ? 'homeopático' : 'vitamínico'}:</p>
                {/* Container div with homeo serums */}
                {isHomeo &&
                    <div className="w-full flex flex-col gap-4">
                        {customHomeoSerums.map((serum, index) => (
                            <CustomSerumHomeoOption
                                key={index}
                                name={serum.name}
                                description={serum.description}
                                price={serum.price}
                            />
                        ))}
                    </div>
                }
                {/* Container div with vita serums */}
                {!isHomeo &&
                    <div className="w-full flex flex-col gap-4">
                        {customVitaSerums.map((serum, index) => (
                            <CustomSerumVitaOption
                                key={index}
                                name={serum.name}
                                description={serum.description}
                                price={serum.price}
                            />
                        ))}
                    </div>
                }
            </motion.div>
        )}
    </div>
  )
}

export default CustomSerumContainer