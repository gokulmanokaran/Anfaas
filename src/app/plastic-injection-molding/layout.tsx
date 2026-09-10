import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plastic Injection Molding Machines | ANFAAS AL AMAL",
  description:
    "High-efficiency plastic injection molding machinery and auxiliary equipment for manufacturers in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/plastic-injection-molding",
  },
  openGraph: {
    title: "Plastic Injection Molding Machines | ANFAAS AL AMAL",
    description:
      "High-efficiency plastic injection molding machinery and auxiliary equipment for manufacturers in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/plastic-injection-molding",
  },
};

export default function PlasticInjectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
