import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Tires & Forklift Solid Tires | ANFAAS AL AMAL",
  description:
    "Premium industrial tires, forklift solid tires, and pneumatic tires for material handling and warehouse machinery in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/industrial-tires",
  },
  openGraph: {
    title: "Industrial Tires & Forklift Solid Tires | ANFAAS AL AMAL",
    description:
      "Premium industrial tires, forklift solid tires, and pneumatic tires for material handling and warehouse machinery in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/industrial-tires",
  },
};

export default function IndustrialTiresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
