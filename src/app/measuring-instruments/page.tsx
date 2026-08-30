import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Ruler, Target, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Measuring Instruments & Tool Presetters | Anfaas Arabia",
  description:
    "Precision measuring instruments and tool presetters supplier in Saudi Arabia. ANFAAS AL AMAL supplies CNC tool presetters, digital calipers, micrometers, height gauges, and dial indicators to manufacturers in Dammam, Riyadh, and Jeddah.",
  keywords: [
    "measuring instruments Saudi Arabia",
    "tool presetters",
    "CNC tool presetter",
    "tool presetter supplier",
    "tool setting equipment",
    "precision tool measurement",
    "digital calipers",
    "micrometers",
    "height gauges",
    "dial indicators",
    "precision measuring instruments",
    "industrial measuring instruments",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/measuring-instruments" },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const measuringSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Precision Measuring Instruments & Tool Presetters",
  description: "ANFAAS AL AMAL precision measuring instruments and CNC tool presetter products for Saudi Arabian manufacturers.",
  url: "https://www.anfaasarabia.com/measuring-instruments",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tool Presetters & Z-Axis Setting Instruments" },
    { "@type": "ListItem", position: 2, name: "Digital Calipers" },
    { "@type": "ListItem", position: 3, name: "Outer Diameter Micrometers" },
    { "@type": "ListItem", position: 4, name: "Digital Height Gauges" },
    { "@type": "ListItem", position: 5, name: "Dial Indicators & Lever Indicators" },
    { "@type": "ListItem", position: 6, name: "Comparator Stands" },
  ],
};

/* ── Instrument Categories ───────────────────────────── */
const instruments = [
  {
    name: "Digital Calipers",
    desc: "High-accuracy digital vernier calipers for internal, external, depth, and step measurements — essential for incoming inspection and in-process quality control.",
  },
  {
    name: "Outer Diameter Micrometers",
    desc: "Precision outside micrometers for accurate thickness and outside diameter measurement to the micron level in machining inspection and metrology.",
  },
  {
    name: "Digital Height Gauges",
    desc: "Advanced height gauges for vertical measurements, scribe layout, and high-precision inspection on surface plates and CMM tables.",
  },
  {
    name: "Dial Indicators & Lever Indicators",
    desc: "High-sensitivity dial test indicators for alignment checks, runout inspection, and dimensional tolerance verification on CNC and conventional machines.",
  },
  {
    name: "Tool Presetters & Z-Axis Presetters",
    desc: "Optical and indicator-type Z-axis presetters for accurately setting tool lengths on CNC machining centres — eliminating trial cuts and reducing setup time.",
  },
  {
    name: "Comparator Stands",
    desc: "Rigid comparator stands with fine vertical adjustment for precision inspection, surface plate comparisons, and repeatable dial indicator positioning.",
  },
];

/* ── FAQs ────────────────────────────────────────────── */
const faqs = [
  {
    q: "What is a tool presetter and why is it important for CNC machining?",
    a: "A tool presetter is a measuring instrument used to accurately determine and set the length and diameter offset of a cutting tool before it is loaded into a CNC machine. Using a tool presetter eliminates the need for time-consuming trial cuts, reduces setup time significantly, and ensures the CNC controller has precise tool data — leading to better first-part accuracy and reduced scrap.",
  },
  {
    q: "What types of tool presetters do you supply?",
    a: "We supply indicator-type Z-axis presetters and optical tool presetters for CNC machining centres. Both types allow operators to establish accurate tool length offsets without needing the machine's spindle. Contact us to discuss which type suits your machine and production requirements.",
  },
  {
    q: "What precision measuring instruments does ANFAAS AL AMAL supply?",
    a: "We supply digital calipers, outer diameter micrometers, digital height gauges, dial indicators, lever indicators, precision comparator stands, and Z-axis tool presetters (indicator and optical types) for industrial quality control applications.",
  },
  {
    q: "Do you supply gauges as well as measuring instruments?",
    a: "Yes. In addition to precision measuring instruments, we supply a range of industrial gauges including bore gauges, plug gauges, ring gauges, and dial bore gauges. Visit our dedicated gauges page for more information.",
  },
  {
    q: "How do tool presetters reduce CNC machining setup time?",
    a: "By measuring tool lengths offline (away from the machine), operators can pre-enter accurate tool offsets into the CNC controller before the job starts. This eliminates manual tool-length measurement at the machine, avoids trial cuts that consume material and time, and allows the machine to begin cutting immediately with confidence.",
  },
  {
    q: "Do you serve Riyadh and Jeddah for measuring instruments?",
    a: "Yes. We supply measuring instruments to manufacturers in Dammam, Riyadh, Jeddah, and across Saudi Arabia. Our main base is in Dammam's Industrial District, and we offer logistics delivery to Riyadh and Jeddah.",
  },
];

