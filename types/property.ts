export interface PropertyAddress {
  city: string;
  neighborhood: string;
  state: string;
}

export interface PropertyCoordinates {
  lat: number;
  lng: number;
}

export interface PropertySpecs {
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garages: number;
  area: number;
  hasPool: boolean;
  hasGourmetArea: boolean;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagLine: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  address: PropertyAddress;
  coordinates: PropertyCoordinates;
  specs: PropertySpecs;
  mainImage: string;
  gallery: string[];
  amenities: string[];
  differentiators: string[];
  similarSlugs: string[];
}
