import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import LubricantsContent from "@/components/LubricantsContent";

export const metadata: Metadata = {
  title: "Industrial Lubricants, Grease & Oils | ANFAAS AL AMAL",
  description:
    "Maximize your machinery&apos;s potential with high-performance industrial oils, way lubricants, axis oils, and specialty greases. Supplying Dammam, Riyadh, and Jeddah.",
  keywords: [
    "Industrial Lubricants",
    "Industrial Grease",
    "Axis Oil",
    "Coolant",
    "Synthetic Lubricants",
    "slideway oil",
  ],
  alternates: { canonical: "https://www.anfaasarabia.com/lubricants" },
};

export default function LubricantsPage() {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Navbar />
      <Breadcrumb items={[{ label: "Lubricants", href: "/lubricants" }]} />
      <LubricantsContent />
      <CTASection />
      <Footer />
    </main>
  );
}
