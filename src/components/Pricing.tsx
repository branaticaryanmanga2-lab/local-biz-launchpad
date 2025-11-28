import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download } from "lucide-react";

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
    ],
  },
  {
    name: "Standard",
    price: "$499",
    description: "Most popular for local businesses",
    popular: true,
    features: [
      "10-page website",
      "Custom design",
      "Photo gallery",
      "Contact form + live chat",
      "Social media integration",
      "2 rounds of revisions",
      "Basic SEO setup",
      "5-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "$799",
    description: "Complete online presence package",
    popular: false,
    features: [
      "15-page website",
      "Premium custom design",
      "Advanced photo gallery",
      "Online booking system",
      "Customer testimonials page",
      "Blog setup",
      "3 rounds of revisions",
      "Advanced SEO setup",
      "Priority 3-day delivery",
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
    ],
  },
  {
    name: "SEO Pro",
    price: "$399/mo",
    description: "Aggressive local domination",
    features: [
      "Everything in Starter",
      "15 local keywords",
      "Weekly ranking reports",
      "Advanced citation building",
      "Review generation strategy",
      "Competitor analysis",
      "Monthly strategy calls",
    ],
  },
];

export const Pricing = () => {
  const handleDownloadPDF = () => {
    // This would be implemented with actual PDF generation
    alert("PDF pricing sheet download would start here. Integration with PDF generation library needed.");
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Simple, <span className="text-gradient-accent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            No surprises. No hidden fees. Just honest pricing that fits your budget.
          </p>
          <Button variant="outline" onClick={handleDownloadPDF} className="gap-2">
            <Download className="w-4 h-4" />
            Download Pricing PDF
          </Button>
        </div>

        {/* Website Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-center mb-10">Website Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {websitePlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative card-hover ${
                  plan.popular ? "border-primary border-2 card-elevated" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-display font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "hero" : "default"}
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Packages */}
        <div>
          <h3 className="text-3xl font-display font-bold text-center mb-10">Ongoing SEO Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seoPlans.map((plan, idx) => (
              <Card key={idx} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-display font-bold text-primary">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={idx === 1 ? "hero" : "default"}
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start Growing
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