export default function MeasuringInstrumentsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(measuringSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Measuring Instruments", href: "/measuring-instruments" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Measuring Instruments &amp; <span className="text-red-600">Tool Presetters</span>
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Accurate quality control and efficient CNC setup start with reliable measurement tools.
              ANFAAS AL AMAL supplies precision measuring instruments — including CNC tool presetters —
              to help Saudi manufacturers achieve dimensional accuracy and reduce machining cycle times.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="measuring-instruments-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gauges"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Explore Gauges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tool Presetters Focus ────────────────────────── */}
      <section className="py-20 bg-white" id="tool-presetters">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                Tool Presetters &amp; CNC Tool Setting Equipment
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
                <p>
                  A <strong>tool presetter</strong> is one of the most valuable instruments in a CNC machining
                  facility. It allows operators to precisely measure the length and diameter of cutting tools
                  before loading them into the machine — providing accurate offset data to the CNC controller
                  without the need for trial cuts.
                </p>
                <p>
                  ANFAAS AL AMAL supplies both <strong>indicator-type Z-axis presetters</strong> and
                  <strong> optical tool presetters</strong> suitable for CNC machining centres. These
                  instruments dramatically reduce setup time, improve first-part accuracy, and minimise
                  material waste from incorrect tool offsets.
                </p>
                <p>
                  For manufacturers running multiple tool changes or large batch production, investing in
                  proper tool setting equipment typically delivers measurable reductions in non-productive
                  machine time and scrap rates.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Target, title: "Eliminate Trial Cuts", desc: "Pre-set tool offsets offline so the machine begins cutting immediately with correct data." },
                { icon: Ruler, title: "Improve First-Part Accuracy", desc: "Accurate tool length data fed to the CNC controller reduces dimensional errors on the first part." },
                { icon: Gauge, title: "Reduce Setup Time", desc: "Offline presetting decouples tool preparation from machine run time, maximising spindle utilisation." },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4 bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 text-sm mb-1">{benefit.title}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Measurement Portfolio Grid ───────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">Our Measurement Portfolio</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-2xl">
            From tool presetters to digital calipers — our precision measurement range supports incoming
            inspection, in-process quality control, and final dimensional verification.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instruments.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Ruler className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precision Measurement for CNC ───────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-4">
              Precision Measurement for CNC Quality Control
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              In modern CNC manufacturing, dimensional accuracy is non-negotiable. Whether you are
              machining aerospace components, automotive parts, or heavy industrial equipment, reliable
              measuring instruments are the backbone of your quality management system.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              ANFAAS AL AMAL sources measuring instruments from reputable manufacturers known for
              calibration stability, long-term accuracy, and durability in industrial workshop environments.
              All instruments we supply are suitable for use in quality inspection roles across the
              petrochemical, automotive, aerospace, and general engineering sectors in Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/gauges" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                Industrial Gauges <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tools-supplier" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                All Tools &amp; Products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/machine-tool-accessories" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                Machine Tool Accessories <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Measuring Instruments & Tool Presetters – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
