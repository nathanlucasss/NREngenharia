import type { Metadata } from "next";

import { PropertiesCatalog } from "@/sections/listings/properties-catalog";
import { getAllProperties, getCities, getNeighborhoods } from "@/utils/properties";

export const metadata: Metadata = {
  title: "Imoveis em Campo Belo MG",
  description:
    "Busca de imoveis com filtros completos e mapa na regiao de Campo Belo em Minas Gerais.",
};

interface PropertiesPageProps {
  searchParams: Promise<{ busca?: string; bairro?: string }>;
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams;
  const properties = getAllProperties();
  const cities = getCities();
  const neighborhoods = getNeighborhoods("Campo Belo");

  return (
    <>
      <main>
        <PropertiesCatalog
          properties={properties}
          cities={cities}
          neighborhoods={neighborhoods}
          initialQuery={params.busca ?? ""}
          initialNeighborhood={params.bairro ?? "all"}
        />
      </main>
    </>
  );
}
