"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AccessoryItem {
  name: string;
  src: string;
}

interface AccessoriesGridProps {
  items: AccessoryItem[];
}

export default function AccessoriesGrid({ items }: AccessoriesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
          className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.1)] border border-zinc-100 hover:border-red-100 transition-all duration-300"
        >
          <div className="relative aspect-square bg-white flex items-center justify-center p-8 overflow-hidden transition-colors duration-500">
            <Image
              src={item.src}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center text-center border-t border-zinc-50 bg-zinc-50/50">
            <h3 className="text-[15px] leading-tight font-bold text-zinc-800 group-hover:text-red-600 transition-colors">
              {item.name}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
