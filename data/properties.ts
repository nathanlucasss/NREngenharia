import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "CB-001",
    slug: "casa-jardim-america-varanda",
    name: "Casa Jardim America com Varanda Gourmet",
    category: "Casa",
    tagLine: "Planta ampla com quintal e espaco para receber a familia.",
    shortDescription:
      "Casa terrea reformada, com area externa integrada e localizacao residencial.",
    fullDescription:
      "Imovel com sala para dois ambientes, cozinha planejada e tres dormitorios, sendo uma suite. O quintal possui varanda gourmet coberta, area verde e excelente ventilacao natural. Rua tranquila, com facil acesso ao Centro de Campo Belo.",
    price: 620000,
    address: {
      city: "Campo Belo",
      neighborhood: "Jardim America",
      state: "MG",
    },
    coordinates: {
      lat: -20.9001,
      lng: -45.2778,
    },
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 3,
      garages: 2,
      area: 182,
      hasPool: false,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Varanda gourmet coberta",
      "Cozinha planejada",
      "Lavabo",
      "Lavanderia independente",
      "Quintal gramado",
    ],
    differentiators: [
      "Rua residencial com pouco fluxo de veiculos.",
      "Acabamento atualizado em pisos e revestimentos.",
      "Boa incidencia de sol no periodo da manha.",
    ],
    similarSlugs: [
      "casa-centro-reformada",
      "sobrado-alto-merces-piscina",
      "casa-campo-belo-jardim-interno",
    ],
  },
  {
    id: "CB-002",
    slug: "casa-centro-reformada",
    name: "Casa Reformada no Centro",
    category: "Casa",
    tagLine: "Localizacao central para quem valoriza praticidade no dia a dia.",
    shortDescription:
      "Residencia ampla com escritorio, quintal e garagem coberta para dois carros.",
    fullDescription:
      "Casa de esquina com estrutura solida, ambientes iluminados e reforma recente de telhado e instalacoes eletricas. Possui sala de estar, sala de jantar, escritorio e tres quartos. Ideal para morar perto de comercio, escolas e servicos.",
    price: 710000,
    address: {
      city: "Campo Belo",
      neighborhood: "Centro",
      state: "MG",
    },
    coordinates: {
      lat: -20.8958,
      lng: -45.2744,
    },
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 2,
      garages: 2,
      area: 205,
      hasPool: false,
      hasGourmetArea: true,
    },
    mainImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600047508788-786f103f6f95?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600573472798-45c4f176f0f9?auto=format&fit=crop&w=1800&q=80",
    ],
    amenities: [
      "Escritorio",
      "Garagem coberta",
      "Despensa",
      "Area de servico",
      "Portao eletronico",
    ],
    differentiators: [
      "A poucos minutos da area comercial central.",
      "Planta funcional com circulacao bem resolvida.",
      "Imovel pronto para morar.",
    ],
    similarSlugs: [
      "casa-jardim-america-varanda",
      "casa-porto-dos-mendes-com-quintal",
      "apartamento-campo-belo-centro",
    ],
  },
  {
    id: "CB-003",
    slug: "sobrado-alto-merces-piscina",
    name: "Sobrado no Alto Merces com Piscina",
    category: "Sobrado",
    tagLine: "Vista alta da cidade com area de lazer privativa.",
    shortDescription:
      "Sobrado com quatro quartos, piscina e espaco gourmet integrado.",
    fullDescription:
      "Projeto com dois pavimentos, sala ampla e cozinha em conceito semiaberto. Area externa com piscina, churrasqueira e deck. Quartos confortaveis e suite master com closet. Excelente opcao para familias maiores.",
    price: 980000,
    address: {
      city: "Campo Belo",
      neighborhood: "Alto Merces",
      state: "MG",
    },
    coordinates: {
      lat: -20.9035,
      lng: -45.2811,
    },
    specs: {
      bedrooms: 4,
      suites: 2,
      bathrooms: 4,
      garages: 3,
      area: 316,
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
      "Piscina",
      "Area gourmet",
      "Suite master com closet",
      "Sala de TV",
      "Deposito",
    ],
    differentiators: [
      "Rua com boa privacidade.",
      "Lazer completo dentro do lote.",
      "Distribuicao inteligente entre area social e intima.",
    ],
    similarSlugs: [
      "chacara-arandutaba-lazer",
      "casa-jardim-america-varanda",
      "casa-alto-merces-vista",
    ],
  },
  {
    id: "CB-004",
    slug: "chacara-arandutaba-lazer",
    name: "Chacara em Arandutaba com Lazer",
    category: "Chacara",
    tagLine: "Espaco de campo com conforto para moradia ou fim de semana.",
    shortDescription:
      "Area generosa, pomar formado e casa principal com varanda panoramica.",
    fullDescription:
      "Chacara com casa sede, area de churrasco, piscina e gramado amplo. Ideal para quem busca tranquilidade sem se afastar de Campo Belo. Possui acesso facilitado e estrutura pronta para eventos familiares.",
    price: 1250000,
    address: {
      city: "Campo Belo",
      neighborhood: "Arandutaba",
      state: "MG",
    },
    coordinates: {
      lat: -20.9198,
      lng: -45.2614,
    },
    specs: {
      bedrooms: 5,
      suites: 2,
      bathrooms: 5,
      garages: 6,
      area: 860,
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
      "Piscina com deck",
      "Pomar",
      "Campo gramado",
      "Area gourmet completa",
      "Casa de apoio",
    ],
    differentiators: [
      "Excelente para lazer familiar.",
      "Area extensa e versatil.",
      "Acesso em poucos minutos da malha urbana.",
    ],
    similarSlugs: [
      "casa-porto-dos-mendes-com-quintal",
      "sobrado-alto-merces-piscina",
      "casa-campo-belo-jardim-interno",
    ],
  },
  {
    id: "CB-005",
    slug: "casa-porto-dos-mendes-com-quintal",
    name: "Casa em Porto dos Mendes com Quintal",
    category: "Casa",
    tagLine: "Conforto interno e quintal grande para ampliar projetos.",
    shortDescription:
      "Casa com tres quartos, cozinha arejada e excelente area externa.",
    fullDescription:
      "Imovel com boa metragem de terreno, sala ampla e quartos bem distribuidos. Quintal com espaco para area gourmet e jardim. Opcao interessante para quem procura casa em bairro tranquilo.",
    price: 540000,
    address: {
      city: "Campo Belo",
      neighborhood: "Porto dos Mendes",
      state: "MG",
    },
    coordinates: {
      lat: -20.8874,
      lng: -45.2895,
    },
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 2,
      garages: 2,
      area: 170,
      hasPool: false,
      hasGourmetArea: false,
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
      "Quintal amplo",
      "Corredor lateral",
      "Garagem coberta",
      "Cozinha arejada",
      "Portao fechado",
    ],
    differentiators: [
      "Boa opcao para familia em crescimento.",
      "Bairro com perfil residencial.",
      "Potencial de valorizacao local.",
    ],
    similarSlugs: [
      "casa-centro-reformada",
      "casa-jardim-america-varanda",
      "casa-sao-benedito-fachada-moderna",
    ],
  },
  {
    id: "CB-006",
    slug: "apartamento-campo-belo-centro",
    name: "Apartamento no Bairro Campo Belo",
    category: "Apartamento",
    tagLine: "Planta moderna com varanda e elevador.",
    shortDescription:
      "Apartamento com tres quartos, custos enxutos e otima posicao solar.",
    fullDescription:
      "Unidade com ambientes bem resolvidos, varanda na sala e acabamento neutro. Predio com poucos moradores, elevador e vaga coberta. Excelente para quem deseja seguranca e manutencao simplificada.",
    price: 495000,
    address: {
      city: "Campo Belo",
      neighborhood: "Campo Belo",
      state: "MG",
    },
    coordinates: {
      lat: -20.8939,
      lng: -45.2719,
    },
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 2,
      garages: 1,
      area: 128,
      hasPool: false,
      hasGourmetArea: false,
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
      "Varanda",
      "Elevador",
      "Vaga coberta",
      "Interfone",
      "Cozinha planejada",
    ],
    differentiators: [
      "Custos mensais de baixo impacto.",
      "Boa localizacao para rotina urbana.",
      "Imovel com perfil pratico e funcional.",
    ],
    similarSlugs: [
      "casa-centro-reformada",
      "casa-jardim-america-varanda",
      "casa-sao-benedito-fachada-moderna",
    ],
  },
  {
    id: "CB-007",
    slug: "casa-sao-benedito-fachada-moderna",
    name: "Casa Sao Benedito com Fachada Moderna",
    category: "Casa",
    tagLine: "Projeto contemporaneo com integracao de ambientes.",
    shortDescription:
      "Casa nova com tres suites, area gourmet e garagem para tres carros.",
    fullDescription:
      "Projeto recente com pe direito alto, acabamentos atuais e excelente iluminacao natural. Area social integrada a varanda gourmet e quintal com preparo para piscina. Localizacao residencial em rua larga.",
    price: 1150000,
    address: {
      city: "Campo Belo",
      neighborhood: "Sao Benedito",
      state: "MG",
    },
    coordinates: {
      lat: -20.9024,
      lng: -45.2692,
    },
    specs: {
      bedrooms: 3,
      suites: 3,
      bathrooms: 4,
      garages: 3,
      area: 274,
      hasPool: false,
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
      "3 suites",
      "Varanda gourmet",
      "Preparacao para piscina",
      "Lavabo",
      "Infra para ar-condicionado",
    ],
    differentiators: [
      "Padrao construtivo recente.",
      "Bom potencial para personalizacao do quintal.",
      "Ambientes sociais amplos.",
    ],
    similarSlugs: [
      "sobrado-alto-merces-piscina",
      "casa-alto-merces-vista",
      "casa-jardim-america-varanda",
    ],
  },
  {
    id: "CB-008",
    slug: "casa-campo-belo-jardim-interno",
    name: "Casa com Jardim Interno no Campo Belo",
    category: "Casa",
    tagLine: "Conforto termico e projeto com iluminacao natural.",
    shortDescription:
      "Casa com quatro quartos, jardim de inverno e area de convivencia.",
    fullDescription:
      "Residencia com arquitetura funcional e ambientes bem distribuidores entre setor social e intimo. Jardim interno traz iluminacao para a sala e corredor dos quartos. Garagem para dois carros e boa area de apoio.",
    price: 830000,
    address: {
      city: "Campo Belo",
      neighborhood: "Campo Belo",
      state: "MG",
    },
    coordinates: {
      lat: -20.8918,
      lng: -45.2766,
    },
    specs: {
      bedrooms: 4,
      suites: 1,
      bathrooms: 3,
      garages: 2,
      area: 238,
      hasPool: false,
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
      "Jardim de inverno",
      "Sala para dois ambientes",
      "Area gourmet",
      "Armarios planejados",
      "Lavanderia separada",
    ],
    differentiators: [
      "Planta equilibrada para familias.",
      "Boa ventilacao cruzada.",
      "Acabamento conservado.",
    ],
    similarSlugs: [
      "casa-jardim-america-varanda",
      "casa-centro-reformada",
      "casa-alto-merces-vista",
    ],
  },
  {
    id: "CB-009",
    slug: "casa-alto-merces-vista",
    name: "Casa no Alto Merces com Vista Aberta",
    category: "Casa",
    tagLine: "Imovel elevado com vista e excelente aproveitamento de terreno.",
    shortDescription:
      "Casa com quatro quartos, varanda frontal e sala integrada a cozinha.",
    fullDescription:
      "Casa em lote com leve declive, permitindo vista ampla da regiao. Ambientes sociais amplos, cozinha moderna e area externa com espaco para lazer. Boa opcao para quem busca conforto e privacidade.",
    price: 890000,
    address: {
      city: "Campo Belo",
      neighborhood: "Alto Merces",
      state: "MG",
    },
    coordinates: {
      lat: -20.9066,
      lng: -45.2784,
    },
    specs: {
      bedrooms: 4,
      suites: 2,
      bathrooms: 4,
      garages: 3,
      area: 292,
      hasPool: false,
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
      "Varanda frontal",
      "Sala integrada",
      "Area gourmet",
      "Deposito",
      "Garagem para 3 carros",
    ],
    differentiators: [
      "Vista aberta da regiao.",
      "Bom padrao de acabamento.",
      "Distribuicao moderna de ambientes.",
    ],
    similarSlugs: [
      "sobrado-alto-merces-piscina",
      "casa-sao-benedito-fachada-moderna",
      "casa-campo-belo-jardim-interno",
    ],
  },
];
