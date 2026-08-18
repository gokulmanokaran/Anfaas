"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Enclosed Type Double Pallet Laser Cutting Machine H Series",
    src: "/laser-cutting/enclosed type double pallet laser cutting machine H series.png",
  },
  {
    name: "Open Type Large Bed Laser Cutting Machine GS Series",
    src: "/laser-cutting/open type large bed laser cutting machine GS series.png",
  },
  {
    name: "Open Type Laser Cutting Machine G Series",
    src: "/laser-cutting/open type laser cutting machine G series.png",
  },
];

export default function LaserCuttingPage() {
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
            Laser <span className="text-red-600">Cutting Machines</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 max-w-2xl mx-auto text-lg"
          >
            Explore our state-of-the-art laser cutting systems designed for high-speed precision and ultimate industrial reliability.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.1)] border border-zinc-100 hover:border-red-100 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-8 overflow-hidden transition-colors duration-500 border-b border-zinc-50">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={500}
                    height={400}
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center text-center bg-zinc-50/50">
                  <h3 className="text-[17px] leading-tight font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h3>
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
