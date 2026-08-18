import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Machine Tool Accessories Supplier | ANFAAS AL AMAL",
  description:
    "Machine tool accessories supplier in Saudi Arabia. We supply milling vises, rotary tables, clamping kits, lathe centers, and tool post grinders to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Machine Tool Accessories",
    "CNC Accessories",
    "Tool Holders",
    "Chuck",
    "CNC Tools",
    "milling vise",
    "clamping kit",
  ],
  alternates: { canonical: "https://anfaasarabia.com/machine-tool-accessories" },
};

const accessoriesList = [
  { name: "Milling Vises & Hydraulic Machine Vises", desc: "For secure component clamping on CNC and conventional milling machines." },
  { name: "Tooling Systems & ER Collets", desc: "A full range of precision ER and OZ collets, pull studs, and locking devices." },
  { name: "Lathe Centers & Live Centers", desc: "NCF heavy-load type live centers and dead centers for lathe operations." },
  { name: "Clamping Kits & T-Slot Accessories", desc: "Complete tooling assembly clamping kits for securing fixtures to machine tables." },
  { name: "Rotary Tables & Tilting Tables", desc: "Manual and NC rotary tables, plus universal tilting tables for multi-angle machining." },
  { name: "Magnetic Tools & V-Blocks", desc: "Magnetic base stands, block clamps, and V-blocks with C-clamps for layout and inspection." },
];

const faqs = [
  {
    q: "What machine tool accessories do you supply?",
    a: "We supply a vast range of machine tool accessories including hydraulic machine vises, ER/OZ collets, live centers, clamping kits, rotary tables, universal tilting tables, punch formers, right angle plates, and V-blocks.",
  },
  {
    q: "Do you supply Vertex machine accessories?",
    a: "Yes. Vertex is a primary brand we supply for workholding and machine accessories. You can visit our dedicated Vertex brand page for details.",
  },
  {
    q: "Do you serve machine shops in Riyadh and Jeddah?",
    a: "Yes. We supply machine shops and factory operations in Dammam, Riyadh, Jeddah, and other industrial zones across Saudi Arabia.",
  },
];

export default function MachineToolAccessoriesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Machine Tool Accessories", href: "/machine-tool-accessories" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Machine Tool <span className="text-red-600">Accessories</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Equip your machine tools with premium workholding, tool mounting, and calibration accessories.
              ANFAAS AL AMAL supplies a complete range of industrial accessories for CNC and conventional workshops.
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
                href="/brands/vertex"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Vertex Tooling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Workholding & Spindle Accessories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accessoriesList.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Settings className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Categories</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "Chuck", href: "/chuck" },
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Vertex", href: "/brands/vertex" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Machine Tool Accessories – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
