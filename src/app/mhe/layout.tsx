import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Material Handling Equipment (MHE) | ANFAAS AL AMAL",
  description:
    "Comprehensive material handling equipment including electric forklifts, reach trucks, pallet trucks, and AMRs supplied in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/mhe",
  },
  openGraph: {
    title: "Material Handling Equipment (MHE) | ANFAAS AL AMAL",
    description:
      "Comprehensive material handling equipment including electric forklifts, reach trucks, pallet trucks, and AMRs supplied in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/mhe",
  },
};

export default function MHELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
