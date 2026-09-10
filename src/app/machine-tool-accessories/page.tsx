import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Machine Tool Accessories & CNC Workholding Supplier | Anfaas Arabia",
  description:
    "Machine tool accessories and CNC workholding supplier in Saudi Arabia. ANFAAS AL AMAL supplies precision machine vises, rotary tables, 52-piece clamping kits, lathe live centers, and magnetic fixtures to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Machine Tool Accessories",
    "CNC Accessories",
    "machine vises",
    "CNC machine vises",
    "rotary tables",
    "CNC rotary tables",
    "clamping kits",
    "lathe live centers",
    "workholding fixtures",
    "T-slot clamping",
    "magnetic workholding",
    "industrial machine tool accessories",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/machine-tool-accessories" },
  openGraph: {
    title: "Machine Tool Accessories & CNC Workholding Supplier | Anfaas Arabia",
    description:
      "Machine tool accessories and CNC workholding supplier in Saudi Arabia. ANFAAS AL AMAL supplies machine vises, precision rotary tables, clamping kits, lathe live centres, and magnetic chucks to Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/machine-tool-accessories",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const accessoriesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Machine Tool Accessories & CNC Workholding",
  description: "ANFAAS AL AMAL machine tool accessories, precision machine vises, rotary tables, and clamping systems in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/machine-tool-accessories",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Precision Machine Vises & Hydraulic CNC Vises" },
    { "@type": "ListItem", position: 2, name: "Rotary Tables & Universal Tilting Tables" },
    { "@type": "ListItem", position: 3, name: "Modular Clamping Kits & T-Slot Accessories" },
    { "@type": "ListItem", position: 4, name: "Heavy-Duty Lathe Live Centers & Dead Centers" },
    { "@type": "ListItem", position: 5, name: "Magnetic Chucks & Magnetic Base Blocks" },
    { "@type": "ListItem", position: 6, name: "Tooling Assembly Systems & Collet Fixtures" },
  ],
};

const accessoriesList = [
  {
    name: "Precision Machine Vises & Hydraulic CNC Vises",
    desc: "Angle-lock mechanical and hydraulic machine vises engineered to prevent workpiece lift during heavy CNC milling operations, delivering exceptional clamping force and repetitive accuracy.",
  },
  {
    name: "Manual & NC Rotary Tables",
    desc: "High-precision horizontal/vertical rotary tables and universal tilting rotary tables for circular cutting, angular indexing, and multi-axis CNC milling setups.",
  },
  {
    name: "Modular Clamping Kits & T-Slot Sets",
    desc: "Complete 52-piece steel clamping kits (including step blocks, clamping studs, coupling nuts, and flange nuts) for rigidly securing fixtures and workpieces to machine tables.",
  },
  {
    name: "Lathe Live Centers & Dead Centers",
    desc: "NCF heavy-load precision live centers and carbide-tipped dead centers engineered for high-RPM lathe turning with minimal runout and maximum load support.",
  },
  {
    name: "Magnetic Workholding & V-Blocks",
    desc: "Permanent and electro-magnetic chucks, magnetic base stands, precision V-blocks, and angle plates for secure grinding, EDM, and quality inspection.",
  },
  {
    name: "Collet Fixtures & Tightening Fixtures",
    desc: "Tool holder tightening fixtures, collet blocks, and pull stud wrenches for safe, damage-free tool assembly and maintenance in the workshop.",
  },
];

const faqs = [
  {
    q: "What types of machine vises do you supply for CNC milling?",
    a: "We supply precision angle-lock machine vises, modular hydraulic vises, double-station vises, and mechanical high-clamping-force vises suitable for vertical and horizontal CNC machining centres.",
  },
  {
    q: "What rotary tables are available for workshop applications?",
    a: "We supply manual horizontal/vertical rotary tables, indexing tables, and universal tilting tables in various faceplate diameters (from 150 mm to 400 mm) suitable for milling, boring, and layout operations.",
  },
  {
    q: "What is included in a standard 52-piece clamping kit?",
    a: "Our 52-piece T-slot clamping kits include step clamping blocks, serrated clamping pads, coupling nuts, T-slot nuts, flange nuts, and hardened high-tensile studs in various lengths to fit table T-slot sizes (e.g., M12, M14, M16).",
  },
  {
    q: "Are the live centers suitable for high-speed CNC turning?",
    a: "Yes. We supply high-speed, heavy-load live centers with triple-bearing assemblies and carbide-tipped points, designed to withstand high radial loads and high spindle RPMs on CNC lathes.",
  },
  {
    q: "Do you supply machine tool accessories to Riyadh and Jeddah?",
    a: "Yes. ANFAAS AL AMAL supplies machine tool accessories and CNC workholding systems across Dammam, Riyadh, Jeddah, and all industrial regions of Saudi Arabia.",
  },
];

export default function MachineToolAccessoriesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessoriesSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Machine Tool Accessories", href: "/machine-tool-accessories" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Machine Tool <span className="text-red-600">Accessories</span> &amp; Workholding
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Maximize the productivity and precision of your CNC and conventional machine tools.
              ANFAAS AL AMAL supplies high-rigidity machine vises, rotary tables, modular clamping systems,
              and live centers to manufacturers in Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="machine-tool-accessories-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tool-holders"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Tool Holders &amp; Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Workholding Sections ─────────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Precision Workholding &amp; Machine Tool Systems
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              In CNC machining, rigid workholding is just as critical as high-quality cutting tools. Our machine tool
              accessories portfolio is designed to eliminate vibration, minimize deflection, and maintain tight dimensional
              tolerances throughout rigorous production runs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessoriesList.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Settings className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workholding Focus ────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">CNC Machine Vises</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Precision-ground slideways and case-hardened jaws ensure reliable, repeat clamping without part tilt. Available in mechanical angle-lock and hydraulic power configurations.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Wrench className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Rotary &amp; Indexing Tables</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Facilitate complex multi-side and circular machining operations with high indexing accuracy, worm gear drives, and secure hydraulic/pneumatic table brakes.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Settings className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Modular Clamping Systems</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Versatile T-slot clamping kits and fixture elements that easily adapt to irregular workpiece geometries, reducing machine setup time between production batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Categories ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Categories &amp; Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "CNC Chucks", href: "/chuck" },
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Cutting Tools", href: "/cutting-tools" },
              { label: "Measuring Instruments", href: "/measuring-instruments" },
              { label: "All Tools", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Machine Tool Accessories & Vises – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
