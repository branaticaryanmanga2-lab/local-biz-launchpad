import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Download, ArrowRight } from "lucide-react";

const websitePlans = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for getting started online",
    popular: false,
    features: [
      "5-page website",
      "Mobile responsive design",
      "Contact form",
      "Google Maps integration",
      "1 round of revisions",
      "7-day delivery",
      "Free 30-day support",
    ],
  },
  {
    name: "Standard",
    price: "$499",
    description: "Most popular for local businesses",
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "10-page website",
      "Custom premium design",
      "Photo gallery",
      "Live chat integration",
      "Social media integration",
      "2 rounds of revisions",
      "Basic SEO setup",
      "Free 60-day support",
      "Priority 5-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "$799",
    description: "Complete online presence package",
    popular: false,
    features: [
      "Everything in Standard, plus:",
      "15-page website",
      "Elite custom design",
      "Advanced photo gallery",
      "Online booking system",
      "Customer testimonials page",
      "Blog setup (5 posts)",
      "3 rounds of revisions",
      "Advanced SEO setup",
      "Free 90-day support",
      "VIP 3-day delivery",
    ],
  },
];

const seoPlans = [
  {
    name: "SEO Starter",
    price: "$199/mo",
    description: "Essential local SEO",
    features: [
      "Google Business Profile optimization",
      "5 local keywords",
      "Monthly ranking report",
      "Basic citation building",
      "Review monitoring",
      "Competitor tracking",
    ],
  },
  {
    name: "SEO Pro",
    price: "$399/mo",
    description: "Aggressive local domination",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "15 local keywords",
      "Weekly ranking reports",
      "Advanced citation building",
      "Review generation strategy",
      "Content optimization",
      "Competitor analysis",
      "Monthly strategy calls",
      "Guaranteed page 1 rankings*",
    ],
  },
];

const faqs = [
  {
    question: "What's your revision policy?",
    answer: "Each plan includes a set number of revision rounds. A 'round' means you can request multiple changes at once, and we'll implement them all. We want you to be 100% happy with the final result.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely. If we don't deliver your website on time or you're not satisfied with our work after the first draft, we'll refund 100% of your payment. No questions asked.",
  },
  {
    question: "How long does it really take?",
    answer: "Basic sites launch in 7 days, Standard in 5 days, and Premium in 3 days. That's from contract signing to fully live website. We've perfected our process to deliver fast without sacrificing quality.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "All plans include free support (30, 60, or 90 days depending on your plan). After that, we offer affordable maintenance plans starting at $49/month, or you can request changes on a per-project basis.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes! If you start with Basic and want to upgrade to Standard or Premium later, we'll credit your original payment and you only pay the difference.",
  },
];

export const Pricing = () => {
  const handleDownloadPDF = () => {
    alert("PDF pricing sheet download would start here. Integration with PDF generation library needed.");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Simple, <span className="text-gradient-accent">Transparent Pricing</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            No surprises. No hidden fees. Just honest pricing that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" onClick={handleDownloadPDF} className="gap-2">
              <Download className="w-4 h-4" />
              Download Pricing PDF
            </Button>
            <Button variant="cta" onClick={scrollToForm} className="gap-2">
              Get Free Mockup
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Website Packages */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Website Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websitePlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative transition-all duration-300 ${
                  plan.popular 
                    ? "border-accent border-3 card-elevated scale-105 md:scale-110" 
                    : "border-2 card-hover"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground px-6 py-2 text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle className="text-2xl md:text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-6">
                    <span className="text-5xl md:text-6xl font-display font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2 text-lg">one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${feature.includes("Everything in") ? "font-bold" : ""}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "cta" : "default"}
                    size="lg"
                    onClick={scrollToForm}
                  >
                    Get Started Now
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    100% money-back guarantee
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Packages */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Ongoing SEO Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seoPlans.map((plan, idx) => (
              <Card key={idx} className={`${plan.popular ? "border-accent border-3 card-elevated" : "border-2 card-hover"}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground px-6 py-2 text-sm font-bold shadow-lg">
                      BEST VALUE
                    </Badge>
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle className="text-2xl md:text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-6">
                    <span className="text-5xl font-display font-bold text-primary">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${feature.includes("Everything in") ? "font-bold" : ""}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "cta" : "default"}
                    size="lg"
                    onClick={scrollToForm}
                  >
                    Start Ranking Now
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    Cancel anytime. No contracts.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Frequently Asked Questions</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to know before getting started
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-muted/50 rounded-2xl">
            <p className="text-lg font-semibold mb-4">Still have questions?</p>
            <Button variant="cta" onClick={scrollToForm} size="lg">
              Schedule a Free Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
