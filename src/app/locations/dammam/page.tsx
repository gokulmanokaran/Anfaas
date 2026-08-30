import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & CNC Tools Supplier in Dammam | ANFAAS AL AMAL",
  description:
    "ANFAAS AL AMAL is a leading industrial tools & CNC tools supplier in Dammam. We supply collets, tool holders, cutting tools, and machine lubricants directly to Dammam Industrial District factories.",
  keywords: [
    "Tools Supplier in Dammam",
    "CNC Tools Supplier in Dammam",
    "Machine Tool Accessories in Dammam",
    "Cutting Tools Supplier in Dammam",
    "Measuring Instruments in Dammam",
    "Industrial Tools Supplier in Dammam",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/locations/dammam" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ANFAAS AL AMAL",
  image: "https://www.anfaasarabia.com/logo.png",
  telephone: "+966565301513",
  email: "info@anfaasarabia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial District",
    addressLocality: "Dammam",
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  url: "https://www.anfaasarabia.com/locations/dammam",
  areaServed: ["Dammam", "Eastern Province"],
};

const localFaqs = [
  {
    q: "Do you supply industrial tools directly to Dammam factories?",
    a: "Yes. ANFAAS AL AMAL is headquartered in Dammam, and we offer direct, fast supply to factories and machine shops located in Dammam's First and Second Industrial Cities.",
  },
  {
    q: "Can I collect CNC accessories from your Dammam facility?",
    a: "Please coordinate with our sales team via WhatsApp or email before visiting. We typically arrange quick direct delivery to your factory premises for convenience.",
  },
  {
    q: "What products are available for immediate delivery in Dammam?",
    a: "We maintain local stock of common CNC tools, tool holders, precision measuring instruments, coolants, and industrial greases for quick dispatch in Dammam.",
  },
];

export default function DammamLocationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Dammam", href: "/locations/dammam" },
        ]}
      />

      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Eastern Province HQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial Tools & <span className="text-red-600">CNC Tools</span> Supplier in Dammam
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Headquartered in Dammam, ANFAAS AL AMAL is the Eastern Province&apos;s trusted supplier for high-precision
              CNC accessories, machine shop tooling, quality control gauges, and premium lubricants.
            </p>
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 mb-8 max-w-xl space-y-3">
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Address:</strong> Industrial District, Dammam, Saudi Arabia</span>
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
              id="dammam-enquire-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
            >
              Request a Quote in Dammam <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Serving Dammam&apos;s Industrial District</h2>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-3xl mb-10">
            Dammam is the primary industrial and port hub of Saudi Arabia. Machine shops, metalworking operations, and manufacturers
            throughout the Eastern Province require reliable logistics and access to quality milling, turning, and measuring tools.
            ANFAAS AL AMAL keeps Dammam machine operators supplied with tool holders, cutting tools, chucks, and lubricants
            designed to minimize setup time and reduce spindle vibration.
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

      <FAQSection items={localFaqs} heading="Dammam Tools Supply – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
