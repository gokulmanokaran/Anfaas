import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Tool Holders Supplier in Saudi Arabia",
  description:
    "ANFAAS AL AMAL supplies precision CNC tool holders for machining centres across Saudi Arabia. Collet chucks, milling chucks, shrink-fit holders, and boring tool holders. Serving Dammam, Riyadh, and Jeddah. Request a quotation.",
  keywords: [
    "tool holders Saudi Arabia",
    "CNC tool holders",
    "collet chuck",
    "milling chuck",
    "machine tool accessories",
    "shrink fit holder",
  ],
  alternates: { canonical: "https://anfaasarabia.com/tool-holders" },
};

const holderTypes = [
  { name: "Collet Chucks (ER Type)", desc: "ER collet chucks for milling and drilling applications — widely compatible with CNC machining centres." },
  { name: "Milling Chucks (Hydraulic)", desc: "Hydraulic milling chucks for high-precision and high-speed milling with excellent vibration damping." },
  { name: "Shrink-Fit Holders", desc: "Shrink-fit tool holders for superior concentricity and rigidity in high-speed machining." },
  { name: "Side Lock Holders", desc: "Weldon shank side lock holders for heavy milling and drilling applications." },
  { name: "Boring Tool Holders", desc: "Boring bar holders for precision internal diameter machining on CNC lathes and machining centres." },
  { name: "Drill Chucks", desc: "Keyless and keyed drill chucks for CNC and conventional drilling applications." },
];

const faqs = [
  {
    q: "What tool holders does ANFAAS AL AMAL supply?",
    a: "We supply a range of CNC tool holders including ER collet chucks, hydraulic milling chucks, shrink-fit holders, side lock holders, boring bar holders, and drill chucks compatible with common CNC machining centre tapers (BT30, BT40, BT50, HSK).",
  },
  {
    q: "Are your tool holders compatible with all CNC machines?",
    a: "Our tool holders are available in standard machine tapers including BT30, BT40, BT50, HSK-A63, and HSK-A100. Please specify your machine taper when enquiring so we can recommend the correct holder.",
  },
  {
    q: "How do I order tool holders in Saudi Arabia?",
    a: "Contact us at info@anfaasarabia.com or call/WhatsApp +966 565301513 with your tool holder type, machine taper, and shank diameter requirements. We will provide a quotation promptly.",
  },
];

export default function ToolHoldersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Tool Holders", href: "/tool-holders" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC <span className="text-red-600">Tool Holders</span> Supplier
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Precision tool holders are critical for accurate and reliable CNC machining. ANFAAS AL AMAL
              supplies a comprehensive range of tool holders for CNC machining centres, turning centres,
              and milling machines across Saudi Arabia.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              Explore our <Link href="/machine-tool-accessories" className="text-red-600 hover:underline font-medium">machine tool accessories</Link>{" "}
              and <Link href="/chuck" className="text-red-600 hover:underline font-medium">CNC chuck</Link> range for complete workholding solutions.
            </p>
            <Link
              href="/#contact"
              id="tool-holders-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Tool Holder Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {holderTypes.map((h) => (
              <div key={h.name} className="bg-white rounded-2xl p-6 border border-zinc-100">
                <Settings className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{h.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Chuck", href: "/chuck" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
              { label: "Cutting Tools", href: "/cutting-tools" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Tool Holders – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
