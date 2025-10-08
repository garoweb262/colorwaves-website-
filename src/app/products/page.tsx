import type { Metadata } from "next";
import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Discover ColorWaves' premium range of paints, coatings, and color solutions. From eco-friendly interior paints to durable exterior coatings - quality products for every project.",
  keywords: [
    "premium paints Nigeria",
    "eco-friendly paint",
    "interior paint",
    "exterior paint",
    "architectural coatings",
    "decorative finishes",
    "paint products Kano",
    "quality paint brands"
  ],
  openGraph: {
    title: "Our Products | ColorWaves",
    description: "Discover ColorWaves' premium range of paints, coatings, and color solutions. Quality products for every project.",
    url: "https://colorwaves.com/products",
    siteName: "ColorWaves",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "ColorWaves Premium Paint Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | ColorWaves",
    description: "Premium paints and coatings for every project.",
    images: ["https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
