import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Gauge, Scissors, Droplets, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools Supplier in Saudi Arabia",
  description:
    "ANFAAS AL AMAL is a trusted industrial tools supplier in Saudi Arabia. We supply CNC tools, cutting tools, machine tool accessories, measuring instruments, tool holders, and lubricants to manufacturers in Dammam, Riyadh, and Jeddah. Contact us for a quotation.",
  keywords: [
    "tools supplier Saudi Arabia",
    "industrial tools supplier",
    "tools Dammam",
    "tools Riyadh",
    "tools Jeddah",
    "machine tools",
  ],
  alternates: { canonical: "https://anfaasarabia.com/tools-supplier" },
};

const categories = [
  { icon: Wrench, title: "CNC Tools", desc: "Milling, turning and drilling tools for CNC machining centres.", href: "/cnc-tools" },
  { icon: Scissors, title: "Cutting Tools", desc: "Carbide and HSS cutting tools for high-speed and hard-material machining.", href: "/cutting-tools" },
  { icon: Settings, title: "Tool Holders", desc: "Precision tool holders for CNC machine spindles and turrets.", href: "/tool-holders" },
  { icon: Settings, title: "Machine Tool Accessories", desc: "Chucks, vises, collets and workholding accessories for CNC and conventional machines.", href: "/machine-tool-accessories" },
  { icon: Ruler, title: "Measuring Instruments", desc: "Calipers, micrometers, height gauges and precision measuring tools.", href: "/measuring-instruments" },
  { icon: Droplets, title: "Coolants & Lubricants", desc: "CNC coolant, industrial grease, axis oil and distilled water.", href: "/coolant" },
  { icon: Gauge, title: "Gauges", desc: "Dial gauges, bore gauges, plug gauges and more for industrial measurement.", href: "/gauges" },
];

const faqs = [
  {
    q: "What types of industrial tools does ANFAAS AL AMAL supply?",
    a: "ANFAAS AL AMAL supplies a wide range of industrial tools including CNC tools, cutting tools, tool holders, machine tool accessories, measuring instruments, gauges, and industrial lubricants such as coolant, industrial grease, axis oil, and distilled water.",
  },
  {
    q: "Do you supply tools in Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL supplies industrial tools and machine accessories to customers across Saudi Arabia, including Dammam, Riyadh, and Jeddah. Our primary base is in Dammam's Industrial District.",
  },
  {
    q: "How can I request a quotation for tools?",
    a: "You can contact us via the enquiry form on our website, by email at info@anfaasarabia.com, or by phone/WhatsApp at +966 565301513. Our team will respond within one business day.",
  },
  {
    q: "Do you supply tools for CNC machines?",
    a: "Yes. We specialise in CNC tools including milling tools, turning tools, boring heads, tool holders, and cutting inserts for CNC machining centres.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve the manufacturing, petrochemical, automotive, aerospace, metalworking, and general engineering industries across Saudi Arabia.",
  },
];

export default function ToolsSupplierPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Tools Supplier", href: "/tools-supplier" }]} />

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
              Industrial <span className="text-red-600">Tools Supplier</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl">
              ANFAAS AL AMAL is a trusted industrial tools and machine solutions supplier serving
              manufacturers across Saudi Arabia. From CNC tools and cutting tools to measuring
              instruments and machine tool accessories — we provide the tooling you need to keep
              your operations running at peak performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="tools-supplier-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all duration-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Industrial Tools & Product Range
          </h2>
          <p className="text-zinc-500 mb-10 max-w-2xl text-sm leading-relaxed">
            Explore our complete range of industrial tools and machine accessories available for
            customers in Saudi Arabia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex flex-col bg-white rounded-2xl p-6 border border-zinc-100 hover:border-red-100 hover:shadow-[0_4px_24px_rgba(220,38,38,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-1.5 text-sm group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed flex-1">{cat.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ANFAAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                Why Choose ANFAAS AL AMAL as Your Tools Supplier?
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
                <p>
                  ANFAAS AL AMAL has built a strong reputation as a reliable industrial tools supplier
                  in Saudi Arabia. With deep expertise in CNC machining, conventional tooling, and
                  industrial consumables, we understand the demands of modern Saudi manufacturing.
                </p>
                <p>
                  Our product range is sourced from globally recognised manufacturers to ensure quality,
                  precision, and durability. Whether you need a single cutting tool or a complete tooling
                  package for a new machining line, our team can help you identify the right solution.
                </p>
                <p>
                  We serve customers in Dammam, Riyadh, and Jeddah — and across the wider Saudi market.
                  Contact us to discuss your tooling requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "20+", label: "Years of Experience" },
                { stat: "500+", label: "Customers Served" },
                { stat: "3", label: "Cities Covered" },
                { stat: "24h", label: "Response Time" },
              ].map((s) => (
                <div key={s.label} className="bg-zinc-50 rounded-2xl p-6 text-center border border-zinc-100">
                  <p className="text-3xl font-black text-red-600 mb-1">{s.stat}</p>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Serving Dammam, Riyadh & Jeddah
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { city: "Dammam", href: "/locations/dammam" },
              { city: "Riyadh", href: "/locations/riyadh" },
              { city: "Jeddah", href: "/locations/jeddah" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-red-600 hover:text-white transition-all"
              >
                {loc.city} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Tools Supplier – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
