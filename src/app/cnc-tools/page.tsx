import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Scissors, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Tools & Machining Tooling Supplier | Anfaas Arabia",
  description:
    "CNC tools and machining tooling supplier in Saudi Arabia. ANFAAS AL AMAL supplies milling tools, turning tools, boring heads, tool holders, and CNC accessories to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "CNC tools Saudi Arabia",
    "CNC tooling supplier",
    "CNC tools Dammam",
    "CNC cutting tools",
    "CNC machining tools",
    "milling tools",
    "turning tools",
    "boring heads",
    "CNC accessories",
    "industrial CNC tools",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/cnc-tools" },
  openGraph: {
    title: "CNC Tools & Machining Tooling Supplier | Anfaas Arabia",
    description:
      "CNC tools and machining tooling supplier in Saudi Arabia. ANFAAS AL AMAL supplies milling tools, turning tools, boring heads, tool holders, and CNC accessories to manufacturers in Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/cnc-tools",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const cncToolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CNC Tools & Machining Tooling Solutions",
  description: "ANFAAS AL AMAL CNC milling, turning, boring, and tooling systems for Saudi Arabian manufacturing facilities.",
  url: "https://www.anfaasarabia.com/cnc-tools",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CNC Milling Tools & End Mills" },
    { "@type": "ListItem", position: 2, name: "CNC Turning Tools & Boring Bars" },
    { "@type": "ListItem", position: 3, name: "Precision Adjustable Boring Heads" },
    { "@type": "ListItem", position: 4, name: "CNC Tool Holders & Collet Chucks" },
    { "@type": "ListItem", position: 5, name: "Indexable Carbide Cutting Inserts" },
    { "@type": "ListItem", position: 6, name: "CNC Machine Tool Accessories & Presetters" },
  ],
};

const relatedLinks = [
  { label: "Tool Holders", href: "/tool-holders" },
  { label: "Cutting Tools", href: "/cutting-tools" },
  { label: "CNC Chucks", href: "/chuck" },
  { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
  { label: "Measuring Instruments", href: "/measuring-instruments" },
  { label: "CNC Coolant", href: "/coolant" },
  { label: "All Tools", href: "/tools-supplier" },
];

const faqs = [
  {
    q: "What CNC tools does ANFAAS AL AMAL supply?",
    a: "We supply a complete suite of CNC tooling including solid carbide and indexable milling cutters, turning tools, boring heads, vibration-damped boring bars, tool holders (ER, hydraulic, shrink-fit), cutting inserts, and workholding accessories.",
  },
  {
    q: "What CNC machine types and brands are compatible with your tooling?",
    a: "Our tooling is engineered to fit standard machine tapers (BT30, BT40, BT50, HSK, CAT, ISO) and standard tool posts, making it compatible with major CNC machining centres, turning centres, and multi-axis mill-turn machines.",
  },
  {
    q: "What industries use CNC tools supplied by ANFAAS AL AMAL?",
    a: "Our CNC tools serve the petrochemical, oil & gas equipment, aerospace, automotive, defense, structural fabrication, mold and die, and general precision engineering sectors across Saudi Arabia.",
  },
  {
    q: "Do you supply CNC tools across Dammam, Riyadh, and Jeddah?",
    a: "Yes. Headquartered in Dammam's Industrial District, we provide prompt dispatch and technical tooling support to manufacturers in Dammam, Riyadh, Jeddah, and all industrial cities in Saudi Arabia.",
  },
  {
    q: "How can I request a customized CNC tooling quotation?",
    a: "You can submit an inquiry via our website form, email info@anfaasarabia.com, or call/WhatsApp +966 549186135. Our technical team responds within 24 hours.",
  },
];

export default function CNCToolsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cncToolsSchema) }}
      />
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
              ANFAAS AL AMAL supplies high-performance CNC tools for industrial machining applications
              across Saudi Arabia. From milling and turning tools to precision boring heads and cutting inserts,
              we stock the tooling that keeps your CNC machines operating at peak productivity.
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
            CNC Tools for Industrial Machining Applications
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-2xl leading-relaxed">
            Our CNC tooling portfolio covers all key tooling systems required for modern CNC machining centres,
            turning centres, and milling machines.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Milling Tools",
                desc: "Solid carbide end mills, face mills, and indexable milling cutters for vertical and horizontal CNC machining centres.",
              },
              {
                icon: Wrench,
                title: "Turning Tools & Boring Bars",
                desc: "External turning tool holders, profiling bars, and internal boring bars for CNC lathes and turning centres.",
              },
              {
                icon: Scissors,
                title: "Carbide Cutting Inserts",
                desc: "High-grade carbide and coated cutting inserts for high-speed, heavy-feed, and hard-material machining operations.",
              },
              {
                icon: Settings,
                title: "Tool Holders & Collet Chucks",
                desc: "ER collet chucks, hydraulic milling chucks, shrink-fit holders, and face mill arbors for standard CNC machine tapers.",
                href: "/tool-holders",
              },
              {
                icon: Settings,
                title: "Precision Boring Heads",
                desc: "Micron-adjustable boring heads and vibration-damped boring bars for high-tolerance hole finishing.",
              },
              {
                icon: Settings,
                title: "CNC Accessories & Workholding",
                desc: "Tool presetters, machine vises, rotary tables, and clamping fixtures for rapid CNC machine setup.",
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

      {/* ── Key Advantages ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Zap className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High Productivity</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Optimized cutting geometries and high-rigidity tool bodies allow aggressive machining parameters that shorten cycle times.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Consistent Tool Life</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Premium carbide substrates and advanced wear-resistant coatings ensure predictable tool life, reducing unexpected tool breakages.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Settings className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Comprehensive Tooling Range</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                One-stop industrial supply covering everything from the machine spindle to the cutting edge and workholding fixture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related CNC Tooling &amp; Products</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors"
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
