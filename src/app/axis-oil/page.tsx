import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Axis Oil & Slideway Lubricants Supplier | Anfaas Arabia",
  description:
    "Axis oil and CNC slideway lubricants supplier in Saudi Arabia. ANFAAS AL AMAL supplies ISO VG 32, 68, and 220 way oils, spindle oils, and hydraulic lubricants to machine shops in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Axis Oil",
    "slideway oil",
    "CNC machine slideway lubricants",
    "way lubricant",
    "ISO VG 68 slideway oil",
    "ISO VG 220 way oil",
    "CNC axis lubricants",
    "machine tool lubricants Saudi Arabia",
    "industrial slideway oil",
    "anti-stick slip oil",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/axis-oil" },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const axisOilSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CNC Axis Oils & Slideway Lubricants",
  description: "ANFAAS AL AMAL CNC machine axis oils, anti-stick-slip slideway lubricants, and spindle oils in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/axis-oil",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ISO VG 68 Slideway Oil (Horizontal Ways)" },
    { "@type": "ListItem", position: 2, name: "ISO VG 220 Slideway Oil (Vertical Ways & Heavy Columns)" },
    { "@type": "ListItem", position: 3, name: "Low-Viscosity High-Speed Spindle Oils" },
    { "@type": "ListItem", position: 4, name: "Anti-Wear CNC Hydraulic System Fluids" },
  ],
};

const axisOils = [
  {
    name: "ISO VG 68 Slideway Oils",
    desc: "The industry standard for horizontal machine slideways, linear guides, and ball screws — formulated with anti-friction additives to eliminate stick-slip and ensure smooth micro-feed positioning.",
  },
  {
    name: "ISO VG 220 Slideway Oils",
    desc: "High-viscosity way lubricant engineered for vertical columns, heavy machine ways, and inclined slides where oil retention and resistance to gravitational drain are paramount.",
  },
  {
    name: "Low-Viscosity Spindle Oils (ISO VG 2, 5, 10)",
    desc: "Ultra-pure, non-foaming spindle oils designed for precision high-RPM machine tool spindles, ensuring minimal fluid friction and rapid heat dissipation.",
  },
  {
    name: "CNC Hydraulic Oils (ISO VG 32 & 46)",
    desc: "Premium anti-wear hydraulic fluids formulated for machine tool clamping cylinders, tool changer actuators, and power chuck hydraulic units.",
  },
];

const faqs = [
  {
    q: "What is axis oil (slideway oil) and why is it critical for CNC machines?",
    a: "Axis oil (slideway lubricant) is specifically formulated to lubricate the sliding interfaces between machine guideways, carriages, and columns. It contains special stick-slip additives and friction modifiers that prevent jerky motion (stick-slip chatter) during slow feed rates, ensuring smooth travel and precise positional accuracy in CNC milling and turning.",
  },
  {
    q: "What is the difference between ISO VG 68 and ISO VG 220 slideway oil?",
    a: "ISO VG 68 is a medium-viscosity way oil typically used on horizontal slideways and linear guideways. ISO VG 220 is a higher-viscosity, adhesive way oil designed for vertical slides and heavy-duty columns where a thicker oil film is required to resist downward runoff.",
  },
  {
    q: "Does your axis oil separate cleanly from water-soluble CNC coolants?",
    a: "Yes. Our slideway oils possess excellent demulsibility (tramp oil separation). They quickly separate from water-mix cutting coolants on the sump surface, allowing easy skimming and preventing coolant spoilage or foul odors.",
  },
  {
    q: "What package sizes of axis oil are available?",
    a: "We supply slideway oils and hydraulic lubricants in 20-litre pails and 208-litre industrial drums to suit small workshops and large manufacturing plants alike.",
  },
  {
    q: "Do you supply axis oil across Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL ships axis oils, industrial greases, and CNC coolants directly to manufacturing facilities across Dammam, Riyadh, Jeddah, and throughout Saudi Arabia.",
  },
];

export default function AxisOilPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(axisOilSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Axis Oil", href: "/axis-oil" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Machine Slideway Lubrication — Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC Machine <span className="text-red-600">Axis Oils</span> &amp; Slideway Lubricants
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Maintain the positioning accuracy and friction limits of your CNC machinery. ANFAAS AL AMAL supplies
              high-tack, anti-stick-slip slideway lubricants engineered to resist coolant washout on metal and plastic ways.
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
                All Lubricants
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
              Slideway Oils &amp; Machine Guideway Lubrication
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Proper guideway lubrication is crucial for preventing stick-slip chatter, tool chatter marks on finished parts,
              and premature wear of costly linear guide systems and Turcite slideway linings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {axisOils.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Advantages ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <CheckCircle className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Zero Stick-Slip Motion</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Advanced friction modifier additives eliminate chatter and jerky motion, ensuring smooth, continuous micro-feeding during precision profiling cuts.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Outstanding Demulsibility</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Separates readily from water-based cutting fluids, making tramp oil removal easy and preventing bacterial growth in coolant sumps.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Droplets className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High Film Strength</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Tacky, adhesive formulation clings to vertical ways and heavily loaded surfaces, preventing metal-to-metal boundary friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Fluids ───────────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Lubricants &amp; Coolants</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Distilled Water", href: "/distilled-water" },
              { label: "Industrial Lubricants", href: "/lubricants" },
              { label: "All Tools", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Axis Oil & Slideway Lubricants – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
