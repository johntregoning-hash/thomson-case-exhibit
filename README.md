# Thomson Case Exhibit Site

A flagship static website for presenting the Thomson clinical negligence case findings, timeline, and evidence.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 3.4
- **Typography:** IBM Plex Serif + Inter
- **Colors:** Navy blue (#1e3a5f) + Gold (#c9a227)

## Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Executive summary, key metrics |
| Findings | `/findings` | Browse 200+ documented findings |
| Vindication | `/vindication` | 22+ specialist refutations |
| Timeline | `/timeline` | 8-phase forensic chronology |
| Evidence | `/evidence` | 7-tier evidence hierarchy |
| Actors | `/actors` | Key individuals and conduct |
| Documents | `/documents` | Key document catalogue |

## Project Structure

```
16_CASE_EXHIBIT_SITE/
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Design tokens
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── common/       # Card, Badge, Button, MetricCard
│   │   ├── navigation/   # Nav, Footer
│   │   ├── home/         # Hero, AtAGlance, FeaturedFinding
│   │   ├── findings/     # FindingCard
│   │   └── timeline/     # PhaseCard
│   ├── pages/
│   │   ├── index.astro
│   │   ├── findings.astro
│   │   ├── vindication.astro
│   │   ├── timeline.astro
│   │   ├── evidence.astro
│   │   ├── actors.astro
│   │   └── documents.astro
│   ├── lib/              # Data parsing functions
│   └── styles/
│       └── global.css    # Tailwind + custom CSS
└── README.md
```

## Deployment (GitHub Pages)

1. Build the site: `npm run build`
2. Push `dist/` folder to GitHub
3. Enable GitHub Pages in repository settings

## Design System

### Colors
- **Navy:** Trust, authority, legal professionalism
- **Gold:** Achievement, vindication, key findings
- **Semantic:** Vindication (emerald), Breach (red), Discrepancy (amber)

### Typography
- **Headlines:** IBM Plex Serif (elegant, authoritative)
- **Body:** Inter (clean, modern, readable)
- **Data/Code:** JetBrains Mono

---

*Thomson v Multiple NHS Defendants - Case Exhibit Site*
