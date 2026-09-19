import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnchorScrollProvider } from "@/components/AnchorScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anfaasarabia.com"),
  title: {
    default: "Industrial Tools & CNC Tools Supplier in Saudi Arabia | ANFAAS AL AMAL",
    template: "%s | ANFAAS AL AMAL",
  },
  description:
    "ANFAAS AL AMAL supplies industrial tools, CNC tools, machine tool accessories, measuring instruments, cutting tools, and lubricants across Saudi Arabia – Dammam, Riyadh, and Jeddah.",
  keywords: [
    "ANFAAS AL AMAL",
    "industrial machinery and tooling supplier",
    "CNC tooling supplier",
    "tools supplier Saudi Arabia",
    "CNC tools",
    "machine tool accessories",
    "measuring instruments",
    "industrial tools",
    "cutting tools",
    "tool holders",
    "industrial lubricants",
    "Dammam",
    "Riyadh",
    "Jeddah",
  ],
  alternates: {
    canonical: "https://www.anfaasarabia.com/",
  },
  openGraph: {
    title: "Industrial Tools & CNC Tools Supplier in Saudi Arabia | ANFAAS AL AMAL",
    description:
      "ANFAAS AL AMAL supplies CNC tools, machine tool accessories, measuring instruments, cutting tools and lubricants across Saudi Arabia.",
    url: "https://www.anfaasarabia.com/",
    type: "website",
    locale: "en_SA",
    siteName: "ANFAAS AL AMAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Tools & CNC Tools Supplier in Saudi Arabia | ANFAAS AL AMAL",
    description:
      "ANFAAS AL AMAL supplies CNC tools, machine tool accessories, measuring instruments and cutting tools across Saudi Arabia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "OvdSVMD8dkGRozx3IoxUiPoEJxK2rRpzylFJA4NpOTM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnchorScrollProvider />
      </body>
    </html>
  );
}
