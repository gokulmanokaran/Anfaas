import type { Metadata } from "next";
import MHEPageTemplate from "@/components/MHEPageTemplate";

export const metadata: Metadata = {
  title: "Electric Stackers | ANFAAS AL AMAL",
  description:
    "Versatile pedestrian and rider electric stackers for warehouse pallet stacking, rack loading, and transport across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/mhe/stackers",
  },
  openGraph: {
    title: "Electric Stackers | ANFAAS AL AMAL",
    description:
      "Versatile pedestrian and rider electric stackers for warehouse pallet stacking, rack loading, and transport across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/mhe/stackers",
  },
};

const data = {
  category: "Material Handling Equipments",
  title: "Electric",
  titleAccent: "Stackers",
  description: "Versatile electric stackers for stacking and order picking at height. Designed for smooth lifting, easy navigation, and safe handling in narrow aisles and confined spaces.",
  image: "/stackers.webp",
  imageLabel: "Electric Stackers",
  imageSubLabel: "Compact lifting power for tight spaces",
  badge: "High Reach",
  highlights: [
    { value: "1,500 kg", label: "Max Load" },
    { value: "5.5 m", label: "Lift Height" },
    { value: "6 hr", label: "Battery Life" },
  ],
  specs: [
    { label: "Load Capacity", value: "Up to 1,500 kg" },
    { label: "Lift Height", value: "Up to 5,500 mm" },
    { label: "Battery", value: "24V / 180Ah" },
    { label: "Aisle Width", value: "From 2,000 mm" },
  ],
  features: [
    "Mast options: single, duplex, and triplex for varied heights",
    "Electronic speed control with smooth lift/lower functions",
    "Side-shifting forks for precise pallet positioning",
    "Automatic lowering when reaching safe travel height",
    "Compact chassis for narrow-aisle and racking environments",
  ],
  applications: [
    "High-Bay Warehouses", "Racking Systems", "Order Picking",
    "Retail Stockrooms", "Pharmaceutical Storage", "Automotive Parts Stores",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
