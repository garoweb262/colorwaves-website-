import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.contact);

export default function ContactPage() {
  return <ContactClient />;
}
