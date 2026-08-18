"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

export default function MetalFormingPage() {
  const products = [
    { name: "Laser Cutting", href: "/metal-forming/laser-cutting", desc: "High-speed precision cutting for various metal thicknesses with extreme accuracy." },
    { name: "Laser Marking", href: "/metal-forming/laser-marking", desc: "Permanent, high-contrast industrial marking for traceability and branding." },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-7xl font-black text-white mb-6">
              Metal <span className="text-red-600">Forming</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-10">
              Advanced laser solutions for high-precision metal processing and industrial marking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 bg-zinc-100 relative overflow-hidden flex items-center justify-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Wrench className="w-10 h-10 text-zinc-400 group-hover:text-red-600 transition-colors" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  <Link 
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
                  >
                    Explore Technology <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
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
