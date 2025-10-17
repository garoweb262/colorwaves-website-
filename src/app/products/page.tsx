import type { Metadata } from "next";
import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "Our Products",
  description: "ColorWaves offers a complete range of paints and coating solutions designed for homes, offices, and industrial spaces. Discover our premium quality products for every project.",
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
    description: "ColorWaves offers a complete range of paints and coating solutions designed for homes, offices, and industrial spaces.",
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
    description: "ColorWaves offers a complete range of paints and coating solutions designed for homes, offices, and industrial spaces.",
    images: ["https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
