import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Building, CheckCircle2, Sparkles } from "lucide-react";

const businessTypes = [
  { id: "power-washing", label: "Power Washing" },
  { id: "electrician", label: "Electrician" },
  { id: "plumbing", label: "Plumbing" },
  { id: "hvac", label: "HVAC" },
  { id: "roofing", label: "Roofing" },
  { id: "landscaping", label: "Landscaping" },
  { id: "ngo", label: "Non-Profit / NGO" },
  { id: "other", label: "Other Service Business" },
];

export const LeadForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    businessTypes: [] as string[],
    message: "",
  });

  const handleCheckboxChange = (typeId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      businessTypes: checked
        ? [...prev.businessTypes, typeId]
        : prev.businessTypes.filter((id) => id !== typeId),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.business) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    if (formData.businessTypes.length === 0) {
      toast({
        title: "Select Your Business Type",
        description: "Please select at least one business type",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with your email service or CRM
    console.log("Form submitted:", formData);

    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        businessTypes: [],
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="card-elevated border-2 border-success">
              <CardContent className="pt-16 pb-16 text-center">
                <div className="w-20 h-20 rounded-full bg-success/10 border-4 border-success flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Success! Your Request is Confirmed
                </h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  Thank you for your interest! We'll create your custom homepage mockup and send it to{" "}
                  <span className="font-semibold text-foreground">{formData.email}</span> within 24 hours.
                </p>
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Check your email</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a confirmation email in the next few minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">We'll start working immediately</p>
                      <p className="text-sm text-muted-foreground">
                        Our design team will create your custom mockup within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">No obligations</p>
                      <p className="text-sm text-muted-foreground">
                        Love your mockup? Great! Don't like it? No problem. Zero pressure.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  Questions? Email us at{" "}
                  <a href="mailto:hello@youragency.com" className="text-primary hover:underline font-semibold">
                    hello@youragency.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent">
                See Your Website Before You Pay • 100% Free • 24-Hour Delivery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Get Your <span className="text-gradient-accent">Free Homepage Mockup</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              See exactly what your new website could look like. No commitment. No credit card. No catch.
            </p>
          </div>

          <Card className="card-elevated border-2">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Tell Us About Your Business</CardTitle>
              <CardDescription className="text-base">
                We'll create a custom homepage design tailored to your industry and send it within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      Your Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business" className="text-base font-semibold">
                      Business Name <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="business"
                        placeholder="ABC Power Washing"
                        className="pl-11 h-12"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@yourbusiness.com"
                        className="pl-11 h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="pl-11 h-12"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Business Type Checkboxes */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    What Type of Business Do You Have? <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">Select all that apply</p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {businessTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={type.id}
                          checked={formData.businessTypes.includes(type.id)}
                          onCheckedChange={(checked) => handleCheckboxChange(type.id, checked as boolean)}
                        />
                        <Label
                          htmlFor={type.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">
                    Tell Us About Your Goals (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="What do you want your website to achieve? Any specific features you need? What makes your business unique?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    The more details you share, the better we can customize your mockup
                  </p>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button type="submit" size="lg" variant="cta" className="w-full text-lg py-7">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get My Free Mockup Now
                  </Button>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      🔒 We respect your privacy. Your information will never be shared or sold.
                    </p>
                    <p className="text-sm text-success font-semibold">
                      ✓ No credit card required • ✓ No contracts • ✓ No obligations
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Trust Elements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-background border-2 border-border">
              <p className="font-bold text-lg mb-2">⚡ 24-Hour Delivery</p>
              <p className="text-sm text-muted-foreground">
                Your custom mockup delivered to your inbox in under 24 hours
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border-2 border-border">
              <p className="font-bold text-lg mb-2">✨ Zero Commitment</p>
              <p className="text-sm text-muted-foreground">
                Love it? Great! Don't love it? No problem. Absolutely no pressure.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border-2 border-border">
              <p className="font-bold text-lg mb-2">💯 100% Free</p>
              <p className="text-sm text-muted-foreground">
                No hidden fees, no credit card, no strings attached whatsoever
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
