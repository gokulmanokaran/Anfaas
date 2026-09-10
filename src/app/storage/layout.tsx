import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Storage & Workshop Organization | ANFAAS AL AMAL",
  description:
    "Industrial storage solutions, tool cabinets, parts bins, and workshop racking systems supplied in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/storage",
  },
  openGraph: {
    title: "Industrial Storage & Workshop Organization | ANFAAS AL AMAL",
    description:
      "Industrial storage solutions, tool cabinets, parts bins, and workshop racking systems supplied in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/storage",
  },
};

export default function StorageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
