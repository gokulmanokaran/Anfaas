import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOHomepageSection from "@/components/SEOHomepageSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industrial Tools & CNC Tools Supplier in Saudi Arabia",
  description:
    "ANFAAS AL AMAL is a leading industrial tools and CNC tools supplier in Saudi Arabia. We supply tool holders, cutting tools, machine tool accessories, measuring instruments, and lubricants to customers in Dammam, Riyadh, and Jeddah. Contact us for enquiries.",
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
