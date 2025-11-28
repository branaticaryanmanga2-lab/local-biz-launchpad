import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { CalendlySection } from "@/components/CalendlySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <LeadForm />
      <CalendlySection />
      <Footer />
    </div>
  );
};

export default Index;
