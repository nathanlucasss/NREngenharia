import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { PropertiesCatalog } from "@/sections/listings/properties-catalog";
import { getAllProperties, getNeighborhoods } from "@/utils/properties";

export const metadata: Metadata = {
  title: "Casas à venda",
  description: "Casas à venda em Campo Belo, MG. Filtre por bairro, valor ou número de quartos.",
};

interface PropertiesPageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams;
  const queryParam = Array.isArray(params.q) ? params.q[0] : params.q;
  const properties = getAllProperties();
  const neighborhoods = getNeighborhoods();

  return (
    <>
      <SiteNavbar />
      <main>
        <PropertiesCatalog
          properties={properties}
          neighborhoods={neighborhoods}
          initialQuery={queryParam ?? ""}
        />
      </main>
      <SiteFooter />
    </>
  );
}
