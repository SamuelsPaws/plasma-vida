'use client'
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NursingService } from "@/lib/models/nursingService";

const ItemRequest = ({ item }: { item: NursingService }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div layout className="h-12 lg:h-12" transition={{ type: 'spring', duration: 0.35, bounce: 0.08 }}>
      <AnimatePresence mode="wait" initial={false}>
      {!isOpen ?
        <motion.button key="request"
          onClick={() => setIsOpen(true)}
          className="
            px-4 h-full
            bg-blue-700 text-md lg:text-lg text-white-1 rounded-full pressable"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >Solicitar</motion.button>
      : /* Options slider */
        <motion.div
          key="actions"
          className="
            h-full pr-2
            border border-gray-300 rounded-md"
          initial={{ opacity: 0, transform: 'translateX(10px) scale(0.97)' }}
          animate={{ opacity: 1, transform: 'translateX(0) scale(1)' }}
          exit={{ opacity: 0, transform: 'translateX(6px) scale(0.98)' }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="w-full h-full flex items-center gap-2 lg:gap-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="pressable h-full aspect-square text-xl lg:text-2xl text-gray-700"
            >
              <i className="fa fa-times"></i>
            </button>
            <a
              href={`https://wa.me/+593978774224?text=¡Hola! Me interesa solicitar: ${item ? item.title : ''}`}
              target="_blank"
              className="
                h-[80%] px-4
                grid place-content-center
                text-white-1 text-sm lg:text-md
                bg-green-600 rounded-full pressable"
            >WhatsApp</a>
            <a
              href="tel:+593978774224"
              className="
                h-[80%] px-4
                grid place-content-center
                text-white-1 text-sm lg:text-md
                bg-black rounded-full pressable"
            >
              <i className="fa fa-phone"></i>
            </a>
            <a
              href={`mailto:cpaciente1626@gmail.com?subject=¡Hola! Me interesa solicitar: ${item ? item.title : ''}`}
              className="
                h-[80%] px-4
                grid place-content-center
                text-white-1 text-sm lg:text-md
                bg-black rounded-full pressable"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      }
      </AnimatePresence>
    </motion.div>
  )
}

export default ItemRequest
