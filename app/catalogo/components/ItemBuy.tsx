'use client'
import { motion } from "motion/react";
import { useState } from "react";
import { CatalogItem } from "@/lib/models/catalogItem";

const ItemBuy = ({ item }: { item: CatalogItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="
        absolute right-0 bottom-0
        h-10 lg:h-12"
    >
        {!isOpen &&
          <button
            onClick={() => setIsOpen(true)}
            className="
              px-4 h-full
              bg-blue-700 text-md lg:text-lg text-white-1 rounded-full"
          >Comprar</button>
        }
        {/* Options slider */}
        {isOpen &&
          <motion.div
            className="
              h-full pr-2
              border border-gray-300 rounded-md"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-full h-full flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="h-full aspect-square text-xl lg:text-2xl text-gray-700"
              >
                <i className="fa fa-times"></i>
              </button>
              <a
                href={`https://wa.me/+593978774224?text=¡Hola! Me interesa comprar: ${item ? item.title : ''}`}
                target="_blank"
                className="
                  h-[80%] px-4
                  grid place-content-center
                  text-white-1 text-sm lg:text-md
                  bg-green-600 rounded-full"
              >WhatsApp</a>
              <a
                href="tel:+593978774224"
                className="
                  h-[80%] px-4
                  grid place-content-center
                  text-white-1 text-sm lg:text-md
                  bg-black rounded-full"
              >
                <i className="fa fa-phone"></i>
              </a>
              <a
                href={`mailto:cpaciente1626@gmail.com?subject=¡Hola! Me interesa comprar: ${item ? item.title : ''}`}
                className="
                  h-[80%] px-4
                  grid place-content-center
                  text-white-1 text-sm lg:text-md
                  bg-black rounded-full"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </motion.div>
          </motion.div>
        }
    </div>
  )
}

export default ItemBuy