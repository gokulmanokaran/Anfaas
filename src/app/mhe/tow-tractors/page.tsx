import MHEPageTemplate from "@/components/MHEPageTemplate";

const data = {
  category: "Material Handling Equipments",
  title: "Tow",
  titleAccent: "Tractors",
  description: "Robust and reliable tow tractors for efficient horizontal transport of multi-trailer loads. Ideal for assembly lines, airports, and large distribution centers requiring heavy-duty towing capacity.",
  image: "/Tow Tractors.webp",
  imageLabel: "Tow Tractors",
  imageSubLabel: "High-capacity horizontal transport",
  badge: "Heavy Duty",
  highlights: [
    { value: "6,000 kg", label: "Tow Capacity" },
    { value: "10 hr", label: "Battery Life" },
    { value: "15 km/h", label: "Max Speed" },
  ],
  specs: [
    { label: "Towing Capacity", value: "3,000 – 6,000 kg" },
    { label: "Drive Motor", value: "AC 3.0 kW – 5.0 kW" },
    { label: "Battery", value: "24V / 48V Options" },
    { label: "Drawbar Pull", value: "Up to 1,500 N" },
  ],
  features: [
    "Automatic coupling system for quick trailer attachment",
    "Inching buttons for precise positioning during hitching",
    "Regenerative braking for energy efficiency",
    "Suspended operator platform for improved comfort",
    "Rugged steel chassis for long-term durability",
  ],
  applications: [
    "Airport Ground Support", "Automotive Assembly", "Production Lines",
    "Postal & Parcel Sorting", "Hospital Logistics", "Large Warehouse Facilities",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
