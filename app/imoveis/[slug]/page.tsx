import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { PropertyDetailContent } from "@/sections/property/property-detail-content";
import {
  getAllProperties,
  getPropertyBySlug,
  getSimilarProperties,
} from "@/utils/properties";

interface PropertyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProperties().map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Imovel nao encontrado",
      description: "Lorem ipsum dolor sit amet.",
    };
  }

  return {
    title: property.name,
    description: property.shortDescription,
    openGraph: {
      title: property.name,
      description: property.shortDescription,
      images: [
        {
          url: property.mainImage,
          alt: property.name,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const similarProperties = getSimilarProperties(property);

  return (
    <>
      <SiteNavbar />
      <main>
        <PropertyDetailContent
          property={property}
          similarProperties={similarProperties}
        />
      </main>
      <SiteFooter />
    </>
  );
}
