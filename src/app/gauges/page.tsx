import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Gauge, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial & Precision Gauges Supplier | Anfaas Arabia",
  description:
    "Precision industrial gauges supplier in Saudi Arabia. ANFAAS AL AMAL supplies digital height gauges, dial indicators, bore gauges, thread plug & ring gauges, and gauge blocks to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Gauges",
    "Measuring Instruments",
    "Precision Gauges",
    "Industrial Gauges",
    "Bore Gauges",
    "Thread Gauges",
    "thread plug gauges",
    "ring gauges",
    "dial indicators",
    "gauge blocks",
    "feeler gauges",
    "industrial quality control Saudi Arabia",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/gauges" },
  openGraph: {
    title: "Industrial & Precision Gauges Supplier | Anfaas Arabia",
    description:
      "Precision industrial gauges supplier in Saudi Arabia. ANFAAS AL AMAL supplies digital height gauges, dial indicators, bore gauges, thread plug & ring gauges, and gauge blocks to Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/gauges",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const gaugesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industrial Gauges & Dimensional Verification Tools",
  description: "ANFAAS AL AMAL precision industrial gauges, bore gauges, and thread verification tools in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/gauges",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Precision Bore Gauges & Dial Bore Indicators" },
    { "@type": "ListItem", position: 2, name: "Thread Plug Gauges & Thread Ring Gauges (Go / No-Go)" },
    { "@type": "ListItem", position: 3, name: "Digital Height Gauges with Fine Adjustment" },
    { "@type": "ListItem", position: 4, name: "High-Sensitivity Dial Indicators & Lever Test Indicators" },
    { "@type": "ListItem", position: 5, name: "Tungsten Carbide & Ceramic Gauge Block Sets" },
    { "@type": "ListItem", position: 6, name: "Feeler Gauges & Radius Pitch Gauges" },
  ],
};

const gauges = [
  {
    name: "Precision Bore Gauges & Dial Bore Indicators",
    desc: "Two-point and three-point internal bore gauges for accurate measurement of cylinder bores, bearing holes, and internal tube diameters with micron-level repeatability.",
  },
  {
    name: "Thread Plug & Thread Ring Gauges (Go / No-Go)",
    desc: "Hardened steel thread inspection gauges for metric, UN/UNC/UNF, NPT, and BSP thread specifications, ensuring full compliance with international engineering standards.",
  },
  {
    name: "Digital Height Gauges & Scribe Gauges",
    desc: "Single-beam and dual-beam digital height gauges mounted on precision cast bases for vertical dimensional layout and inspection on granite surface plates.",
  },
  {
    name: "Dial Indicators & Lever Test Indicators",
    desc: "High-sensitivity mechanical and digital dial test indicators for machine tool alignment, spindle runout checks, and workpiece straightness verification.",
  },
  {
    name: "Precision Gauge Block Sets (Slip Gauges)",
    desc: "Grade 0 and Grade 1 steel, tungsten carbide, and ceramic gauge blocks for workshop calibrating of micrometers, calipers, and measuring instruments.",
  },
  {
    name: "Feeler Gauges, Radius Gauges & Pitch Gauges",
    desc: "High-accuracy leaf feeler gauges, screw pitch gauges, and radius leaf sets for checking clearances, gap tolerances, and thread forms in mechanical assembly.",
  },
];

const faqs = [
  {
    q: "What types of industrial gauges does ANFAAS AL AMAL supply?",
    a: "We supply digital height gauges, dial indicators, lever test indicators, dial bore gauges, thread plug and ring gauges (metric, UNC, UNF, NPT), gauge block calibration sets, and feeler gauges.",
  },
  {
    q: "Are the thread gauges supplied to international standards?",
    a: "Yes. Our thread plug and ring gauges are manufactured in accordance with standard ISO, ANSI/ASME, and DIN thread tolerances (such as 6H/6g for metric and 2B/2A for Unified threads).",
  },
  {
    q: "How do bore gauges ensure accurate hole measurement?",
    a: "Bore gauges utilize a self-centering contact bridge with interchangeable anvil probes and a high-resolution dial or digital indicator, allowing operators to detect hole taper, out-of-roundness, and dimensional variation inside deep cylinders.",
  },
  {
    q: "Can calibration certificates be provided for the gauges?",
    a: "Yes. All precision gauges are manufactured to stringent factory accuracy standards. Third-party or certified laboratory calibration certificates can be coordinated upon request for your ISO quality audit compliance.",
  },
  {
    q: "Do you supply industrial gauges across Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL supplies precision measuring instruments and gauges across Dammam, Riyadh, Jeddah, and throughout Saudi Arabia.",
  },
];

export default function GaugesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gaugesSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Gauges", href: "/gauges" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Industrial Metrology — Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial &amp; Precision <span className="text-red-600">Gauges</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Achieve zero-defect production with reliable dimensional inspection tools. ANFAAS AL AMAL
              supplies bore gauges, thread plug/ring gauges, dial test indicators, and gauge block sets
              to quality control departments across Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="gauges-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/measuring-instruments"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Measuring Instruments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Precision Gauging &amp; Quality Control Solutions
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              From incoming raw material checks to in-process machining inspection and final quality assurance,
              our gauges deliver repeatability, durability, and compliance with tight manufacturing tolerances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gauges.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Gauge className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Highlights ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <CheckCircle className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Micron-Level Repeatability</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Precision-lapped contact points and jewel-bearing movements guarantee highly repeatable inspection readings across shifts.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Hardened Wear Surfaces</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Tungsten carbide and hardened alloy steel contact faces resist abrasive workshop dust and friction wear for prolonged calibration stability.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Gauge className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Standard Compliance</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Full adherence to international metrology norms (ISO, DIN, ANSI/ASME) for hassle-free ISO 9001 quality audits and inspection reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Categories ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Metrology &amp; Tooling</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Measuring Instruments", href: "/measuring-instruments" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "All Tools", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Industrial Gauges & Inspection – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
