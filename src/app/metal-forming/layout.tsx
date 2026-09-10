import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Forming & Fabrication Machinery | ANFAAS AL AMAL",
  description:
    "Industrial metal forming machinery, press brakes, shearing machines, and laser cutting systems supplied in Saudi Arabia.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/metal-forming",
  },
  openGraph: {
    title: "Metal Forming & Fabrication Machinery | ANFAAS AL AMAL",
    description:
      "Industrial metal forming machinery, press brakes, shearing machines, and laser cutting systems supplied in Saudi Arabia.",
    url: "https://www.anfaasarabia.com/metal-forming",
  },
};

export default function MetalFormingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
