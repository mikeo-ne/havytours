import type { MetadataRoute } from "next";
import { tours } from "@/lib/tours";

const BASE = "https://havytours.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${BASE}/`, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE}/tours`, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${BASE}/epic-escapades`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const tourRoutes = tours.map((t) => ({
    url: `${BASE}/tours/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: t.featured ? 0.9 : 0.75,
  }));

  return [...staticRoutes, ...tourRoutes];
}
