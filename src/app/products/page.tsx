"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

/* ── All product data ─────────────────────────────────────── */
const categories = [
  {
    id: "material-handling",
    label: "Material Handling Equipment",
    description:
      "Complete range of electric warehouse logistics equipment — from forklifts to autonomous mobile robots — engineered for maximum productivity.",
    accent: "#0ea5e9",
    href: "/mhe",
    heroImage: "/hero_forklift.png",
    products: [
      { label: "Electric Pallet Trucks", image: "/Electric Pallet Trucks.webp", href: "/mhe/electric-pallet-trucks", desc: "Compact electric trucks for efficient pallet movement." },
      { label: "Stackers", image: "/stackers.webp", href: "/mhe/stackers", desc: "Reach and counterbalance stackers for tight spaces." },
      { label: "Electric Forklifts", image: "/Electric Forklifts.webp", href: "/mhe/electric-forklifts", desc: "Heavy-duty electric forklifts for industrial operations." },
      { label: "AMR", image: "/AMR.png", href: "/mhe/amr", desc: "Autonomous Mobile Robots for smart warehouse logistics." },
    ],
  },
  {
    id: "batteries",
    label: "Industrial Batteries",
    description:
      "Tubular lead-acid traction batteries built to DIN/BS standards — delivering exceptional cycle life and reliability for multi-shift operations.",
    accent: "#10b981",
    href: "/batteries/3pzb210",
    heroImage: "/hero_battery.png",
    products: [
      { label: "3PZB210 Battery", image: "/3pzb210.webp", href: "/batteries/3pzb210", desc: "210 Ah tubular battery — ideal for intensive daily cycles." },
      { label: "4PZS480 Battery", image: "/4pzs480.webp", href: "/batteries/4pzs480", desc: "480 Ah premium battery for heavy multi-shift operations." },
    ],
  },
  {
    id: "cnc-machining",
    label: "CNC Machining",
    description:
      "High-precision CNC Machining Centers engineered for heavy-duty industrial operations and maximum rigidity.",
    accent: "#ef4444",
    href: "/milling",
    heroImage: "/hero_milling.png",
    products: [
      { label: "CNC Milling", image: "/milling.png", href: "/milling", desc: "High-rigidity vertical and horizontal milling solutions." },
      { label: "CNC Turning", image: "/turning.jpg", href: "/turning", desc: "High-efficiency turning solutions for complex parts." },
    ],
  },
  {
    id: "conventional",
    label: "Conventional Machinery",
    description:
      "Reliable manual and conventional machinery for traditional industrial operations and specialized workshops.",
    accent: "#6366f1",
    href: "/conventional",
    heroImage: "/Geared%20Lathe%20Machine/3.png",
    products: [
      { label: "Geared Lathe Machines", image: "/Geared%20Lathe%20Machine/1.png", href: "/conventional/geared-lathe-machine", desc: "Traditional manual lathes for precision workshops." },
      { label: "Milling Machines", image: "/Milling%20Machines/h-250.png", href: "/conventional/milling-machines", desc: "Conventional milling machines for versatile metalworking." },
    ],
  },
  {
    id: "metal-forming",
    label: "Metal Forming",
    description:
      "Comprehensive solutions for metal sheet processing, bending, and forming with high accuracy and consistency.",
    accent: "#8b5cf6",
    href: "/metal-forming",
    heroImage: "/laser-cutting/enclosed type double pallet laser cutting machine H series.png",
    products: [
      { label: "Laser Cutting", image: "/laser-cutting/open type large bed laser cutting machine GS series.png", href: "/metal-forming/laser-cutting", desc: "High-speed precision laser cutting for metals." },
    ],
  },
  {
    id: "accessories",
    label: "Industrial Accessories",
    description:
      "Essential industrial accessories and spare parts to ensure the longevity and efficiency of your machinery.",
    accent: "#14b8a6",
    href: "/accessories",
    heroImage: "/Milling%20Accessories.png",
    products: [
      { label: "Milling Accessories", image: "/Milling%20Accessories.png", href: "/accessories", desc: "High-quality tooling for milling machinery." },
      { label: "Lathe Accessories", image: "/Lathe%20Accessories.png", href: "/accessories", desc: "Precision tooling for turning centers." },
    ],
  },
  {
    id: "lubricants",
    label: "Industrial Lubricants",
    description:
      "High-performance industrial lubricants formulated for extreme pressure, temperature stability, and extended equipment life.",
    accent: "#f59e0b",
    href: "/lubricants",
    heroImage: "/hero_lubricant.png",
    products: [
      { label: "Industrial Oil Drums", image: "/drum2.jpg", href: "/lubricants", desc: "Bulk lubricant supply in premium 200L drums." },
      { label: "Heavy Duty Lubricants", image: "/heavy%20dudy.webp", href: "/lubricants", desc: "Extreme-pressure formulas for demanding environments." },
    ],
  },
  {
    id: "industrial-tires",
    label: "Industrial Tyres",
    description:
      "Solid rubber and pneumatic industrial tires for forklifts, material handling equipment, and heavy-duty OTR applications.",
    accent: "#64748b",
    href: "/industrial-tires",
    heroImage: "/industrial-tires.png",
    products: [
      { label: "Solid Forklift Tires", image: "/industrial-tires.png", href: "/industrial-tires", desc: "Puncture-proof solid rubber tires for intensive warehouse use." },
    ],
  },
  {
    id: "plastic-injection",
    label: "Plastic Injection Molding Machines",
    description:
      "High-efficiency plastic injection molding machines for high-volume production of precision plastic components.",
    accent: "#ef4444",
    href: "/plastic-injection-molding",
    heroImage: "/plastic%20injection%20molding%20machine/dream%20series.png",
    products: [
      { label: "Cresto Series", image: "/plastic%20injection%20molding%20machine/cresto.png", href: "/plastic-injection-molding", desc: "Advanced injection units for precision molding." },
      { label: "Dream Series", image: "/plastic%20injection%20molding%20machine/dream%20series.png", href: "/plastic-injection-molding", desc: "High-speed reliable plastic injection systems." },
    ],
  },
];

