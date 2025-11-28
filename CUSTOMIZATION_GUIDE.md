# Website Customization Guide

This guide will help you customize your agency website without needing to know code.

## Quick Start: What You Can Change

### 1. Contact Information (Footer)
**File:** `src/components/Footer.tsx`

**Find and replace:**
- `hello@youragency.com` → Your actual email
- `(555) 123-4567` → Your phone number
- `ngo@youragency.com` → Your NGO program email

### 2. Company Name
**File:** `src/components/Footer.tsx`

**Find and replace:**
- `Local Business Digital` → Your company name

### 3. Pricing Plans
**File:** `src/components/Pricing.tsx`

**How to edit:**
1. Find `const websitePlans = [`
2. Change the `price` values (e.g., `"$299"` → `"$399"`)
3. Add/remove features in the `features` arrays
4. Change delivery times

**Example:**
```typescript
{
  name: "Basic",
  price: "$399",  // ← Change this
  description: "Perfect for getting started online",
  features: [
    "5-page website",  // ← Edit these
    "Mobile responsive design",
    // Add more features here
  ],
}
```

### 4. Service Descriptions
**File:** `src/components/Services.tsx`

**How to edit:**
1. Find `const services = [`
2. Change `title`, `description`, and `features` for each service

### 5. Portfolio Items
**File:** `src/components/Portfolio.tsx`

**How to edit:**
1. Find `const portfolioItems = [`
2. Change business names, descriptions, and results
3. To replace images:
   - Add new images to `src/assets/` folder
   - Update the import at the top
   - Change the `image` property

**Example:**
```typescript
{
  title: "Your Client Name",  // ← Change this
  category: "Your Industry",  // ← Change this
  description: "What you built for them",  // ← Change this
  image: portfolio1,  // Keep this to use existing image
  results: "+200% more leads",  // ← Change this
}
```

### 6. Testimonials
**File:** `src/components/Testimonials.tsx`

**How to edit:**
1. Find `const testimonials = [`
2. Replace organization names, quotes, and author info
3. Change the emoji logos (`🏥`, `🌱`, `📚`)

### 7. Hero Headlines
**File:** `src/components/Hero.tsx`

**How to edit:**
1. Find `const headlines = [`
2. Edit the 3 headline options
3. Change subtitles

**Example:**
```typescript
{
  id: 1,
  title: "Your Custom Headline Here",  // ← Change this
  subtitle: "Your supporting text here",  // ← Change this
}
```

### 8. Meta Tags (SEO)
**File:** `index.html`

**Find and replace:**
- `<title>` content → Your custom title
- `<meta name="description">` → Your custom description
- Update keywords for your specific niche

---

## Color Scheme Changes

### Want Different Colors?
**File:** `src/index.css`

**Find the `:root` section and change these values:**

```css
/* Current: Teal + Coral */
--primary: 195 85% 45%;  /* Teal → Change first number (hue) */
--accent: 15 85% 60%;    /* Coral → Change first number (hue) */
```

**Color Hue Reference:**
- Red: 0°
- Orange: 30°
- Yellow: 60°
- Green: 120°
- Cyan: 180°
- Blue: 240°
- Purple: 280°
- Pink: 320°

**Example: Change to Blue + Orange**
```css
--primary: 210 85% 50%;  /* Blue */
--accent: 30 90% 60%;    /* Orange */
```

---

## Images

### Replacing Images
1. Add your image to `src/assets/` folder
2. In the component file (e.g., `Hero.tsx`), update the import:

```typescript
// Old:
import heroBg from "@/assets/hero-bg.jpg";

// New:
import heroBg from "@/assets/your-new-image.jpg";
```

3. Make sure image files are:
   - **Hero:** 1920x1080px (16:9)
   - **Portfolio:** 800x600px (4:3)
   - Optimized/compressed for web

---

## Integrations

### Calendly Booking
**File:** `src/components/CalendlySection.tsx`

**Find:**
```typescript
const openCalendly = () => {
  alert("Calendly booking would open here...");
}
```

**Replace with:**
```typescript
const openCalendly = () => {
  window.open('https://calendly.com/your-link', '_blank');
}
```

### Email Form Submissions
**File:** `src/components/LeadForm.tsx`

**Options:**
1. **Formspree.io** (Easy, free for low volume)
2. **EmailJS** (No backend needed)
3. **Zapier** (Connects to many CRMs)

