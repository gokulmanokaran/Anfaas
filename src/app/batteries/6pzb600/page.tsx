"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap, ShieldCheck, Battery, Gauge } from "lucide-react";
import Link from "next/link";

const specifications = [
  { label: "Nominal Capacity", value: "600 Ah", icon: Battery },
  { label: "Cell Type", value: "6PZB", icon: ShieldCheck },
  { label: "Cycle Life", value: "1,500+ Cycles", icon: Gauge },
  { label: "Technology", value: "Tubular Lead-Acid", icon: Zap },
];

const features = [
  "Advanced tubular positive plates for maximum cycle life and durability",
  "High energy density suitable for intensive multi-shift operations",
  "Fully insulated flexible bolt-on connectors for maximum safety",
  "Robust cell construction resistant to high mechanical stress",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Battery6PZB600Page() {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={fadeIn}>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-red-600 mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">
              Industrial Batteries
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
              Traction Battery <br />
              <span className="text-red-600">6PZB600</span>
            </h1>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Reliable and robust motive power solutions. Engineered for demanding industrial applications including forklifts, pallet trucks, and heavy-duty material handling equipment.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-red-600 text-white font-bold shadow-[0_8px_32px_rgba(220,38,38,0.25)] hover:bg-red-700 hover:-translate-y-1 transition-all duration-300">
              Get a Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="#specs" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-100 text-zinc-900 font-bold hover:bg-zinc-200 transition-all duration-300">
              View Specs
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="relative aspect-square md:aspect-[4/3] w-full bg-zinc-50 rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-zinc-100 group">
            <img 
              src="/6pzb600.webp" 
              alt="6PZB600 Traction Battery" 
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback pattern if no image */}
            <div className="absolute inset-0 bg-zinc-100 -z-10 flex items-center justify-center">
              <span className="text-zinc-400 font-medium text-sm text-center px-4">
                Update src="/6pzb600.webp" <br/> with your image filename
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Details Section */}
      <section id="specs" className="py-20 lg:py-32 bg-zinc-50 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 mb-6">Technical Excellence</h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">Built to international DIN / BS standards for ultimate compatibility and performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32">
            {specifications.map((spec, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-red-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <spec.icon className="w-7 h-7" />
                </div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3">{spec.label}</p>
                <p className="text-zinc-900 font-extrabold text-2xl tracking-tight">{spec.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-zinc-900 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 overflow-hidden relative shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Motive Power Excellence</h3>
                <ul className="space-y-6">
                  {features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-5"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative pt-8 lg:pt-0">
                <div className="w-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-[0_12px_40px_rgba(220,38,38,0.4)] shrink-0">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white">Energy Assurance</h4>
                    <p className="text-zinc-400 text-sm sm:text-base max-w-[280px] mx-auto leading-relaxed">Advanced tubular technology for maximum cycle life and reliability.</p>
                  </div>
                  <Link href="/#contact" className="w-full py-4 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center gap-2">
                    Request Technical Data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
