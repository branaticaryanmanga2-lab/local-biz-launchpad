# Agency Website - Wireframe & Documentation

## Page Structure

### 1. Hero Section
**Layout:** Full-height section with background image + gradient overlay
- **Headline Rotator:** 3 options with visual indicators (dots)
  1. "Your Business Deserves a Website That Works As Hard As You Do"
  2. "Stop Losing Customers to Competitors With Better Websites"
  3. "From Invisible to Unstoppable: Get Online in One Week"
- **Subheadline:** Supporting benefit statement
- **Badge:** "Free Homepage Mockup • 7-Day Delivery"
- **CTAs:** 
  - Primary: "Get Your Free Mockup" (Coral/Accent)
  - Secondary: "See Pricing" (Outlined Teal)
- **Trust Indicators:** 3 icons with benefits (⚡ 7-day delivery, 💰 No hidden fees, 🎯 100% satisfaction)

### 2. Services Section
**Layout:** 3-column grid (stacks on mobile)
- **Section Header:** "Everything You Need to Dominate Local Search"
- **Cards:**
  1. Website Design (Globe icon)
  2. Local SEO (TrendingUp icon)
  3. Logo & Branding (Palette icon)
- Each card includes:
  - Icon with teal background
  - Title + description
  - 5 feature bullet points with checkmarks
  - Hover effect with elevation

### 3. Portfolio Section
**Layout:** 3-column grid gallery (2 cols on tablet, 1 on mobile)
- **Section Header:** "Real Businesses. Real Results."
- **6 Portfolio Items:**
  1. Bright Spark Electric (Electrician)
  2. Crystal Clean Power Washing
  3. Climate Control HVAC
  4. Premier Plumbing Co
  5. Green Vista Landscaping
  6. Apex Roofing Solutions
- Each item shows:
  - Featured image (4:3 aspect ratio)
  - Business name + category badge
  - Description
  - Results metric
  - Hover overlay with "View Project" link

### 4. Pricing Section
**Layout:** Two subsections

#### Website Packages (3 columns)
1. **Basic - $299**
   - 5-page website
   - Mobile responsive
   - Contact form
   - Google Maps
   - 1 revision
   - 7-day delivery

2. **Standard - $499** (POPULAR)
   - 10-page website
   - Custom design
   - Photo gallery
   - Contact + live chat
   - Social media integration
   - 2 revisions
   - Basic SEO
   - 5-day delivery

3. **Premium - $799**
   - 15-page website
   - Premium design
   - Advanced gallery
   - Booking system
   - Testimonials page
   - Blog setup
   - 3 revisions
   - Advanced SEO
   - 3-day priority delivery

#### SEO Services (2 columns)
1. **SEO Starter - $199/mo**
   - Google Business Profile
   - 5 local keywords
   - Monthly reports
   - Basic citations
   - Review monitoring

2. **SEO Pro - $399/mo**
   - Everything in Starter
   - 15 keywords
   - Weekly reports
   - Advanced citations
   - Review generation
   - Competitor analysis
   - Monthly strategy calls

**PDF Download Button:** Downloads one-page pricing sheet

### 5. NGO Testimonials Section
**Layout:** 3-column card grid
- **Section Header:** "Giving Back: Free Sites for NGOs"
- **3 Testimonials:**
  1. Hope & Healing Community Center (Healthcare)
  2. Green Future Environmental Fund (Environment)
  3. Books for All Foundation (Education)
- Each includes:
  - Organization logo/emoji
  - Quote
  - Author name + role
  - Organization name + type badge
- **CTA:** Email link to apply for free NGO website

### 6. Lead Capture Form
**Layout:** Centered single-column form in elevated card
- **Section Header:** "Get Your Free Homepage Mockup"
- **Form Fields:**
  - Name (required)
  - Business Name (required)
  - Email (required)
  - Phone (required)
  - Service Type (dropdown: Power Washing, Electrician, Plumbing, HVAC, Roofing, Landscaping, Other)
  - Goals/Message (optional textarea)
- **Submit Button:** Coral "Get My Free Mockup Now"
- **Privacy Note:** Below button

### 7. Calendly Section
**Layout:** Centered card with 3-icon feature grid
- **Section Header:** "Ready to Chat? Let's Talk Strategy"
- **Features:**
  - Pick Your Time (Calendar icon)
  - Video or Phone (Video icon)
  - 30 Minutes (Clock icon)
