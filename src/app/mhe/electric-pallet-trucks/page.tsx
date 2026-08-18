import MHEPageTemplate from "@/components/MHEPageTemplate";

const data = {
  category: "Material Handling Equipments",
  title: "Electric Pallet",
  titleAccent: "Trucks",
  description: "Highly efficient electric pallet trucks designed for effortless horizontal transport of palletized goods. Perfect for warehouses, loading bays, and logistics centres with tight operating aisles.",
  image: "/Electric Pallet Trucks.webp",
  imageLabel: "Electric Pallet Trucks",
  imageSubLabel: "Smooth, silent, and zero-emission operation",
  badge: "Zero Emission",
  highlights: [
    { value: "2,000 kg", label: "Max Load" },
    { value: "8 hr", label: "Battery Life" },
    { value: "6 km/h", label: "Max Speed" },
  ],
  specs: [
    { label: "Load Capacity", value: "Up to 2,500 kg" },
    { label: "Fork Length", value: "800 – 1,150 mm" },
    { label: "Battery", value: "24V / 210Ah Lithium" },
    { label: "Speed (Laden)", value: "4.5 – 6 km/h" },
  ],
  features: [
    "Ergonomic tiller arm with intuitive controls",
    "Smooth, stepless speed control for precise handling",
    "Automatic braking and creep speed function",
    "Low maintenance sealed electric motor",
    "Optional lithium-ion battery for opportunity charging",
  ],
  applications: [
    "Warehouse Logistics", "Loading Docks", "Retail Distribution",
    "Cold Storage", "Manufacturing Plants", "E-Commerce Fulfilment",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
