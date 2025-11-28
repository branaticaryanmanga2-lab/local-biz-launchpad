import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, TrendingUp, Users, Phone } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    title: "Bright Spark Electric",
    category: "Electrician",
    location: "Austin, TX",
    description: "Modern website with online booking and service area map",
    results: [
      { icon: TrendingUp, label: "+145%", text: "website traffic" },
      { icon: Phone, label: "32", text: "calls/month" },
      { icon: Users, label: "+89%", text: "conversion rate" },
    ],
    image: portfolio1,
    tags: ["Website Design", "SEO", "Booking System"],
  },
  {
    title: "Crystal Clean Power Washing",
    category: "Power Washing",
    location: "Dallas, TX",
    description: "Before/after gallery with instant quote calculator",
    results: [
      { icon: TrendingUp, label: "+220%", text: "lead volume" },
      { icon: Phone, label: "48", text: "calls/month" },
      { icon: Users, label: "+89%", text: "conversion rate" },
    ],
    image: portfolio2,
    tags: ["Website Design", "Gallery", "Quote System"],
  },
  {
    title: "Climate Control HVAC",
    category: "HVAC Services",
    location: "Houston, TX",
    description: "Full-service site with emergency contact and reviews",
    results: [
      { icon: TrendingUp, label: "#1 Rank", text: "'HVAC repair'" },
      { icon: Phone, label: "56", text: "calls/month" },
      { icon: Users, label: "+156%", text: "emergency calls" },
    ],
    image: portfolio3,
    tags: ["Website Design", "SEO", "Emergency Service"],
  },
  {
    title: "Premier Plumbing Co",
    category: "Plumbing",
    location: "San Antonio, TX",
    description: "Mobile-first design with 24/7 emergency booking",
    results: [
      { icon: TrendingUp, label: "+220%", text: "mobile traffic" },
      { icon: Phone, label: "41", text: "calls/month" },
      { icon: Users, label: "+175%", text: "mobile conversions" },
    ],
    image: portfolio4,
    tags: ["Website Design", "Mobile-First", "24/7 Booking"],
  },
  {
    title: "Green Vista Landscaping",
    category: "Landscaping",
    location: "Fort Worth, TX",
    description: "Stunning photo gallery with seasonal services",
    results: [
      { icon: TrendingUp, label: "+156%", text: "qualified leads" },
      { icon: Phone, label: "38", text: "calls/month" },
      { icon: Users, label: "+98%", text: "quote requests" },
    ],
    image: portfolio5,
    tags: ["Website Design", "Gallery", "Seasonal Promo"],
  },
  {
    title: "Apex Roofing Solutions",
    category: "Roofing",
    location: "El Paso, TX",
    description: "Insurance claim assistance + virtual inspections",
    results: [
      { icon: TrendingUp, label: "+98%", text: "online quotes" },
      { icon: Phone, label: "44", text: "calls/month" },
      { icon: Users, label: "+134%", text: "inspection bookings" },
    ],
    image: portfolio6,
    tags: ["Website Design", "Insurance Tools", "Virtual Service"],
  },
];

export const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Real Businesses. <span className="text-gradient-primary">Real Results.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            See how we've helped local service businesses like yours get more customers online.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/10 border border-success/20">
            <span className="text-sm font-bold text-success">
              Average client sees 150%+ increase in leads within 90 days
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {portfolioItems.map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group card-hover cursor-pointer border-2"
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={`${item.title} website design showcase`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent transition-opacity duration-300 ${
                    hoveredItem === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-bold text-lg">View Full Case Study</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {item.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="pt-4 border-t border-border space-y-3">
                  {item.results.map((result, resultIdx) => {
                    const Icon = result.icon;
                    return (
                      <div key={resultIdx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <span className="font-bold text-accent">{result.label}</span>
                          <span className="text-sm text-muted-foreground ml-2">{result.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="cta" onClick={scrollToForm} className="px-10">
            Get Results Like These
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Start with a free mockup. See what your site could look like.
          </p>
        </div>
      </div>
    </section>
  );
};
