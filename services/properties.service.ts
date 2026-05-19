import { getAllProperties, getNeighborhoods, getPropertyBySlug } from "@/utils/properties";

export const propertiesService = {
  list: () => getAllProperties(),
  bySlug: (slug: string) => getPropertyBySlug(slug),
  neighborhoods: (city = "Campo Belo") => getNeighborhoods(city),
};
