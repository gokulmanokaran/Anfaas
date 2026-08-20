import Link from "next/link";
import {
  Wrench,
  Gauge,
  Settings2,
  Scissors,
  Droplets,
  Ruler,
  MapPin,
  ArrowRight,
} from "lucide-react";

/* ── Product Category Cards ───────────────────────────── */
const productCategories = [
  {
    icon: Wrench,
    title: "CNC Tools",
    description:
      "High-performance CNC tools for machining centres, turning and milling applications across Saudi industry.",
    href: "/cnc-tools",
  },
  {
    icon: Settings2,
    title: "Tool Holders & Chuck",
    description:
      "Precision tool holders and CNC chuck solutions for secure workholding and accurate machining.",
    href: "/tool-holders",
  },
  {
    icon: Scissors,
    title: "Cutting Tools",
    description:
      "Industrial cutting tools engineered for high-speed and hard-material machining applications.",
    href: "/cutting-tools",
  },
  {
    icon: Ruler,
    title: "Measuring Instruments & Gauges",
    description:
      "Precision measuring instruments and industrial gauges for quality control and dimensional verification.",
    href: "/measuring-instruments",
  },
  {
    icon: Settings2,
    title: "Machine Tool Accessories",
    description:
      "A complete range of CNC and conventional machine tool accessories for enhanced productivity.",
    href: "/machine-tool-accessories",
  },
  {
    icon: Droplets,
    title: "Coolants & Lubricants",
    description:
      "CNC coolant, industrial grease, axis oil, and distilled water for machine protection and performance.",
    href: "/coolant",
  },
];

/* ── Specialized Solutions Data ──────────────────────── */
const specializedSolutions = [
  {
    title: "Precision Workholding & Tooling",
    description: "High-rigidity machine vises, rotary tables, modular clamping kits, and ER collet chuck systems engineered for demanding CNC milling and turning centers.",
    href: "/machine-tool-accessories",
    badge: "Workholding",
  },
  {
    title: "CNC Power & Lathe Chucks",
    description: "Hydraulic 3-jaw power chucks, precision scroll chucks, rotary hydraulic cylinders, and specialized jaws ensuring optimal gripping force and concentric accuracy.",
    href: "/chuck",
    badge: "Chucks",
  },
  {
    title: "High-Performance Industrial Lubrication",
    description: "Synthetic high-speed spindle greases, extreme-pressure bearing lubricants, slideway oils, and premium cutting fluids formulated to minimize machine downtime.",
    href: "/industrial-grease",
    badge: "Lubrication",
  },
];

/* ── Location Data ────────────────────────────────────── */
const locations = [
  {
    city: "Dammam",
    desc: "Our primary base in the Eastern Province – Saudi Arabia's industrial heartland.",
    href: "/locations/dammam",
  },
  {
    city: "Riyadh",
    desc: "Supplying CNC tools and machine accessories to Riyadh's growing manufacturing sector.",
    href: "/locations/riyadh",
  },
  {
    city: "Jeddah",
    desc: "Serving Jeddah's industrial zone and port-driven manufacturing customers.",
    href: "/locations/jeddah",
  },
];

/* ── Schema ───────────────────────────────────────────── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANFAAS AL AMAL",
  url: "https://anfaasarabia.com",
  logo: "https://anfaasarabia.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-565301513",
    contactType: "sales",
    areaServed: "SA",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressLocality: "Dammam",
    addressRegion: "Eastern Province",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ANFAAS AL AMAL",
  url: "https://anfaasarabia.com",
};

/* ── Component ────────────────────────────────────────── */
export default function SEOHomepageSection() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ── Product Categories Section ─────────────────── */}
      <section className="py-24 bg-zinc-50" id="products-overview">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-3">
              Our Product Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Industrial Tools & Machine Solutions
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base leading-relaxed">
              ANFAAS AL AMAL is a trusted tools supplier in Saudi Arabia, offering
              CNC tools, measuring instruments, cutting tools, machine tool accessories,
              and industrial lubricants to manufacturers in Dammam, Riyadh, and Jeddah.
            </p>
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group block bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.1)] hover:border-red-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:gap-2.5 transition-all">
                    View Range <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Tools Supplier CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/tools-supplier"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-red-600 transition-colors duration-300"
            >
              View All Tools & Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Specialized Solutions Section ────────────────── */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-2">
              Engineering Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
              Engineered Industrial Solutions
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Delivering high-precision tooling, heavy-duty workholding systems, and industrial lubrication solutions tailored to Saudi Arabian manufacturing requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {specializedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-white text-zinc-700 border border-zinc-200 mb-4 group-hover:border-red-200 group-hover:text-red-600 transition-colors">
                    {item.badge}
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">{item.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:gap-2.5 transition-all">
                  Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations Served Section ──────────────────── */}
      <section className="py-20 bg-zinc-900" id="locations">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Serving Saudi Arabia
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              ANFAAS AL AMAL supplies industrial tools and CNC accessories to customers
              across Dammam, Riyadh, and Jeddah.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group flex flex-col bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-red-600/50 hover:bg-zinc-800/80 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-red-500 mb-4" />
                <h3 className="font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {loc.city}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {loc.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
