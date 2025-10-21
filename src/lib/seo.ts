import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      "max-video-preview"?: number;
      "max-image-preview"?: "none" | "standard" | "large";
      "max-snippet"?: number;
    };
  };
  alternates?: {
    canonical?: string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://colorwaves.ng";
const siteName = "ColorWaves";
const defaultDescription = "Leading paint manufacturing and interior solutions company in Nigeria. We specialize in producing high-quality, durable, and affordable paints for homes, offices, and commercial spaces.";

// Structured Data for SEO
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ColorWaves",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo/ColorWaves_Logo Horizontal White.png`,
    "description": defaultDescription,
    "foundingDate": "2025-01-05",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234 803 331 7338",
      "contactType": "customer service",
      "email": "info@colorwaves.ng"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "54 Ahmadu Bello Way",
      "addressLocality": "Kano",
      "addressRegion": "Kano State",
      "postalCode": "700001",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://twitter.com/colorwaves",
      "https://linkedin.com/company/colorwaves",
      "https://github.com/colorwaves"
    ]
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ColorWaves",
    "url": baseUrl,
    "description": defaultDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  services: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paint Manufacturing and Interior Solutions",
    "description": "Comprehensive paint manufacturing and interior solutions including residential painting, commercial painting, color consulting, and professional painting services",
    "provider": {
      "@type": "Organization",
      "name": "ColorWaves"
    },
    "serviceType": "Paint and Interior Services",
    "areaServed": "Nigeria",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paint and Interior Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Painting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Painting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design"
          }
        }
      ]
    }
  }
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    openGraph,
    twitter,
    robots,
    alternates,
  } = config;

  const fullTitle = `${title} | ${siteName}`;
  const fullDescription = description || defaultDescription;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords.join(", "),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
      ...robots,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || baseUrl,
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || fullDescription,
      siteName,
      images: openGraph?.images || [
        {
          url: `${baseUrl}/images/about.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitter?.title || fullTitle,
      description: twitter?.description || fullDescription,
      images: twitter?.images || [`${baseUrl}/images/about.jpg`],
      creator: "@colorwaves",
    },
    alternates: {
      canonical: canonical || baseUrl,
      ...alternates,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

// Common keywords for all pages
export const commonKeywords = [
  "paint manufacturing Nigeria",
  "interior solutions",
  "professional painting",
  "color consulting",
  "residential painting",
  "commercial painting",
  "premium paints",
  "Made-in-Nigeria paints",
];

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: "Home",
    description: "ColorWaves Nigeria Limited - Leading paint manufacturing and interior solutions company. We specialize in producing high-quality, durable, and affordable paints for homes, offices, and commercial spaces across Nigeria.",
    keywords: [
      ...commonKeywords,
      "homepage",
      "paint company Nigeria",
      "paint manufacturing Kano",
      "interior design",
      "color solutions",
    ],
  },
  about: {
    title: "About Us",
    description: "Learn about ColorWaves Nigeria Limited - Founded January 5, 2025, we are a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria.",
    keywords: [
      ...commonKeywords,
      "about us",
      "company history",
      "team",
      "mission",
      "vision",
      "leadership",
      "ColorWaves Nigeria Limited",
    ],
  },
  services: {
    title: "Our Services",
    description: "Comprehensive paint manufacturing and interior solutions including residential painting, commercial painting, color consulting, and professional painting services across Nigeria.",
    keywords: [
      ...commonKeywords,
      "services",
      "painting services",
      "color consulting",
      "interior design",
      "professional painters",
      "residential painting",
      "commercial painting",
    ],
  },
  products: {
    title: "Our Products",
    description: "Explore ColorWaves' innovative paint products and coating solutions designed for homes, offices, and industrial spaces across Nigeria.",
    keywords: [
      ...commonKeywords,
      "products",
      "paint products",
      "coating solutions",
      "premium paints",
      "interior paints",
      "exterior paints",
      "product catalog",
    ],
  },
  projects: {
    title: "Our Projects",
    description: "Discover our portfolio of successful painting projects and case studies showcasing our expertise in paint manufacturing and interior solutions across Nigeria.",
    keywords: [
      ...commonKeywords,
      "portfolio",
      "projects",
      "case studies",
      "success stories",
      "client work",
      "painting projects",
      "interior projects",
    ],
  },
  careers: {
    title: "Careers",
    description: "Join the ColorWaves team! Explore exciting career opportunities in paint manufacturing, interior design, color consulting, and professional painting services.",
    keywords: [
      ...commonKeywords,
      "careers",
      "jobs",
      "employment",
      "hiring",
      "work with us",
      "career opportunities",
      "paint industry jobs",
    ],
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with ColorWaves Nigeria Limited. Contact our team for inquiries, support, or to discuss your painting and interior solution needs.",
    keywords: [
      ...commonKeywords,
      "contact",
      "get in touch",
      "support",
      "inquiry",
      "contact information",
      "Kano office",
      "Nigeria contact",
    ],
  },
  partnership: {
    title: "Partnership",
    description: "Partner with ColorWaves to expand your business reach and leverage our paint manufacturing expertise and interior solutions for mutual growth.",
    keywords: [
      ...commonKeywords,
      "partnership",
      "business partnership",
      "collaboration",
      "strategic partnership",
      "partner program",
      "paint distributors",
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about ColorWaves' paint products, services, and interior solutions.",
    keywords: [
      ...commonKeywords,
      "FAQ",
      "frequently asked questions",
      "help",
      "support",
      "questions",
      "answers",
      "paint questions",
    ],
  },
  gallery: {
    title: "Gallery",
    description: "Visual showcase of ColorWaves' painting projects, team, office, and paint manufacturing facilities in action.",
    keywords: [
      ...commonKeywords,
      "gallery",
      "photos",
      "images",
      "visual showcase",
      "project gallery",
      "painting gallery",
    ],
  },
  blog: {
    title: "Blog",
    description: "Stay updated with the latest painting trends, color insights, and interior design tips from the ColorWaves team.",
    keywords: [
      ...commonKeywords,
      "blog",
      "painting blog",
      "color tips",
      "interior design",
      "painting trends",
      "color inspiration",
    ],
  },
};
