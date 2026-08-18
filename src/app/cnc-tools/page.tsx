import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Tools Supplier in Saudi Arabia",
  description:
    "ANFAAS AL AMAL supplies CNC tools for machining centres, turning and milling applications across Saudi Arabia. CNC tool holders, cutting tools, and CNC accessories available for customers in Dammam, Riyadh, and Jeddah. Enquire today.",
  keywords: [
    "CNC tools Saudi Arabia",
    "CNC tools Dammam",
    "CNC tools supplier",
    "CNC cutting tools",
    "CNC machining tools",
    "CNC accessories",
  ],
  alternates: { canonical: "https://anfaasarabia.com/cnc-tools" },
};

const relatedLinks = [
  { label: "Tool Holders", href: "/tool-holders" },
  { label: "Cutting Tools", href: "/cutting-tools" },
  { label: "Chuck", href: "/chuck" },
  { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
  { label: "CNC Coolant", href: "/coolant" },
];

const faqs = [
  {
    q: "What CNC tools does ANFAAS AL AMAL supply?",
    a: "We supply a range of CNC tools including milling tools, turning tools, boring heads, drilling tools, cutting inserts, tool holders, and CNC machine accessories suitable for various machining centre brands.",
  },
  {
    q: "What industries use CNC tools?",
    a: "CNC tools are used in manufacturing, petrochemical, automotive, aerospace, defence, oil & gas equipment production, and general metalworking industries — all of which are active sectors in Saudi Arabia.",
  },
  {
    q: "Do you supply CNC tools in Dammam?",
    a: "Yes. ANFAAS AL AMAL is based in Dammam's Industrial District and supplies CNC tools directly to customers in the Eastern Province.",
  },
  {
    q: "Do you supply CNC tools in Riyadh?",
    a: "Yes. We supply CNC tools and machine accessories to customers in Riyadh. Contact us to discuss your requirements and we will arrange supply.",
  },
  {
    q: "Do you supply CNC tools in Jeddah?",
    a: "Yes. We supply CNC tools to customers in Jeddah. Contact our team via email, phone, or WhatsApp to request a quotation.",
  },
  {
    q: "How can I request a quotation for CNC tools?",
    a: "Contact us at info@anfaasarabia.com or call/WhatsApp +966 565301513. You can also use the enquiry form on our website and our team will respond within one business day.",
  },
];

export default function CNCToolsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "CNC Tools", href: "/cnc-tools" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              CNC Tools <span className="text-red-600">Supplier</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl">
              ANFAAS AL AMAL supplies precision CNC tools for industrial machining applications
              across Saudi Arabia. From milling and turning tools to boring heads and cutting inserts,
              we stock the tooling that keeps your CNC machines performing at their best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="cnc-tools-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tools-supplier"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all duration-200"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Tool Categories */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            CNC Tools for Industrial Applications
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-2xl leading-relaxed">
            Our CNC tooling range covers the key categories required for modern CNC machining centres,
            turning centres, and milling machines.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Milling Tools",
                desc: "End mills, face mills, and indexable milling cutters for vertical and horizontal machining centres.",
              },
              {
                icon: Wrench,
                title: "Turning Tools",
                desc: "Turning inserts, boring bars, and external turning tools for CNC lathes and turning centres.",
              },
              {
                icon: Scissors,
                title: "Cutting Inserts",
                desc: "Carbide and coated cutting inserts for high-speed and hard-material machining operations.",
              },
              {
                icon: Settings,
                title: "Tool Holders",
                desc: "Collet chucks, milling chucks, and shrink-fit tool holders for CNC machine spindles.",
                href: "/tool-holders",
              },
              {
                icon: Settings,
                title: "Boring Heads & Tools",
                desc: "Precision boring heads and boring bars for accurate hole-making in CNC machining centres.",
              },
              {
                icon: Settings,
                title: "CNC Accessories",
                desc: "Tool presetters, edge finders, and workholding accessories for CNC machine setup.",
                href: "/machine-tool-accessories",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  {item.href && (
                    <Link href={item.href} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">
                      View <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-zinc-400 text-sm mb-4">CNC Tools available across Saudi Arabia:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Dammam", href: "/locations/dammam" },
              { city: "Riyadh", href: "/locations/riyadh" },
              { city: "Jeddah", href: "/locations/jeddah" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-red-600 hover:text-white transition-all"
              >
                {loc.city} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="CNC Tools – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
