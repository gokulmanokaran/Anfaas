import MHEPageTemplate from "@/components/MHEPageTemplate";

const data = {
  category: "Material Handling Equipments",
  title: "Order",
  titleAccent: "Pickers",
  description: "Optimized for high-speed order picking operations. Our order pickers provide superior comfort, visibility, and safety for operators working at various height levels in high-density warehouses.",
  image: "/Order Pickers.webp",
  imageLabel: "Order Pickers",
  imageSubLabel: "Efficient vertical and horizontal picking",
  badge: "High Performance",
  highlights: [
    { value: "1,200 kg", label: "Max Load" },
    { value: "10.5 m", label: "Max Height" },
    { value: "12 km/h", label: "Travel Speed" },
  ],
  specs: [
    { label: "Load Capacity", value: "Up to 1,200 kg" },
    { label: "Picking Height", value: "Up to 10,500 mm" },
    { label: "Battery", value: "24V / 48V Options" },
    { label: "Platform Height", value: "Up to 9,000 mm" },
  ],
  features: [
    "Intuitive control handle for simultaneous travel and lift",
    "Ergonomic operator platform with anti-fatigue floor mat",
    "Advanced steering system for precise aisle navigation",
    "Proportional lift/lower controls for smooth operation",
    "Safety interlocks and operator presence sensor",
  ],
  applications: [
    "High-Density Warehousing", "E-commerce Fulfillment", "Retail Distribution",
    "Parts Distribution", "Narrow Aisle Operations", "Third-Party Logistics (3PL)",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
