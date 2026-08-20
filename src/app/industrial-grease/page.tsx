import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Grease Supplier in Saudi Arabia | ANFAAS AL AMAL",
  description:
    "High-performance industrial grease supplier in Saudi Arabia. We supply high-speed spindle grease, extreme-pressure bearing grease, and machine tool greases to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Industrial Grease",
    "High Speed Spindle Grease",
    "Industrial Lubricants",
    "EP Bearing Grease",
    "bearings grease",
    "spindle grease",
  ],
  alternates: { canonical: "https://anfaasarabia.com/industrial-grease" },
};

const greases = [
  { name: "Specialty High-Speed Spindle Greases", desc: "Formulated for high-RPM machine spindles, offering low starting resistance and high thermal limits." },
  { name: "Extreme Pressure (EP) Bearing Greases", desc: "For heavy radial loads, shock loads, and high vibration environments in steel mills and manufacturing plants." },
  { name: "High-Temperature Greases", desc: "Maintain grease structure and base oil viscosity in extreme environment operations." },
  { name: "Synthetic High-Load Greases", desc: "Advanced synthetic lubricant formulas engineered to meet demanding OEM machine guidelines and reduce mechanical wear." },
];

const faqs = [
  {
    q: "What types of industrial grease do you supply?",
    a: "We supply multi-purpose EP bearing greases, high-speed CNC spindle greases, high-temperature lubricating greases, and specialty lubricants for demanding manufacturing environments.",
  },
  {
    q: "What temperature and speed ratings do your greases accommodate?",
    a: "Our industrial greases accommodate temperature ranges from -40°C to over +200°C and high DN-speed values suitable for precision CNC machine spindles and heavy factory gearboxes.",
  },
  {
    q: "How can I select the right grease for my machine bearings?",
    a: "Bearing type, spindle RPM, operating temperature, and load ratings dictate grease selection. You can reach out to our team with your machine specs, and we will advise on the correct lubrication product.",
  },
];

export default function IndustrialGreasePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Industrial Grease", href: "/industrial-grease" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Greases</span> Supplier
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Prevent bearing premature wear and components failure. ANFAAS AL AMAL supplies specialty greases designed for
              high-speed CNC spindle bearings, heavy industrial gearboxes, and multi-purpose factory lubrication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="grease-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lubricants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Industrial Lubricants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Industrial Lubricating Greases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {greases.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Lubricants</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Industrial Lubricants", href: "/lubricants" },
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Distilled Water", href: "/distilled-water" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Industrial Grease – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
