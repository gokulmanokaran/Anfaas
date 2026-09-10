import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings, Disc, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Tool Holders Supplier in Saudi Arabia | Anfaas Arabia",
  description:
    "Precision CNC tool holders supplier in Saudi Arabia. ANFAAS AL AMAL supplies ER collet chucks, hydraulic milling chucks, shrink-fit holders, side-lock holders, face mill arbors, and pull studs to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "CNC tool holders",
    "tool holders Saudi Arabia",
    "ER collet chucks",
    "ER collets",
    "hydraulic tool holders",
    "side-lock holders",
    "shrink fit holders",
    "face mill arbors",
    "pull studs",
    "BT40 tool holders",
    "BT50 tool holders",
    "HSK tool holders",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/tool-holders" },
  openGraph: {
    title: "Precision CNC Tool Holders Supplier in Saudi Arabia | Anfaas Arabia",
    description:
      "Precision CNC tool holders supplier in Saudi Arabia. ANFAAS AL AMAL supplies ER collet chucks, hydraulic holders, side-lock Weldon holders, shrink-fit holders, face mill arbors, and pull studs across Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/tool-holders",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const toolHoldersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Precision CNC Tool Holders & Tooling Systems",
  description: "ANFAAS AL AMAL CNC tool holders, ER collet chucks, hydraulic holders, and arbors for Saudi manufacturers.",
  url: "https://www.anfaasarabia.com/tool-holders",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ER Collet Chucks (ER11 to ER40)" },
    { "@type": "ListItem", position: 2, name: "Hydraulic Expansion Milling Chucks" },
    { "@type": "ListItem", position: 3, name: "Thermal Shrink-Fit Tool Holders" },
    { "@type": "ListItem", position: 4, name: "Side-Lock Weldon Shank Holders" },
    { "@type": "ListItem", position: 5, name: "Face Mill Arbors (BT40, BT50, HSK)" },
    { "@type": "ListItem", position: 6, name: "Precision Pull Studs (Retention Knobs)" },
  ],
};

const holderTypes = [
  {
    name: "ER Collet Chucks & Precision ER Collets",
    desc: "Universal tool clamping systems in ER11, ER16, ER20, ER25, ER32, and ER40 standards for high-precision drilling, reaming, tapping, and light milling.",
  },
  {
    name: "Hydraulic Expansion Milling Chucks",
    desc: "Premium hydraulic holders delivering exceptional concentricity (under 3 µm runout) and vibration dampening for high-speed finishing and tight-tolerance machining.",
  },
  {
    name: "Thermal Shrink-Fit Tool Holders",
    desc: "Slim-profile shrink-fit tool holders providing maximum rigidity, dynamic balance at 25,000+ RPM, and superior access into deep mold cavities.",
  },
  {
    name: "Side-Lock Weldon Holders",
    desc: "Heavy-duty side-lock tool holders offering positive drive and zero tool slippage for heavy rough milling and large solid-carbide end mills.",
  },
  {
    name: "Face Mill Arbors & Shell Mill Holders",
    desc: "Precision ground arbors for mounting face milling cutters and shell mills in BT30, BT40, BT50, and HSK machine spindle tapers.",
  },
  {
    name: "Pull Studs & Tool Tightening Fixtures",
    desc: "Hardened high-tensile pull studs (MAS-BT, DIN 69872, CAT) and roller bearing tightening fixtures for safe tool assembly.",
  },
];

const faqs = [
  {
    q: "What CNC machine tapers are supported by your tool holders?",
    a: "We supply tool holders in all standard industrial spindle tapers including MAS-BT (BT30, BT40, BT50), DIN 69871 (SK40, SK50), HSK (HSK-A63, HSK-A100), and CAT tapers.",
  },
  {
    q: "What runout accuracy do your ER collet chucks achieve?",
    a: "Our precision ER collet chucks and collets achieve runout accuracies of 0.005 mm (5 microns) or better at 3xD, ensuring long tool life and superior surface quality.",
  },
  {
    q: "Why should I use hydraulic holders instead of standard collet chucks?",
    a: "Hydraulic expansion holders provide hydraulic fluid damping that absorbs cutting micro-vibrations, yielding better surface finish, longer cutting edge life, and repeatable sub-3-micron concentricity with quick hex-wrench tool clamping.",
  },
  {
    q: "Are pull studs included with tool holders?",
    a: "Pull studs (retention knobs) must match your specific CNC machine tool changer mechanism (coolant-through vs solid, 45°, 60°, or 90° angle). We supply matching pull studs separately based on your machine specifications.",
  },
  {
    q: "Do you supply tool holders in Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL supplies precision CNC tool holders to machine shops, mold makers, and manufacturing facilities across Dammam, Riyadh, Jeddah, and all industrial cities in Saudi Arabia.",
  },
];

export default function ToolHoldersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolHoldersSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Tool Holders", href: "/tool-holders" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC <span className="text-red-600">Tool Holders</span> Supplier
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Precision tool holders form the critical link between your machine spindle and cutting tool.
              ANFAAS AL AMAL supplies high-accuracy ER collet chucks, hydraulic holders, shrink-fit systems,
              and face mill arbors to manufacturers across Dammam, Riyadh, and Jeddah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="tool-holders-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tools-supplier"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                All Tools &amp; Products
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
              CNC Tool Holder Types &amp; Systems
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Every machining process requires the right tool clamping balance of rigidity, concentricity, and clearance.
              Explore our comprehensive range of tool holding solutions below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holderTypes.map((h) => (
              <div key={h.name} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Settings className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{h.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{h.desc}</p>
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
              <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Sub-Micron Concentricity</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Precision-ground tapers and clamping bores minimize tool runout, ensuring even chip load and dramatically prolonging cutter life.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Disc className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Balanced for High RPM</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Pre-balanced to G2.5 at 20,000 to 25,000 RPM, protecting your machine spindle bearings from high-speed centrifugal vibration.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <Settings className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-bold text-zinc-900 text-base mb-2">Universal Machine Tapers</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Comprehensive stock of BT30, BT40, BT50, HSK-A63, and HSK-A100 tapers compatible with all leading CNC machining centres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Categories ───────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related CNC Tooling &amp; Accessories</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "CNC Chucks", href: "/chuck" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
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

      <FAQSection items={faqs} heading="CNC Tool Holders – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
