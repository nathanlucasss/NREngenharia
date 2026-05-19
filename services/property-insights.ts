import { Property } from "@/types/property";

export interface PropertyInsights {
  condominiumFee: number;
  iptu: number;
  petFriendly: boolean;
  furnished: boolean;
  airConditioning: boolean;
  security24h: boolean;
  panoramicView: boolean;
  barbecue: boolean;
  gym: boolean;
  financing: boolean;
  verified: boolean;
  badge: "Novo" | "Destaque" | "Luxo" | "Exclusivo" | "Oportunidade";
}

const overrides: Record<string, Partial<PropertyInsights>> = {
  "CB-001": { petFriendly: true, furnished: true, barbecue: true, financing: true, badge: "Destaque" },
  "CB-002": { security24h: true, furnished: true, financing: true, badge: "Oportunidade" },
  "CB-003": { panoramicView: true, gym: true, badge: "Exclusivo" },
  "CB-004": { panoramicView: true, barbecue: true, petFriendly: true, badge: "Luxo" },
  "CB-005": { petFriendly: true, financing: true, badge: "Novo" },
  "CB-006": { airConditioning: true, security24h: true, furnished: true, badge: "Destaque" },
  "CB-007": { airConditioning: true, security24h: true, barbecue: true, badge: "Luxo" },
  "CB-008": { airConditioning: true, furnished: true, financing: true, badge: "Exclusivo" },
  "CB-009": { panoramicView: true, airConditioning: true, security24h: true, badge: "Luxo" },
};

export function getPropertyInsights(property: Property): PropertyInsights {
  const baseCondominium = Math.max(120, Math.round(property.price * 0.00035));
  const baseIptu = Math.max(60, Math.round(property.price * 0.00012));

  const defaultInsights: PropertyInsights = {
    condominiumFee: baseCondominium,
    iptu: baseIptu,
    petFriendly: /jardim|quintal|varanda|pet/.test(property.amenities.join(" ").toLowerCase()),
    furnished: /planejad|mobiliado|armario/.test(property.amenities.join(" ").toLowerCase()),
    airConditioning: /ar-condicionado|climatiza/.test(property.amenities.join(" ").toLowerCase()),
    security24h: /portaria|seguranca|controle/.test(property.amenities.join(" ").toLowerCase()),
    panoramicView: /vista|panoram/.test(property.tagLine.toLowerCase()),
    barbecue: /gourmet|churrasc/.test(property.amenities.join(" ").toLowerCase()),
    gym: /academia|fitness/.test(property.amenities.join(" ").toLowerCase()),
    financing: true,
    verified: true,
    badge: property.price >= 1000000 ? "Luxo" : "Novo",
  };

  return {
    ...defaultInsights,
    ...overrides[property.id],
  };
}
