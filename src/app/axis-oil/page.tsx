import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Axis Oil for CNC Machines | ANFAAS AL AMAL",
  description:
    "Axis oil and slideway lubricants supplier in Saudi Arabia. We supply ISO VG 32, 68, and 220 slideway oils for CNC machine tool guideways across Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Axis Oil",
    "CNC Machine",
    "Machine Lubricants",
    "Slideway Oil",
    "Way Lubricant",
    "ISO VG 68",
  ],
  alternates: { canonical: "https://anfaasarabia.com/axis-oil" },
};

const axisOils = [
  { name: "Slideway Lubricants (ISO VG 68 & 220)", desc: "Specially formulated way lubricants designed to eliminate stick-slip or chatter on metal and plastic machine ways." },
  { name: "Spindle Oils (Low Viscosity)", desc: "High-stability, low-viscosity oils for high-RPM precision spindle bearings." },
  { name: "CNC Hydraulic Oils", desc: "Anti-wear hydraulic fluids to ensure smooth linear movement and actuator operations." },
  { name: "Gearbox Lubricants", desc: "Heavy-duty gear oils to protect CNC machine tool driving gears under heavy loads." },
];

const faqs = [
  {
    q: "What is axis oil (slideway oil) used for?",
    a: "Axis oil, also called slideway lubricant, is used to lubricate machine guideways, columns, and slide tables. It contains stick-slip additives to ensure smooth, uniform linear motion, preventing friction-related positioning errors.",
  },
  {
    q: "What viscosities of way lube do you supply?",
    a: "We supply slideway oils in standard viscosity grades, including ISO VG 32, ISO VG 68 (most common for horizontal ways), and ISO VG 220 (typically used on vertical slideways).",
  },
  {
    q: "Do you supply lubricants in Dammam, Riyadh, and Jeddah?",
    a: "Yes. We supply way lubricants, hydraulic oils, and spindles lubricants across major Saudi manufacturing regions directly from Dammam.",
  },
];

export default function AxisOilPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Axis Oil", href: "/axis-oil" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC Machine <span className="text-red-600">Axis Oils</span>
              <br />& Slideway Lubricants
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Maintain the positioning accuracy and friction limits of your CNC machinery. ANFAAS AL AMAL supplies high-tack
              slideway lubricants designed to resist washout by soluble metalworking fluids on sliding ways.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="axis-oil-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lubricants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Lubricants Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Slideway & Axis Lubrication</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {axisOils.map((item) => (
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
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Fluids</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Distilled Water", href: "/distilled-water" },
              { label: "Lubricants", href: "/lubricants" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Axis Oil – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
