import type { Metadata } from "next";
import MHEPageTemplate from "@/components/MHEPageTemplate";

export const metadata: Metadata = {
  title: "Very Narrow Aisle (VNA) Trucks | ANFAAS AL AMAL",
  description:
    "Precision VNA trucks for maximum storage density and high-bay racking operations across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/mhe/very-narrow-aisle-trucks",
  },
  openGraph: {
    title: "Very Narrow Aisle (VNA) Trucks | ANFAAS AL AMAL",
    description:
      "Precision VNA trucks for maximum storage density and high-bay racking operations across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/mhe/very-narrow-aisle-trucks",
  },
};

const data = {
  category: "Material Handling Equipments",
  title: "Very Narrow",
  titleAccent: "Aisle Trucks",
  description: "Maximize your warehouse cubic capacity with our VNA (Very Narrow Aisle) trucks. Designed to operate in aisles as narrow as 1.6 meters, these trucks provide maximum efficiency in high-density storage.",
  image: "/Very Narrow Aisle Trucks.webp",
  imageLabel: "VNA Trucks",
  imageSubLabel: "Maximum storage density solutions",
  badge: "VNA Specialist",
  highlights: [
    { value: "1,500 kg", label: "Max Load" },
    { value: "15 m", label: "Max Height" },
    { value: "1.6 m", label: "Min Aisle" },
  ],
  specs: [
    { label: "Load Capacity", value: "Up to 1,500 kg" },
    { label: "Lift Height", value: "Up to 15,000 mm" },
    { label: "Aisle Width", value: "1,600 – 1,800 mm" },
    { label: "Guidance", value: "Wire / Rail / Inductive" },
  ],
  features: [
    "Rotating turret head for dual-sided pallet handling",
    "Wire or rail guidance for high-speed travel in aisles",
    "Man-up cabin for excellent eye-level view of load",
    "Energy recovery system for increased battery life",
    "RFID-based aisle and height navigation support",
  ],
  applications: [
    "High-Density Logisitcs", "Automatic Storage (AS/RS)", "Bulk Storage",
    "Narrow Aisle Racking", "Pharmaceutical Warehousing", "Industrial Spare Parts",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
