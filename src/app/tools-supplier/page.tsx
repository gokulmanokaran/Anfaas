import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Gauge, Scissors, Droplets, Ruler, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tool Holders & CNC Tooling Supplier | Anfaas Arabia",
  description:
    "ANFAAS AL AMAL is a trusted CNC tooling and tool holders supplier in Saudi Arabia. We supply ER collet chucks, hydraulic holders, side-lock holders, boring heads, face mill arbors, pull studs, and customized tooling solutions to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "tool holders supplier Saudi Arabia",
    "CNC tooling supplier",
    "ER collet chucks",
    "ER collets",
    "hydraulic tool holders",
    "side-lock holders",
    "boring heads",
    "damped boring tools",
    "face mill arbors",
    "pull studs",
    "customized CNC tooling",
    "CNC fixtures",
    "CNC accessories",
    "industrial tooling supplier",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/tools-supplier" },
  openGraph: {
    title: "Tool Holders & CNC Tooling Supplier | Anfaas Arabia",
    description:
      "ANFAAS AL AMAL is a trusted CNC tooling and tool holders supplier in Saudi Arabia. We supply ER collet chucks, hydraulic holders, side-lock holders, boring heads, face mill arbors, pull studs, and customized tooling solutions to manufacturers in Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/tools-supplier",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const toolsSupplierSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CNC Tooling & Industrial Tooling Products",
  description: "ANFAAS AL AMAL CNC tooling and industrial tooling product categories for Saudi Arabian manufacturers.",
  url: "https://www.anfaasarabia.com/tools-supplier",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tool Holders", url: "https://www.anfaasarabia.com/tool-holders" },
    { "@type": "ListItem", position: 2, name: "ER Collet Chucks & ER Collets", url: "https://www.anfaasarabia.com/tool-holders" },
    { "@type": "ListItem", position: 3, name: "Hydraulic & Side-Lock Holders", url: "https://www.anfaasarabia.com/tool-holders" },
    { "@type": "ListItem", position: 4, name: "Boring Heads & Damped Boring Tools", url: "https://www.anfaasarabia.com/cnc-tools" },
    { "@type": "ListItem", position: 5, name: "Face Mill Arbors & Pull Studs", url: "https://www.anfaasarabia.com/cnc-tools" },
    { "@type": "ListItem", position: 6, name: "Customized CNC Tooling", url: "https://www.anfaasarabia.com/tools-supplier" },
    { "@type": "ListItem", position: 7, name: "CNC Fixtures & Accessories", url: "https://www.anfaasarabia.com/machine-tool-accessories" },
    { "@type": "ListItem", position: 8, name: "Cutting Tools", url: "https://www.anfaasarabia.com/cutting-tools" },
    { "@type": "ListItem", position: 9, name: "Measuring Instruments", url: "https://www.anfaasarabia.com/measuring-instruments" },
  ],
};

/* ── Category Cards ──────────────────────────────────── */
const categories = [
  { icon: Wrench, title: "CNC Tools", desc: "Milling, turning and drilling tools for CNC machining centres.", href: "/cnc-tools" },
  { icon: Scissors, title: "Cutting Tools", desc: "Carbide and HSS cutting tools for high-speed and hard-material machining.", href: "/cutting-tools" },
  { icon: Settings, title: "Tool Holders", desc: "Precision CNC tool holders including ER collet chucks, hydraulic holders, and side-lock holders.", href: "/tool-holders" },
  { icon: Settings, title: "Machine Tool Accessories", desc: "Machine vises, rotary tables, CNC fixtures, collets, and workholding accessories.", href: "/machine-tool-accessories" },
  { icon: Ruler, title: "Measuring Instruments", desc: "Tool presetters, calipers, micrometers, height gauges and precision measuring tools.", href: "/measuring-instruments" },
  { icon: Droplets, title: "CNC Coolant Systems", desc: "CNC coolant, industrial grease, axis oil and distilled water for machine protection.", href: "/coolant" },
  { icon: Gauge, title: "Gauges", desc: "Dial gauges, bore gauges, plug gauges and more for industrial quality control.", href: "/gauges" },
];

