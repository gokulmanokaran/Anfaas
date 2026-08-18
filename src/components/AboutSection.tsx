"use client";

import FadeIn from "./FadeIn";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  { year: "2003", label: "Founded" },
  // { year: "2008", label: "ISO Certified" },
  { year: "2015", label: "Global Expansion" },
  { year: "2023", label: "500+ Clients" },
];

const values = [
  "Precision-engineered products meeting international standards",
  "Dedicated after-sales support and maintenance services",
  "Tailored solutions for every industrial scale",
  "Committed to sustainability and energy efficiency",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual */}
          <FadeIn direction="left" className="relative group">
            {/* Premium Animated Image Container */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full lg:max-w-lg mx-auto shadow-[0_32px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <Image
                src="/about us image.jpg"
                alt="About Anfaas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />

              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-medium tracking-wider text-sm uppercase">EST. 2003</span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>

            {/* Timeline strip - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 space-y-3 z-10">
              {milestones.map((m, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  key={m.year}
                  className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-4 py-3 border border-white w-28 hover:border-red-200 transition-colors"
                >
                  <p className="text-red-600 font-bold text-sm">{m.year}</p>
                  <p className="text-zinc-600 text-xs font-medium">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-5 leading-tight">
                  Two Decades of
                  <br />
                  <span className="text-red-600">Industrial Trust</span>
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Since 2003, ANFAAS AL AMAL has been a cornerstone of industrial
                  reliability in the region. We specialize in sourcing and
                  delivering the most durable, high-performance machinery and
                  equipment for global industries.
                </p>
              </div>

              <ul className="space-y-4 max-w-xl mx-auto lg:mx-0">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-left">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
