# AMC Group — Engineering Consultancy Website

Official website for **AMC Group**, a civil engineering consulting firm based in Cairo, Egypt.

> *"Crafting Strength, Delivering Excellence."*

---

## Overview

A modern, responsive marketing and lead-generation website built for a professional structural engineering consultancy. Designed to build trust, communicate technical credibility, and convert visitors into project enquiries.

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services overview, differentiators, featured projects, stats, CTA |
| `/about` | About | Company story, mission/vision, core values, team structure |
| `/services` | Services | 7 engineering disciplines with deliverables and client value |
| `/projects` | Projects | Filterable portfolio of 9 sample projects |
| `/careers` | Careers | Culture, 3 accordion job listings, spontaneous application CTA |
| `/contact` | Contact | Enquiry form, contact details, map section |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 6 |
| Icons | Lucide React |
| Animations | CSS transitions + IntersectionObserver (`useInView` hook) |
| Deployment | Vercel |

---

## Design System

### Colour Palette

| Name | Hex | Usage |
|------|-----|-------|
| Navy 900 | `#0d1f3c` | Primary backgrounds, navbar, dark sections |
| Navy 950 | `#071428` | Footer, deepest backgrounds |
| Gold 400 | `#d4a017` | Accent colour, CTAs, dividers, highlights |
| Steel 600 | `#486581` | Body text, secondary content |
| White | `#ffffff` | Cards, light section backgrounds |

### Typography

- **Font:** Inter (Google Fonts) — weights 300, 400, 500, 600, 700, 800, 900
- **Headings:** Bold/Black weight, tight leading
- **Body:** Regular/Medium weight, relaxed leading
- **Labels:** 600 weight, wide tracking, uppercase

---

## Project Structure

```
amc-group/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Site-wide footer with links and contact info
│   │   ├── Navbar.jsx         # Sticky navbar — transparent on hero, solid on scroll
│   │   ├── PageHero.jsx       # Reusable inner-page hero section
│   │   ├── ScrollToTop.jsx    # Scroll-to-top on route change
│   │   └── SectionWrapper.jsx # Scroll-triggered fade-in section wrapper
│   ├── hooks/
│   │   └── useInView.js       # IntersectionObserver hook for scroll animations
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                # Router + layout shell
│   ├── index.css              # Tailwind directives + global styles + component classes
│   └── main.jsx               # React DOM entry point
├── index.html                 # SEO meta tags, OG tags, font preconnect
├── tailwind.config.js         # Custom colour palette, fonts, animations
├── vite.config.js
├── postcss.config.js
└── vercel.json                # Vercel deployment config with SPA rewrites
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `amc-group` repository
4. Vercel auto-detects Vite — click **Deploy**

No additional configuration needed. `vercel.json` handles SPA routing automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## Customisation Checklist

Before going live, update the following placeholders:

- [ ] **Contact details** — phone and email in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- [ ] **Office address** — full street address in Footer and Contact
- [ ] **Team members** — real names, titles, and photos in `src/pages/About.jsx`
- [ ] **Project images** — replace `Building2` icon placeholders with real photography
- [ ] **Contact form** — wire `handleSubmit` in `src/pages/Contact.jsx` to a backend/email service (Formspree, EmailJS, or custom API)
- [ ] **Google Maps** — replace the map placeholder in Contact with a real `<iframe>` embed
- [ ] **LinkedIn URL** — verify the URL in `src/components/Footer.jsx`
- [ ] **Domain** — configure your custom domain in the Vercel dashboard

---

## Services Covered

1. Structural Design (RC, steel, masonry, timber)
2. Construction Supervision
3. Quality Control / Quality Assurance
4. Structural Repair & Rehabilitation
5. Forensic Structural Engineering
6. Value Engineering
7. Real Estate Appraisal

---

## License

&copy; AMC Group. All rights reserved.
