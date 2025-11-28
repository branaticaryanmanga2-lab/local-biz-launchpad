import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

export const CalendlySection = () => {
  const openCalendly = () => {
    // In production, this would open a Calendly widget or redirect to Calendly page
    // Example: window.open('https://calendly.com/your-link', '_blank');
    alert("Calendly booking would open here. Replace with your actual Calendly link.");
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Chat? <span className="text-gradient-primary">Let's Talk Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Book a free 30-minute consultation to discuss your project and see if we're the right fit.
            </p>
          </div>

          <Card className="card-elevated border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Free Strategy Session</CardTitle>
              <CardDescription>
                No pressure, no sales pitch. Just honest advice about what will work best for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Pick Your Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a slot that works with your schedule
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <Video className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">Video or Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet via Zoom or just hop on a call
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">30 Minutes</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick, focused, and actionable
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                variant="cta"
                className="w-full text-lg py-6"
                onClick={openCalendly}
              >
                Schedule Your Free Call
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Prefer email? Reach us at{" "}
                  <a href="mailto:hello@youragency.com" className="text-primary hover:underline">
                    hello@youragency.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
