"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

export default function ConventionalPage() {
  const machines = [
    { name: "Manford Milling Machines", image: "/Milling.png", desc: "Precision high-speed milling solutions for complex machining tasks." },
    { name: "Esteam Milling Machines", image: "/Milling.png", desc: "Robust and reliable milling centers designed for heavy-duty industrial use." },
    { name: "Grinding Machines", image: "/Grinding Accessories.png", desc: "Surface and cylindrical grinding solutions for superior surface finishes." },
    { name: "Geared Lathe Machine", image: "/Lathe Accessories.png", desc: "High-torque geared lathes for heavy-duty metal turning operations." },
    { name: "Universal Milling", image: "/Milling.png", desc: "Versatile milling machines capable of vertical and horizontal operations." },
    { name: "Tapping Machine", image: "/Small Machinery.png", desc: "High-precision tapping and threading machines for production efficiency." },
    { name: "NC Milling", image: "/Milling.png", desc: "Numerically controlled milling machines for semi-automated precision." },
    { name: "Radial Drilling", image: "/Small Machinery.png", desc: "Heavy-duty radial drills for large-scale industrial hole making." },
    { name: "Bandsaw Machines", image: "/Small Machinery.png", desc: "High-performance metal cutting bandsaws for industrial production." },
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
              Conventional <span className="text-red-600">Machinery</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-10">
              Reliable, durable, and high-precision conventional machines for modern manufacturing.
              Our selection represents the pinnacle of manual and semi-automated industrial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 bg-zinc-100 relative overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-red-600 transition-colors">
                    {machine.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {machine.desc}
                  </p>
                  <Link
                    href={`/conventional/${machine.name.toLowerCase().replace(/ /g, "-")}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
                  >
                    View Technical Specs <ArrowLeft className="w-4 h-4 rotate-180" />
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
