"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Link2, AtSign, PlayCircle } from "lucide-react";

const links = {
  Products: [
    { label: "CNC Tools", href: "/cnc-tools" },
    { label: "Tool Holders", href: "/tool-holders" },
    { label: "Lathe Chucks", href: "/chuck" },
    { label: "Measuring Instruments", href: "/measuring-instruments" },
    { label: "Industrial Lubricants", href: "/lubricants" },
    { label: "Material Handling", href: "/mhe" },
  ],
  Solutions: [
    { label: "About Us", href: "/about" },
    { label: "Machine Tool Accessories", href: "/machine-tool-accessories" },
    { label: "Industrial Grease", href: "/industrial-grease" },
    { label: "News & Events", href: "/news" },
    { label: "Customer Support", href: "/support" },
    { label: "Contact Us", href: "/contact" },
  ],
  Locations: [
    { label: "Dammam HQ", href: "/locations/dammam" },
    { label: "Riyadh Served", href: "/locations/riyadh" },
    { label: "Jeddah Served", href: "/locations/jeddah" },
  ],
};

const socials = [
  { Icon: Link2, href: "/under-development", label: "LinkedIn" },
  { Icon: AtSign, href: "/under-development", label: "Twitter" },
  { Icon: PlayCircle, href: "/under-development", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Logo */}
          <Link prefetch={true} href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="ANFAAS AL AMAL Logo" className="w-full h-full object-contain origin-center" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              ANFAAS AL <span className="text-red-600">AMAL</span>
            </span>
          </Link>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            ANFAAS AL AMAL is committed to industrial excellence and responsible
            sourcing. We deliver precision-engineered solutions with a focus
            on quality, sustainability, and long-term reliability.
          </p>

          {/* Contact info */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm text-zinc-500 hover:text-red-400 transition-colors">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <span>info@anfaasarabia.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500 hover:text-red-400 transition-colors">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>+966 565301513</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-zinc-500">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Industrial District, Dammam, Riyadh, Jeddah</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4 text-zinc-400 hover:text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category} className="space-y-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              {category}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm text-zinc-500 hover:text-red-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Red divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} AnfaasArabia. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500 font-medium">
          Design and developed by <span className="text-zinc-400 font-semibold">DIC</span>
        </p>
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <Link prefetch={true} key={l} href="/under-development" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
