import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const headlines = [
  {
    id: 1,
    title: "Your Business Deserves a Website That Works As Hard As You Do",
    subtitle: "Professional sites for power washing & electrical contractors. Live in 7 days, starting at just $299.",
  },
  {
    id: 2,
    title: "Stop Losing Customers to Competitors With Better Websites",
    subtitle: "Get found on Google. Convert more calls. Grow your local business with a site built to sell.",
  },
  {
    id: 3,
    title: "From Invisible to Unstoppable: Get Online in One Week",
    subtitle: "Custom websites + SEO for service businesses. No tech headaches, just results.",
  },
];

export const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline rotator indicator */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {headlines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeadline(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentHeadline ? "w-8 bg-accent" : "w-2 bg-muted"
                }`}
                aria-label={`Switch to headline ${idx + 1}`}
              />
            ))}
          </div>

          {/* Animated headline */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-secondary-foreground">
                Free Homepage Mockup • 7-Day Delivery
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              {headlines[currentHeadline].title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {headlines[currentHeadline].subtitle}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" onClick={scrollToForm} className="text-lg px-8 py-6">
              Get Your Free Mockup
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="hero-secondary"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              See Pricing
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>7-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>100% satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
