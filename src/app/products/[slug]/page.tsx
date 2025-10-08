import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "./product-detail-client";

// Mock data - in a real app, this would come from the backend API
const products = [
  {
    slug: "premium-emulsion-paint",
    name: "Premium Emulsion Paint",
    shortDescription: "High-quality, low-VOC emulsion paint for beautiful, long-lasting interior finishes",
    description: "Our Premium Emulsion Paint is formulated with the finest ingredients to deliver exceptional coverage, durability, and a beautiful finish. Perfect for interior walls and ceilings, this low-VOC paint ensures a healthier environment while providing outstanding performance.",
    image: "/images/products/emulsion.jpg",
    gallery: [
      "/images/products/emulsion.jpg",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    ],
    category: "Interior",
    price: {
      amount: "₦15,500",
      unit: "per gallon",
      range: "₦15,500 - ₦65,000"
    },
    features: [
      "Low Odor Formula",
      "Easy Application",
      "Washable Surface",
      "Mold & Mildew Resistant",
      "Excellent Hiding Power",
      "Fade Resistant"
    ],
    specifications: {
      type: "Water-based Acrylic Emulsion",
      finish: "Matte / Satin / Eggshell",
      coverage: "35-40 m² per gallon",
      dryingTime: "Touch dry: 1 hour, Recoat: 4 hours",
      voc: "Low VOC - <50 g/L",
      shelfLife: "24 months in sealed container"
    },
    colors: {
      available: "Over 2000 Colors",
      customMatching: true,
      popular: ["Pure White", "Warm Beige", "Soft Gray", "Classic Cream"]
    },
    applications: [
      "Interior walls",
      "Ceilings",
      "Living rooms and bedrooms",
      "Commercial spaces",
      "New construction",
      "Renovation projects"
    ],
    benefits: [
      "Superior coverage reduces the number of coats needed",
      "Low odor formula safe for occupied spaces",
      "Easy to clean and maintain",
      "Excellent durability for high-traffic areas",
      "Environmentally friendly low-VOC formulation",
      "Professional-quality results"
    ],
    technicalData: {
      thickness: "100-125 microns per coat",
      dilution: "Up to 10% with clean water",
      numberOfCoats: "2 coats recommended",
      storage: "Store in cool, dry place away from direct sunlight"
    },
    warranty: "5 years",
    rating: 4.8,
    reviews: 124
  },
  {
    slug: "matte-emulsion",
    name: "Matte Emulsion",
    shortDescription: "Elegant matte finish emulsion for sophisticated interior aesthetics",
    description: "Achieve a sophisticated, non-reflective finish with our Matte Emulsion. Perfect for creating modern, elegant interiors, this paint hides surface imperfections while delivering a smooth, velvety appearance.",
    image: "/images/products/matteemulsion.jpg",
    gallery: [
      "/images/products/matteemulsion.jpg",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    ],
    category: "Interior",
    price: {
      amount: "₦17,000",
      unit: "per gallon",
      range: "₦17,000 - ₦72,000"
    },
    features: [
      "Non-Reflective Finish",
      "Hide Imperfections",
      "Smooth Coverage",
      "Premium Quality",
      "Low Sheen",
      "Modern Aesthetic"
    ],
    specifications: {
      type: "Water-based Matte Emulsion",
      finish: "Ultra Matte",
      coverage: "30-35 m² per gallon",
      dryingTime: "Touch dry: 1-2 hours, Recoat: 4-6 hours",
      voc: "Low VOC - <45 g/L",
      shelfLife: "24 months in sealed container"
    },
    colors: {
      available: "Modern Neutrals & Designer Shades",
      customMatching: true,
      popular: ["Charcoal Gray", "Dove White", "Taupe", "Midnight Blue"]
    },
    applications: [
      "Feature walls",
      "Bedrooms",
      "Living spaces",
      "Contemporary interiors",
      "Low-light areas",
      "Designer projects"
    ],
    benefits: [
      "Hides minor wall imperfections",
      "Creates a sophisticated ambiance",
      "Perfect for contemporary design",
      "Excellent touch-up ability",
      "Premium matte appearance",
      "Low-maintenance finish"
    ],
    technicalData: {
      thickness: "110-130 microns per coat",
      dilution: "Up to 8% with clean water",
      numberOfCoats: "2-3 coats recommended",
      storage: "Store in cool, dry place"
    },
    warranty: "5 years",
    rating: 4.9,
    reviews: 98
  },
  {
    slug: "luxewave-satin",
    name: "LuxeWave Satin",
    shortDescription: "Luxurious satin finish paint with a subtle sheen for elegant spaces",
    description: "LuxeWave Satin combines beauty and practicality with its soft, lustrous finish. This premium paint offers excellent durability and cleanability, making it ideal for high-traffic areas while maintaining an elegant appearance.",
    image: "/images/products/luxewavesatin.jpg",
    gallery: [
      "/images/products/luxewavesatin.jpg",
      "https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&h=600&fit=crop",
    ],
    category: "Premium",
    price: {
      amount: "₦22,500",
      unit: "per gallon",
      range: "₦22,500 - ₦95,000"
    },
    features: [
      "Silky Smooth Finish",
      "Highly Durable",
      "Stain Resistant",
      "Easy to Clean",
      "Subtle Sheen",
      "Premium Quality"
    ],
    specifications: {
      type: "Water-based Satin Emulsion",
      finish: "Satin / Pearl",
      coverage: "32-38 m² per gallon",
      dryingTime: "Touch dry: 1 hour, Recoat: 4 hours",
      voc: "Low VOC - <55 g/L",
      shelfLife: "36 months in sealed container"
    },
    colors: {
      available: "Luxury Collection",
      customMatching: true,
      popular: ["Pearl White", "Champagne", "Sage Green", "Soft Rose"]
    },
    applications: [
      "High-traffic areas",
      "Kitchens and bathrooms",
      "Hallways",
      "Doors and trim",
      "Luxury interiors",
      "Commercial spaces"
    ],
    benefits: [
      "Superior stain resistance",
      "Easy to wipe clean",
      "Elegant soft sheen",
      "Exceptional durability",
      "Perfect for busy households",
      "Professional-grade quality"
    ],
    technicalData: {
      thickness: "120-140 microns per coat",
      dilution: "Up to 12% with clean water",
      numberOfCoats: "2 coats recommended",
      storage: "Store in cool, dry place"
    },
    warranty: "7 years",
    rating: 5.0,
    reviews: 156
  }
];

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ColorWaves Products`,
    description: product.shortDescription,
    keywords: [
      "ColorWaves products",
      product.name.toLowerCase(),
      "paint Nigeria",
      product.category.toLowerCase(),
      "interior paint",
      "premium paint"
    ],
    openGraph: {
      title: `${product.name} | ColorWaves Products`,
      description: product.shortDescription,
      url: `https://colorwaves.com/products/${product.slug}`,
      siteName: "ColorWaves",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ColorWaves Products`,
      description: product.shortDescription,
      images: [product.image],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