/* ── FAQs ────────────────────────────────────────────── */
const faqs = [
  {
    q: "What CNC tool holders does ANFAAS AL AMAL supply?",
    a: "We supply a comprehensive range of CNC tool holders including ER collet chucks, hydraulic holders, side-lock holders, shrink-fit holders, face mill arbors, and boring bar holders — available in BT30, BT40, BT50, HSK-A63, and HSK-A100 machine tapers.",
  },
  {
    q: "Do you supply ER collets and ER collet chucks?",
    a: "Yes. We supply ER collet chucks in all standard sizes (ER11 through ER40) along with precision ER collets. These are suitable for CNC milling, drilling, and tapping applications on most machining centres.",
  },
  {
    q: "What are damped boring tools and when are they used?",
    a: "Damped boring tools (also called vibration-damped boring bars) feature internal vibration-absorbing mechanisms that eliminate chatter when machining long overhangs or deep bores. They are ideal for precision internal diameter finishing where a standard boring bar would vibrate excessively.",
  },
  {
    q: "Can you supply customized CNC tooling?",
    a: "Yes. We work with manufacturers who need customized tooling solutions — including special-profile cutting tools, custom boring heads, and application-specific fixtures. Contact our team to discuss your requirements.",
  },
  {
    q: "What types of industrial tools does ANFAAS AL AMAL supply?",
    a: "ANFAAS AL AMAL supplies a wide range of industrial tools including CNC tool holders, ER collet chucks, hydraulic holders, boring heads, damped boring tools, face mill arbors, pull studs, cutting tools, machine tool accessories, measuring instruments, gauges, and industrial lubricants.",
  },
  {
    q: "Do you supply tools in Dammam, Riyadh, and Jeddah?",
    a: "Yes. ANFAAS AL AMAL supplies industrial tools and CNC tooling to customers across Saudi Arabia, including Dammam, Riyadh, and Jeddah. Our primary base is in Dammam's Industrial District.",
  },
  {
    q: "How can I request a quotation for tools?",
    a: "Contact us via the enquiry form on our website, by email at info@anfaasarabia.com, or by phone/WhatsApp at +966 549186135. Our team will respond within one business day.",
  },
];

