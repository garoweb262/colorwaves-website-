import type { Metadata } from "next";
import ProjectRequestForm from "./project-request-form";

export const metadata: Metadata = {
  title: "Request a Project | ColorWaves",
  description: "Submit your project request to ColorWaves. Get a free consultation and detailed proposal for your painting and color solution needs.",
  keywords: [
    "project request",
    "free consultation",
    "painting quote",
    "color consultation",
    "project proposal",
    "ColorWaves contact",
    "painting services Nigeria"
  ],
  openGraph: {
    title: "Request a Project | ColorWaves",
    description: "Submit your project request to ColorWaves. Get a free consultation and detailed proposal.",
    url: "https://colorwaves.com/project-request",
    siteName: "ColorWaves",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "ColorWaves Project Request Form",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Project | ColorWaves",
    description: "Submit your project request to ColorWaves. Get a free consultation.",
    images: ["https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "/project-request",
  },
};

export default function ProjectRequestPage() {
  return <ProjectRequestForm />;
}
