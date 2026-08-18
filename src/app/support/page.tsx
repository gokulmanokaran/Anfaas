"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  LifeBuoy,
  Headphones,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const supportSections = [
  {
    id: "technical",
    title: "Technical Assistance",
    subtitle: "Machinery maintenance & guides",
    icon: LifeBuoy,
    color: "bg-red-600",
    image: "/support-technical.png",
    description: "Expert troubleshooting and maintenance support for all industrial machinery, including CNC lathes and material handling equipment.",
    details: [
      "24/7 technical helpdesk for emergency machine breakdowns",
      "Comprehensive maintenance schedules and preventive care guides",
      "On-site engineer visits for complex repairs and installations",
      "Original spare parts procurement and compatibility checks"
    ]
  },
  {
    id: "customer",
    title: "Customer Care",
    subtitle: "Order status & inquiries",
    icon: Headphones,
    color: "bg-zinc-900",
    image: "/support-customer.png",
    description: "Dedicated support for order tracking, general inquiries, and specialized industrial solutions tailored to your business needs.",
    details: [
      "Real-time order tracking and logistics updates",
      "Custom product quotations and industrial consulting",
      "Billing and invoice support with flexible payment terms",
      "Feedback and suggestion portal for service improvement"
    ]
  }
];

export default function SupportPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
                Support Center
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Industrial Support <br />
                <span className="text-red-600">Reimagined</span>
              </h1>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Expert assistance, dedicated customer care, and rapid response for all your industrial equipment needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Support Sections Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-32">
          {supportSections.map((section, idx) => (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <FadeIn direction={idx % 2 === 0 ? "left" : "right"}>
                  <div className="space-y-4">
                    <div className={`w-14 h-14 mx-auto lg:mx-0 rounded-full ${section.color} flex items-center justify-center shadow-lg`}>
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-red-600 font-bold uppercase tracking-widest text-[9px]">
                      {section.subtitle}
                    </p>
                    <p className="text-zinc-500 text-[13px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left max-w-2xl mx-auto lg:mx-0">
                    {section.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-zinc-50/80 border border-zinc-100">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-zinc-700 font-bold leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <a
                      href="tel:+966565301513"
                      className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold text-[13px] shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Call for Support
                    </a>
                    <Link href="/under-development">
                      <button className="px-7 py-3.5 rounded-full border border-zinc-200 text-zinc-500 font-bold text-[13px] hover:bg-zinc-50 transition-all">
                        Open Support Ticket
                      </button>
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Visual Accent */}
              <div className="flex-1 w-full max-w-lg">
                <FadeIn direction={idx % 2 === 0 ? "right" : "left"} delay={0.2}>
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-[0_32px_80px_rgba(0,0,0,0.1)] group">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx < 2}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                    
                    {/* Active support badge from image */}
                    {idx === 1 && (
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-white shadow-sm z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Active Support</span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-12 lg:gap-24">
          <div className="flex items-center gap-3">
            <Clock className="w-7 h-7 text-zinc-300" />
            <div>
              <p className="text-lg font-black text-zinc-800 leading-tight">24/7</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Response</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-7 h-7 text-zinc-300" />
            <div>
              <p className="text-lg font-black text-zinc-800 leading-tight">Regional</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Support Coverage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-zinc-300" />
            <div>
              <p className="text-lg font-black text-zinc-800 leading-tight">100%</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Original Parts</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
