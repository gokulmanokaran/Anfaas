import type { Metadata } from "next";
import MHEPageTemplate from "@/components/MHEPageTemplate";

export const metadata: Metadata = {
  title: "Electric Forklifts | ANFAAS AL AMAL",
  description:
    "Powerful electric counterbalance forklifts built for indoor and outdoor operations. High load capacity, long battery life, and zero emissions across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/mhe/electric-forklifts",
  },
  openGraph: {
    title: "Electric Forklifts | ANFAAS AL AMAL",
    description:
      "Powerful electric counterbalance forklifts built for indoor and outdoor operations. High load capacity, long battery life, and zero emissions across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/mhe/electric-forklifts",
  },
};

const data = {
  category: "Material Handling Equipments",
  title: "Electric",
  titleAccent: "Forklifts",
  description: "Powerful electric counterbalance forklifts built for indoor and outdoor operations. Combining high load capacity, long battery life, and whisper-quiet operation for maximum productivity.",
  image: "/Electric Forklifts.webp",
  imageLabel: "Electric Forklifts",
  imageSubLabel: "Industrial power with zero emissions",
  badge: "Best Seller",
  highlights: [
    { value: "5,000 kg", label: "Max Load" },
    { value: "6 m", label: "Lift Height" },
    { value: "10 hr", label: "Battery Life" },
  ],
  specs: [
    { label: "Load Capacity", value: "1,500 – 5,000 kg" },
    { label: "Lift Height", value: "Up to 7,000 mm" },
    { label: "Battery", value: "48V / 620Ah Li-ion" },
    { label: "Turning Radius", value: "From 1,800 mm" },
  ],
  features: [
    "AC electric drive motors for high torque and efficiency",
    "Regenerative braking to extend battery range",
    "Multi-function joystick for all mast operations",
    "Advanced battery management system (BMS)",
    "Optional integrated fleet management telematics",
  ],
  applications: [
    "Manufacturing Facilities", "Distribution Centres", "Cold Stores",
    "Food & Beverage", "Retail Warehouses", "Automotive Logistics",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
