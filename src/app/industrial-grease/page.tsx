import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets, ShieldCheck, Thermometer, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Grease & Spindle Lubricants Supplier | Anfaas Arabia",
  description:
    "Industrial grease and high-speed CNC spindle lubricant supplier in Saudi Arabia. ANFAAS AL AMAL supplies high-RPM spindle greases, EP bearing greases, high-temperature synthetic greases, and specialty lubricants to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Industrial Grease",
    "High Speed Spindle Grease",
    "spindle grease",
    "EP bearing grease",
    "industrial lubricants Saudi Arabia",
    "synthetic grease",
    "high temperature grease",
    "CNC machine grease",
    "bearing lubrication",
    "machine tool lubricants",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/industrial-grease" },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const greaseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industrial Greases & Spindle Lubricants",
  description: "ANFAAS AL AMAL industrial specialty greases, high-speed CNC spindle lubricants, and extreme-pressure bearing greases in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/industrial-grease",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "High-Speed CNC Spindle Greases" },
    { "@type": "ListItem", position: 2, name: "Extreme Pressure (EP) Bearing Greases" },
    { "@type": "ListItem", position: 3, name: "High-Temperature Synthetic Lubricating Greases" },
    { "@type": "ListItem", position: 4, name: "Heavy-Duty Gearbox & Slide Greases" },
  ],
};

const greases = [
  {
    name: "High-Speed CNC Spindle Greases",
    desc: "Specially formulated low-viscosity synthetic greases designed for ultra-high-speed spindle bearings (high DN values), reducing friction, heat buildup, and starting torque.",
  },
  {
    name: "Extreme Pressure (EP) Bearing Greases",
    desc: "Heavy-duty lithium-complex and synthetic EP greases fortified with anti-wear additives for heavy radial and axial loads, high vibration, and shock loading in factory machinery.",
  },
  {
    name: "High-Temperature Synthetic Greases",
    desc: "Formulated with thermally stable base oils and non-melting thickeners to provide dependable lubrication up to +220°C in demanding thermal environments.",
  },
  {
    name: "Linear Guide & Ball Screw Greases",
    desc: "Specialized low-bleed greases that provide smooth, stick-slip-free linear travel and long regreasing intervals on CNC linear motion guideways and ball screw assemblies.",
  },
];

const faqs = [
  {
    q: "What types of industrial grease does ANFAAS AL AMAL supply?",
    a: "We supply high-speed CNC spindle bearing greases, extreme pressure (EP) industrial bearing greases, high-temperature synthetic greases, linear guide lubricants, and multi-purpose factory greases.",
  },
  {
    q: "What is the importance of using dedicated CNC spindle grease?",
    a: "CNC machine spindles operate at high rotational speeds (often 10,000 to 30,000+ RPM). Standard multi-purpose grease will overheat, shear down, and cause catastrophic spindle bearing seizure. Specialty spindle greases have low base oil viscosity, high speed factors (DN values), and excellent shear stability to prevent thermal expansion and bearing failure.",
  },
  {
    q: "What operating temperatures and speed factors are accommodated?",
    a: "Our industrial greases accommodate temperatures from -50°C to +220°C and speed factors exceeding 1,500,000 ndm, making them suitable for precision CNC machine spindles, high-speed routing heads, and heavy industrial gearboxes.",
  },
  {
    q: "How can I choose the right grease for my machinery?",
    a: "Grease selection depends on bearing type, operating RPM (speed factor), operating temperature range, load conditions, and environmental factors (moisture, coolant exposure). Reach out to our technical team for application-specific recommendations.",
  },
  {
    q: "Do you deliver industrial greases in Riyadh and Jeddah?",
    a: "Yes. We deliver industrial greases, slideway oils, and CNC coolants across Dammam, Riyadh, Jeddah, and all industrial cities in Saudi Arabia.",
  },
];

export default function IndustrialGreasePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(greaseSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Industrial Grease", href: "/industrial-grease" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Industrial Lubrication — Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Greases</span> &amp; Spindle Lubricants
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Prevent bearing failure and extend machinery lifespan with high-performance lubricants.
              ANFAAS AL AMAL supplies high-speed spindle greases, EP bearing lubricants, and synthetic greases
              for industrial facilities in Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="grease-enquire-btn"
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
              Specialized Industrial Greases for Severe Operating Conditions
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Proper lubrication protects critical capital equipment from costly downtime. Our industrial grease formulations
              deliver long regreasing intervals, outstanding corrosion protection, and resistance to water and coolant washout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {greases.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Factors ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Zap className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High-RPM Spindle Capability</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Formulated with low base oil viscosity to minimize churning resistance and prevent thermal runaway at high rotational speeds.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Extreme Pressure (EP) Protection</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Fortified with anti-wear and extreme-pressure additives that prevent metal-to-metal contact during shock loads and heavy machining.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Thermometer className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Wide Temperature Stability</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Maintains lubricating film thickness from sub-zero start-ups to high-heat continuous industrial operations without hardening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Lubricants ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Lubrication &amp; Fluid Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "CNC Coolant", href: "/coolant" },
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

      <FAQSection items={faqs} heading="Industrial Grease & Spindle Lubrication – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
