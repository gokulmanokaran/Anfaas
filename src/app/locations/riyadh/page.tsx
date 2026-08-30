import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & CNC Tools Supplier in Riyadh | ANFAAS AL AMAL",
  description:
    "Industrial tools & CNC tools supplier in Riyadh. Sourcing and delivering tool holders, cutting tools, measuring instruments, and lubricants to manufacturers in Riyadh Industrial Cities.",
  keywords: [
    "Tools Supplier in Riyadh",
    "CNC Tools Supplier in Riyadh",
    "Machine Tool Accessories in Riyadh",
    "Cutting Tools Supplier in Riyadh",
    "Measuring Instruments in Riyadh",
    "Industrial Tools Supplier in Riyadh",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/locations/riyadh" },
};

const localFaqs = [
  {
    q: "How does ANFAAS AL AMAL serve customers in Riyadh?",
    a: "We ship directly to Riyadh factory addresses. By consolidating orders at our Dammam warehouse, we provide fast delivery times directly to machine shops in Riyadh&apos;s Second Industrial City and surrounding areas.",
  },
  {
    q: "What is the typical shipping time for Riyadh orders?",
    a: "Stocked items are typically delivered within 1 to 2 business days. For specialized tooling or larger machine accessories, we coordinate estimated lead times at the time of quotation.",
  },
  {
    q: "Do you have a physical sales office in Riyadh?",
    a: "We manage all administrative, inventory, and logistics operations out of our main office in Dammam to maintain efficiency. Sales engineers regularly visit clients in Riyadh to coordinate tooling setups.",
  },
];

export default function RiyadhLocationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Riyadh", href: "/locations/riyadh" },
        ]}
      />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Central Region Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial Tools & <span className="text-red-600">CNC Tools</span> Supplier in Riyadh
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              ANFAAS AL AMAL supplies high-performance CNC machining tools, workholding chucks, measuring gauges,
              and industrial lubricants to machine shops and manufacturing industries across Riyadh.
            </p>
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 mb-8 max-w-xl space-y-3">
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Service Area:</strong> Riyadh Industrial Cities, Central Region, Saudi Arabia</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Phone / WhatsApp:</strong> +966 565301513</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Email:</strong> info@anfaasarabia.com</span>
              </div>
            </div>
            <Link
              href="/#contact"
              id="riyadh-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request a Quote in Riyadh <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Supporting Riyadh&apos;s Manufacturing Sector</h2>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-3xl mb-10">
            Riyadh&apos;s industrial sector is growing rapidly under Saudi Vision 2030, with a focus on defense manufacturing,
            automotive parts, plastic forming, and structural engineering. Precision CNC setups require consistent access to
            high-speed milling cutters, turning inserts, high-rigidity tool holders, and stable coolants.
            ANFAAS AL AMAL serves Riyadh manufacturers with robust tooling brands and efficient logistics.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "CNC Tools", href: "/cnc-tools" },
              { label: "Tool Holders", href: "/tool-holders" },
              { label: "CNC Chucks", href: "/chuck" },
              { label: "Measuring Instruments", href: "/measuring-instruments" },
              { label: "Machine Accessories", href: "/machine-tool-accessories" },
              { label: "Coolants & Oils", href: "/coolant" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="group bg-white rounded-2xl p-6 border border-zinc-100 hover:border-red-100 transition-all flex justify-between items-center">
                <span className="font-bold text-zinc-900 text-sm group-hover:text-red-600 transition-colors">{p.label}</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={localFaqs} heading="Riyadh Tools Supply – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
