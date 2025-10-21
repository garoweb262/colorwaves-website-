import type { Metadata } from "next";
import FAQsClient from "./faqs-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.faqs);

export default function FAQsPage() {
  return <FAQsClient />;
}
