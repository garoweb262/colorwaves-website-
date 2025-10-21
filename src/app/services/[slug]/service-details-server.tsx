import type { Metadata } from "next";
import ServiceDetailsClient from "./service-details-client";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { fetchJson } from "@/lib/api";

type ServiceBySlugApi = {
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
};

interface ServiceDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const { data: serviceData } = await fetchJson<ServiceBySlugApi>(`/services/public/slug/${slug}`);
    
    if (serviceData) {
      return generateSEOMetadata({
        title: serviceData.name,
        description: serviceData.description,
        keywords: [
          "paint manufacturing Nigeria",
          "interior solutions",
          "professional painting",
          "color consulting",
          serviceData.name.toLowerCase(),
          "painting services",
        ],
        canonical: `/services/${slug}`,
        openGraph: {
          title: `${serviceData.name} | ColorWaves`,
          description: serviceData.description,
          images: serviceData.imageUrl ? [{
            url: serviceData.imageUrl,
            width: 1200,
            height: 630,
            alt: `${serviceData.name} - ColorWaves Service`,
          }] : undefined,
        },
      });
    }
  } catch (error) {
    console.error('Error generating metadata for service:', error);
  }
  
  // Fallback metadata
  return generateSEOMetadata({
    title: "Service Details",
    description: "Learn more about our professional painting and interior solution services.",
    keywords: ["paint manufacturing Nigeria", "interior solutions", "professional painting"],
    canonical: `/services/${slug}`,
  });
}

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  return <ServiceDetailsClient params={params} />;
}
