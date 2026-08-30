import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOHomepageSection from "@/components/SEOHomepageSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industrial Machinery & Tooling Supplier in Saudi Arabia",
  description:
    "ANFAAS AL AMAL is a leading industrial machinery and CNC tooling supplier in Saudi Arabia. We supply tool holders, cutting tools, measuring instruments, machine accessories, and lubricants to manufacturers in Dammam, Riyadh, and Jeddah. Contact us for enquiries.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SEOHomepageSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
