"use client";

import FadeIn from "./FadeIn";
import { Shield, Zap, Trophy, Clock } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Unmatched Quality",
    description:
      "Every product is engineered to exceed international standards. ",
    accent: "red",
  },
  {
    icon: Shield,
    title: "Proven Durability",
    description:
      "Built for the harshest industrial environments, our equipment is tested rigorously to ensure longevity and consistent performance across decades.",
    accent: "dark",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    description:
      "Optimized for maximum throughput. Our solutions help operations run faster, smarter, and more efficiently — reducing downtime and increasing output.",
    accent: "red",
  },
  {
    icon: Clock,
    title: "Reliable Support",
    description:
      "Round-the-clock after-sales service, spare parts availability, and dedicated technical support teams ensure you're never left stranded.",
    accent: "dark",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">

          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-5 leading-tight">
            The ANFAAS AL AMAL
            <br />
            <span className="text-red-600">Our vision</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            To lead with innovation, reliability, and performance in every solution we deliver.
          </p>
        </FadeIn>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={idx * 0.1} direction="up">
                <div className="group relative h-full bg-white border border-zinc-100 rounded-3xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-400 overflow-hidden">
                  {/* Background hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${reason.accent === "red"
                        ? "bg-red-600 shadow-[0_4px_16px_rgba(220,38,38,0.35)]"
                        : "bg-zinc-900 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                        } group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-bold text-zinc-900 mb-3 text-lg group-hover:text-white transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>

                  {/* Number watermark */}
                  <div className="absolute bottom-4 right-5 text-7xl font-black text-zinc-50 group-hover:text-zinc-800 transition-colors duration-300 leading-none select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
