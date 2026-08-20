"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Package,
  LifeBuoy,
  Headphones,
  HelpCircle,
} from "lucide-react";

/* ─── Custom Icons ───────────────────────────────────── */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

/* ─── Recursive Navigation Data ──────────────────────── */
type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
  isMegaMenu?: boolean;
  isSupport?: boolean;
  image?: string;
};

const navData: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Products",
    children: [
      {
        label: "Material Handling Equipment",
        href: "/mhe",
        isMegaMenu: true,
        children: [
          { label: "Electric Pallet Trucks", href: "/mhe/electric-pallet-trucks", image: "/Electric Pallet Trucks.webp" },
          { label: "Stackers", href: "/mhe/stackers", image: "/stackers.webp" },
          { label: "Electric Forklifts", href: "/mhe/electric-forklifts", image: "/Electric Forklifts.webp" },
          { label: "AMR", href: "/mhe/amr", image: "/AMR.png" },
          { label: "Order Pickers", href: "/mhe/order-pickers", image: "/Order Pickers.webp" },
          { label: "Reach Trucks", href: "/mhe/reach-trucks", image: "/Reach Trucks.webp" },
          { label: "Tow Tractors", href: "/mhe/tow-tractors", image: "/Tow Tractors.webp" },
          { label: "Very Narrow Aisle Trucks", href: "/mhe/very-narrow-aisle-trucks", image: "/Very Narrow Aisle Trucks.webp" },
        ],
      },
      {
        label: "Industrial Batteries",
        href: "/batteries/3pzb210",
        children: [
          {
            label: "Traction Battery",
            children: [
              { label: "3PZB210", href: "/batteries/3pzb210" },
              { label: "4PZS480", href: "/batteries/4pzs480" },
              { label: "6PZB600", href: "/batteries/6pzb600" },
            ],
          },
        ],
      },
      {
        label: "CNC & Machining Tools",
        children: [
          { label: "Milling Centers", href: "/milling" },
          { label: "Turning Centers", href: "/turning" },
          { label: "CNC Tools", href: "/cnc-tools" },
          { label: "Tool Holders", href: "/tool-holders" },
          { label: "CNC Chucks", href: "/chuck" },
          { label: "Cutting Tools", href: "/cutting-tools" },
        ],
      },
      {
        label: "Measuring & Gauges",
        children: [
          { label: "Measuring Instruments", href: "/measuring-instruments" },
          { label: "Gauges", href: "/gauges" },
          { label: "Industrial Accessories", href: "/accessories" },
          { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
        ],
      },
      {
        label: "Conventional Machinery",
        href: "/conventional",
        children: [
          {
            label: "Milling Machines",
            href: "/conventional/milling-machines",
          },
          {
            label: "Grinding Machines",
            href: "/under-development",
          },
          {
            label: "Geared Lathe Machine",
            href: "/conventional/geared-lathe-machine",
          },
          {
            label: "Tapping Machine",
            href: "/under-development",
          },
          {
            label: "Drilling",
            href: "/under-development",
          },
          {
            label: "Bandsaw Machines",
            href: "/under-development",
          },
        ],
      },
      {
        label: "Metal Forming",
        href: "/metal-forming",
        children: [
          { label: "Laser Cutting", href: "/metal-forming/laser-cutting" },
          { label: "Laser Marking", href: "/under-development" },
        ],
      },
      {
        label: "Storage",
        href: "/storage",
        children: [
          { label: "Office Storage", href: "/under-development" },
          { label: "Tools Storage", href: "/under-development" },
        ],
      },
      {
        label: "Lubricants & Fluids",
        children: [
          { label: "Industrial Lubricants", href: "/lubricants" },
          { label: "Coolants & Fluids", href: "/coolant" },
          { label: "Industrial Grease", href: "/industrial-grease" },
          { label: "Axis Oil", href: "/axis-oil" },
          { label: "Distilled Water", href: "/distilled-water" },
        ],
      },
      {
        label: "Industrial Tyres",
        href: "/industrial-tires",
      },
      {
        label: "Plastic Injection Molding Machines",
        href: "/plastic-injection-molding",
      },
    ],
  },
  {
    label: "Locations",
    children: [
      { label: "Dammam HQ", href: "/locations/dammam" },
      { label: "Riyadh Served", href: "/locations/riyadh" },
      { label: "Jeddah Served", href: "/locations/jeddah" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
  },
  {
    label: "Carrier",
    href: "/carrier",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Support",
    href: "/support",
  },
];

/* ─── Desktop Multi-Level Dropdown Component ─────────── */
function DesktopMenuItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 120);
  };

  const hasChildren = (item.children && item.children.length > 0) || item.isSupport;

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href ? (
        <Link
          href={item.href}
          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
            depth === 0
              ? `text-[13px] xl:text-sm font-semibold tracking-tight ${
                  isOpen
                    ? "text-red-600 bg-red-50/90 font-bold"
                    : "text-zinc-700 hover:text-red-600 hover:bg-red-50/70"
                }`
              : `text-sm font-medium whitespace-nowrap justify-between w-full ${
                  isOpen ? "text-red-600 bg-red-50" : "text-zinc-600 hover:text-red-600 hover:bg-red-50"
                }`
          }`}
        >
          <span>{item.label}</span>
          {hasChildren &&
            (depth === 0 ? (
              <ChevronDown
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-red-600" : "text-zinc-400 group-hover:text-red-600"
                }`}
              />
            ) : (
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "text-red-600" : "text-zinc-400"
                }`}
              />
            ))}
        </Link>
      ) : (
        <button
          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
            depth === 0
              ? `text-[13px] xl:text-sm font-semibold tracking-tight ${
                  isOpen
                    ? "text-red-600 bg-red-50/90 font-bold"
                    : "text-zinc-700 hover:text-red-600 hover:bg-red-50/70"
                }`
              : `text-sm font-medium whitespace-nowrap justify-between w-full ${
                  isOpen ? "text-red-600 bg-red-50" : "text-zinc-600 hover:text-red-600 hover:bg-red-50"
                }`
          }`}
        >
          <span>{item.label}</span>
          {depth === 0 ? (
            <ChevronDown
              className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180 text-red-600" : "text-zinc-400 group-hover:text-red-600"
              }`}
            />
          ) : (
            <ChevronRight
              className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                isOpen ? "text-red-600" : "text-zinc-400"
              }`}
            />
          )}
        </button>
      )}

      {hasChildren && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: depth === 0 ? 8 : 0, x: depth === 0 ? 0 : 8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: depth === 0 ? 4 : 0, x: depth === 0 ? 0 : 4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`absolute ${depth === 0 ? "top-full mt-1.5" : "top-0"} ${
                item.isMegaMenu
                  ? `${
                      item.children!.length <= 2 ? "w-[380px]" : "w-[550px]"
                    } bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.12)] border border-zinc-100 p-5 z-50 ${
                      depth === 0 ? "left-0" : "left-full ml-1"
                    }`
                  : item.isSupport
                  ? `w-[650px] bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.12)] border border-zinc-100 p-6 z-50 right-0`
                  : `left-0 min-w-[240px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-zinc-100 p-2 z-50 ${
                      depth === 0 ? "" : "left-full ml-1"
                    }`
              }`}
            >
              {item.isMegaMenu ? (
                <div className={`grid gap-3 ${item.children!.length <= 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {item.children!.map((child, idx) => (
                    <Link
                      key={idx}
                      href={child.href || "#"}
                      className="group flex flex-col gap-2 p-2.5 rounded-2xl hover:bg-red-50/50 transition-all duration-300 border border-transparent hover:border-red-100"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="h-20 bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center p-2 group-hover:bg-white group-hover:shadow-[0_4px_16px_rgba(220,38,38,0.08)] transition-all duration-300">
                        {child.image ? (
                          <Image
                            src={child.image}
                            alt={child.label}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-zinc-300">
                            <Package className="w-7 h-7 mb-1" />
                            <span className="text-[10px] font-medium">No Image</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-1 px-1">
                        <span className="text-[13px] font-bold text-zinc-800 group-hover:text-red-600 transition-colors block leading-tight">
                          {child.label}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-medium group-hover:text-red-500/80 transition-colors flex items-center gap-1">
                          View Details <ChevronRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : item.isSupport ? (
                <div className="grid grid-cols-2 gap-8">
                  {/* Left: Support Links */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-4">
                        Support Channels
                      </h4>
                      <div className="space-y-2">
                        {[
                          {
                            icon: LifeBuoy,
                            label: "Technical Assistance",
                            desc: "Machinery maintenance & guides",
                            href: "/support#technical",
                          },
                          {
                            icon: Headphones,
                            label: "Customer Care",
                            desc: "Order status & inquiries",
                            href: "/support#customer",
                          },
                        ].map((s, i) => (
                          <Link key={i} href={s.href} onClick={() => setIsOpen(false)}>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer border border-transparent hover:border-zinc-100"
                            >
                              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                                <s.icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-zinc-800 group-hover:text-red-600 transition-colors">
                                  {s.label}
                                </p>
                                <p className="text-[11px] text-zinc-500 group-hover:text-zinc-600">{s.desc}</p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Premium FAQ */}
                  <div className="bg-zinc-50/50 rounded-2xl p-5 border border-zinc-100">
                    <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" /> Quick Q&A
                    </h4>
                    <div className="space-y-4">
                      {[
                        { q: "Battery Maintenance?", a: "Regular distilled water top-ups are essential." },
                        { q: "On-site Engineers?", a: "Available for maintenance across the region." },
                        { q: "Response Time?", a: "We typically respond to inquiries within 24 hours." },
                      ].map((faq, i) => (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.08 }}
                          key={i}
                          className="space-y-1"
                        >
                          <p className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-red-600" /> {faq.q}
                          </p>
                          <p className="text-[11px] text-zinc-500 pl-2.5 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-zinc-200">
                      <Link prefetch={true} href="/support" onClick={() => setIsOpen(false)}>
                        <button className="w-full py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-zinc-50 hover:border-red-200 hover:text-red-600 transition-all shadow-sm cursor-pointer">
                          View Support Center
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                item.children!.map((child, idx) => (
                  <DesktopMenuItem key={idx} item={child} depth={depth + 1} />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ─── Mobile Accordion Component ─────────────────────── */
function MobileMenuItem({
  item,
  setMobileOpen,
  depth = 0,
}: {
  item: NavItem;
  setMobileOpen: (v: boolean) => void;
  depth?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = (item.children && item.children.length > 0) || item.isSupport;

  return (
    <div className="w-full">
      {item.href && !hasChildren ? (
        <Link
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl transition-colors ${
            depth === 0
              ? "text-base font-bold text-zinc-900 hover:bg-red-50 hover:text-red-600"
              : "text-sm font-medium text-zinc-600 hover:bg-red-50 hover:text-red-600"
          }`}
        >
          {item.image && depth > 0 && (
            <div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 overflow-hidden shrink-0 flex items-center justify-center p-1.5 relative">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
          )}
          <span>{item.label}</span>
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
            depth === 0
              ? "text-base font-bold text-zinc-900 hover:bg-red-50 hover:text-red-600"
              : "text-sm font-medium text-zinc-600 hover:bg-red-50 hover:text-red-600"
          }`}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-red-600" : "text-zinc-400"
            }`}
          />
        </button>
      )}

      {hasChildren && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="ml-3 pl-3 border-l-2 border-red-100 py-1 space-y-1">
                {item.isSupport ? (
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      {[
                        { icon: LifeBuoy, label: "Technical Assistance", href: "/support#technical" },
                        { icon: Headphones, label: "Customer Care", href: "/support#customer" },
                        { icon: HelpCircle, label: "Q&A Section", href: "/support#qa" },
                      ].map((s, i) => (
                        <Link
                          key={i}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-red-50 transition-colors"
                        >
                          <s.icon className="w-4 h-4 text-red-600 shrink-0" />
                          <span className="text-sm font-medium text-zinc-700">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  item.children!.map((child, idx) => (
                    <MobileMenuItem
                      key={idx}
                      item={child}
                      setMobileOpen={setMobileOpen}
                      depth={depth + 1}
                    />
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ─── Main Navbar ────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-zinc-100"
          : "bg-white border-b border-zinc-100"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* ── Logo ── */}
        <Link prefetch={true} href="/" className="flex items-center gap-3 group shrink-0 select-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
            <img
              src="/logo.png"
              alt="ANFAAS AL AMAL Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="block text-xl sm:text-2xl font-black tracking-tight text-zinc-900 leading-tight">
              Anfaas<span className="text-red-600">arabia</span>.com
            </span>
            <div className="relative h-4 mt-0.5 flex items-center overflow-hidden min-w-[125px]">
              {/* Static Background Text (Light Gray) */}
              <span className="text-[9px] font-bold tracking-[0.06em] text-zinc-300 uppercase whitespace-nowrap">
                Performance That Never Stops
              </span>

              {/* Revealed Text (Brand Red) */}
              <motion.div
                className="absolute inset-y-0 left-0 flex items-center overflow-hidden z-10"
                animate={{ width: ["0%", "100%", "100%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, times: [0, 0.7, 0.9, 1], ease: "linear" }}
              >
                <span className="text-[9px] font-bold tracking-[0.06em] text-red-600 uppercase whitespace-nowrap">
                  Performance That Never Stops
                </span>
              </motion.div>

              {/* Moving Energy Spark */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center -translate-x-full"
                animate={{ left: ["0%", "100%", "100%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, times: [0, 0.7, 0.9, 1], ease: "linear" }}
              >
                <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-transparent to-red-500 blur-[0.5px] opacity-80" />
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_3px_rgba(220,38,38,1)] -ml-1" />
              </motion.div>
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-6 xl:ml-10 mr-auto">
          {navData.map((item, idx) => (
            <DesktopMenuItem key={idx} item={item} />
          ))}
        </div>

        {/* ── Right CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <motion.a
            href="https://wa.me/966565301513?text=Hello%20AnfaasArabia,%20I%20would%20like%20to%20inquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            title="Chat with us on WhatsApp"
          >
            <span className="absolute inset-0 rounded-xl border border-[#25D366] animate-ping opacity-30 pointer-events-none" />
            <WhatsAppIcon className="w-5 h-5 z-10" />
          </motion.a>

          <Link
            href="/#contact"
            id="nav-cta-btn"
            className="inline-flex items-center justify-center h-10 px-5 rounded-xl bg-red-600 text-white text-sm font-bold shadow-[0_4px_16px_rgba(220,38,38,0.35)] hover:bg-red-700 hover:shadow-[0_6px_22px_rgba(220,38,38,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-zinc-700 hover:bg-zinc-100/80 active:bg-zinc-200/60 transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ── Subtle accent line ── */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-zinc-100 shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navData.map((item, idx) => (
                <MobileMenuItem key={idx} item={item} setMobileOpen={setMobileOpen} />
              ))}

              {/* Mobile CTA */}
              <div className="pt-5 border-t border-zinc-100 space-y-3 mt-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+966565301513"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-zinc-100 text-sm font-bold text-zinc-700 hover:bg-zinc-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/966565301513?text=Hello%20AnfaasArabia,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3.5 rounded-xl bg-red-600 text-white text-sm font-bold shadow-[0_6px_20px_rgba(220,38,38,0.25)] hover:bg-red-700 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