- **CTA Button:** "Schedule Your Free Call"
- **Fallback:** Email contact link

### 8. Footer
**Layout:** 4-column grid + bottom bar
- **Column 1-2:** Company info with contact details
- **Column 3:** Quick links (Services, Pricing, Portfolio, Get Free Mockup)
- **Column 4:** Resources (Blog, Case Studies, NGO Program, Privacy Policy)
- **Bottom Bar:** Copyright + social media icons

---

## Schema Markup Suggestions

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Local Business Digital",
  "description": "Professional website design, SEO, and branding services for local service businesses",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "telephone": "+1-555-123-4567",
  "email": "hello@youragency.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "priceRange": "$299-$799",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": ["Website Design", "SEO Services", "Logo Design"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
```

### Service Schema (for each service)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Local Business Digital"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31"
  }
}
```

### Review Schema (for testimonials)
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "We needed a website to showcase our programs but had no budget...",
  "itemReviewed": {
    "@type": "Service",
    "name": "Free NGO Website Design"
  }
}
```

### FAQ Schema (add to Services/Pricing sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic websites are delivered in 7 days, Standard in 5 days, and Premium in 3 days."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer SEO Starter at $199/month and SEO Pro at $399/month with comprehensive local search optimization."
      }
    }
  ]
}
```

---

## SEO Meta Tags (Already Implemented)

### Homepage
- **Title:** "Professional Website Design & SEO Services for Local Businesses | Get Online Fast"
- **Description:** "Affordable website design, SEO, and branding for power washing and electrician businesses. Get your professional site in days, not weeks. Starting at $299. Free homepage mockup!"
- **Keywords:** website design, local business website, power washing website, electrician website, SEO services, logo design, affordable web design

### Open Graph
- Title, description, and image for social sharing

---

## Color System

### Primary Colors
- **Primary (Teal):** `hsl(195, 85%, 45%)` - Trust, professionalism, tech-forward
- **Primary Glow:** `hsl(195, 85%, 55%)` - Lighter teal for hover states
- **Accent (Coral):** `hsl(15, 85%, 60%)` - Energy, action, CTAs
- **Accent Glow:** `hsl(15, 90%, 70%)` - Lighter coral for hover states

### Neutral Colors
- **Background:** `hsl(0, 0%, 100%)` - Clean white
- **Foreground:** `hsl(220, 15%, 20%)` - Dark text
- **Muted:** `hsl(220, 15%, 96%)` - Subtle backgrounds
- **Border:** `hsl(220, 15%, 88%)` - Dividers

### Button Variants
- **hero:** Coral background with white text, scales on hover
- **hero-secondary:** Teal outline, fills on hover
- **default:** Teal background with white text

---

## Typography

### Fonts
- **Display (Headlines):** Plus Jakarta Sans (Bold 700/800)
- **Body:** Inter (Regular 400/Medium 500/Semibold 600/Bold 700)

### Sizes
- **H1:** 5xl-7xl (48px-72px)
- **H2:** 4xl-5xl (36px-48px)
- **H3:** 3xl (30px)
- **Body:** xl (20px) for hero, base (16px) for content

---

## Animations

### Transitions
- **Smooth:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Card Hover:** Scale 1.05, elevated shadow
- **Button Hover:** Scale 1.05 (hero variants)

### Page Load
- Fade-in animations for hero content
- Staggered reveals for cards (can be enhanced with Framer Motion)

---

## Downloadable PDF Structure

**One-Page Pricing Sheet should include:**

### Header
- Company logo
- "Simple, Transparent Pricing"
- Contact info

### Website Packages Table
| Package | Price | Pages | Features | Delivery |
|---------|-------|-------|----------|----------|
| Basic   | $299  | 5     | Listed   | 7 days   |
| Standard| $499  | 10    | Listed   | 5 days   |
| Premium | $799  | 15    | Listed   | 3 days   |

### SEO Services Table
| Service     | Price    | Features           |
|-------------|----------|--------------------|
| SEO Starter | $199/mo  | Listed             |
| SEO Pro     | $399/mo  | Listed             |

### Footer
- "All prices are one-time fees (websites) or monthly (SEO)"
- "No hidden fees or surprise charges"
- "100% satisfaction guarantee"
- Call to action: "Get your free mockup: hello@youragency.com"

