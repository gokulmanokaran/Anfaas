import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Chuck & Power Chuck Supplier | ANFAAS AL AMAL",
  description:
    "CNC chuck and manual chuck solutions supplier in Saudi Arabia. We supply 3-jaw power chucks, scroll chucks, collet chucks, and Kitagawa chucks to Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Chuck",
    "CNC Chuck",
    "Kitagawa Chuck",
    "Kitagawa",
    "Machine Tool Accessories",
    "Power Chuck",
    "3-jaw chuck",
  ],
  alternates: { canonical: "https://anfaasarabia.com/chuck" },
};

const chucks = [
  { name: "3-Jaw Power Chucks", desc: "Hydraulic power chucks for high-speed CNC lathes and turning centres, offering high gripping force and repeat accuracy." },
  { name: "Scroll Chucks & Independent Chucks", desc: "Self-centering manual scroll chucks and 4-jaw independent chucks for conventional lathe machines." },
  { name: "CNC Collet Chucks", desc: "Designed for high-speed bar work and precision small-part machining, minimizing spindle load." },
  { name: "Magnetic Chucks", desc: "Electro-magnetic and permanent magnetic chucks for grinding, milling, and EDM workholding operations." },
  { name: "Soft Jaws & Hard Jaws", desc: "A full range of replacement chuck jaws in steel and aluminum for precise component clamping." },
];

const faqs = [
  {
    q: "What types of chucks does ANFAAS AL AMAL supply?",
    a: "We supply CNC power chucks (hydraulic), manual lathe scroll chucks, independent chucks, collet chucks, magnetic chucks for surface grinding/milling, and a complete range of chuck jaws.",
  },
  {
    q: "Do you supply Kitagawa chucks?",
    a: "Yes. Kitagawa is one of the premier workholding brands we supply. You can explore our dedicated Kitagawa brand page for more details.",
  },
  {
    q: "Are the chucks compatible with standard CNC spindle noses?",
    a: "Yes. We offer chucks matching standard spindle noses (A2-5, A2-6, A2-8, etc.) to ensure direct mounting compatibility with your CNC machine.",
  },
];

export default function ChuckPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Chuck", href: "/chuck" }]} />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              CNC & Manual <span className="text-red-600">Chucks</span> Supplier
              <br />in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Secure workholding is fundamental to precision lathe turning and milling operations. ANFAAS AL AMAL supplies
              heavy-duty, high-accuracy power chucks, scroll chucks, and magnetic chucks for metalworking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="chuck-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/brands/kitagawa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Kitagawa Chucks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Lathe Chucks & Magnetic Workholding</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {chucks.map((item) => (
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
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
              { label: "Kitagawa", href: "/brands/kitagawa" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Chucks – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
