import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings, Disc, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Chuck & Lathe Chuck Supplier in Saudi Arabia | Anfaas Arabia",
  description:
    "CNC chuck and lathe chuck supplier in Saudi Arabia. ANFAAS AL AMAL supplies 3-jaw hydraulic power chucks, manual scroll chucks, 4-jaw independent chucks, collet chucks, and chuck jaws to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "CNC chuck",
    "lathe chuck",
    "power chuck",
    "3-jaw power chuck",
    "manual scroll chuck",
    "4-jaw independent chuck",
    "collet chuck",
    "chuck supplier Saudi Arabia",
    "machine tool chuck",
    "soft jaws",
    "hard jaws",
    "lathe workholding",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/chuck" },
  openGraph: {
    title: "CNC Chuck & Lathe Chuck Supplier in Saudi Arabia | Anfaas Arabia",
    description:
      "CNC chuck and lathe chuck supplier in Saudi Arabia. ANFAAS AL AMAL supplies 3-jaw hydraulic power chucks, manual scroll chucks, 4-jaw independent chucks, collet chucks, and chuck jaws to Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/chuck",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const chuckSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CNC & Lathe Chucks Workholding Solutions",
  description: "ANFAAS AL AMAL CNC power chucks, manual lathe chucks, collet chucks, and replacement jaws in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/chuck",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "3-Jaw Hydraulic Power Chucks (Open Center & Closed Center)" },
    { "@type": "ListItem", position: 2, name: "Manual Self-Centering Scroll Chucks" },
    { "@type": "ListItem", position: 3, name: "4-Jaw Independent Lathe Chucks" },
    { "@type": "ListItem", position: 4, name: "High-Speed CNC Collet Chucks" },
    { "@type": "ListItem", position: 5, name: "Precision Hard & Soft Chuck Jaws" },
  ],
};

const chucks = [
  {
    name: "3-Jaw Hydraulic Power Chucks",
    desc: "Through-hole (open-center) and solid (closed-center) hydraulic power chucks engineered for high-speed CNC turning centres, delivering high gripping force, dynamic balance, and repeatability.",
  },
  {
    name: "Manual Self-Centering Scroll Chucks",
    desc: "Precision 3-jaw and 4-jaw scroll chucks with semi-steel or forged steel bodies for conventional engine lathes, ensuring rapid and accurate workpiece centering.",
  },
  {
    name: "4-Jaw Independent Chucks",
    desc: "Heavy-duty independent chucks with reversible solid jaws for clamping asymmetrical, rectangular, or irregular workpieces with maximum holding power.",
  },
  {
    name: "CNC Collet Chucks (Dead-Length Type)",
    desc: "Direct-mount spindle collet chucks designed for high-RPM bar feeding and precision small-part turning, minimizing spindle inertia and eliminating workpiece pushback.",
  },
  {
    name: "Precision Soft & Hard Chuck Jaws",
    desc: "Standard and tall soft jaws (steel and aluminum) easily machinable to custom part contours, alongside serrated hardened master jaws for rough stock gripping.",
  },
  {
    name: "Magnetic Chucks & Rotary Cylinders",
    desc: "Permanent and electro-magnetic chucks for surface grinders and milling machines, plus hydraulic rotary actuation cylinders for power chuck operation.",
  },
];

const faqs = [
  {
    q: "What types of CNC chucks does ANFAAS AL AMAL supply?",
    a: "We supply hydraulic 3-jaw power chucks (open and closed center), manual lathe scroll chucks, 4-jaw independent chucks, quick-change collet chucks, magnetic grinding chucks, and replacement soft/hard jaws.",
  },
  {
    q: "What spindle nose mountings are available for your chucks?",
    a: "We supply chucks matching standard ISO/DIN/ANSI spindle nose mountings including A2-4, A2-5, A2-6, A2-8, A2-11, and direct cylindrical mount configurations for CNC turning centres and conventional lathes.",
  },
  {
    q: "What is the difference between open-center and closed-center power chucks?",
    a: "Open-center (through-hole) power chucks allow bar stock to pass through the machine spindle, making them ideal for automated bar feeding operations. Closed-center (solid) power chucks provide a solid face and are typically used for discrete shaft or billet machining where through-hole clearance is not needed.",
  },
  {
    q: "Do you supply machinable soft jaws for specialized workpiece shapes?",
    a: "Yes. We supply standard 1.5mm x 60° and 1/16\" x 90° serration soft jaws in various heights and widths (both steel and aluminum), allowing operators to bore custom profiles for non-marring, high-concentricity clamping.",
  },
  {
    q: "Do you supply chucks in Dammam, Riyadh, and Jeddah?",
    a: "Yes. We deliver precision chucks, hydraulic cylinders, and chuck accessories across Dammam, Riyadh, Jeddah, and throughout Saudi Arabia.",
  },
];

export default function ChuckPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chuckSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Chuck", href: "/chuck" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC &amp; Lathe <span className="text-red-600">Chucks</span> Supplier
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Reliable, high-force workholding is the foundation of safe and accurate turning. ANFAAS AL AMAL
              supplies high-precision 3-jaw power chucks, manual scroll chucks, collet chucks, and custom jaws
              for metalworking facilities across Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="chuck-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/machine-tool-accessories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Machine Accessories
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
              CNC Power Chucks &amp; Lathe Workholding Systems
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Whether you operate high-production CNC turning centres or conventional toolroom lathes, our chuck range
              delivers superior gripping power, high rotational balance, and minimal centrifugal force loss at high RPMs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chucks.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Settings className="w-6 h-6 text-red-600 mb-3" />
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
              <Disc className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High Gripping Force</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Precision wedge-hook mechanisms convert drawtube pull into massive radial clamping force, ensuring slip-free turning during heavy roughing cuts.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">High Repeat Accuracy</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Hardened and ground slideways ensure repeat centering accuracy within microns, reducing part-to-part variation and scrap rates.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Settings className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Standard Spindle Mounts</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Direct compatibility with standard machine spindle noses (A2-5, A2-6, A2-8, A2-11) for fast retrofitting and machine upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Categories ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Products &amp; Tooling</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
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

      <FAQSection items={faqs} heading="CNC Chucks & Workholding – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
