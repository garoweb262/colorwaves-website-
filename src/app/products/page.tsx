import { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import ProductsPageClient from "./products-client";

export const metadata: Metadata = generateMetadata(seoConfigs.products);

export default function ProductsPage() {
  return <ProductsPageClient />;
}