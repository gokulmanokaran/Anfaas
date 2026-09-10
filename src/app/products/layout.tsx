import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Machinery & Tools Catalog | ANFAAS AL AMAL",
  description:
    "Explore the full range of industrial machinery, CNC tooling, machine accessories, measuring instruments, and lubricants supplied by ANFAAS AL AMAL in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/products",
  },
  openGraph: {
    title: "Industrial Machinery & Tools Catalog | ANFAAS AL AMAL",
    description:
      "Explore the full range of industrial machinery, CNC tooling, machine accessories, measuring instruments, and lubricants supplied by ANFAAS AL AMAL in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
