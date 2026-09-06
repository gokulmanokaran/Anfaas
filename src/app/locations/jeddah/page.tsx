import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & CNC Tools Supplier in Jeddah | ANFAAS AL AMAL",
  description:
    "Industrial tools & CNC tools supplier in Jeddah. We deliver collet chucks, milling cutters, thread gauges, and machine oil to factory operators in Jeddah Industrial Zone.",
  keywords: [
    "Tools Supplier in Jeddah",
    "CNC Tools Supplier in Jeddah",
    "Machine Tool Accessories in Jeddah",
    "Cutting Tools Supplier in Jeddah",
    "Measuring Instruments in Jeddah",
    "Industrial Tools Supplier in Jeddah",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/locations/jeddah" },
};

const localFaqs = [
  {
    q: "Do you supply industrial tooling in Jeddah?",
    a: "Yes. ANFAAS AL AMAL ships CNC tools, measuring instruments, and workholding accessories to clients located in Jeddah&apos;s Industrial City and surrounding areas.",
  },
  {
    q: "How can I order tools from Jeddah?",
    a: "You can email us at info@anfaasarabia.com, submit an enquiry form, or reach out to our team via phone or WhatsApp at +966 549186135. We will supply quotes and dispatch options.",
  },
  {
    q: "Is there a physical store in Jeddah?",
    a: "We operate a centralized warehouse and sales model out of Dammam to ensure lower overheads and stable inventory availability. We ship all Jeddah orders directly to your facility via reliable freight carriers.",
  },
];

export default function JeddahLocationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Jeddah", href: "/locations/jeddah" },
        ]}
      />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Western Region Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial Tools & <span className="text-red-600">CNC Tools</span> Supplier in Jeddah
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              ANFAAS AL AMAL supplies heavy-duty machine accessories, high-precision measuring instruments,
              CNC spindle tool holders, and high-stability lubricants to businesses throughout Jeddah.
            </p>
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 mb-8 max-w-xl space-y-3">
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Service Area:</strong> Jeddah Industrial City, Western Region, Saudi Arabia</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Phone / WhatsApp:</strong> +966 549186135</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Email:</strong> info@anfaasarabia.com</span>
              </div>
            </div>
            <Link
              href="/#contact"
              id="jeddah-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request a Quote in Jeddah <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Serving Jeddah&apos;s Industrial Corridor</h2>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-3xl mb-10">
            Jeddah is a key maritime gate and manufacturing base, hosting food processing, metal packaging, maritime repair,
            and building materials plants. Maintenance of industrial machines and accurate tool setup require top-tier components.
            ANFAAS AL AMAL meets this demand by delivering high-grade milling cutters, boring heads, outer diameter micrometers,
            slideway lubricants, and pure distilled water to machine shops in Jeddah.
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

      <FAQSection items={localFaqs} heading="Jeddah Tools Supply – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
