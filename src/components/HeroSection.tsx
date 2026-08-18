"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

const carouselSlides = [
  {
    image: "/hero_forklift.png",
    label: "Material Handling",
    tag: "Forklifts & Warehousing",
    href: "/mhe",
    glow: "from-sky-500/50 via-blue-400/20 to-transparent",
    accent: "#0ea5e9",
    badge: "#0284c7",
    badgeShadow: "rgba(2,132,199,0.55)",
    objectFit: "cover",
  },
  {
    image: "/hero_battery.png",
    label: "Industrial Batteries",
    tag: "Traction & Motive Power",
    href: "/batteries/3pzb210",
    glow: "from-emerald-500/50 via-green-400/20 to-transparent",
    accent: "#10b981",
    badge: "#059669",
    badgeShadow: "rgba(5,150,105,0.55)",
    objectFit: "cover",
  },
  {
    image: "/hero_milling.png",
    label: "CNC Milling",
    tag: "Precision Machining Centers",
    href: "/milling",
    glow: "from-red-500/50 via-orange-400/20 to-transparent",
    accent: "#ef4444",
    badge: "#DC2626",
    badgeShadow: "rgba(220,38,38,0.55)",
    objectFit: "cover",
  },
  {
    image: "/hero_lubricant.png",
    label: "Industrial Lubricants",
    tag: "High-Performance Oils",
    href: "/lubricants",
    glow: "from-amber-500/50 via-yellow-400/20 to-transparent",
    accent: "#f59e0b",
    badge: "#d97706",
    badgeShadow: "rgba(217,119,6,0.55)",
    objectFit: "cover",
  },
  {
    image: "/industrial-tires.png",
    label: "Industrial Tires",
    tag: "Heavy-Duty & OTR",
    href: "/industrial-tires",
    glow: "from-zinc-500/50 via-slate-400/20 to-transparent",
    accent: "#64748b",
    badge: "#475569",
    badgeShadow: "rgba(71,85,105,0.55)",
    objectFit: "contain",
  },
];

