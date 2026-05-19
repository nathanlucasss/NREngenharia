import { SiteFooter } from "@/components/layout/site-footer";
import { PropertiesCatalog } from "@/sections/listings/properties-catalog";
import { PremiumHome } from "@/sections/home/premium-home";
import { getAllProperties, getCities, getNeighborhoods } from "@/utils/properties";

export default function Home() {
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
        />
        <PremiumHome properties={properties} neighborhoods={neighborhoods} />
      </main>
      <SiteFooter />
    </>
  );
}
