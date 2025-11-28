import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    organization: "Hope & Healing Community Center",
    type: "Non-Profit",
    quote: "We needed a website to showcase our programs but had no budget. This team created a beautiful, professional site for free. We've seen a 300% increase in volunteer applications!",
    author: "Sarah Johnson",
    role: "Executive Director",
    logo: "🏥",
  },
  {
    organization: "Green Future Environmental Fund",
    type: "NGO",
    quote: "As a small environmental nonprofit, every dollar counts. Getting a free, high-quality website allowed us to redirect funds to our actual mission. The impact has been tremendous.",
    author: "Michael Chen",
    role: "Founder",
    logo: "🌱",
  },
  {
    organization: "Books for All Foundation",
    type: "Educational Non-Profit",
    quote: "Our old site was outdated and hard to navigate. The new website is modern, easy to update, and our donation page converts 5x better. All at no cost to our organization!",
    author: "Rebecca Martinez",
    role: "Communications Director",
    logo: "📚",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Giving Back: <span className="text-gradient-accent">Free Sites for NGOs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're proud to offer completely free website design and hosting to verified non-profit organizations making a difference in their communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="card-hover border-2 relative">
              <CardContent className="pt-12 pb-8">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.logo}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <span className="text-xs font-semibold text-primary">{testimonial.organization}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Is your non-profit organization in need of a website?
          </p>
          <a
            href="mailto:ngo@youragency.com"
            className="text-primary hover:text-primary-glow font-semibold underline underline-offset-4"
          >
            Apply for a free NGO website
          </a>
        </div>
      </div>
    </section>
  );
};
