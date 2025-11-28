import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Clock, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const headlines = [
  {
    id: 1,
    title: "Get 3-5 New Customer Calls Per Week From Your Website",
    subtitle: "Custom websites for power washing & electrician businesses that rank #1 in Google and convert visitors into paying customers.",
    altSubtitle: "Professional sites that turn local searches into booked jobs. Live in 7 days, guaranteed results.",
  },
  {
    id: 2,
    title: "Your Competitors Are Stealing Customers Because They Have Better Websites",
    subtitle: "Stop losing $50,000+ per year to competitors. Get a conversion-optimized website that dominates local search results.",
    altSubtitle: "Rank higher on Google, get more calls, and book more jobs. Starting at just $299 with zero risk.",
  },
  {
    id: 3,
    title: "From Zero Online Presence to Fully Booked in 30 Days",
    subtitle: "Launch your professional website + local SEO in just 7 days. Start getting found by customers actively searching for your services.",
    altSubtitle: "Complete digital presence: Website + Google optimization + lead capture. Everything you need to grow your business online.",
  },
];

const trustBadges = [
  { icon: MapPin, text: "US-Based Team" },
  { icon: Clock, text: "7-Day Launch" },
  { icon: TrendingUp, text: "50+ Projects Delivered" },
];

export const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [showAltSubtitle, setShowAltSubtitle] = useState(false);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/[0.02] via-background to-accent/[0.02]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Headline rotator indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {headlines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeadline(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentHeadline ? "w-12 bg-accent" : "w-2 bg-border hover:bg-accent/50"
                }`}
                aria-label={`Switch to headline ${idx + 1}`}
              />
            ))}
          </div>

          {/* Animated headline */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-success/10 border border-success/20 mb-6">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm font-bold text-success">
                FREE Homepage Mockup in 24 Hours • No Credit Card Required
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              {headlines[currentHeadline].title}
            </h1>

            <div className="space-y-3">
              <p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed cursor-pointer hover:text-foreground transition-colors"
                onClick={() => setShowAltSubtitle(!showAltSubtitle)}
              >
                {showAltSubtitle 
                  ? headlines[currentHeadline].altSubtitle 
                  : headlines[currentHeadline].subtitle}
              </p>
              <p className="text-sm text-muted-foreground/70 italic">
                (Click to see alternative message)
              </p>
            </div>
          </div>

          {/* CTA buttons with trust copy */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12">
            <div className="flex flex-col items-center gap-2">
              <Button size="lg" variant="cta" onClick={scrollToForm} className="px-10 py-7 text-lg min-w-[280px]">
                Get Free Mockup Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No contract. No pressure. No credit card.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button
                size="lg"
                variant="cta-outline"
                onClick={scrollToPricing}
                className="px-10 py-7 text-lg min-w-[280px]"
              >
                See Pricing
              </Button>
              <p className="text-sm text-muted-foreground">
                Transparent pricing. No hidden fees.
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{badge.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social proof bar */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                  ))}
                </div>
                <div className="text-left pl-2">
                  <p className="text-sm font-bold text-foreground">50+ Happy Clients</p>
                  <p className="text-xs text-muted-foreground">Average 4.9/5 rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
