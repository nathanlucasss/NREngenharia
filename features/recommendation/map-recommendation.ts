import { Property } from "@/types/property";

export function getMapRecommendations(properties: Property[], baseNeighborhood?: string): Property[] {
  if (!baseNeighborhood) {
    return properties.slice(0, 4);
  }

  const sameNeighborhood = properties.filter(
    (property) => property.address.neighborhood === baseNeighborhood,
  );

  return (sameNeighborhood.length > 0 ? sameNeighborhood : properties).slice(0, 4);
}
