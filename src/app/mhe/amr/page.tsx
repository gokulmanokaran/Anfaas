import MHEPageTemplate from "@/components/MHEPageTemplate";

const data = {
  category: "Material Handling Equipments",
  title: "Autonomous Mobile",
  titleAccent: "Robots (AMR)",
  description: "Next-generation autonomous mobile robots that navigate dynamically, adapt to changing environments, and collaborate safely with human workers — revolutionising warehouse and factory automation.",
  image: "/AMR.png",
  imageLabel: "AMR — Autonomous Mobile Robot",
  imageSubLabel: "AI-powered warehouse automation",
  badge: "AI Powered",
  highlights: [
    { value: "600 kg", label: "Max Payload" },
    { value: "2 m/s", label: "Max Speed" },
    { value: "24/7", label: "Operation" },
  ],
  specs: [
    { label: "Payload", value: "Up to 600 kg" },
    { label: "Navigation", value: "LiDAR + SLAM + Vision" },
    { label: "Battery Life", value: "8 – 10 hrs / Auto-charge" },
    { label: "Connectivity", value: "Wi-Fi 6 / Fleet Management API" },
  ],
  features: [
    "Dynamic obstacle detection and avoidance using LiDAR",
    "Map-free SLAM navigation — no infrastructure changes needed",
    "Seamless WMS / ERP integration via REST API",
    "Safe human-robot collaboration (ISO 3691-4 compliant)",
    "Auto-docking wireless charging for 24/7 continuous operation",
  ],
  applications: [
    "Goods-to-Person Picking", "Intralogistics Transport", "Kitting Operations",
    "Hospital Logistics", "Manufacturing Lines", "E-Commerce Automation",
  ],
};

export default function Page() {
  return <MHEPageTemplate data={data} />;
}
