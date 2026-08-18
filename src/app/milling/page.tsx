import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MillingGrid from "@/components/MillingGrid";

export const metadata: Metadata = {
  title: "CNC Milling Centers | ANFAAS AL AMAL",
  description:
    "Explore our advanced CNC milling solutions designed for precision, efficiency, and exceptional performance. We supply 5-axis, double column, and vertical machining centers across Saudi Arabia.",
  keywords: [
    "CNC Milling",
    "Milling Centers",
    "5-axis machining center",
    "vertical machining center",
    "double column machining center",
  ],
  alternates: { canonical: "https://anfaasarabia.com/milling" },
};

const products = [
  "5-Axis Machining Center.png",
  "Double Column Machining Center.png",
  "Drill Tap Center.png",
  "Graphite Machining Center.png",
  "Horizontal Machining Center.png",
  "Rotary Vertical Machining Center.png",
  "Vertical Machining Center.png",
].map((filename) => ({
  name: filename.replace(/\.[^/.]+$/, "").trim(),
  src: `/cnc1/${filename}`,
}));

export default function MillingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "CNC", href: "/cnc-tools" },
          { label: "Milling", href: "/milling" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            Milling <span className="text-red-600">Centers</span>
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Explore our advanced milling solutions designed for precision, efficiency, and exceptional performance.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <MillingGrid items={products} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
