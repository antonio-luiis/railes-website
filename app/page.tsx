import { Hero } from "@/components/Hero";
import { FeatureBlock } from "@/components/FeatureBlock";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ComplianceQualitySection } from "@/components/ComplianceQualitySection";
import { CustomizationAISection } from "@/components/CustomizationAISection";
import { IndustrySolutionsSection } from "@/components/IndustrySolutionsSection";
import { ProofResultsSection } from "@/components/ProofResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import * as mockData from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero data={mockData.heroData} />
      <FeatureBlock features={mockData.featureBlocks} />
      <FeaturesGrid cards={mockData.featuresGrid} />
      <ComplianceQualitySection data={mockData.complianceSection} />
      <CustomizationAISection data={mockData.customizationSection} />
      <IndustrySolutionsSection data={mockData.industrySection} />
      <ProofResultsSection data={mockData.proofSection} />
      <TestimonialsSection data={mockData.testimonialsSection} />
      <BlogPreviewSection />
      <CallToActionSection data={mockData.ctaSection} />
      <NewsletterSection data={mockData.newsletterSection} />
      <SolutionsSection data={mockData.solutions} />
    </div>
  );
}
