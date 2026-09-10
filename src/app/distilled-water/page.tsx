import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Droplets, Shield, FlaskConical, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Distilled Water Supplier in Saudi Arabia | Anfaas Arabia",
  description:
    "High-purity industrial distilled water supplier in Saudi Arabia. ANFAAS AL AMAL supplies distilled water for CNC coolant dilution, lead-acid battery maintenance, and chemical rinsing across Dammam, Riyadh, and Jeddah.",
  keywords: [
    "industrial distilled water Saudi Arabia",
    "distilled water supplier",
    "CNC coolant dilution water",
    "distilled water for batteries",
    "deionized water",
    "battery maintenance water",
    "industrial water supply",
    "high purity water",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/distilled-water" },
  openGraph: {
    title: "Industrial Distilled Water Supplier in Saudi Arabia | Anfaas Arabia",
    description:
      "High-purity industrial distilled water supplier in Saudi Arabia. ANFAAS AL AMAL supplies distilled water for CNC coolant dilution, lead-acid battery maintenance, and chemical rinsing across Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/distilled-water",
  },
};

/* ── JSON-LD Schema ─────────────────────────────────── */
const distilledWaterSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Industrial Distilled Water",
  description: "High-purity industrial distilled water for CNC coolant dilution, lead-acid battery maintenance, chemical rinsing, and industrial cleaning processes in Saudi Arabia.",
  url: "https://www.anfaasarabia.com/distilled-water",
  brand: {
    "@type": "Brand",
    name: "ANFAAS AL AMAL",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SAR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "ANFAAS AL AMAL",
      url: "https://www.anfaasarabia.com",
    },
  },
};

/* ── Applications ────────────────────────────────────── */
const applications = [
  {
    icon: Droplets,
    name: "CNC Coolant Dilution",
    desc: "Mineral-free distilled water is essential for mixing water-soluble CNC cutting fluids. Tap water contains calcium, magnesium, and other dissolved minerals that react with soluble oils, causing hard-water scale, emulsion instability, and corrosion deposits inside coolant systems. Using distilled water ensures the coolant emulsion remains stable, prolongs fluid life, and protects machine components.",
  },
  {
    icon: Shield,
    name: "Lead-Acid Traction Battery Top-Ups",
    desc: "Industrial lead-acid traction batteries (used in forklifts, pallet trucks, and automated guided vehicles) lose water through evaporation during charging. Replenishing with ordinary tap water introduces iron, chlorine, and dissolved minerals that permanently damage battery plates and reduce capacity. Pure distilled water is the only approved fluid for topping up lead-acid battery cells.",
  },
  {
    icon: FlaskConical,
    name: "Chemical Formulation & Process Use",
    desc: "Many industrial processes and chemical formulations require water free from dissolved ions and mineral contaminants. Distilled water serves as a reliable process fluid where mineral interference would compromise the end product's quality or performance — including surface treatment, metal finishing, and chemical concentration preparation.",
  },
  {
    icon: Droplets,
    name: "Component Rinsing & Cleaning",
    desc: "During metal prep and surface finishing stages, rinsing components with distilled water prevents mineral deposit spots and water staining that can affect coating adhesion or part appearance. Particularly important before plating, anodising, or painting operations.",
  },
];

/* ── Packaging Options ───────────────────────────────── */
const packagingOptions = [
  { size: "20 L Containers", use: "Workshop and small-batch usage, easy to handle and transport" },
  { size: "200 L Drums", use: "Medium-volume industrial use for coolant mixing or battery maintenance" },
  { size: "1,000 L IBC Tanks", use: "High-volume factory usage — optimal for large coolant systems" },
];

/* ── FAQs ────────────────────────────────────────────── */
const faqs = [
  {
    q: "Why should I use distilled water for mixing CNC coolant?",
    a: "Tap water contains dissolved minerals (calcium, magnesium, chloride) that react with the active ingredients in soluble cutting oils. This causes hard-water soap scum, corrosion, foaming, and accelerated biological growth in the coolant sump. Distilled water eliminates these problems by providing a mineral-free mixing base, ensuring your coolant emulsion is stable and effective from the first use.",
  },
  {
    q: "Why is distilled water required for battery maintenance?",
    a: "Lead-acid traction batteries need topping up because water is lost through electrolysis during charging. Using tap water introduces iron, chlorine, and minerals that contaminate the electrolyte and accelerate plate sulfation — permanently damaging the battery and reducing its service life. Only pure distilled water (or demineralised water) should be used for battery top-ups.",
  },
  {
    q: "What is the difference between distilled water and deionised water?",
    a: "Distilled water is produced by boiling water and collecting the steam, leaving most dissolved minerals behind. Deionised (DI) water is produced by passing water through ion-exchange resins that remove charged mineral ions. Both are suitable for CNC coolant mixing and battery maintenance. The purity level required depends on your application — our team can advise which is most appropriate for your needs.",
  },
  {
    q: "What packaging sizes do you supply?",
    a: "We supply distilled water in 20 L containers for workshop use, 200 L drums for medium-volume applications, and 1,000 L IBC tanks for high-volume industrial customers. Please contact us to discuss supply quantities and delivery options.",
  },
  {
    q: "How often does a CNC coolant sump need to be topped up with distilled water?",
    a: "CNC coolant sumps lose water through evaporation and misting during machining. Depending on machine usage, temperature, and coolant concentration, you may need to top up with distilled water daily or weekly to maintain the correct concentration ratio. Using a refractometer to check concentration regularly is recommended.",
  },
  {
    q: "Do you deliver distilled water in Riyadh and Jeddah?",
    a: "Yes. We supply distilled water and related industrial consumables to customers in Dammam, Riyadh, Jeddah, and other locations across Saudi Arabia. Contact us to discuss supply volumes and delivery logistics.",
  },
];

