"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  useScrollReveal();

  return (
    <main className="page-container">
      <SiteHeader />
      <ProjectsSection />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