/* ── Animation helpers ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-50 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 mb-8">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-red-600">Products</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight leading-[1.08] mb-6"
          >
            Our <span className="text-red-600">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-zinc-500 max-w-2xl leading-relaxed"
          >
            Ten world-class product categories — engineered for industrial excellence,
            trusted by 500+ enterprises across the region.
          </motion.p>

          {/* Category quick-jump pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-bold px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-red-300 hover:text-red-600 transition-all duration-200"
              >
                {cat.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Category Sections ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-32">
        {categories.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
            >
              <div className="space-y-3">
                {/* Number badge */}
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-xl text-xs font-black text-white"
                  style={{ background: cat.accent }}
                >
                  {String(catIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                  {cat.label}
                </h2>
                <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">
                  {cat.description}
                </p>
              </div>
              <Link
                href={cat.href}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: cat.accent }}
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Divider with accent line */}
            <div className="h-px w-full bg-zinc-100 mb-10 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-0 top-0 h-0.5 rounded-full"
                style={{ background: cat.accent }}
              />
            </div>

            {/* Hero image + product grid row */}
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Category hero card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block sticky top-24"
              >
                <Link href={cat.href} className="group block">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 shadow-[0_24px_60px_rgba(0,0,0,0.15)]">
                    <Image
                      src={cat.heroImage}
                      alt={cat.label}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div
                        className="h-0.5 w-8 rounded-full mb-3"
                        style={{ background: cat.accent }}
                      />
                      <p className="text-white font-bold text-base">{cat.label}</p>
                      <p className="text-zinc-400 text-xs mt-1 flex items-center gap-1 group-hover:text-white transition-colors">
                        Explore range <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Product cards grid */}
              <div className={`grid gap-5 ${
                cat.products.length <= 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : cat.products.length <= 4
                  ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
              }`}>
                {cat.products.map((product, pIdx) => (
                  <motion.div
                    key={product.label}
                    custom={pIdx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <Link
                      href={product.href}
                      className="group flex flex-col h-full bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-zinc-200 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative aspect-square bg-zinc-50 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.label}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Accent glow on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                          style={{ background: `radial-gradient(circle at center, ${cat.accent}, transparent 70%)` }}
                        />
                      </div>

                      {/* Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-sm font-bold text-zinc-800 group-hover:text-red-600 transition-colors leading-snug mb-1">
                          {product.label}
                        </h3>
                        <p className="text-xs text-zinc-500 leading-relaxed flex-grow">
                          {product.desc}
                        </p>
                        <div className="flex items-center gap-1 mt-3 text-[11px] font-bold" style={{ color: cat.accent }}>
                          View Details <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA Banner ── */}
      <section className="mx-6 lg:mx-8 mb-20 rounded-3xl bg-zinc-900 p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Can&apos;t find what you need?
            </h2>
            <p className="text-zinc-400 text-base max-w-lg">
              Our team will source the exact industrial product you require. Get in touch and we&apos;ll respond within 24 hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-red-600 text-white font-bold text-base hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_32px_rgba(220,38,38,0.35)]"
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
