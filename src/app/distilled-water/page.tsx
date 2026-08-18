import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Distilled Water for Industrial Applications | ANFAAS AL AMAL",
  description:
    "High-purity industrial distilled water supplier in Saudi Arabia. We supply pure distilled water for CNC coolant dilution and industrial battery top-ups across Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Distilled Water",
    "CNC",
    "Coolant",
    "Industrial Applications",
    "coolant dilution",
    "deionized water",
    "battery top up",
  ],
  alternates: { canonical: "https://anfaasarabia.com/distilled-water" },
};

const applications = [
  { name: "CNC Coolant Dilution", desc: "Using mineral-free distilled water prevents coolant emulsion instability, split coolants, and hard water scale buildup in CNC machines." },
  { name: "Traction Battery Top-Ups", desc: "Prevents battery plate contamination, extending cell life and keeping lead-acid industrial batteries performing efficiently." },
  { name: "Chemical Formulation & Dilution", desc: "Suitable as a process fluid where mineral contaminants or dissolved ions interfere with manufacturing." },
  { name: "System Rinsing & Cleaning", desc: "Ideal for rinsing components during manufacturing and metal prep stages to prevent mineral residue spots." },
];

const faqs = [
  {
    q: "Why should I use distilled water for mixing CNC coolant?",
    a: "Standard tap water contains minerals (like calcium and magnesium) that react with soluble oils, causing hard-water soap scum, corrosion, and biological growth. Distilled water ensures the coolant emulsion is stable, prolonging fluid life.",
  },
  {
    q: "Why is distilled water required for battery maintenance?",
    a: "Lead-acid traction batteries lose water through evaporation during charging. Topping up with tap water introduces iron, chlorine, and minerals that permanently damage the battery plates. Pure distilled water is essential.",
  },
  {
    q: "What packaging sizes do you supply?",
    a: "We supply distilled water in industrial bulk quantities (such as 1000L IBC tanks, 200L drums, and convenient 20L containers) to suit your factory usage.",
  },
];

export default function DistilledWaterPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Distilled Water", href: "/distilled-water" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Distilled Water</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Protect your equipment from mineral scaling and corrosion. ANFAAS AL AMAL supplies high-purity distilled water
              suitable for CNC coolant dilution, lead-acid traction batteries, and chemical rinsing systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="distilled-water-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/coolant"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Explore Coolants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Industrial Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {applications.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Consumables & Systems</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "Industrial Lubricants", href: "/lubricants" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Distilled Water – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
