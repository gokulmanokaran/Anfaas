"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Package } from "lucide-react";

const products = [
  {
    nameEng: "CW6163B/CW6263B/CW6180Q/CW6280Q/CW6194Q/CW6294Q Horizontal Lathe",
    nameCh: "CW6163B/CW6263B/CW6180Q/CW6280Q/CW6194Q/CW6294Q 普通/加高车床",
    src: "/Geared%20Lathe%20Machine/1.png",
  },
  {
    nameEng: "CW6180B/CW6180D Horizontal Lathe",
    nameCh: "CW6180B/CW6180D 普通/大轴孔车床",
    src: "/Geared%20Lathe%20Machine/2.png",
  },
  {
    nameEng: "CW61100D/CW61100Q Horizontal Lathe",
    nameCh: "CW61100D/CW61100Q 加高大轴孔/加高车床",
    src: "/Geared%20Lathe%20Machine/3.png",
  },
  {
    nameEng: "CW61100B/CW61125B Horizontal Lathe",
    nameCh: "CW61100B/CW61125B 普通/加高车床",
    src: "/Geared%20Lathe%20Machine/4.png",
  },
  {
    nameEng: "CW61140B/CW61160B Horizontal Lathe",
    nameCh: "CW61140B/CW61160B 普通加高车床",
    src: "/Geared%20Lathe%20Machine/5.png", // Assuming user uploads 5.png later
  },
];

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-50 text-zinc-400">
        <Package className="w-12 h-12 mb-2 opacity-50" />
        <span className="text-xs font-medium uppercase tracking-widest">Image Coming Soon</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
};

export default function GearedLatheMachinePage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 mb-6"
          >
            Geared Lathe <span className="text-red-600">Machines</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 max-w-2xl mx-auto text-lg"
          >
            Explore our extensive range of conventional geared lathe machines, combining heavy-duty construction with reliable precision for versatile turning operations.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.1)] border border-zinc-100 hover:border-red-100 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-white flex items-center justify-center overflow-hidden transition-colors duration-500 border-b border-zinc-50">
                  <ProductImage src={item.src} alt={item.nameEng} />
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center text-center bg-zinc-50/30">
                  <h3 className="text-[13px] font-bold text-zinc-400 mb-2 font-mono">
                    {item.nameCh}
                  </h3>
                  <h2 className="text-xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors leading-tight">
                    {item.nameEng}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
