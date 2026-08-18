import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AccessoriesGrid from "@/components/AccessoriesGrid";

export const metadata: Metadata = {
  title: "Machine Tool Accessories & Industrial Accessories | ANFAAS AL AMAL",
  description:
    "Explore our comprehensive range of high-precision industrial accessories designed to enhance your manufacturing capabilities. Supplying Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Machine Tool Accessories",
    "Precision accessories",
    "vise",
    "clamping kit",
    "live center",
    "presetter",
  ],
  alternates: { canonical: "https://anfaasarabia.com/accessories" },
};

const accessoriesData = [
  "5 Axis self centring vise.jpg",
  "air tapping machine.png",
  "assembly clamping kit.jpg",
  "boring heads.jpg",
  "broken tap remover.png",
  "ceramic edge finder.png",
  "dial indicator.png",
  "digital calipers.png",
  "digital height gauge.png",
  "fast drill re sharping.png",
  "hydraulic machine vise.png",
  "lathe accessories .jpg",
  "magnetic tools.jpg",
  "measuring tools.jpg",
  "mechanical edge finder.png",
  "milling vise.jpg",
  "ncf heavy load type live center.png",
  "optical 3D high precision edge finder.png",
  "optical edge finder.png",
  "outer diameter micrometers.png",
  "oz collects.jpg",
  "precision  angle lock machine vise.png",
  "precision comparator stands.png",
  "precision lever indicator.png",
  "precision machinery .jpg",
  "precision mechanical machine vise.png",
  "precision parallel set.jpg",
  "precision universal tilting table.jpg",
  "punch former.png",
  "right angle plates.png",
  "spiral type support jack.jpg",
  "super quick jaw vise.png",
  "tilting hydraulic machine vise.jpg",
  "tool machine vise.jpg",
  "tooling system.jpg",
  "tools maker vise.jpg",
  "universal grinding for cutter.png",
  "v blocks with c clamp.png",
  "z-axis presetter (indicator type).png",
  "z-axis presetter (indicator type)1.png",
  "z-axis presetter (indicator type)2.png",
  "z-axis presetter (optical type).png",
  "z-axis presetter (optical type)3.png",
  "z-axis zero setter.png"
].map(file => ({
  name: file.replace(/\.[^/.]+$/, "").trim().replace(/\b\w/g, c => c.toUpperCase()),
  src: `/Accessories/${file}`
}));

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col pt-20">
      <Navbar />
      <Breadcrumb items={[{ label: "Accessories", href: "/accessories" }]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            Industrial <span className="text-red-600">Accessories</span>
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of high-precision industrial accessories designed to enhance your manufacturing capabilities.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <AccessoriesGrid items={accessoriesData} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
