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
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";

export default async function Home() {
  // Fetch data from Sanity
  const homepageData = await client.fetch(homepageQuery);

  return (
    <div className="min-h-screen">
      <Hero data={homepageData?.hero} />
      <FeatureBlock features={homepageData?.featureBlocks} />
      <FeaturesGrid cards={homepageData?.featuresGrid} />
      <ComplianceQualitySection data={homepageData?.complianceSection} />
      <CustomizationAISection data={homepageData?.customizationSection} />
      <IndustrySolutionsSection data={homepageData?.industrySection} />
      <ProofResultsSection data={homepageData?.proofSection} />
      <TestimonialsSection data={homepageData?.testimonialsSection} />
      <BlogPreviewSection />
      <CallToActionSection data={homepageData?.ctaSection} />
      <NewsletterSection data={homepageData?.newsletterSection} />
      <SolutionsSection data={homepageData?.solutions} />
    </div>
  );
}
