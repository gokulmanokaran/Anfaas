import type { Metadata } from "next";
import MHEPageTemplate from "@/components/MHEPageTemplate";

export const metadata: Metadata = {
  title: "Reach Trucks | ANFAAS AL AMAL",
  description:
    "High-reach electric reach trucks engineered for narrow aisle racking, high lifting capacity, and maximum stability across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/mhe/reach-trucks",
  },
  openGraph: {
    title: "Reach Trucks | ANFAAS AL AMAL",
    description:
      "High-reach electric reach trucks engineered for narrow aisle racking, high lifting capacity, and maximum stability across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/mhe/reach-trucks",
  },
};

const data = {
  category: "Material Handling Equipments",
  title: "Reach",
  titleAccent: "Trucks",
  description: "The ultimate solution for high-reach storage and retrieval. Our reach trucks offer exceptional stability and maneuverability, allowing for maximum storage density in your warehouse.",
  image: "/Reach Trucks.webp",
  imageLabel: "Reach Trucks",
  imageSubLabel: "Precision handling at extreme heights",
  badge: "Space Saver",
  highlights: [
    { value: "2,000 kg", label: "Max Load" },
    { value: "12.5 m", label: "Max Height" },
    { value: "14 km/h", label: "Travel Speed" },
  ],
  specs: [
    { label: "Load Capacity", value: "1,400 – 2,500 kg" },
    { label: "Lift Height", value: "Up to 12,500 mm" },
    { label: "Battery", value: "48V / 420-700Ah" },
    { label: "Chassis Width", value: "1,270 mm" },
  ],
  features: [
    "Retractable mast system for narrow aisle operation",
    "Active sway control for mast stability at height",
    "360-degree electric steering for effortless control",
    "Spacious cabin with excellent panoramic visibility",
    "Energy-efficient AC drive and lift technology",
  ],
  applications: [
    "Cold Storage Facilities", "High-Bay Racking", "General Warehousing",
    "Manufacturing Logistics", "Beverage Distribution", "Industrial Storage",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
