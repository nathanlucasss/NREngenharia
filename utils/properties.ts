import { properties } from "@/data/properties";
import { Property } from "@/types/property";

export interface NeighborhoodHighlight {
  name: string;
  city: string;
  image: string;
  count: number;
}

export function getAllProperties(): Property[] {
  return properties;
}

export function getFeaturedProperties(limit = 3): Property[] {
  return properties.slice(0, limit);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getCities(): string[] {
  return Array.from(new Set(properties.map((property) => property.address.city))).sort();
}

export function getNeighborhoods(): string[] {
  return Array.from(new Set(properties.map((property) => property.address.neighborhood))).sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
}

export function getNeighborhoodHighlights(limit = 5): NeighborhoodHighlight[] {
  const seen = new Map<string, NeighborhoodHighlight>();

  for (const property of properties) {
    const key = `${property.address.city}::${property.address.neighborhood}`;
    const current = seen.get(key);

    if (current) {
      current.count += 1;
      continue;
    }

    seen.set(key, {
      name: property.address.neighborhood,
      city: property.address.city,
      image: property.mainImage,
      count: 1,
    });
  }

  return Array.from(seen.values()).slice(0, limit);
}

export function getSimilarProperties(property: Property, limit = 3): Property[] {
  return property.similarSlugs
    .map((slug) => getPropertyBySlug(slug))
    .filter((item): item is Property => Boolean(item))
    .slice(0, limit);
}
