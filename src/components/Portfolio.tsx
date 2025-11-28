import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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
    description: "Modern website with online booking and service area map",
    image: portfolio1,
    results: "+145% website traffic in 3 months",
  },
  {
    title: "Crystal Clean Power Washing",
    category: "Power Washing",
    description: "Before/after gallery with instant quote calculator",
    image: portfolio2,
    results: "+89% lead conversion rate",
  },
  {
    title: "Climate Control HVAC",
    category: "HVAC Services",
    description: "Full-service site with emergency contact and reviews",
    image: portfolio3,
    results: "Ranked #1 for 'HVAC repair near me'",
  },
  {
    title: "Premier Plumbing Co",
    category: "Plumbing",
    description: "Mobile-first design with 24/7 emergency booking",
    image: portfolio4,
    results: "+220% mobile conversions",
  },
  {
    title: "Green Vista Landscaping",
    category: "Landscaping",
    description: "Stunning photo gallery with seasonal services",
    image: portfolio5,
    results: "+156% qualified leads",
  },
  {
    title: "Apex Roofing Solutions",
    category: "Roofing",
    description: "Insurance claim assistance + virtual inspections",
    image: portfolio6,
    results: "+98% online quote requests",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Real Businesses. <span className="text-gradient-primary">Real Results.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we've helped local service businesses like yours get more customers online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group card-hover cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-display font-bold">{item.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{item.results}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