---

## Mobile Responsiveness

### Breakpoints
- **Mobile:** < 768px (1 column layouts)
- **Tablet:** 768px-1024px (2 column layouts)
- **Desktop:** > 1024px (3-4 column layouts)

### Mobile Optimizations
- Hamburger menu (if navigation added)
- Stack all grid layouts to single column
- Increase touch target sizes (min 44px)
- Hero text reduces from 7xl → 5xl → 4xl
- Forms use full width inputs
- CTA buttons use full width on mobile

---

## Editable Blocks Guide

### For Non-Technical Users

**Easy to Edit:**
1. **Headlines:** Update text in Hero.tsx (headlines array)
2. **Pricing:** Modify prices/features in Pricing.tsx (websitePlans and seoPlans arrays)
3. **Services:** Edit descriptions in Services.tsx (services array)
4. **Portfolio Items:** Update in Portfolio.tsx (portfolioItems array)
5. **Testimonials:** Modify in Testimonials.tsx (testimonials array)
6. **Contact Info:** Update in Footer.tsx

**Text Changes Only (No Code):**
- All content is in plain text within component files
- Images can be replaced by updating the src path
- Colors controlled via design system (index.css)

---

## Future Enhancement Ideas

1. **CMS Integration:** Connect to Contentful or Sanity for non-technical editing
2. **Blog Section:** Add /blog route with article templates
3. **Before/After Gallery:** Interactive slider for portfolio items
4. **Live Chat Widget:** Integrate Intercom or Drift
5. **Video Testimonials:** Embed video player in testimonials
6. **Case Study Pages:** Individual pages for each portfolio item
7. **Price Calculator:** Interactive tool for custom quotes
8. **Client Portal:** Login area for project management
9. **Analytics Dashboard:** Track conversions and form submissions
10. **A/B Testing:** Test different headlines, CTAs, and layouts

---

## Conversion Optimization Notes

### Key Conversion Points
1. **Primary:** Lead form (free mockup)
2. **Secondary:** Calendly booking
3. **Tertiary:** Email links, phone clicks

### Trust Building Elements
- ✅ Real portfolio examples with results
- ✅ NGO testimonials (social proof + values)
- ✅ Clear pricing (transparency)
- ✅ Money-back guarantee mentions
- ✅ Fast delivery promises
- ✅ No-pressure consultation offer

### Psychological Triggers
- **Scarcity:** "Limited slots available" (can add)
- **Urgency:** "Get online in 7 days"
- **Social Proof:** Testimonials, portfolio, results
- **Authority:** Expertise in local business niche
- **Value:** Free mockup, transparent pricing
- **Reciprocity:** Free NGO sites, free consultation

---

## Technical SEO Checklist

- ✅ Meta title optimized (60 chars)
- ✅ Meta description optimized (160 chars)
- ✅ Open Graph tags
- ✅ Schema markup (Organization)
- ✅ Mobile responsive
- ✅ Fast loading (Vite optimization)
- ✅ Semantic HTML
- ✅ Alt text on images
- ⬜ XML sitemap (generate post-launch)
- ⬜ Robots.txt configured (basic version included)
- ⬜ Google Analytics integration
- ⬜ Google Search Console setup
- ⬜ Page speed optimization (image compression)
- ⬜ Internal linking strategy
- ⬜ External backlink building

---

## Launch Checklist

### Pre-Launch
- [ ] Replace placeholder contact info (email, phone)
- [ ] Add real Calendly link
- [ ] Set up form submission handler (email/CRM)
- [ ] Generate pricing PDF
- [ ] Test all forms on multiple devices
- [ ] Optimize images (compress)
- [ ] Add Google Analytics tracking code
- [ ] Set up email capture (Mailchimp, ConvertKit)
- [ ] Configure domain + SSL
- [ ] Test performance (Lighthouse)

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google Business Profile
- [ ] Set up social media profiles
- [ ] Start content marketing (blog)
- [ ] Launch PPC campaigns (if applicable)
- [ ] Monitor form submissions
- [ ] A/B test headlines
- [ ] Collect customer testimonials
- [ ] Update portfolio with real projects

---

## Notes for Developers

### Key Dependencies
- React + TypeScript
- Tailwind CSS (design system)
- shadcn/ui components
- Lucide React icons
- React Router DOM

