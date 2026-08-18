import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Cutting Tools Supplier in Saudi Arabia | ANFAAS AL AMAL",
  description:
    "Industrial cutting tools supplier in Saudi Arabia. We supply carbide end mills, turning inserts, drills, taps, and reamers to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Cutting Tools",
    "CNC Cutting Tools",
    "CNC Tools",
    "CNC Machine",
    "carbide end mill",
    "turning inserts",
  ],
  alternates: { canonical: "https://anfaasarabia.com/cutting-tools" },
};

const cuttingTools = [
  { name: "Solid Carbide End Mills", desc: "For high-performance milling in steel, stainless steel, aluminum, and hardened materials." },
  { name: "Indexable Milling Cutters & Inserts", desc: "Face mills, shoulder mills, and high-feed mills with replaceable carbide inserts." },
  { name: "Turning & Boring Inserts", desc: "Precision carbide inserts for external turning, facing, profiling, and internal boring." },
  { name: "Drills & Reamers", desc: "Solid carbide and indexable drills, plus machine reamers for high-tolerance hole finishing." },
  { name: "Taps & Threading Tools", desc: "Machine taps, thread mills, and laydown threading inserts for accurate thread cutting." },
  { name: "Bandsaw Blades & Slitting Saws", desc: "High-durability metal cutting bandsaw blades and slitting saws for stock preparation." },
];

const faqs = [
  {
    q: "What types of cutting tools do you supply?",
    a: "We supply carbide end mills, indexable milling inserts, turning inserts, carbide drills, threading taps, thread mills, reamers, and bandsaw blades for general machining and industrial manufacturing.",
  },
  {
    q: "Do you supply cutting tools in Riyadh and Jeddah?",
    a: "Yes. We deliver our high-performance cutting tools to machine shops, aerospace suppliers, and metal fab shops across Dammam, Riyadh, Jeddah, and other Saudi Arabian cities.",
  },
  {
    q: "How can I get assistance selecting the correct cutting parameters?",
    a: "Our technical support team can help you select the ideal insert grade, coating, and geometry based on your workpiece material and machining setup. Contact us to speak with an engineer.",
  },
];

export default function CuttingToolsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Cutting Tools", href: "/cutting-tools" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Cutting Tools</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              High-performance machining requires premium cutting tools. ANFAAS AL AMAL supplies a complete line
              of carbide end mills, indexable inserts, drills, and taps to help you maximize metal removal rates and tool life.
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

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Metal Cutting Portfolio</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cuttingTools.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Scissors className="w-6 h-6 text-red-600 mb-3" />
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
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "Chuck", href: "/chuck" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Cutting Tools – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
