"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, Shield, Layout } from "lucide-react";

const storageData: Record<string, any> = {
  "office": {
    brand: "Stobin",
    title: "Office Storage",
    description: "Premium office organization solutions designed for maximum efficiency and modern aesthetics.",
    features: ["Space Optimization", "Durable Construction", "Modern Design"],
  },
  "tools": {
    brand: "Shuter",
    title: "Tools Storage",
    description: "Industrial-grade tool storage systems for professional workshops and manufacturing facilities.",
    features: ["Heavy-duty Loading", "Modular Configuration", "Secure Locking"],
  }
};

export default function StorageCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const brand = params.brand as string;
  
  const data = storageData[category] || {
    brand: brand.charAt(0).toUpperCase() + brand.slice(1),
    title: category.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
    description: "High-quality industrial storage solutions.",
    features: ["Industrial Grade", "Reliable Performance"]
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/storage" className="inline-flex items-center gap-2 text-zinc-400 text-sm mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Storage
            </Link>
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              {data.brand} Systems
            </span>
            <h1 className="text-4xl sm:text-7xl font-black text-white mb-6">
              {data.title}
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mb-10">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature: string, i: number) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  {i === 0 ? <Package /> : i === 1 ? <Shield /> : <Layout />}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature}</h3>
                <p className="text-zinc-500 text-sm">Engineered for performance and reliability in industrial environments.</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-zinc-900 rounded-[3rem] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a custom storage plan?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Our specialists can help you design the perfect storage layout for your facility.</p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
