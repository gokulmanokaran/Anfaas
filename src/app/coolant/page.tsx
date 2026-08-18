import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Coolant & Machine Coolant Supplier | ANFAAS AL AMAL",
  description:
    "Soluble CNC coolant and water-mix metalworking fluids supplier in Saudi Arabia. We supply high-stability industrial coolants for CNC machining across Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Coolant",
    "CNC Coolant",
    "Machine Coolant",
    "Industrial Lubricants",
    "soluable cutting oil",
    "neat cutting oil",
  ],
  alternates: { canonical: "https://anfaasarabia.com/coolant" },
};

const coolants = [
  { name: "Water-Soluble Cutting Coolants", desc: "Premium semi-synthetic and synthetic emulsifying fluids with excellent cooling, corrosion protection, and biostability." },
  { name: "Neat Cutting Oils", desc: "For heavy-duty deep-hole drilling, tapping, and broaching applications where lubrication is paramount." },
  { name: "Synthetic Grinding Fluids", desc: "Provide high settling rates for grinding fines, keeping wheels clean and preventing workpiece burning." },
  { name: "Rust Preventatives & Cleaners", desc: "Short-term and long-term corrosion inhibitors for machined parts prior to packaging." },
];

const faqs = [
  {
    q: "What types of CNC machine coolants do you supply?",
    a: "We supply water-mix semi-synthetic coolants, fully synthetic grinding fluids, neat cutting oils, and rust preventative concentrates designed for modern high-pressure CNC machining.",
  },
  {
    q: "What is the recommended mixing ratio for water-soluble coolant?",
    a: "For general milling and turning, a concentration of 5% to 8% is typical. For difficult materials or threading operations, a ratio of 8% to 12% is recommended. Always mix oil into water (never water into oil).",
  },
  {
    q: "Do you supply lubricants and axis oils as well?",
    a: "Yes. In addition to CNC coolant, we supply axis oil (slideway oil) and industrial greases. Visit our dedicated lubricants sections for more information.",
  },
];

export default function CoolantPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Coolant", href: "/coolant" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">CNC Coolants</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Optimize tool life and surface finish with premium metalworking fluids. ANFAAS AL AMAL supplies high-stability
              water-soluble CNC coolants and neat cutting oils formulated to prevent foaming, odor, and skin irritation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="coolant-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lubricants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                All Lubricants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">CNC Metalworking Fluids</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coolants.map((item) => (
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
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Lubrication Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "Distilled Water", href: "/distilled-water" },
              { label: "Industrial Lubricants", href: "/lubricants" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="CNC Coolant – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
