import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets, ShieldCheck, Thermometer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Coolant & Industrial Metalworking Fluids | Anfaas Arabia",
  description:
    "Industrial CNC coolant and metalworking fluids supplier in Saudi Arabia. ANFAAS AL AMAL supplies water-soluble cutting coolants, semi-synthetic fluids, neat cutting oils, and synthetic grinding fluids to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Coolant",
    "CNC Coolant",
    "CNC coolant systems",
    "Machine Coolant",
    "water-soluble cutting oil",
    "semi-synthetic coolant",
    "neat cutting oil",
    "grinding fluids",
    "metalworking fluids Saudi Arabia",
    "industrial coolant supplier",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/coolant" },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const coolantSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CNC Coolants & Metalworking Fluids",
  description: "ANFAAS AL AMAL water-soluble cutting fluids, synthetic grinding coolants, and neat cutting oils in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/coolant",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Water-Soluble Semi-Synthetic Cutting Coolants" },
    { "@type": "ListItem", position: 2, name: "Neat Heavy-Duty Cutting & Broaching Oils" },
    { "@type": "ListItem", position: 3, name: "Fully Synthetic Surface Grinding Fluids" },
    { "@type": "ListItem", position: 4, name: "Short & Long-Term Industrial Rust Preventatives" },
  ],
};

const coolants = [
  {
    name: "Water-Soluble Semi-Synthetic Coolants",
    desc: "Premium bio-stable semi-synthetic fluids offering optimal lubrication and cooling for milling, turning, and drilling in steel, stainless steel, aluminum, and cast iron.",
  },
  {
    name: "Neat Cutting Oils (Straight Oils)",
    desc: "High-lubricity neat oils formulated for deep-hole drilling, gear hobbing, threading, and broaching where maximum lubricity and extreme-pressure performance are required.",
  },
  {
    name: "Fully Synthetic Grinding Fluids",
    desc: "Transparent, oil-free synthetic coolants engineered for surface and cylindrical grinding, providing rapid swarf settling, wheel cleanliness, and zero foam.",
  },
  {
    name: "Rust Preventatives & Post-Machining Cleaners",
    desc: "Solvent and water-based corrosion inhibitor films protecting precision machined parts from oxidation during storage and export shipping.",
  },
];

const faqs = [
  {
    q: "What types of CNC metalworking coolants do you supply?",
    a: "We supply water-mix semi-synthetic coolants, fully synthetic grinding fluids, high-lubricity neat cutting oils, and rust preventative concentrates engineered for modern high-pressure CNC machining systems.",
  },
  {
    q: "What is the recommended mixing ratio for water-soluble coolant?",
    a: "For general CNC milling and turning, a concentration of 6% to 8% is typical. For difficult-to-machine alloys (like stainless steel or Inconel) or tapping/reaming operations, a concentration of 8% to 12% is recommended. Always add coolant concentrate into water while stirring.",
  },
  {
    q: "Why is water quality important when mixing CNC coolant?",
    a: "Hard tap water contains calcium, magnesium, and chlorides that destabilize coolant emulsions, cause foaming or soap scum, and accelerate machine corrosion. We strongly recommend mixing and topping up coolants with high-purity distilled water for maximum fluid lifespan.",
  },
  {
    q: "How can I maintain coolant sump health and prevent foul odors?",
    a: "Maintain proper coolant concentration using an optical refractometer, remove floating tramp oil with oil skimmers, maintain continuous fluid circulation, and top up with clean water/diluted coolant mix daily.",
  },
  {
    q: "Do you supply coolant across Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL ships CNC coolants, slideway oils, and industrial lubricants in 20L pails and 208L drums to machine shops and manufacturing plants throughout Saudi Arabia.",
  },
];

export default function CoolantPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coolantSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Coolant", href: "/coolant" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Metalworking Fluids — Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">CNC Coolants</span> &amp; Fluids
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Optimize tool life, improve surface finish, and reduce sump maintenance. ANFAAS AL AMAL supplies
              high-stability water-soluble coolants, neat cutting oils, and grinding fluids formulated for severe CNC machining.
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
                href="/distilled-water"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Distilled Water for Mixing
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
              CNC Metalworking Fluids &amp; Coolant Systems
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Formulated with advanced anti-microbial biostability and extreme-pressure lubricity packages,
              our coolants resist bacterial degradation and keep your CNC machine sumps odor-free and effective.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {coolants.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coolant Benefits ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Thermometer className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Superior Heat Dissipation</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Rapid thermal transfer keeps cutting inserts cool, reducing thermal shock and flank wear during high-speed milling and turning.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Extended Sump Life</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                High biological stability resists fungal and bacterial growth, dramatically extending intervals between full sump cleanouts.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Sparkles className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Excellent Surface Finish</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Advanced lubricity additives prevent built-up edge (BUE) on cutting tools, yielding mirror-like part surface finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Lubricants ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Lubrication Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Distilled Water", href: "/distilled-water" },
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Industrial Lubricants", href: "/lubricants" },
              { label: "Cutting Tools", href: "/cutting-tools" },
              { label: "All Tools", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="CNC Coolant & Metalworking Fluids – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
