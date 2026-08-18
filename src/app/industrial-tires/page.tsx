"use client";

import MHEPageTemplate from "@/components/MHEPageTemplate";
import { Weight, Gauge, Clock, Zap } from "lucide-react";

const data = {
  category: "Industrial Components",
  title: "Industrial",
  titleAccent: "Tire Solutions",
  description: "We provide high-performance industrial tires designed for the most demanding environments. Our tires offer exceptional durability, load-bearing capacity, and traction for forklifts, reach trucks, and heavy-duty industrial vehicles.\n\nFrom solid resilient tires to press-on bands and pneumatic options, our products are engineered to reduce vibration, increase safety, and minimize downtime for your fleet.",
  image: "/industrial-tires.png",
  imageLabel: "Premium Solid Tires",
  imageSubLabel: "High-durability rubber compounds for industrial use",
  specs: [
    { label: "Load Capacity", value: "Up to 15,000 kg", icon: Weight },
    { label: "Durability", value: "3000+ Working Hours", icon: Clock },
    { label: "Heat Resistance", value: "High Grade Compound", icon: Zap },
    { label: "Traction", value: "All-Surface Pattern", icon: Gauge },
  ],
  features: [
    "Three-stage construction for maximum cushioning and comfort.",
    "Highly wear-resistant tread compound for extended service life.",
    "Internal steel bead wires prevent rim slippage.",
    "Low rolling resistance for improved fuel and battery efficiency.",
    "Available in non-marking versions for clean environments.",
  ],
  applications: [
    "Warehouse Forklifts", "Seaport Logistics", "Heavy Manufacturing",
    "Cold Storage Facilities", "Construction Sites", "Mining Equipment",
  ],
  highlights: [
    { value: "5000+", label: "Tires Sold" },
    { value: "100%", label: "Solid Rubber" },
    { value: "ISO", label: "Certified" },
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
