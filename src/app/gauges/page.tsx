import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Gauges Supplier in Saudi Arabia | ANFAAS AL AMAL",
  description:
    "Industrial gauges and precision testing solutions supplier in Saudi Arabia. We supply digital height gauges, dial indicators, bore gauges, and custom testing solutions to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Gauges",
    "Measuring Instruments",
    "Precision Gauges",
    "Industrial Gauges",
    "Bore Gauges",
    "Thread Gauges",
  ],
  alternates: { canonical: "https://anfaasarabia.com/gauges" },
};

const gauges = [
  { name: "Digital Height Gauges", desc: "For high-accuracy vertical measuring and marking tasks in industrial manufacturing." },
  { name: "Dial Indicators & Lever Indicators", desc: "For structural deviation checking, flatness tests, and run-out measurement." },
  { name: "Bore Gauges", desc: "For measuring inner hole sizes and bore diameters with high precision." },
  { name: "Z-Axis Presetters (Indicator & Optical)", desc: "Essential for calibrating the reference plane height (zero position) of CNC machines." },
  { name: "Thread Plug & Ring Gauges", desc: "For thread inspection, ensuring thread sizing compliance with ISO/ANSI standards." },
  { name: "Block & Feeler Gauges", desc: "For checking gap sizes, clearance dimensions, and calibrating micrometers." },
];

const faqs = [
  {
    q: "What types of gauges does ANFAAS AL AMAL supply?",
    a: "We supply digital height gauges, dial indicators, lever indicators, bore gauges, Z-axis presetters, thread plug/ring gauges, block gauges, and feeler gauges for various industrial checking applications.",
  },
  {
    q: "Do you supply precision gauges in Riyadh and Jeddah?",
    a: "Yes, we ship gauges and measuring accessories across Dammam, Riyadh, Jeddah, and all other major manufacturing centers in Saudi Arabia.",
  },
  {
    q: "Are the gauges supplied calibrated?",
    a: "Our gauges are supplied according to exact manufacturing standards. Calibration certificates from standard testing labs can be coordinated upon request.",
  },
];

export default function GaugesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Gauges", href: "/gauges" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial & Precision <span className="text-red-600">Gauges</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Dimensional accuracy is essential for machine setup and parts verification. ANFAAS AL AMAL supplies a complete
              catalogue of industrial gauges for manufacturing shops, CNC operators, and engineering departments.
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

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Precision Gauging Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gauges.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Gauge className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Industrial Gauges – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
