import type { Metadata } from "next";
import PartnershipClient from "./partnership-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.partnership);

export default function PartnershipPage() {
  return <PartnershipClient />;
}
