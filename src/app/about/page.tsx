import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
