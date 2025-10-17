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
const defaultDescription = "Leading technology solutions provider specializing in web development, mobile apps, and digital innovation. Transform your business with our expert team.";

// Structured Data for SEO
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ColorWaves",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo/ColorWaves_Logo Horizontal White.png`,
    "description": defaultDescription,
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@colorwaves.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business St",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
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
    "name": "Technology Solutions",
    "description": "Comprehensive technology services including web development, mobile development, software consulting, and technical support",
    "provider": {
      "@type": "Organization",
      "name": "ColorWaves"
    },
    "serviceType": "Technology Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Support"
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
  "technology solutions",
  "web development",
  "mobile development",
  "software consulting",
  "digital transformation",
  "business technology",
  "custom software",
  "tech innovation",
];

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: "Home",
    description: "ColorWaves - Leading technology solutions provider. We specialize in web development, mobile apps, software consulting, and digital transformation services.",
    keywords: [
      ...commonKeywords,
      "homepage",
      "technology company",
      "software development company",
      "web design",
      "mobile app development",
    ],
  },
  about: {
    title: "About Us",
    description: "Learn about ColorWaves - our mission, vision, and talented team of technology experts dedicated to delivering innovative solutions.",
    keywords: [
      ...commonKeywords,
      "about us",
      "company history",
      "team",
      "mission",
      "vision",
      "leadership",
    ],
  },
  services: {
    title: "Our Services",
    description: "Comprehensive technology services including web development, mobile development, software consulting, and 24/7 technical support.",
    keywords: [
      ...commonKeywords,
      "services",
      "web development services",
      "mobile app development",
      "software consulting",
      "technical support",
    ],
  },
  products: {
    title: "Our Products",
    description: "Explore ColorWaves' innovative technology products and solutions designed to streamline your business operations.",
    keywords: [
      ...commonKeywords,
      "products",
      "software products",
      "technology solutions",
      "business software",
      "product catalog",
    ],
  },
  projects: {
    title: "Our Projects",
    description: "Discover our portfolio of successful projects and case studies showcasing our expertise in technology solutions.",
    keywords: [
      ...commonKeywords,
      "portfolio",
      "projects",
      "case studies",
      "success stories",
      "client work",
    ],
  },
  careers: {
    title: "Careers",
    description: "Join the ColorWaves team! Explore exciting career opportunities in technology, development, and innovation.",
    keywords: [
      ...commonKeywords,
      "careers",
      "jobs",
      "employment",
      "hiring",
      "work with us",
      "career opportunities",
    ],
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with ColorWaves. Contact our team for inquiries, support, or to discuss your technology needs.",
    keywords: [
      ...commonKeywords,
      "contact",
      "get in touch",
      "support",
      "inquiry",
      "contact information",
    ],
  },
  partnership: {
    title: "Partnership",
    description: "Partner with ColorWaves to expand your business reach and leverage our technology expertise for mutual growth.",
    keywords: [
      ...commonKeywords,
      "partnership",
      "business partnership",
      "collaboration",
      "strategic partnership",
      "partner program",
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about ColorWaves' services, products, and technology solutions.",
    keywords: [
      ...commonKeywords,
      "FAQ",
      "frequently asked questions",
      "help",
      "support",
      "questions",
      "answers",
    ],
  },
  gallery: {
    title: "Gallery",
    description: "Visual showcase of ColorWaves' projects, team, office, and technology solutions in action.",
    keywords: [
      ...commonKeywords,
      "gallery",
      "photos",
      "images",
      "visual showcase",
      "project gallery",
    ],
  },
  blog: {
    title: "Blog",
    description: "Stay updated with the latest technology trends, insights, and news from the ColorWaves team.",
    keywords: [
      ...commonKeywords,
      "blog",
      "technology blog",
      "tech news",
      "insights",
      "articles",
      "tech trends",
    ],
  },
};
