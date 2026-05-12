import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { PropertiesCatalog } from "@/sections/listings/properties-catalog";
import { getAllProperties, getCities } from "@/utils/properties";

export const metadata: Metadata = {
  title: "Catalogo de Imoveis",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
};

export default function PropertiesPage() {
  const properties = getAllProperties();
  const cities = getCities();

  return (
    <>
      <SiteNavbar />
      <main>
        <PropertiesCatalog properties={properties} cities={cities} />
      </main>
      <SiteFooter />
    </>
  );
}
