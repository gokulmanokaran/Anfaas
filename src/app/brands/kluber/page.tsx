import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Kluber Lubricants & Industrial Grease | ANFAAS AL AMAL",
  description:
    "Kluber specialty lubricants and industrial grease supplier in Saudi Arabia. We supply Kluber high-speed spindle grease, bearing lubricants, and gear oils to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Kluber",
    "Kluber Grease",
    "Kluber Lubricants",
    "Kluber Industrial Grease",
    "slideway oil",
    "spindle lubrication",
  ],
  alternates: { canonical: "https://anfaasarabia.com/brands/kluber" },
};

const kluberProducts = [
  { name: "Kluber High-Speed Bearing Greases", desc: "Specialty greases designed for high-RPM machine spindles, offering low friction, high speed index, and wear prevention." },
  { name: "Kluber Heavy-Duty EP Greases", desc: "For gearboxes, high-load plain/rolling bearings, and general industrial application under high pressure." },
  { name: "Kluber Slideway & Guideway Oils", desc: "Designed for precise machine tool slideways to ensure chatter-free linear table feed." },
  { name: "Kluber Special Application Lubricants", desc: "Including chain oils, compressor lubricants, and high-temperature oils for manufacturing plants." },
];

export default function KluberBrandPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Brands", href: "/#brands" },
          { label: "Kluber", href: "/brands/kluber" },
        ]}
      />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Kluber <span className="text-red-600">Specialty Lubricants</span> & Greases
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Kluber Lubrication is globally recognized for specialty lubrication products that reduce maintenance downtime.
              ANFAAS AL AMAL supplies Kluber specialty greases and oils to factory operators across Saudi Arabia.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              Explore our full <Link href="/industrial-grease" className="text-red-600 hover:underline font-medium">industrial grease</Link>{" "}
              and <Link href="/lubricants" className="text-red-600 hover:underline font-medium">lubricants</Link> ranges.
            </p>
            <Link
              href="/#contact"
              id="kluber-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request Kluber Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Kluber Products We Supply</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {kluberProducts.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Droplets className="w-6 h-6 text-red-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2 text-base">{item.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
