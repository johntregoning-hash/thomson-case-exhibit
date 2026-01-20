# V3 "Data Noir" Upgrade - Handover Document

**Date:** 2026-01-20
**Current State:** Rolled back to commit `93a657b` ("Complete V2 Forensic Cleanroom / Data Noir overhaul")
**Live Site:** https://johntregoning-hash.github.io/thomson-case-exhibit/

---

## Summary

An attempt was made to implement V3 upgrades based on a Gemini specification. The implementation caused multiple regressions and had to be rolled back. This document captures the problems encountered and the original V3 specification for a future, more careful implementation.

---

## Current Working Version (V2)

The site is currently deployed from commit `93a657b` with these characteristics:

### Design System
- **Background:** `navy-950` (#060a12)
- **Card backgrounds:** `navy-800/40` with `backdrop-blur-xl`
- **Gold accents:** `#d4af37` (reserved for vindication moments)
- **Typography:** Playfair Display (headlines), IBM Plex Serif (subheadings), Inter (body)

### Key Components Working Correctly
1. **Timeline page** - Scroll tracking with date ticker, phase indicators, smooth animations
2. **Essays page** - Shows all 6 essays with category filtering
3. **Findings page** - 126+ findings with search and filtering
4. **Homepage** - Hero section with case statistics

### Critical File: `.nojekyll`
- Must exist in `public/` directory
- Gets copied to `dist/` during build
- **Required for GitHub Pages** to serve `_astro/` directory (CSS/JS)
- Without it: CSS returns 404, site looks broken

---

## Problems Encountered During V3 Upgrade

### 1. Essay 404 Errors
**Root Cause:** Links used `/essays/...` instead of `/thomson-case-exhibit/essays/...`

**Files Affected:**
- `src/pages/essays.astro`
- `src/pages/essays/[...slug].astro` (if exists)
- `src/components/essays/EssayCard.astro`

**Fix Pattern:**
```astro
// Add at top of frontmatter:
const base = import.meta.env.BASE_URL;

// Change all hrefs from:
href={`/essays/${slug}`}
// To:
href={`${base}/essays/${slug}`}
```

### 2. CSS 404 Errors
**Root Cause:** Missing `.nojekyll` file

**Fix:** Create empty file `public/.nojekyll`

### 3. Timeline Scroll Tracking Broken
**Root Cause:** Data attribute mismatch between `TimelineEventCard.astro` and `ScrollObserver.tsx`

**The Problem:**
- `TimelineEventCard.astro` used: `data-date`, `data-phase`
- `ScrollObserver.tsx` looked for: `data-event-id`, `data-event-date`, `data-event-phase`

**Critical:** The V2 version has these attributes working correctly. Any changes to either file must maintain this contract:
```tsx
// ScrollObserver.tsx expects:
const events = document.querySelectorAll('[data-event-id]');
event.getAttribute('data-event-date')
event.getAttribute('data-event-phase')

// TimelineEventCard.astro must provide:
data-event-id={id}
data-event-date={date}
data-event-phase={phase}
```

### 4. Color Palette Regression
**Attempted Change:** Replace `navy-*` with `slate-950` throughout

**Problem:** The changes were incomplete/inconsistent, causing visual issues

**Recommendation:** If changing color palette:
1. Update `tailwind.config.mjs` color tokens
2. Update `src/styles/global.css` base styles
3. Update ALL component files that use hardcoded hex colors
4. Do NOT change colors in React components without also updating Astro components

### 5. Essays Page Empty
**Problem:** After various fixes, the essays page stopped showing essays

**Likely Cause:** Changes to `src/pages/essays.astro` or `src/data/essays.json` during fix attempts

---

## Original V3 Specification (from Gemini)

The V3 upgrade was intended to create a "Digital Forensic Platform" aesthetic. Key goals:

### Phase 1: "Data Noir" Design System
- Deeper background: `slate-950` (#020617) instead of `navy-950`
- Enhanced glassmorphism with more blur
- Gold reserved strictly for vindication moments
- Micro-interactions on hover

### Phase 2: Essay Reader (MDX)
- Move essays from JSON to MDX content collection
- Add in-page reading experience with:
  - Sticky table of contents
  - Pop-over footnotes
  - Embedded finding cards
  - Reading progress indicator

### Phase 3: Scrollytelling Timeline
- "The Void" effect between key dates (exaggerated spacing)
- Dynamic background tint changes as user scrolls past breach moments
- Sticky date ticker
- Enhanced scroll-triggered animations

### Phase 4: Actor Profile Pages
- Generate "Conduct Reports" for each actor
- Actor-specific timeline of their interactions
- Red/green flagging for breach vs standard of care

---

## Files to Review Before Any Changes

### Design System
- `tailwind.config.mjs` - Color palette definitions
- `src/styles/global.css` - Base styles, component classes

### Timeline (FRAGILE)
- `src/pages/timeline.astro` - Main timeline page
- `src/components/timeline/TimelineEventCard.astro` - Event cards with data attributes
- `src/components/timeline/ScrollObserver.tsx` - Scroll tracking React component
- `src/components/timeline/TimelineSpine.astro` - Left sidebar spine

### Essays
- `src/pages/essays.astro` - Essays index page
- `src/pages/essays/[...slug].astro` - Individual essay pages (if exists)
- `src/components/essays/EssayCard.astro` - Essay card component
- `src/data/essays.json` - Essay data source

### Navigation
- `src/components/navigation/Nav.astro` - Top navigation
- `src/layouts/BaseLayout.astro` - Base layout wrapper

---

## Recommended Approach for Future Upgrade

1. **Create a branch** - Do not work directly on main
2. **Make ONE category of changes at a time** - e.g., just colors, then test; just essays, then test
3. **Test locally with `npm run preview`** before deploying
4. **Verify these things work after each change:**
   - Homepage loads with styling
   - Timeline scroll tracking works
   - Essays page shows all essays
   - Individual essay pages load
   - Findings pages work
   - All navigation links work
5. **Use `${base}` prefix** for ALL internal links (GitHub Pages requirement)
6. **Keep `.nojekyll`** in public directory

---

## Repository Structure

```
thomson-case-exhibit/
├── public/
│   └── .nojekyll          # CRITICAL - do not delete
├── src/
│   ├── components/
│   │   ├── essays/
│   │   ├── findings/
│   │   ├── navigation/
│   │   ├── timeline/      # FRAGILE - test thoroughly
│   │   └── ui/
│   ├── data/
│   │   ├── essays.json
│   │   ├── findings.json
│   │   └── timeline.json
│   ├── layouts/
│   ├── pages/
│   └── styles/
│       └── global.css
├── tailwind.config.mjs
└── astro.config.mjs
```

---

## Current Commit Reference

```
Working: 93a657b "Complete V2 Forensic Cleanroom / Data Noir overhaul - all 8 phases"
```

All broken V3 commits exist in git history but should not be used. If you need to reference what was attempted, look at commits after `93a657b` on the main branch (before the reset).

---

## Contact

User: John Tregoning
Repository: https://github.com/johntregoning-hash/thomson-case-exhibit
