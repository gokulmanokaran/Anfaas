import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geared Lathe Machines | ANFAAS AL AMAL",
  description:
    "Industrial geared head lathe machines engineered for precision metal turning and workshop maintenance in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/conventional/geared-lathe-machine",
  },
  openGraph: {
    title: "Geared Lathe Machines | ANFAAS AL AMAL",
    description:
      "Industrial geared head lathe machines engineered for precision metal turning and workshop maintenance in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/conventional/geared-lathe-machine",
  },
};

export default function GearedLatheLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
