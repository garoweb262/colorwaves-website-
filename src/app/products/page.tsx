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
        url: "/images/about.jpg",
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
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
