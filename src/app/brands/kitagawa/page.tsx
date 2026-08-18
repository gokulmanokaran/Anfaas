import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitagawa Chuck Supplier in Saudi Arabia | ANFAAS AL AMAL",
  description:
    "Kitagawa chuck and workholding solutions supplier in Saudi Arabia. We supply Kitagawa power chucks, scroll chucks, rotary cylinders, and replacement soft jaws to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Kitagawa",
    "Kitagawa Chuck",
    "Kitagawa CNC Chuck",
    "Kitagawa supplier Saudi Arabia",
    "workholding",
    "power chuck",
  ],
  alternates: { canonical: "https://anfaasarabia.com/brands/kitagawa" },
};

const kitagawaProducts = [
  { name: "Kitagawa Power Chucks (3-Jaw)", desc: "Standard-setting hydraulic power chucks offering unbeatable accuracy, high gripping force, and durability on CNC lathes." },
  { name: "Kitagawa Rotary Hydraulic Cylinders", desc: "Open-center and closed-center hydraulic cylinders designed to actuate power chucks on lathe spindles." },
  { name: "Kitagawa Scroll Chucks", desc: "Manual self-centering scroll chucks for conventional lathe setups and precision turning operations." },
  { name: "Kitagawa Special Workholding Solutions", desc: "Collet chucks, stationary chucks, NC rotary tables, and custom clamping fixtures." },
];

export default function KitagawaBrandPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Brands", href: "/#brands" },
          { label: "Kitagawa", href: "/brands/kitagawa" },
        ]}
      />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Kitagawa <span className="text-red-600">Chuck</span> & Workholding Solutions
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Kitagawa is world-renowned for manufacturing high-quality, high-reliability power chucks and rotary cylinders.
              ANFAAS AL AMAL supplies Kitagawa workholding products to machine shops across Saudi Arabia.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              Explore our full <Link href="/chuck" className="text-red-600 hover:underline font-medium">CNC Chuck</Link> range to view
              all lathe chuck options.
            </p>
            <Link
              href="/#contact"
              id="kitagawa-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request Kitagawa Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Kitagawa Equipment Portfolio</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {kitagawaProducts.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Settings className="w-6 h-6 text-red-600 mb-4" />
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
