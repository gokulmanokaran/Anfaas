"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "material-handling",
    title: "Material Handling Equipment",
    image: "/Electric Forklifts.webp",
    href: "/mhe",
    description:
      "State-of-the-art forklifts, pallet trucks, and warehouse management systems engineered for peak operational efficiency.",
    highlights: ["Forklifts & Reach Trucks", "Pallet Movers", "Warehouse Systems"],
    delay: 0,
  },
  {
    id: "cnc-milling",
    title: "CNC Milling",
    image: "/Milling.png",
    href: "/milling",
    description:
      "High-precision CNC Milling Centers designed for heavy-duty industrial applications, offering maximum rigidity and accuracy.",
    highlights: ["High Precision", "Maximum Rigidity", "Heavy-Duty"],
    delay: 0.1,
  },
  {
    id: "conventional",
    title: "Conventional",
    image: "/logo.png",
    href: "/conventional",
    description:
      "Reliable manual and conventional machinery for traditional industrial operations and specialized workshops.",
    highlights: ["Manual Lathes", "Milling Machines", "Traditional Tooling"],
    delay: 0.2,
  },
  {
    id: "metal-forming",
    title: "Metal Forming",
    image: "/logo.png",
    href: "/metal-forming",
    description:
      "Comprehensive solutions for metal sheet processing, bending, and forming with high accuracy and consistency.",
    highlights: ["Laser Cutting", "Laser Marking", "Sheet Metal Tools"],
    delay: 0.3,
  },
  {
    id: "storage",
    title: "Storage",
    image: "/logo.png",
    href: "/storage",
    description:
      "Industrial racking and storage solutions designed to maximize warehouse space and optimize inventory management.",
    highlights: ["Stobin Systems", "Shuter Industrial", "Tools Storage"],
    delay: 0.4,
  },
  {
    id: "accessories",
    title: "Accessories",
    image: "/logo.png",
    href: "/accessories",
    description:
      "Essential industrial accessories and spare parts to ensure the longevity and efficiency of your machinery.",
    highlights: ["Machine Tooling", "Safety Equipment", "Spare Parts"],
    delay: 0.5,
  },
  {
    id: "industrial-lubricants",
    title: "Industrial Lubricants",
    image: "/drum1.jpg",
    href: "/lubricants",
    description:
      "High-performance synthetic and mineral lubricants engineered to protect machinery and extend component life.",
    highlights: ["Synthetic Oils", "Hydraulic Fluids", "Specialty Greases"],
    delay: 0.6,
  },
  {
    id: "industrial-tires",
    title: "Industrial Tyres",
    image: "/industrial-tires.png",
    href: "/industrial-tires",
    description:
      "Durable solid and pneumatic tires for forklifts and other material handling equipment in demanding environments.",
    highlights: ["Solid Tires", "Pneumatic Tires", "Press-on Bands"],
    delay: 0.7,
  },
  {
    id: "plastic-injection",
    title: "Plastic Injection Molding",
    image: "/logo.png",
    href: "/plastic-injection-molding",
    description:
      "High-efficiency plastic injection molding machines for high-volume production of precision plastic components.",
    highlights: ["Injection Units", "Molding Systems", "Automation Ready"],
    delay: 0.8,
  },
  {
    id: "industrial-batteries",
    title: "Industrial Batteries",
    image: "/4pzs480.webp",
    href: "/batteries/4pzs480",
    description:
      "Robust power solutions delivering reliable, long-lasting energy for material handling fleets and industrial UPS.",
    highlights: ["Traction Batteries", "Lithium-Ion", "Charging Solutions"],
    delay: 0.9,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-5 leading-tight">
            Comprehensive Industrial
            <br />
            <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Discover our extensive range of high-performance machinery, equipment, and consumables designed to elevate your industrial operations.
          </p>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <FadeIn key={product.id} delay={product.delay} direction="up">
              <motion.div
                className="group relative w-full h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                initial="initial"
                whileHover="hover"
              >
                {/* Clickable Link Cover */}
                <Link prefetch={true} href={product.href} className="absolute inset-0 z-30">
                  <span className="sr-only">View {product.title}</span>
                </Link>

                {/* Base Image with 3D Rotate Animation on Hover */}
                <motion.div
                  variants={{
                    initial: { scale: 1, rotateZ: 0 },
                    hover: { scale: 1.1, rotateZ: 2 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-white flex items-center justify-center p-8"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={product.delay < 0.3}
                    className="object-contain drop-shadow-2xl p-8"
                  />
                </motion.div>

                {/* Initial Gradient Overlay to make bottom text readable if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500 z-10" />

                {/* Initial Title (Visible when not hovered) */}
                <div className="absolute bottom-8 left-8 right-8 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {product.title}
                  </h3>
                </div>

                {/* Hover Details Overlay (Slide up and fade in) */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: "100%" },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-zinc-900/95 backdrop-blur-md p-8 flex flex-col justify-center z-20 border border-zinc-800 rounded-3xl"
                >
                  <motion.h3
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0, transition: { delay: 0.1 } },
                    }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {product.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                    }}
                    className="text-zinc-400 text-sm leading-relaxed mb-6"
                  >
                    {product.description}
                  </motion.p>

                  <motion.ul
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0, transition: { delay: 0.3 } },
                    }}
                    className="space-y-3 mb-8"
                  >
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      hover: { opacity: 1, x: 0, transition: { delay: 0.4 } },
                    }}
                    className="flex items-center gap-2 text-sm font-bold text-red-500 mt-auto group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
