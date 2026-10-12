'use client'
import { AnimatePresence, motion } from "motion/react";
import { actionVariants, motionTransitions } from "@/lib/motion"
import { useState } from "react";
import { Product } from "@/lib/models/product";
import { organization } from "@/data/organization";

const ItemBuy = ({ item }: { item: Product }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div layout className="h-12 lg:h-12" transition={motionTransitions.layout}>
      <AnimatePresence mode="wait" initial={false}>
      {!isOpen ?
        <motion.button
          key="buy"
          onClick={() => setIsOpen(true)}
          className="
            px-4 h-full
            bg-blue-700 text-md lg:text-lg text-white-1 rounded-full pressable"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >Comprar</motion.button>
      : /* Options slider */
        <motion.div
          key="actions"
          className="
            h-full pr-2
            border border-gray-600 rounded-md"
          variants={actionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
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
              href={organization.whatsappUrlFor(`¡Hola! Me interesa comprar: ${item ? item.title : ''}`)}
              target="_blank"
              className="
                h-[80%] px-4
                grid place-content-center
                text-white-1 text-sm lg:text-md
                bg-green-600 rounded-full pressable"
            >WhatsApp</a>
            <a
              href={organization.phoneUrl}
              className="
                h-[80%] px-4
                grid place-content-center
                text-white-1 text-sm lg:text-md
                bg-black rounded-full pressable"
            >
              <i className="fa fa-phone"></i>
            </a>
            <a
              href={`${organization.emailUrl}?subject=${encodeURIComponent(`¡Hola! Me interesa comprar: ${item ? item.title : ''}`)}`}
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

export default ItemBuy
