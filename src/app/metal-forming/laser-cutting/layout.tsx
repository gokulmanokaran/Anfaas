import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiber Laser Cutting Machines | ANFAAS AL AMAL",
  description:
    "High-precision fiber laser cutting machines for sheet metal and tube cutting in Saudi Arabian industrial manufacturing.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/metal-forming/laser-cutting",
  },
  openGraph: {
    title: "Fiber Laser Cutting Machines | ANFAAS AL AMAL",
    description:
      "High-precision fiber laser cutting machines for sheet metal and tube cutting in Saudi Arabian industrial manufacturing.",
    url: "https://www.anfaasarabia.com/metal-forming/laser-cutting",
  },
};

export default function LaserCuttingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
