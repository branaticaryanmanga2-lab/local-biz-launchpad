import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Play, MapPin, Briefcase, ArrowRight } from "lucide-react";

const testimonials = [
  {
    organization: "Hope & Healing Community Center",
    type: "Healthcare Non-Profit",
    location: "Chicago, IL",
    quote: "We needed a website to showcase our programs but had no budget. This team created a beautiful, professional site for free. We've seen a 300% increase in volunteer applications and our donation page finally works properly!",
    author: "Sarah Johnson",
    role: "Executive Director",
    logo: "🏥",
  },
  {
    organization: "Green Future Environmental Fund",
    type: "Environmental NGO",
    location: "Portland, OR",
    quote: "As a small environmental nonprofit, every dollar counts. Getting a free, high-quality website allowed us to redirect funds to our actual mission. The impact has been tremendous—we're reaching more donors and making a bigger difference.",
    author: "Michael Chen",
    role: "Founder & Director",
    logo: "🌱",
  },
  {
    organization: "Books for All Foundation",
    type: "Educational Non-Profit",
    location: "Boston, MA",
    quote: "Our old site was outdated and hard to navigate. The new website is modern, easy to update, and our donation page converts 5x better. All at no cost to our organization! This partnership has been life-changing for our mission.",
    author: "Rebecca Martinez",
    role: "Communications Director",
    logo: "📚",
  },
];

const videoTestimonial = {
  thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
  duration: "2:34",
  client: "John Miller",
  business: "Miller's Power Washing",
  location: "Nashville, TN",
  quote: "This website paid for itself in the first month",
};

export const Testimonials = () => {
  const handleVideoClick = () => {
    alert("Video testimonial would play here. Integration with video player needed.");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Giving Back: <span className="text-gradient-accent">Free Sites for NGOs</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We're proud to offer completely free website design and hosting to verified non-profit organizations making a difference in their communities.
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="card-hover border-2 relative overflow-hidden group">
              <CardContent className="pt-12 pb-8 relative z-10">
                {/* Logo Badge */}
                <div className="absolute -top-6 left-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {testimonial.logo}
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/20 mb-4" />

                {/* Quote Text */}
                <p className="text-foreground mb-6 italic leading-relaxed text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-primary">{testimonial.organization}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success border border-success/20 font-medium">
                        {testimonial.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-8">
            See What Our Clients Say
          </h3>
          <Card className="overflow-hidden card-elevated border-2">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Video Thumbnail */}
              <div
                className="relative aspect-video md:aspect-auto cursor-pointer group"
                onClick={handleVideoClick}
              >
                <img
                  src={videoTestimonial.thumbnail}
                  alt={`${videoTestimonial.client} video testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 text-white text-sm font-semibold">
                  {videoTestimonial.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-2xl font-bold text-foreground mb-6 leading-snug">
                  "{videoTestimonial.quote}"
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-lg text-foreground">{videoTestimonial.client}</p>
                  <p className="text-sm text-primary font-semibold">{videoTestimonial.business}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {videoTestimonial.location}
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="cta"
                  onClick={scrollToForm}
                  className="mt-6"
                >
                  Get Your Free Mockup
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* NGO Application CTA */}
        <div className="text-center max-w-3xl mx-auto p-8 bg-gradient-to-br from-muted/50 to-accent/5 rounded-2xl border-2 border-border">
          <h3 className="text-2xl font-display font-bold mb-4">
            Is Your Non-Profit in Need of a Website?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We offer completely free website design, hosting, and support to verified 501(c)(3) organizations. Apply today to see if you qualify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ngo@youragency.com?subject=NGO Free Website Application"
              className="inline-block"
            >
              <Button variant="cta" size="lg">
                Apply for Free NGO Website
              </Button>
            </a>
            <Button variant="outline" size="lg" onClick={scrollToForm}>
              Business? Get Started Here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
