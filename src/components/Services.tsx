import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Palette, Check, X, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Mobile-responsive, fast-loading sites that turn visitors into customers.",
    benefit: "Get 3-5 quality leads per week from organic search",
    features: [
      "Custom design for your industry",
      "Mobile-first responsive layout",
      "Contact forms & call tracking",
      "Google Maps integration",
      "Easy content updates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    description: "Get found by customers searching for your services in your area.",
    benefit: "Rank #1 in Google within 90 days or money back",
    features: [
      "Google Business Profile setup",
      "Local keyword optimization",
      "Monthly ranking reports",
      "Citation building",
      "Review management strategy",
    ],
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Professional branding that makes your business stand out from competitors.",
    benefit: "Look 10x more professional than your competition",
    features: [
      "Custom logo design",
      "Brand color palette",
      "Business card design",
      "Social media graphics",
      "Brand style guide",
    ],
  },
];

const comparison = {
  title: "Why Choose a Professional Agency Over DIY or Freelancers?",
  categories: [
    {
      feature: "Professional Design",
      agency: true,
      freelancer: true,
      diy: false,
    },
    {
      feature: "SEO Optimization",
      agency: true,
      freelancer: false,
      diy: false,
    },
    {
      feature: "Fast Delivery (7 days)",
      agency: true,
      freelancer: false,
      diy: false,
    },
    {
      feature: "Guaranteed Results",
      agency: true,
      freelancer: false,
      diy: false,
    },
    {
      feature: "Ongoing Support",
      agency: true,
      freelancer: false,
      diy: false,
    },
    {
      feature: "Money-Back Guarantee",
      agency: true,
      freelancer: false,
      diy: false,
    },
  ],
};

export const Services = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Everything You Need to <span className="text-gradient-accent">Dominate Local Search</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We handle the tech stuff so you can focus on what you do best—running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="card-hover border-2 hover:border-accent/50 transition-all group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-semibold text-accent">{service.benefit}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 card-elevated">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl md:text-3xl mb-3">{comparison.title}</CardTitle>
              <CardDescription className="text-base">
                See why smart business owners choose professional agencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-primary">
                        <div className="flex flex-col items-center gap-1">
                          <span>Professional</span>
                          <span>Agency</span>
                          <span className="text-xs font-normal text-accent">(Us)</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Freelancer</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">DIY Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.categories.map((row, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-4 font-medium">{row.feature}</td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            {row.agency ? (
                              <div className="comparison-check">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            ) : (
                              <div className="comparison-cross">
                                <X className="w-4 h-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            {row.freelancer ? (
                              <div className="comparison-check">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            ) : (
                              <div className="comparison-cross">
                                <X className="w-4 h-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            {row.diy ? (
                              <div className="comparison-check">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            ) : (
                              <div className="comparison-cross">
                                <X className="w-4 h-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" variant="cta" onClick={scrollToPricing} className="px-8">
                  See Our Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="mt-3 text-sm text-muted-foreground">
                  Professional results without the agency price tag
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
