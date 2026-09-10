import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conventional Milling Machines | ANFAAS AL AMAL",
  description:
    "Universal and vertical conventional milling machines for high-precision workshop milling operations across Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/conventional/milling-machines",
  },
  openGraph: {
    title: "Conventional Milling Machines | ANFAAS AL AMAL",
    description:
      "Universal and vertical conventional milling machines for high-precision workshop milling operations across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/conventional/milling-machines",
  },
};

export default function MillingMachinesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
