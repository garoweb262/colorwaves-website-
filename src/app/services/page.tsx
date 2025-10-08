import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore ColorWaves' comprehensive range of painting and color solution services. From residential painting to commercial projects, color consulting, and interior design - we transform your spaces with excellence.",
  keywords: [
    "painting services Nigeria",
    "color consulting",
    "interior painting",
    "exterior painting",
    "commercial painting Kano",
    "residential painting",
    "architectural coatings",
    "professional painters"
  ],
  openGraph: {
    title: "Our Services | ColorWaves",
    description: "Explore ColorWaves' comprehensive range of painting and color solution services. Professional painting, color consulting, and interior design services.",
    url: "https://colorwaves.com/services",
    siteName: "ColorWaves",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "ColorWaves Professional Painting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | ColorWaves",
    description: "Professional painting and color solution services in Nigeria.",
    images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
