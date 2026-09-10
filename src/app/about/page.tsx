import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | ANFAAS AL AMAL - Two Decades of Industrial Trust",
  description:
    "Since 2003, ANFAAS AL AMAL has been supplying precision-engineered industrial machinery, CNC tooling, and workshop equipment across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/about",
  },
  openGraph: {
    title: "About Us | ANFAAS AL AMAL - Two Decades of Industrial Trust",
    description:
      "Since 2003, ANFAAS AL AMAL has been supplying precision-engineered industrial machinery, CNC tooling, and workshop equipment across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-20">
      <Navbar />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
