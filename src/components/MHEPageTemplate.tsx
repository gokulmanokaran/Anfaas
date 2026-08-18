"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ArrowLeft, Zap, Weight, Gauge, Clock } from "lucide-react";
import Link from "next/link";

export type MHESpec = {
  label: string;
  value: string;
  icon?: React.ElementType;
};

export type MHEData = {
  category: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageLabel: string;
  imageSubLabel: string;
  badge?: string;
  specs: MHESpec[];
  features: string[];
  applications: string[];
  highlights?: { value: string; label: string }[];
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function MHEPageTemplate({ data }: { data: MHEData }) {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={fadeIn}>
            <Link prefetch={true} href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Material Handling Equipments
            </Link>
            <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-red-600 mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100 w-fit mx-auto lg:mx-0">
              {data.category}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
              {data.title} <br />
              <span className="text-red-600">{data.titleAccent}</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeIn} className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {data.description}
          </motion.p>

          {/* Highlight pills */}
          {data.highlights && (
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {data.highlights.map((h, i) => (
                <div key={i} className="text-center bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3">
                  <p className="text-2xl font-extrabold text-zinc-900">{h.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-0.5">{h.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link prefetch={true} href="/#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-red-600 text-white font-bold shadow-[0_8px_32px_rgba(220,38,38,0.25)] hover:bg-red-700 hover:-translate-y-1 transition-all duration-300">
              Get a Quote <ChevronRight className="w-5 h-5" />
            </Link>
            <Link prefetch={true} href="#specs" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-100 text-zinc-900 font-bold hover:bg-zinc-200 transition-all duration-300">
              View Specs
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative order-1 lg:order-2"
        >
          <div className="relative aspect-square md:aspect-[4/3] w-full bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] group">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-zinc-800 -z-10" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{data.imageLabel}</p>
                  <p className="text-zinc-300 text-sm mt-0.5">{data.imageSubLabel}</p>
                </div>
                {data.badge && (
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.4)]">
                    {data.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-20 lg:py-32 bg-zinc-50 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 mb-6">Technical Specifications</h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Built to the highest industrial standards for maximum reliability and performance.
            </p>
          </motion.div>

          {/* Spec Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32">
            {data.specs.map((spec, idx) => {
              const Icon = spec.icon || Zap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-red-100 hover:shadow-[0_16px_48px_rgba(220,38,38,0.06)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3">{spec.label}</p>
                  <p className="text-zinc-900 font-extrabold text-xl tracking-tight">{spec.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Features + Applications */}
          <div className="bg-zinc-900 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 overflow-hidden relative shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
              {/* Features */}
              <div className="space-y-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Key Features</h3>
                <ul className="space-y-5">
                  {data.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-zinc-300 text-base leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="space-y-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.applications.map((app, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
                    >
                      {app}
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center space-y-5 mt-4">
                  <p className="text-white font-bold text-lg">Request a Demo</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    See this equipment in action. Our team will arrange a live demonstration for you.
                  </p>
                  <Link prefetch={true} href="/#contact" className="block w-full py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300 shadow-[0_8px_24px_rgba(220,38,38,0.35)]">
                    Get in Touch
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