export default function DistilledWaterPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(distilledWaterSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Distilled Water", href: "/distilled-water" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-white border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Industrial Supply — Saudi Arabia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Industrial <span className="text-red-600">Distilled Water</span>
              <br />Supplier in Saudi Arabia
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-2xl">
              Protect your CNC machines and industrial batteries from mineral scaling and corrosion.
              ANFAAS AL AMAL supplies high-purity distilled water for CNC coolant dilution,
              lead-acid traction battery maintenance, and chemical rinsing applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                id="distilled-water-enquire-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/coolant"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-all"
              >
                Explore CNC Coolants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Distilled Water ──────────────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Why Industrial Operations Require Distilled Water
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Ordinary tap water supplied through municipal networks contains dissolved calcium, magnesium,
              chloride, sulfate, and other minerals. While safe for drinking, these contaminants cause
              serious problems when introduced into CNC coolant systems, lead-acid batteries, or sensitive
              industrial processes.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Distillation removes the vast majority of these dissolved solids, producing water that is
              chemically neutral and free from ions that would otherwise react with machine fluids, battery
              electrolytes, or process chemicals. For industrial operations in Saudi Arabia — where water
              hardness is typically high — using distilled water is a straightforward measure that protects
              expensive equipment and reduces maintenance costs.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { title: "Extends CNC Coolant Life", desc: "Mineral-free water prevents scale buildup and emulsion breakdown, so coolant lasts longer between changes." },
              { title: "Protects Battery Plates", desc: "Pure water keeps lead-acid electrolyte clean, preserving battery capacity and extending service life." },
              { title: "Prevents Equipment Scale", desc: "Eliminates calcium and magnesium deposits inside coolant pipes, heat exchangers, and spray nozzles." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <CheckCircle className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ─────────────────────────────────── */}
      <section className="py-20 bg-white" id="applications">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">Industrial Applications</h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-2xl leading-relaxed">
            Distilled water serves a range of critical roles in modern industrial facilities across Saudi Arabia.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
                  <Icon className="w-6 h-6 text-red-600 mb-4" />
                  <h3 className="font-bold text-zinc-900 mb-3 text-sm">{item.name}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packaging & Supply ───────────────────────────── */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">Packaging &amp; Supply Options</h2>
          <p className="text-zinc-500 text-sm mb-8 max-w-xl leading-relaxed">
            We supply distilled water in industrial bulk quantities to suit your factory&apos;s consumption.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {packagingOptions.map((pkg) => (
              <div key={pkg.size} className="bg-white rounded-2xl p-7 border border-zinc-100">
                <h3 className="font-bold text-zinc-900 text-base mb-2">{pkg.size}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{pkg.use}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs mt-6 max-w-xl leading-relaxed">
            Contact us to discuss your required supply volume, delivery frequency, and logistics for your
            facility in Dammam, Riyadh, Jeddah, or elsewhere in Saudi Arabia.
          </p>
        </div>
      </section>

      {/* ── Quality & Purity ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-4">Quality &amp; Purity Standards</h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              The distilled water we supply is suitable for all standard industrial applications including
              CNC coolant mixing, lead-acid battery maintenance, and chemical formulation. Our supply
              is produced through thermal distillation processes that remove dissolved solids to levels
              appropriate for industrial use.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              For applications requiring very high purity (such as semiconductor manufacturing or analytical
              laboratory use), contact our team to discuss deionised or double-distilled water options.
            </p>
          </div>
        </div>
      </section>

      {/* ── Related Products ─────────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Related Consumables &amp; Systems</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNC Coolant", href: "/coolant" },
              { label: "Industrial Grease", href: "/industrial-grease" },
              { label: "Axis Oil", href: "/axis-oil" },
              { label: "Industrial Lubricants", href: "/lubricants" },
              { label: "All Tools & Products", href: "/tools-supplier" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} heading="Industrial Distilled Water – FAQ" />
      <CTASection />
      <Footer />
    </main>
  );
}
