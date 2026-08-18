"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Package, ChevronRight } from "lucide-react";

const products = [
  { label: "Electric Pallet Trucks", href: "/mhe/electric-pallet-trucks", image: "/Electric Pallet Trucks.webp" },
  { label: "Stackers", href: "/mhe/stackers", image: "/stackers.webp" },
  { label: "Electric Forklifts", href: "/mhe/electric-forklifts", image: "/Electric Forklifts.webp" },
  { label: "AMR", href: "/mhe/amr", image: "/AMR.png" },
  { label: "Order Pickers", href: "/mhe/order-pickers", image: "/Order Pickers.webp" },
  { label: "Reach Trucks", href: "/mhe/reach-trucks", image: "/Reach Trucks.webp" },
  { label: "Tow Tractors", href: "/mhe/tow-tractors", image: "/Tow Tractors.webp" },
  { label: "Very Narrow Aisle Trucks", href: "/mhe/very-narrow-aisle-trucks", image: "/Very Narrow Aisle Trucks.webp" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function MHEOverviewPage() {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-left space-y-6"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-red-500 mb-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20"
            >
              Full Range
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Material Handling <br />
              <span className="text-red-600">Equipments</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Discover our comprehensive range of high-performance material handling solutions designed for efficiency, safety, and reliability in any industrial environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Link 
                  href={product.href}
                  className="group block bg-white rounded-[2.5rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-red-100 hover:shadow-[0_24px_64px_rgba(220,38,38,0.08)] transition-all duration-500"
                >
                  <div className="aspect-square bg-zinc-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white group-hover:shadow-inner transition-all duration-500 relative">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-zinc-200">
                        <Package className="w-16 h-16 mb-2" />
                        <span className="text-xs font-bold uppercase tracking-widest">No Image</span>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="mt-8 space-y-3 px-2">
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors duration-300">
                      {product.label}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-red-500 transition-all duration-300">
                      Explore Product <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
