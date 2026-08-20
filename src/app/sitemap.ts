import type { MetadataRoute } from "next";

const BASE = "https://anfaasarabia.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ──────────────────────────────────────────────
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/support`, lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/news`, lastModified: NOW, changeFrequency: "weekly", priority: 0.5 },

    // ── SEO Product Pages ─────────────────────────────────
    { url: `${BASE}/tools-supplier`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/cnc-tools`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/cutting-tools`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tool-holders`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/chuck`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/machine-tool-accessories`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/measuring-instruments`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/gauges`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/coolant`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industrial-grease`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/axis-oil`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/distilled-water`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Existing Product Pages ────────────────────────────
    { url: `${BASE}/accessories`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lubricants`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/milling`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/turning`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/conventional`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/metal-forming`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/storage`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/industrial-tires`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/plastic-injection-molding`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mhe`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Location Pages ────────────────────────────────────
    { url: `${BASE}/locations/dammam`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/riyadh`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/jeddah`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  ];
}
