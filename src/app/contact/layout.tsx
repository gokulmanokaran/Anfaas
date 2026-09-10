import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ANFAAS AL AMAL - Industrial Tools Supplier Saudi Arabia",
  description:
    "Contact ANFAAS AL AMAL for industrial tools, CNC accessories, and lubricants in Saudi Arabia. Reach our team in Dammam, Riyadh, and Jeddah.",
  alternates: {
    canonical: "https://www.anfaasarabia.com/contact",
  },
  openGraph: {
    title: "Contact Us | ANFAAS AL AMAL - Industrial Tools Supplier Saudi Arabia",
    description:
      "Contact ANFAAS AL AMAL for industrial tools, CNC accessories, and lubricants in Saudi Arabia. Reach our team in Dammam, Riyadh, and Jeddah.",
    url: "https://www.anfaasarabia.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