**Example with Formspree:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    toast({ title: "Success!", description: "We'll be in touch soon!" });
  }
};
```

### Google Analytics
**File:** `index.html`

**Add before `</head>`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## PDF Pricing Sheet

### Creating the PDF
**File:** `src/components/Pricing.tsx`

**Options:**

1. **Manual PDF:** Create in Canva/Figma, upload to `public/pricing.pdf`
2. **Generate on the fly:** Use a library like `jspdf` or `react-pdf`

**Option 1 - Simple (use a pre-made PDF):**
```typescript
const handleDownloadPDF = () => {
  window.open('/pricing.pdf', '_blank');
};
```

**Option 2 - Dynamic (requires additional setup):**
```typescript
// Install: npm install jspdf
import jsPDF from 'jspdf';

const handleDownloadPDF = () => {
  const doc = new jsPDF();
  doc.text("Pricing Sheet", 20, 20);
  // Add your pricing content here
  doc.save("pricing.pdf");
};
```

---

## Mobile Responsiveness

The site is already fully responsive! Test on:
- Desktop (1920px+)
- Tablet (768px-1024px)
- Mobile (320px-767px)

**Key classes for responsive design:**
- `md:grid-cols-3` → 3 columns on tablet+
- `lg:text-7xl` → Large text on desktop
- `sm:flex-row` → Row layout on small+

---

## Advanced Customizations

### Adding a Navigation Bar
**File:** `src/components/Hero.tsx`

**Add above the hero content:**
```typescript
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
  <div className="container flex justify-between items-center py-4">
    <span className="text-2xl font-bold">Your Logo</span>
    <div className="flex gap-6">
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#lead-form">Contact</a>
    </div>
  </div>
</nav>
```

### Adding More Pages
**File:** `src/App.tsx`

**Add new routes:**
```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

Then create new page files in `src/pages/`

---

## Testing Checklist

Before launching, test:

- [ ] All links work (especially Calendly and email)
- [ ] Form submission works
- [ ] Pricing PDF downloads
- [ ] Mobile view looks good on real devices
- [ ] Images load quickly
- [ ] Contact info is correct
- [ ] SEO meta tags are accurate
- [ ] No console errors (press F12 in browser)

---

## Common Issues & Fixes

### Issue: Colors look wrong
**Fix:** Make sure you're using HSL values in `src/index.css`, not RGB

### Issue: Form doesn't submit
**Fix:** Check browser console (F12) for errors. You need to integrate with an email service (see "Email Form Submissions" above)

### Issue: Image doesn't show
**Fix:** Make sure:
1. Image is in `src/assets/` folder
2. Import is correct at top of file
3. File extension matches (`.jpg` vs `.png`)

### Issue: Calendly doesn't open
**Fix:** Replace the alert with your actual Calendly link (see "Calendly Booking" above)

---

## Getting Help

### Development
- **React docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Shadcn/ui:** https://ui.shadcn.com

### Free Tools
- **Canva:** Create images/PDFs
- **TinyPNG:** Compress images
- **Google PageSpeed:** Test performance
- **Formspree:** Handle form submissions

---

## Launch Checklist

### Pre-Launch
1. Replace all placeholder content
2. Add real contact information
3. Connect Calendly link
4. Set up form submission handler
5. Create/upload pricing PDF
6. Test on mobile devices
7. Optimize images (compress)
8. Add Google Analytics
9. Update meta tags

### Launch Day
1. Deploy to hosting (Vercel, Netlify, etc.)
2. Connect custom domain
3. Set up SSL certificate (usually automatic)
4. Submit to Google Search Console
5. Test everything again on live site

### Post-Launch
1. Monitor form submissions
2. Check analytics weekly
3. Respond to inquiries quickly
4. Update portfolio with new projects
5. Add customer testimonials
6. Consider starting a blog

---

## Need More Help?

This template is designed to be easy to customize, but if you need assistance:

1. **Simple changes:** Follow this guide step-by-step
2. **Technical issues:** Search the error message on Google
3. **Custom features:** Consider hiring a developer on Upwork or Fiverr
4. **Design tweaks:** Tools like Canva can help with graphics

Remember: Start small! Make one change at a time and test it before moving to the next.

---

**Good luck with your agency website! 🚀**
