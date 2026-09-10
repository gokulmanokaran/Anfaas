import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Scissors, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Cutting Tools Supplier in Saudi Arabia | Anfaas Arabia",
  description:
    "High-performance industrial cutting tools supplier in Saudi Arabia. ANFAAS AL AMAL supplies solid carbide end mills, indexable turning and milling inserts, drills, taps, and reamers to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Cutting Tools",
    "CNC Cutting Tools",
    "carbide end mills",
    "turning inserts",
    "milling inserts",
    "carbide drills",
    "threading taps",
    "thread mills",
    "machine reamers",
    "industrial cutting tools Saudi Arabia",
    "metal cutting tools",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/cutting-tools" },
  openGraph: {
    title: "Industrial Cutting Tools Supplier in Saudi Arabia | Anfaas Arabia",
    description:
      "High-performance industrial cutting tools supplier in Saudi Arabia. ANFAAS AL AMAL supplies solid carbide end mills, indexable turning and milling inserts, drills, taps, and reamers to manufacturers in Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/cutting-tools",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const cuttingToolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industrial Metal Cutting Tools & Inserts",
  description: "ANFAAS AL AMAL solid carbide end mills, indexable milling and turning inserts, and threading tools in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/cutting-tools",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Solid Carbide End Mills (Square, Ball Nose, Corner Radius)" },
    { "@type": "ListItem", position: 2, name: "Indexable Milling Cutters & Carbide Inserts" },
    { "@type": "ListItem", position: 3, name: "Precision Turning, Grooving & Threading Inserts" },
    { "@type": "ListItem", position: 4, name: "Solid Carbide & Indexable Coolant-Through Drills" },
    { "@type": "ListItem", position: 5, name: "Machine Taps, Spiral Flute Taps & Thread Mills" },
    { "@type": "ListItem", position: 6, name: "High-Tolerance Machine Reamers & Slitting Saws" },
  ],
};

const cuttingTools = [
  {
    name: "Solid Carbide End Mills",
    desc: "Micro-grain solid carbide 2-flute, 3-flute, 4-flute, and multi-flute end mills with AlTiN and TiSiN coatings for high-speed milling in carbon steel, stainless, titanium, and hardened dies.",
  },
  {
    name: "Indexable Face Mills & Shoulder Cutters",
    desc: "Heavy-duty 45° face milling cutters, 90° shoulder mills, and high-feed cutters utilizing multi-edge indexable carbide inserts for maximum metal removal rates (MRR).",
  },
  {
    name: "Turning, Grooving & Boring Inserts",
    desc: "ISO standard carbide inserts (CNMG, WNMG, TNMG, DNMG, CCMT) with specialized chipbreakers and CVD/PVD coatings for external turning, facing, profiling, and internal boring.",
  },
  {
    name: "High-Performance Solid Carbide Drills",
    desc: "Internal coolant-through (3xD, 5xD, 8xD) and solid carbide jobber drills engineered for high penetration rates and chip evacuation in tough alloy steels.",
  },
  {
    name: "Machine Taps & Thread Mills",
    desc: "HSS-E-PM and solid carbide spiral point taps, spiral flute taps, forming taps, and full-profile thread mills for accurate thread generation in through and blind holes.",
  },
  {
    name: "High-Precision Reamers & Slitting Saws",
    desc: "Straight and helical flute machine reamers for H7 tolerance hole finishing, alongside solid carbide and HSS slitting saws for precision parting and slotting.",
  },
];

const faqs = [
  {
    q: "What types of cutting tools does ANFAAS AL AMAL supply?",
    a: "We supply micro-grain solid carbide end mills, indexable milling cutters and inserts, ISO turning and boring inserts, solid carbide coolant-through drills, machine taps, thread mills, and high-tolerance reamers.",
  },
  {
    q: "What workpiece materials are your cutting tools engineered for?",
    a: "Our cutting tool grades cover standard ISO material groups: P (Carbon and Alloy Steels), M (Stainless Steels), K (Cast Irons), N (Aluminum and Non-Ferrous Alloys), S (High-Temperature Alloys like Inconel and Titanium), and H (Hardened Steels up to 65 HRC).",
  },
  {
    q: "How can I choose the right insert grade and coating for my application?",
    a: "Insert selection depends on your workpiece material, cutting speed (Vc), feed rate (fz), depth of cut (ap), and whether the machining cut is continuous or interrupted. Contact our technical team with your machining drawing for tailored grade recommendations.",
  },
  {
    q: "Do you supply internal coolant-through cutting tools?",
    a: "Yes. We supply internal through-coolant drills, boring bars, and end mill bodies designed to optimize chip evacuation and cutting edge cooling under high-pressure coolant systems.",
  },
  {
    q: "Do you supply cutting tools across Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL delivers premium cutting tools, tool holders, and CNC accessories to machine shops and manufacturing facilities throughout Saudi Arabia.",
  },
];

export default function CuttingToolsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cuttingToolsSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Cutting Tools", href: "/cutting-tools" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Cutting Tools</span> &amp; Inserts
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Maximize metal removal rates, extend tool life, and achieve superior surface finishes.
              ANFAAS AL AMAL supplies solid carbide end mills, indexable turning/milling inserts, drills,
              and taps to machining facilities in Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="cutting-tools-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cnc-tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Explore CNC Tools
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
              High-Performance Metal Cutting Solutions
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Engineered with advanced micro-grain carbide substrates and multi-layer PVD/CVD coatings,
              our cutting tools deliver high thermal resistance, wear resistance, and reliable chip control across all materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuttingTools.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Scissors className="w-6 h-6 text-red-600 mb-3" />
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
              <Zap className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High-Feed &amp; High-Speed Machining</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Optimized variable helix and unequal flute spacing geometries eliminate vibration harmonics during deep slotting and trochoidal milling.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Advanced PVD / CVD Coatings</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                High-aluminum-content nanostructured coatings provide oxidation resistance up to 1,100°C for dry and high-pressure wet machining.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Sparkles className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Precision Tolerance Grinding</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                H6 shank tolerances and micro-lapped cutting edges ensure consistent part dimensional accuracy and extended tool life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Categories ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related CNC Tooling &amp; Systems</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "CNC Chucks", href: "/chuck" },
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
              { label: "All Tools", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Cutting Tools & Inserts – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
