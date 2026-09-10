import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conventional Machinery & Lathes | ANFAAS AL AMAL",
  description:
    "High-precision conventional lathes, milling machines, and workshop equipment supplied across Saudi Arabia by ANFAAS AL AMAL.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/conventional",
  },
  openGraph: {
    title: "Conventional Machinery & Lathes | ANFAAS AL AMAL",
    description:
      "High-precision conventional lathes, milling machines, and workshop equipment supplied across Saudi Arabia by ANFAAS AL AMAL.",
    url: "https://www.anfaasarabia.com/conventional",
  },
};

export default function ConventionalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
