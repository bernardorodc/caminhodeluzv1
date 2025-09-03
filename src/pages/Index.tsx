import { UrgencyBanner } from "@/components/UrgencyBanner"
import { Hero } from "@/components/Hero"
import { AboutSection } from "@/components/AboutSection"
import { ForWhoSection } from "@/components/ForWhoSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { GuaranteeSection } from "@/components/GuaranteeSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTASection } from "@/components/FinalCTASection"

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <Hero />
      <AboutSection />
      <ForWhoSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;