export default function ToolsSupplierPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSupplierSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Tools Supplier", href: "/tools-supplier" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              CNC Tooling &amp; <span className="text-red-600">Industrial Tooling</span>
              <br />Solutions
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl">
              ANFAAS AL AMAL is a trusted CNC tooling and industrial tooling supplier in Saudi Arabia.
              From tool holders and boring heads to customized tooling solutions and CNC fixtures — we
              provide the complete tooling range your machining operations depend on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="tools-supplier-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all duration-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tool Holders Section ─────────────────────────── */}
      <section className="py-20 bg-white" id="tool-holders">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Tool Holders
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-3xl">
            Precision tool holders form the critical interface between your CNC machine spindle and the cutting tool.
            ANFAAS AL AMAL supplies a full range of CNC tool holders engineered for concentricity, rigidity, and
            long-term accuracy in milling, turning, and boring applications.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {/* ER Collet Chucks */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">ER Collet Chucks &amp; ER Collets</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                ER collet chucks are the most widely used tool clamping system in CNC machining. Our ER collet
                chucks cover all standard sizes — ER11, ER16, ER20, ER25, ER32, and ER40 — and are compatible
                with the majority of CNC milling centres. Paired with our precision ER collets, they deliver
                consistent runout accuracy for drilling, reaming, and milling operations.
              </p>
              <Link href="/tool-holders" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline">
                View Tool Holders <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Hydraulic & Side-Lock */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">Hydraulic Holders &amp; Side-Lock Holders</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Hydraulic tool holders use oil-expansion clamping to deliver exceptional concentricity (typically
                under 3 µm) and excellent vibration damping — ideal for high-speed finishing and tight-tolerance
                machining. Side-lock holders (Weldon holders) provide secure, positive engagement for heavy milling
                cutters and large-diameter end mills where torque transmission is critical.
              </p>
              <Link href="/tool-holders" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline">
                View Tool Holders <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Boring Heads & Damped Boring Tools */}
          <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-bold text-white mb-3">Boring Heads &amp; Damped Boring Tools</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-3xl">
              Boring heads allow precise adjustment of the cutting diameter for finishing internal bores to exact
              tolerances. For long-overhang applications — such as deep cavities or deep-hole boring — our
              vibration-damped boring tools incorporate internal mass-damper systems to suppress chatter and
              achieve superior surface finishes that standard boring bars cannot deliver.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-red-500" /> Single-point adjustable boring heads</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-red-500" /> Vibration-damped boring bars</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-red-500" /> CNC boring bar holders</span>
            </div>
          </div>

          {/* Face Mill Arbors & Pull Studs */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">Face Mill Arbors</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Face mill arbors provide the interface between your machine spindle and face milling cutters.
                Available in BT40, BT50, and HSK configurations, our arbors are precision-ground to deliver
                flat, accurate surfaces when face milling large workpieces on horizontal or vertical machining
                centres.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">Pull Studs (Retention Knobs)</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Pull studs — also called retention knobs — secure tool holders within the machine spindle's
                automatic tool change (ATC) mechanism. We supply pull studs in all standard specifications
                (BT30, BT40, BT50, DIN, and MAS-BT) to suit your machining centre requirements. Using the
                correct pull stud specification is essential for safe automatic tool changes and spindle
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customized Tooling & Fixtures ───────────────── */}
      <section className="py-20 bg-zinc-50" id="customized-tooling">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Customized Tooling &amp; CNC Fixtures
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-3xl">
            When standard tooling does not meet your application requirements, ANFAAS AL AMAL works
            with manufacturers to develop customized CNC tooling solutions and application-specific fixtures.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 mb-2 text-sm">Custom Tooling Solutions</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Special-profile cutting tools, custom boring heads, and non-standard tool adapters engineered
                to match your specific machining requirements and component geometry.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 mb-2 text-sm">CNC Fixtures &amp; Workholding</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Machine vises, modular clamping systems, and dedicated CNC fixtures that position and secure
                workpieces accurately and repeatably on machining centres and turning centres.
              </p>
              <Link href="/machine-tool-accessories" className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-red-600 hover:underline">
                CNC Accessories <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 mb-2 text-sm">Ball Screws &amp; Linear Guides</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Precision ball screws and linear guide rails for CNC machine rebuilds, retrofit projects, and
                motion system upgrades requiring high load capacity and positional accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Product Range Grid ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Complete Industrial Tooling Range
          </h2>
          <p className="text-zinc-500 mb-10 max-w-2xl text-sm leading-relaxed">
            Explore our complete range of CNC tooling, industrial tools, and machine accessories available for
            customers in Saudi Arabia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex flex-col bg-white rounded-2xl p-6 border border-zinc-100 hover:border-red-100 hover:shadow-[0_4px_24px_rgba(220,38,38,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-1.5 text-sm group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed flex-1">{cat.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why ANFAAS ──────────────────────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                Why Choose ANFAAS AL AMAL as Your CNC Tooling Supplier?
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
                <p>
                  ANFAAS AL AMAL has built a strong reputation as a reliable industrial tooling supplier in Saudi
                  Arabia. With deep expertise in CNC machining — from tool holders and boring heads to customized
                  tooling solutions — we understand the precision demands of modern Saudi manufacturing.
                </p>
                <p>
                  Our tooling range is sourced from globally recognised manufacturers, ensuring every product
                  meets the dimensional accuracy, material quality, and performance standards required in demanding
                  machining environments. Whether you need a standard ER collet chuck or a custom-engineered boring
                  solution, our technical team can help you identify the right approach.
                </p>
                <p>
                  We serve manufacturers in Dammam, Riyadh, and Jeddah — and across the wider Saudi market.
                  Contact us to discuss your tooling requirements and receive a competitive quotation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "20+", label: "Years of Experience" },
                { stat: "500+", label: "Customers Served" },
                { stat: "3", label: "Cities Covered" },
                { stat: "24h", label: "Response Time" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 text-center border border-zinc-100">
                  <p className="text-3xl font-black text-red-600 mb-1">{s.stat}</p>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Served ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Industries Served</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Manufacturing & Metalworking",
              "Petrochemical",
              "Automotive",
              "Aerospace",
              "Oil & Gas",
              "General Engineering",
              "Defence & Heavy Industry",
            ].map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ───────────────────────────────────── */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Serving Dammam, Riyadh &amp; Jeddah
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { city: "Dammam", href: "/locations/dammam" },
              { city: "Riyadh", href: "/locations/riyadh" },
              { city: "Jeddah", href: "/locations/jeddah" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-red-600 hover:text-white transition-all"
              >
                {loc.city} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Tools Supplier – Frequently Asked Questions" />
      <CTASection />
      <Footer />
    </main>
  );
}
