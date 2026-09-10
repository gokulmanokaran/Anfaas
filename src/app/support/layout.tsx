import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer & Technical Support | ANFAAS AL AMAL",
  description:
    "Get technical assistance, product documentation, warranty support, and service guidance for industrial tools and machinery from ANFAAS AL AMAL.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/support",
  },
  openGraph: {
    title: "Customer & Technical Support | ANFAAS AL AMAL",
    description:
      "Get technical assistance, product documentation, warranty support, and service guidance for industrial tools and machinery from ANFAAS AL AMAL.",
    url: "https://www.anfaasarabia.com/support",
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
