import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TurningGrid from "@/components/TurningGrid";

export const metadata: Metadata = {
  title: "CNC Turning Centers | ANFAAS AL AMAL",
  description:
    "Explore our advanced CNC turning solutions and vertical/horizontal lathes designed for precision, efficiency, and heavy duty industrial metal cutting. Supplying Dammam, Riyadh, and Jeddah.",
  keywords: [
    "CNC Turning",
    "Turning Centers",
    "Horizontal Lathe",
    "VTL60",
    "CNC lathe",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/turning" },
  openGraph: {
    title: "CNC Turning Centers & Solutions | ANFAAS AL AMAL",
    description:
      "Explore our advanced CNC turning solutions and vertical/horizontal lathes designed for precision, efficiency, and heavy duty industrial metal cutting. Supplying Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/turning",
  },
};

const products = [
  {
    name: "Horizontal Lathe",
    src: "/cnc2/Horizontal Lathe.jpg",
  },
  {
    name: "VTL60",
    src: "/cnc2/VTL60.png",
  },
];

export default function TurningPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col pt-20">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "CNC", href: "/cnc-tools" },
          { label: "Turning", href: "/turning" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            Turning <span className="text-red-600">Centers</span>
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Explore our advanced turning solutions designed for precision, efficiency, and exceptional performance.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <TurningGrid items={products} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
