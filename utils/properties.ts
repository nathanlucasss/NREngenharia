import { properties } from "@/data/properties";
import { Property } from "@/types/property";

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

export function getSimilarProperties(property: Property, limit = 3): Property[] {
  return property.similarSlugs
    .map((slug) => getPropertyBySlug(slug))
    .filter((item): item is Property => Boolean(item))
    .slice(0, limit);
}
