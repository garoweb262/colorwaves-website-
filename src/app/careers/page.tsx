import type { Metadata } from "next";
import CareersClient from "./careers-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.careers);

export default function CareersPage() {
  return <CareersClient />;
}
