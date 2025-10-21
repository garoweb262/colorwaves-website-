import type { Metadata } from "next";
import ProjectsClient from "./projects-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.projects);

export default function ProjectsPage() {
  return <ProjectsClient />;
}