### File Structure
```
src/
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── LeadForm.tsx
│   ├── CalendlySection.tsx
│   └── Footer.tsx
├── assets/
│   ├── hero-bg.jpg
│   └── portfolio-[1-6].jpg
├── pages/
│   └── Index.tsx
└── index.css (design system)
```

### Custom Utilities (in index.css)
- `.text-gradient-primary` - Teal gradient text
- `.text-gradient-accent` - Coral gradient text
- `.card-elevated` - Premium shadow
- `.card-hover` - Scale + shadow on hover

### Button Variants (added to button.tsx)
- `variant="hero"` - Coral CTA button
- `variant="hero-secondary"` - Teal outline button

---

## Wireframe ASCII Art

```
┌─────────────────────────────────────────────────────────────┐
│                         HERO SECTION                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [● ○ ○] Headline Rotator Indicators                   │ │
│  │                                                         │ │
│  │        Your Business Deserves a Website That           │ │
│  │           Works As Hard As You Do                      │ │
│  │                                                         │ │
│  │  Professional sites for power washing & electrical     │ │
│  │  contractors. Live in 7 days, starting at just $299.   │ │
│  │                                                         │ │
│  │    [Get Your Free Mockup]  [See Pricing]              │ │
│  │                                                         │ │
│  │    ⚡ 7-day    💰 No hidden    🎯 100%                 │ │
│  │    delivery      fees       satisfaction               │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      SERVICES SECTION                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  [Globe]     │  │ [TrendUp]    │  │  [Palette]   │      │
│  │  Website     │  │  Local SEO   │  │  Logo &      │      │
│  │  Design      │  │              │  │  Branding    │      │
│  │              │  │              │  │              │      │
│  │  • Feature   │  │  • Feature   │  │  • Feature   │      │
│  │  • Feature   │  │  • Feature   │  │  • Feature   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     PORTFOLIO SECTION                        │
│  ┌──────┐ ┌──────┐ ┌──────┐                                │
│  │ IMG  │ │ IMG  │ │ IMG  │                                │
│  │ Name │ │ Name │ │ Name │                                │
│  │ Desc │ │ Desc │ │ Desc │                                │
│  └──────┘ └──────┘ └──────┘                                │
│  ┌──────┐ ┌──────┐ ┌──────┐                                │
│  │ IMG  │ │ IMG  │ │ IMG  │                                │
│  └──────┘ └──────┘ └──────┘                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      PRICING SECTION                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │   Basic    │ │  Standard  │ │  Premium   │              │
│  │   $299     │ │   $499     │ │   $799     │              │
│  │ [POPULAR]  │ │            │ │            │              │
│  │            │ │            │ │            │              │
│  │ • Feature  │ │ • Feature  │ │ • Feature  │              │
│  │ [Get It]   │ │ [Get It]   │ │ [Get It]   │              │
│  └────────────┘ └────────────┘ └────────────┘              │
│                                                              │
│  ┌──────────────────┐ ┌──────────────────┐                 │
│  │  SEO Starter     │ │    SEO Pro       │                 │
│  │   $199/mo        │ │    $399/mo       │                 │
│  └──────────────────┘ └──────────────────┘                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   TESTIMONIALS (NGO)                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │ 🏥 Quote    │ │ 🌱 Quote    │ │ 📚 Quote    │        │
│  │ - Name      │ │ - Name      │ │ - Name      │        │
│  │ Org Name    │ │ Org Name    │ │ Org Name    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      LEAD FORM                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Get Your Free Homepage Mockup                          │ │
│  │                                                         │ │
│  │ [Name]              [Business Name]                    │ │
│  │ [Email]             [Phone]                            │ │
│  │ [Service Type ▼]                                       │ │
│  │ [Message (optional)]                                   │ │
│  │                                                         │ │
│  │           [Get My Free Mockup Now]                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    CALENDLY SECTION                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Ready to Chat? Let's Talk Strategy                    │ │
│  │                                                         │ │
│  │  [📅 Pick]  [📹 Video]  [⏱ 30min]                     │ │
│  │                                                         │ │
│  │         [Schedule Your Free Call]                      │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         FOOTER                               │
│  Company Info    Quick Links    Resources    Contact        │
│  ──────────────────────────────────────────────────────────  │
│  © 2025 Company  [f] [t] [in]                               │
└─────────────────────────────────────────────────────────────┘
```
