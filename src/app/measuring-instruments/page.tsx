import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Measuring Instruments & Gauges Supplier | ANFAAS AL AMAL",
  description:
    "Precision measuring instruments supplier in Saudi Arabia. We supply digital calipers, height gauges, micrometers, dial indicators, and comparator stands to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Measuring Instruments",
    "Gauges",
    "Precision Measuring Instruments",
    "Industrial Measuring Instruments",
    "calipers",
    "micrometers",
  ],
  alternates: { canonical: "https://anfaasarabia.com/measuring-instruments" },
};

const instruments = [
  { name: "Digital Calipers", desc: "High-accuracy digital vernier calipers for internal, external, depth, and step measurements." },
  { name: "Outer Diameter Micrometers", desc: "Precision micrometers for accurate thickness and outside diameter dimensions." },
  { name: "Digital Height Gauges", desc: "Advanced height gauges for vertical measurements, scribe layout, and high-precision inspection." },
  { name: "Dial Indicators & Lever Indicators", desc: "High-sensitivity dial test indicators for alignment checks and tolerance inspection." },
  { name: "Z-Axis Zero & Presetters", desc: "Optical and indicator-type Z-axis presetters for setting tools on CNC machines." },
  { name: "Comparator Stands", desc: "Rigid comparator stands with fine adjustment for precision inspection applications." },
];

const faqs = [
  {
    q: "What types of precision measuring instruments do you supply?",
    a: "We supply digital calipers, outer diameter micrometers, digital height gauges, dial indicators, lever indicators, precision comparator stands, and Z-axis presetters (both indicator and optical types).",
  },
  {
    q: "Do you supply gauges as well?",
    a: "Yes, we supply a wide range of industrial gauges. For more details, you can visit our dedicated gauges product page.",
  },
  {
    q: "Do you serve Riyadh and Jeddah for measuring tools?",
    a: "Yes, we serve Dammam, Riyadh, Jeddah, and the wider Saudi Arabian region. Our main base is located in Dammam, and we offer quick logistics delivery options to Riyadh and Jeddah.",
  },
];

export default function MeasuringInstrumentsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Measuring Instruments", href: "/measuring-instruments" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Precision <span className="text-red-600">Measuring Instruments</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Accurate quality control starts with reliable measuring tools. ANFAAS AL AMAL supplies high-precision
              industrial measuring instruments to ensure your manufacturing dimensions meet exact specifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="measuring-instruments-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gauges"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Explore Gauges
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Our Measurement Portfolio</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instruments.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Ruler className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Measuring Instruments – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
