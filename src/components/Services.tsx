import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Mobile-responsive, fast-loading sites that turn visitors into customers.",
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
    features: [
      "Custom logo design",
      "Brand color palette",
      "Business card design",
      "Social media graphics",
      "Brand style guide",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Everything You Need to <span className="text-gradient-primary">Dominate Local Search</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We handle the tech stuff so you can focus on what you do best—running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="card-hover border-2 hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
