"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

export default function StoragePage() {
  const categories = [
    { 
      name: "Stobin Storage Systems", 
      desc: "Specialized storage solutions including office optimization and personal security lockers.",
      items: ["Office Storage", "Personal Lockers"]
    },
    { 
      name: "Shuter Industrial Storage", 
      desc: "Premium industrial storage solutions for tools, medical supplies, and workshop efficiency.",
      items: ["Tools Storage", "Medical Storage", "Parts Cabinets", "Work Benches"]
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-7xl font-black text-white mb-6">
              Industrial <span className="text-red-600">Storage</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-10">
              High-quality storage solutions from Stobin and Shuter, designed for maximum organization and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-zinc-500 text-base leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  href="/storage"
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
                >
                  Browse Collection <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
