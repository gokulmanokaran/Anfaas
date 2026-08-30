import type { MetadataRoute } from "next";

const BASE = "https://www.anfaasarabia.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ──────────────────────────────────────────────
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/products`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/support`, lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/news`, lastModified: NOW, changeFrequency: "weekly", priority: 0.5 },

    // ── CNC & Industrial Tooling SEO Landing Pages ────────
    { url: `${BASE}/tools-supplier`, lastModified: NOW, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/cnc-tools`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/cutting-tools`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/tool-holders`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/chuck`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/machine-tool-accessories`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/measuring-instruments`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/gauges`, lastModified: NOW, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/coolant`, lastModified: NOW, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/industrial-grease`, lastModified: NOW, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/axis-oil`, lastModified: NOW, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/distilled-water`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },

    // ── Machinery & Equipment Pages ───────────────────────
    { url: `${BASE}/accessories`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lubricants`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/milling`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/turning`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/conventional`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/conventional/geared-lathe-machine`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/conventional/milling-machines`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/metal-forming`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/metal-forming/laser-cutting`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/plastic-injection-molding`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/storage`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/industrial-tires`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Material Handling Equipment (MHE) ─────────────────
    { url: `${BASE}/mhe`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/mhe/electric-forklifts`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/mhe/electric-pallet-trucks`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/mhe/stackers`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/mhe/reach-trucks`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/mhe/order-pickers`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mhe/tow-tractors`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mhe/very-narrow-aisle-trucks`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mhe/amr`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },

    // ── Traction Batteries ────────────────────────────────
    { url: `${BASE}/batteries/3pzb210`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/batteries/4pzs480`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/batteries/6pzb600`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Location Pages ────────────────────────────────────
    { url: `${BASE}/locations/dammam`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/riyadh`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/jeddah`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  ];
}