const N = carouselSlides.length;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % N), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + N) % N), []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 2000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white" id="home">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-zinc-100 to-zinc-50 opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-40 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-zinc-100 to-white opacity-80" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 sm:pt-40 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left content ── */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-zinc-900"
            >
              Powering
              <br className="hidden sm:block" />
              <span className="text-red-600"> Industrial</span>
              <br />
              Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Engineered solutions for industries that demand performance, precision, and reliability.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/products"
                id="hero-explore-btn"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-red-600 text-white font-bold text-base sm:text-sm shadow-[0_8px_32px_rgba(220,38,38,0.25)] hover:bg-red-700 hover:shadow-[0_12px_40px_rgba(220,38,38,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-6 border-t border-zinc-100"
            >
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Clients" },
                { value: "99.8%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-xl sm:text-2xl font-bold text-zinc-900">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Mobile Hero Image (Visible on mobile/tablet only) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:hidden relative w-full aspect-square max-w-[400px] mx-auto mt-12 bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent z-10" />
              <Image
                src={carouselSlides[active].image}
                alt="Industrial Equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl">
                  <p className="text-white font-bold text-sm leading-tight">{carouselSlides[active].label}</p>
                  <p className="text-zinc-400 text-[10px] mt-1 font-medium">{carouselSlides[active].tag}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Premium 6-slide 3D Carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex flex-col items-center gap-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Carousel Stage */}
            <div className="relative w-full" style={{ perspective: "1400px", height: "430px" }}>
              {carouselSlides.map((slide, idx) => {
                const offset = (idx - active + N) % N;
                const isfront = offset === 0;
                const isRight = offset === 1;
                const isLeft = offset === N - 1;
                const visible = isfront || isRight || isLeft;

                const translateX = isfront ? 0 : isRight ? 230 : -230;
                const translateZ = isfront ? 0 : -200;
                const rotateY = isfront ? 0 : isRight ? 25 : -25;
                const scale = isfront ? 1 : 0.7;
                const opacity = isfront ? 1 : visible ? 0.5 : 0;
                const zIndex = isfront ? 30 : visible ? 10 : 0;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => { if (!isfront && visible) setActive(idx); }}
                    animate={{ translateX, translateZ, rotateY, scale, opacity }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-165px",
                      width: "330px",
                      height: "400px",
                      zIndex,
                      cursor: !isfront && visible ? "pointer" : "default",
                      transformStyle: "preserve-3d",
                      pointerEvents: visible ? "auto" : "none",
                    }}
                    className="rounded-3xl overflow-hidden shadow-2xl"
                  >
                    {/* Glow halo behind front card */}
                    {isfront && (
                      <div
                        className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${slide.glow} blur-3xl -z-10`}
                      />
                    )}

                    {/* Card body */}
                    <div className="w-full h-full relative bg-zinc-900 flex flex-col">
                      {/* Grid overlay */}
                      <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />

                      {/* Accent top bar */}
                      <div
                        className="h-1 w-full shrink-0"
                        style={{ background: `linear-gradient(90deg, transparent, ${slide.accent}, transparent)` }}
                      />

                      {/* Image */}
                      <div className="flex-1 relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{ background: `radial-gradient(circle at center, ${slide.accent}, transparent 70%)` }}
                        />
                        <Image
                          src={slide.image}
                          alt={slide.label}
                          fill
                          sizes="330px"
                          priority={idx < 3}
                          loading={idx < 3 ? "eager" : "lazy"}
                          className="relative z-10 transition-transform duration-700"
                          style={{
                            objectFit: slide.objectFit as "contain" | "cover",
                            padding: slide.objectFit === "contain" ? "24px" : "0",
                            filter: isfront ? `drop-shadow(0 6px 24px ${slide.accent}99)` : "none",
                          }}
                        />
                      </div>

                      {/* Bottom info strip — front card only */}
                      <AnimatePresence>
                        {isfront && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.35 }}
                            className="px-5 py-4 flex items-center justify-between bg-zinc-800/70 backdrop-blur-sm border-t border-white/5 shrink-0"
                          >
                            <div>
                              <p className="text-white font-bold text-sm leading-tight">{slide.label}</p>
                              <p className="text-zinc-400 text-[11px] mt-0.5 font-medium">{slide.tag}</p>
                            </div>
                            <Link prefetch={true} href={slide.href} onClick={(e) => e.stopPropagation()}>
                              <motion.div
                                animate={{
                                  boxShadow: [
                                    `0 0 10px ${slide.badgeShadow}`,
                                    `0 0 22px ${slide.badgeShadow}`,
                                    `0 0 10px ${slide.badgeShadow}`,
                                  ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                                style={{ background: slide.badge }}
                              >
                                <ArrowRight className="w-4 h-4 text-white" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Controls: prev | dots | next */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 text-zinc-600" />
              </button>

              <div className="flex items-center gap-2">
                {carouselSlides.map((slide, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActive(idx)}
                    animate={{
                      width: active === idx ? 24 : 6,
                      backgroundColor: active === idx ? slide.accent : "#d4d4d8",
                    }}
                    transition={{ duration: 0.35 }}
                    className="h-1.5 rounded-full"
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-4 h-4 text-zinc-600" />
              </button>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-10 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] p-5 border border-zinc-100 z-40"
            >
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-1">Industries Served</p>
              <p className="text-3xl font-bold text-zinc-900">50+</p>
              <p className="text-xs text-zinc-400 mt-1">Sectors worldwide</p>
            </motion.div>

            {/* Floating ISO badge */}
            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-4 bg-zinc-900 rounded-2xl shadow-xl p-4 z-40"
            >
              <p className="text-xs text-zinc-400 font-medium mb-0.5">ISO Certified</p>
              <p className="text-white font-bold text-sm">9001:2015</p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Scroll</p>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
