import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "IMV-001",
    slug: "villa-lorem-prime",
    name: "Villa Lorem Prime",
    category: "Casa Contemporanea",
    tagLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 6800000,
    address: {
      city: "Sao Paulo",
      neighborhood: "Jardins",
      state: "SP",
    },
    coordinates: {
      lat: -23.5652,
      lng: -46.6691,
    },
    specs: {
      bedrooms: 5,
      suites: 4,
      bathrooms: 6,
      garages: 4,
      area: 540,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Piscina climatizada",
      "Area gourmet integrada",
      "Adega climatizada",
      "Home theater",
      "Paisagismo autoral",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    ],
    similarSlugs: ["maison-ipsum-sky", "mansao-eiusmod-lake", "casa-dolor-horizon"],
  },
  {
    id: "IMV-002",
    slug: "maison-ipsum-sky",
    name: "Maison Ipsum Sky",
    category: "Cobertura Premium",
    tagLine: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
    price: 9200000,
    address: {
      city: "Rio de Janeiro",
      neighborhood: "Leblon",
      state: "RJ",
    },
    coordinates: {
      lat: -22.9839,
      lng: -43.2249,
    },
    specs: {
      bedrooms: 4,
      suites: 4,
      bathrooms: 5,
      garages: 3,
      area: 430,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Vista mar panoramica",
      "Lounge externo",
      "Automacao completa",
      "Sauna privativa",
      "Elevador social exclusivo",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    ],
    similarSlugs: ["penthouse-adipiscing-sea", "villa-lorem-prime", "loft-sit-amet"],
  },
  {
    id: "IMV-003",
    slug: "casa-dolor-horizon",
    name: "Casa Dolor Horizon",
    category: "Residencia de Alto Padrao",
    tagLine: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. At risus viverra adipiscing at in tellus integer feugiat.",
    price: 5500000,
    address: {
      city: "Curitiba",
      neighborhood: "Ecoville",
      state: "PR",
    },
    coordinates: {
      lat: -25.431,
      lng: -49.315,
    },
    specs: {
      bedrooms: 4,
      suites: 3,
      bathrooms: 5,
      garages: 4,
      area: 510,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Piscina com borda infinita",
      "Academia privativa",
      "Wine bar",
      "Brinquedoteca",
      "Energia solar",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    ],
    similarSlugs: ["residencia-elit-forest", "villa-lorem-prime", "casa-consectetur-garden"],
  },
  {
    id: "IMV-004",
    slug: "loft-sit-amet",
    name: "Loft Sit Amet",
    category: "Loft Design",
    tagLine: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Nulla facilisi morbi tempus iaculis urna id volutpat.",
    price: 3900000,
    address: {
      city: "Belo Horizonte",
      neighborhood: "Lourdes",
      state: "MG",
    },
    coordinates: {
      lat: -19.9321,
      lng: -43.9386,
    },
    specs: {
      bedrooms: 3,
      suites: 2,
      bathrooms: 4,
      garages: 2,
      area: 310,
      hasPool: false,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047508788-786f103f6f95?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472798-45c4f176f0f9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Pe direito duplo",
      "Terraco panoramico",
      "Automacao por voz",
      "Espaco fitness",
      "Lareira ecologica",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus.",
      "Nam libero tempore cum soluta nobis est eligendi optio.",
    ],
    similarSlugs: ["penthouse-adipiscing-sea", "maison-ipsum-sky", "residencia-elit-forest"],
  },
  {
    id: "IMV-005",
    slug: "casa-consectetur-garden",
    name: "Casa Consectetur Garden",
    category: "Casa Jardim",
    tagLine: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat sed. Ut etiam sit amet nisl purus in mollis nunc sed.",
    price: 4700000,
    address: {
      city: "Florianopolis",
      neighborhood: "Jurere Internacional",
      state: "SC",
    },
    coordinates: {
      lat: -27.4456,
      lng: -48.5023,
    },
    specs: {
      bedrooms: 4,
      suites: 3,
      bathrooms: 5,
      garages: 3,
      area: 460,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600585154154-712e2fc40d7f?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154154-712e2fc40d7f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Deck com fire pit",
      "Jacuzzi externa",
      "Espaco gourmet completo",
      "Bicicletario",
      "Entrada de servico independente",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    ],
    similarSlugs: ["residencia-elit-forest", "casa-dolor-horizon", "villa-lorem-prime"],
  },
  {
    id: "IMV-006",
    slug: "penthouse-adipiscing-sea",
    name: "Penthouse Adipiscing Sea",
    category: "Penthouse Vista Mar",
    tagLine: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Amet cursus sit amet dictum sit amet justo donec enim.",
    price: 10100000,
    address: {
      city: "Recife",
      neighborhood: "Boa Viagem",
      state: "PE",
    },
    coordinates: {
      lat: -8.1235,
      lng: -34.9002,
    },
    specs: {
      bedrooms: 5,
      suites: 5,
      bathrooms: 7,
      garages: 4,
      area: 620,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472877-6ebf8a5b2df8?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509808-89d0f2dd95d5?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Rooftop privativo",
      "Piscina com raia",
      "Sala de cinema",
      "Spa interno",
      "Escritorio panoramico",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minima veniam quis nostrum exercitationem ullam.",
      "Itaque earum rerum hic tenetur a sapiente delectus.",
    ],
    similarSlugs: ["maison-ipsum-sky", "loft-sit-amet", "mansao-eiusmod-lake"],
  },
  {
    id: "IMV-007",
    slug: "residencia-elit-forest",
    name: "Residencia Elit Forest",
    category: "Residencia Integrada",
    tagLine: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut perspiciatis.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Arcu felis bibendum ut tristique et egestas quis ipsum.",
    price: 6200000,
    address: {
      city: "Brasilia",
      neighborhood: "Lago Sul",
      state: "DF",
    },
    coordinates: {
      lat: -15.8406,
      lng: -47.8823,
    },
    specs: {
      bedrooms: 4,
      suites: 4,
      bathrooms: 6,
      garages: 4,
      area: 570,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566752734-63df9c1fb5ca?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Jardim interno zen",
      "Espaco gourmet externo",
      "Solarium",
      "Suporte para carro eletrico",
      "Sala multiuso",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Neque porro quisquam est qui dolorem ipsum quia dolor.",
      "Sed quia non numquam eius modi tempora incidunt.",
    ],
    similarSlugs: ["casa-consectetur-garden", "casa-dolor-horizon", "villa-lorem-prime"],
  },
  {
    id: "IMV-008",
    slug: "mansao-eiusmod-lake",
    name: "Mansao Eiusmod Lake",
    category: "Mansao de Luxo",
    tagLine: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Velit laoreet id donec ultrices tincidunt arcu non sodales neque.",
    price: 13800000,
    address: {
      city: "Campinas",
      neighborhood: "Alphaville",
      state: "SP",
    },
    coordinates: {
      lat: -22.9099,
      lng: -47.0626,
    },
    specs: {
      bedrooms: 6,
      suites: 6,
      bathrooms: 8,
      garages: 6,
      area: 780,
      hasPool: true,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566752734-63df9c1fb5ca?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Heliponto homologado",
      "Lounge assinatura",
      "Lago privativo",
      "Academia high-performance",
      "Quadra de tenis",
    ],
    differentiators: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Nam libero tempore cum soluta nobis est eligendi optio.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    ],
    similarSlugs: ["villa-lorem-prime", "penthouse-adipiscing-sea", "maison-ipsum-sky"],
  },
];
