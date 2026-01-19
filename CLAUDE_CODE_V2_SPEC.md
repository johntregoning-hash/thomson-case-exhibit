# THOMSON CASE EXHIBIT - V2 OVERHAUL SPECIFICATION
## For Claude Code Implementation

**Date:** 19 January 2026  
**Repository:** `johntregoning-hash/thomson-case-exhibit`  
**Live Site:** https://johntregoning-hash.github.io/thomson-case-exhibit/  
**Framework:** Astro 4.16.7 + React + Tailwind CSS

---

## EXECUTIVE BRIEF

This is a **Digital Legal Exhibit** for a clinical negligence case (Thomson v Multiple NHS Defendants). The site documents 359+ forensic findings, evidence hierarchies, and a causation chain demonstrating an 11-month diagnostic delay for vertebral fractures and systematic psychiatric mislabelling of physical symptoms.

**The stakes are real. The evidence is damning. The design must match.**

Current state: Functional but generic. Target state: Award-winning forensic storytelling platform that makes the evidence impossible to ignore.

---

## PART 1: DESIGN PHILOSOPHY

### The Aesthetic: "Forensic Cleanroom"

Imagine a dark room where evidence is illuminated on a lightbox. This is **Data Noir** - not just dark mode, but deep desaturated blues where critical data points glow with authority.

**Design Language Blend:**
- *The New York Times* interactive features (scrollytelling, data journalism)
- *Linear.app* / *Raycast* UI precision (command palette, instant navigation)
- Legal brief authority (serif headlines, evidence card styling)

### Colour System: "Legal Palette"

```
Background Layers:
- navy-950: #0a0f1a (deepest background)
- navy-900: #0d1526 (card backgrounds)
- navy-800: #1a2744 (elevated surfaces)
- navy-700: #2a3a5c (borders, dividers)

Text:
- white: #ffffff (primary headlines)
- navy-200: #c8d4e8 (body text)
- navy-400: #7a8ba8 (secondary/meta)
- navy-500: #5a6b8a (captions)

Semantic Accent:
- gold-500: #d4af37 (VINDICATION - reserved for wins)
- gold-400: #e5c158 (gold hover states)
- breach-500: #ef4444 (BREACH markers)
- breach-400: #f87171 (breach hover)
- vindication-500: #22c55e (VERIFIED status)
- causation-500: #3b82f6 (causation links)
```

**Rule:** Gold (#d4af37) is ONLY for vindication moments. Overuse dilutes impact.

### Typography Scale

```
Headlines (Authority):
- Font: Playfair Display or Domine (serif)
- Hero: 4xl-5xl, font-bold
- Section: 2xl-3xl, font-semibold
- Card titles: xl, font-semibold

Body (Precision):
- Font: Inter or Geist (sans-serif)
- Body: base-lg, leading-relaxed
- Data: sm, font-mono for IDs/codes
- Captions: xs, uppercase tracking-wider
```

---

## PART 2: TECHNICAL ARCHITECTURE

### Current File Structure (to refactor)

```
src/
├── components/
│   ├── common/          # Badge, Button, Card
│   ├── findings/        # FindingCard
│   ├── navigation/      # Nav, Footer
│   └── timeline/        # TimelineEvent
├── data/
│   ├── findings.json    # 204 findings (subset of 359)
│   ├── actors.json      # Key personnel
│   ├── timeline.json    # Chronological events
│   └── essays.json      # 6 foundational essays
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── findings.astro
│   ├── findings/[id].astro
│   ├── essays.astro
│   ├── essays/[id].astro
│   ├── timeline.astro
│   ├── actors.astro
│   ├── evidence.astro
│   ├── vindication.astro
│   └── documents.astro
└── styles/
    └── global.css
```

### Target Architecture (V2)

```
src/
├── components/
│   ├── ui/              # Design system primitives
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── GlassCard.astro      # NEW: Glassmorphism cards
│   │   ├── CommandPalette.tsx   # NEW: Cmd+K search
│   │   └── StatusIndicator.astro
│   ├── findings/
│   │   ├── FindingCard.astro    # Redesigned as evidence card
│   │   ├── FindingDetail.astro
│   │   └── FindingNetwork.tsx   # NEW: Connection visualization
│   ├── timeline/
│   │   ├── TimelineSpine.astro  # NEW: Scrollytelling spine
│   │   ├── TimelineEvent.astro
│   │   └── ScrollProgress.tsx   # NEW: Date ticker
│   ├── actors/
│   │   ├── ActorCard.astro
│   │   └── ActorNetwork.tsx     # NEW: Relationship graph
│   ├── navigation/
│   │   ├── Nav.astro            # Redesigned with blur
│   │   ├── Footer.astro
│   │   └── Breadcrumb.astro
│   └── home/
│       ├── HeroBanner.astro     # NEW: Impact statement
│       ├── BentoGrid.astro      # NEW: Dashboard layout
│       ├── QuickStats.astro
│       └── PriorityFindings.astro
├── content/                      # NEW: Astro Content Collections
│   ├── findings/
│   │   └── *.md                 # Each finding as markdown
│   ├── actors/
│   │   └── *.md
│   ├── essays/
│   │   └── *.md
│   └── config.ts                # Zod schemas
├── layouts/
│   ├── BaseLayout.astro
│   └── DocumentLayout.astro     # NEW: For essays/long-form
├── lib/
│   ├── search.ts                # NEW: Fuzzy search logic
│   ├── connections.ts           # NEW: Finding-Actor-Doc relationships
│   └── utils.ts
├── pages/
│   └── [...as before, but with View Transitions]
└── styles/
    ├── global.css
    └── animations.css           # NEW: Scroll-triggered animations
```

### Key Technical Requirements

1. **Astro View Transitions API**
   - Every page navigation should feel instant
   - Morphing elements (finding cards, actor photos)
   - No full page reloads

2. **Content Collections with Zod**
   - Type-safe data layer
   - Schema validation for all 359 findings
   - Easier filtering and relationships

3. **Command Palette (Cmd+K)**
   - React component with cmdk library
   - Fuzzy search across Findings, Actors, Dates
   - Keyboard navigation

4. **Scrollytelling Timeline**
   - Intersection Observer API
   - Left: Date ticker advancing as user scrolls
   - Right: Evidence cards sliding in
   - Key moments highlighted (seizure, fracture discovery, vindication)

5. **Glassmorphism Cards**
   - `backdrop-blur-xl`
   - Subtle border gradients
   - Depth through layering

---

## PART 3: CASE CONTEXT (Critical for Content)

### The Narrative Arc

**Protagonist:** John Thomson  
**Antagonists:** Former GP practice (Grove Park Terrace under Clive Polles), multiple NHS providers  
**Timeline:** December 2021 → Present

**The Core Story:**

1. **October 2021:** Pregabalin abruptly reduced (600mg → 100mg) against BNF guidance
2. **December 2021:** First seizure, vertebral fractures sustained
3. **October 2022:** MRI finally confirms T5-T8 fractures - **11-MONTH DELAY**
4. **January 2023:** Somatoform Pain Disorder covertly applied during phone call about opioids
5. **July 2025:** Current GP removes somatoform: "there were clear causes for his pain" - **VINDICATION**

### Key Numbers for Dashboard

| Metric | Value | Significance |
|--------|-------|--------------|
| Total Findings | 359+ | Forensically documented |
| Verified | 180+ | Confirmed by independent evidence |
| Vindication Findings | 27+ | Independent specialists refuting labels |
| Breach Findings | 30+ | Potential Bolam/Bolitho violations |
| Diagnostic Delay | 11 months | T5-T8 fractures undiagnosed |
| TOS Documentation | 6+ years | Objective vascular pathology |

### Evidence Hierarchy (Visual Pyramid)

```
        ┌─────────────────┐
        │   IMAGING       │  ← MRI, CT, Doppler (HIGHEST)
        │   (Tier 1)      │
        ├─────────────────┤
        │   SPECIALIST    │  ← Karunaratne, Gorrie letters
        │   LETTERS (T2)  │
        ├─────────────────┤
        │  AMBULANCE/A&E  │  ← ePCR F250, third-party
        │     (Tier 3)    │
        ├─────────────────┤
        │    PHARMACY     │  ← Dispensing records
        │     (Tier 4)    │
        ├─────────────────┤
        │ INDEPENDENT     │  ← MSK physio, Pain Clinic
        │ CLINICIANS (T5) │
        ├─────────────────┤
        │   GP ENTRIES    │  ← LOWEST RELIABILITY
        │     (Tier 6)    │     Requires verification
        └─────────────────┘
```

### Key Actors

**Vindication (Allies):**
- **Dr Karunaratne** - Epilepsy specialist, "medical explanations found"
- **Dr Gorrie** - Current GP, removed somatoform
- **MSK Physio Sumeer Bhamm** - Documented dismissal PRE-seizure

**Problem Actors:**
- **Clive Polles** - Practice Manager, clinical decisions without authority
- **Dr Bulale Ali** - Applied somatoform without assessment
- **Dr Sian Morgan** - "Opiate addiction" claim without toxicology

### Finding Categories (Colour-Coded)

| Category | Colour | Count |
|----------|--------|-------|
| VINDICATION | Green | 27+ |
| BREACH | Red | 30+ |
| WITNESS | Blue | 15+ |
| CAUSATION | Blue | 8+ |
| DISCREPANCY | Orange | 4 |
| NEUROLOGICAL | Blue | 12 |
| MEDICATION | Red | 15 |
| FND/SOMATOFORM | Red | 8 |
| QUANTUM | Purple | 6 |
| PROCEDURAL | Grey | 7 |

---

## PART 4: PAGE-BY-PAGE SPECIFICATIONS

### 1. HOME PAGE (Complete Redesign)

**Hero Section:**
- Full-width, edge-to-edge
- Background: Subtle gradient from navy-950 to navy-900
- Headline: "Thomson v NHS Providers" in Playfair Display
- Subheadline: "A Clinical Negligence Case Documented"
- Key stat callout: "11-Month Diagnostic Delay | 359+ Findings | Independent Vindication"

**Bento Grid Dashboard:**
```
┌─────────────────┬─────────────┬─────────────┐
│                 │   VERIFIED  │   BREACH    │
│  CORE TIMELINE  │    180+     │    30+      │
│   (Large card)  │             │             │
├─────────────────┼─────────────┴─────────────┤
│  VINDICATION    │     PRIORITY FINDINGS     │
│      27+        │   (Scrollable list)       │
├─────────────────┼───────────────────────────┤
│  CAUSATION      │     LATEST UPDATES        │
│   CHAIN         │                           │
└─────────────────┴───────────────────────────┘
```

**Quick Navigation:**
- Large buttons: "Explore Findings" | "View Timeline" | "Read Essays"

### 2. TIMELINE PAGE (Scrollytelling)

**Structure:**
```
┌──────────────────────────────────────────────┐
│  DATE TICKER                                 │
│  ▼ December 2021                             │
├────────────┬─────────────────────────────────┤
│            │                                 │
│  VERTICAL  │    EVIDENCE CARD               │
│  SPINE     │    (Slides in on scroll)       │
│            │                                 │
│    ●───────│    "23 Dec 2021: First Seizure"│
│    │       │    Ambulance ePCR F250         │
│    │       │    [View Finding F023]         │
│    │       │                                 │
│    ●───────│    "05 Jan 2023: Somatoform    │
│    │       │    Applied Covertly"           │
│    │       │    [BREACH INDICATOR]          │
│            │                                 │
└────────────┴─────────────────────────────────┘
```

**Key Moments (Highlighted):**
1. 19 Dec 2021 - Medication refused by Polles
2. 23 Dec 2021 - First seizure (ANCHOR EVENT)
3. 16 Oct 2022 - MRI confirms fractures (DELAY END)
4. 05 Jan 2023 - Somatoform applied covertly (BREACH)
5. 22 Jul 2025 - Somatoform removed (VINDICATION)

### 3. FINDINGS PAGE

**Filters Bar (Sticky):**
- Category pills with counts
- Evidence Status filter
- Search input
- Sort: Priority | Date | ID

**Grid Layout:**
- Cards styled as physical evidence folders
- File tab styling at top with Finding ID
- Hover: Reveal related Actor badges
- Click: Expand or navigate to detail

**Individual Finding Page (`/findings/[id]`):**
- Full evidence breakdown
- Related findings network visualization
- Link to source documents
- Timeline position indicator

### 4. ACTORS PAGE

**Two Views:**
1. **Grid View:** Cards with role, key actions, finding count
2. **Network View:** Interactive graph showing relationships

**Actor Detail:**
- All findings tagged with this actor
- All documents mentioning them
- Timeline of their involvement
- Verdict: VINDICATION | PROBLEM | NEUTRAL

### 5. ESSAYS PAGE

**Magazine-style Layout:**
- Large featured essay at top
- Two-column grid for remaining
- Reading time estimates
- Key findings preview

**Individual Essay Page:**
- Long-form document layout
- Sidebar: Table of contents, key findings
- Pull quotes for critical statements

### 6. VINDICATION PAGE (Flagship)

**Purpose:** This is the "victory lap" - showcasing every independent specialist who refuted the psychiatric framing.

**Structure:**
- Hero: "Medical Explanations Have Been Found"
- Quote Wall: Key vindication statements
- Timeline: When each vindication occurred
- Evidence grid: Supporting imaging and letters

---

## PART 5: IMPLEMENTATION PHASES

### Phase 1: Foundation (Session 1)
1. Update `tailwind.config.mjs` with Legal Palette tokens
2. Install fonts (Playfair Display, Inter)
3. Create base design system components (GlassCard, StatusIndicator)
4. Implement View Transitions in BaseLayout

### Phase 2: Navigation & Home (Session 2)
1. Redesign Nav with blur, command palette trigger
2. Build Command Palette component
3. Build Home page with Bento Grid
4. Create HeroBanner component

### Phase 3: Timeline Scrollytelling (Session 3)
1. Build TimelineSpine component
2. Implement Intersection Observer logic
3. Create scroll-triggered animations
4. Add date ticker

### Phase 4: Findings Overhaul (Session 4)
1. Redesign FindingCard as evidence card
2. Implement finding network visualization
3. Add relationship connections
4. Refactor to Content Collections (optional)

### Phase 5: Polish & Deploy (Session 5)
1. Actors page network view
2. Essays magazine layout
3. Vindication page hero
4. Performance optimization
5. Final deployment

---

## PART 6: THE MEGA-PROMPT FOR CLAUDE CODE

**Copy this entire block to start the session:**

---

I need to perform a complete 'V2' overhaul of the Thomson Case Exhibit website. This is a Digital Legal Exhibit for a clinical negligence case - the design must convey authority, precision, and the gravity of the evidence.

**The Repository:** `johntregoning-hash/thomson-case-exhibit` (Astro + React + Tailwind)

**Design Aesthetic: "Forensic Cleanroom" / "Data Noir"**
- Deep midnight blues (#0a192f range) for backgrounds
- Crisp white text, high contrast
- Metallic gold (#d4af37) ONLY for vindication moments
- Glassmorphism for data cards (backdrop-blur, subtle borders)
- Typography: Playfair Display (headlines) + Inter (body)

**Technical Requirements:**
1. Implement Astro View Transitions API for instant, morphing navigation
2. Build a Command Palette (Cmd+K) using cmdk for instant search across Findings, Actors, Dates
3. Create a Scrollytelling Timeline - vertical spine with scroll-triggered evidence cards
4. Use Bento Grid layout for the dashboard home page
5. Design Finding Cards to look like physical evidence folder tabs

**The Case Context:**
- 359+ forensic findings documenting an 11-month diagnostic delay
- Key narrative: GP psychiatric labelling dismissed physical symptoms
- Vindication: Independent specialists later confirmed "medical explanations found"
- Evidence hierarchy: Imaging (highest) → Specialist Letters → Ambulance Records → ... → GP Entries (lowest, requires verification)

**Phase 1 - Let's Start Here:**
1. Read the current codebase structure
2. Update tailwind.config.mjs with the Legal Palette colour tokens
3. Rebuild the Navigation component with blur effect and command palette trigger
4. Redesign the Home Page with the Bento Grid dashboard layout

Show me your analysis of the current state and your plan before we begin implementation.

---

## APPENDIX: Data Sync Considerations

The repository is synced from `/Users/johntregoning/My Drive/Thomson_Case_Repository/16_CASE_EXHIBIT_SITE/`.

**Data Source Files (keep updated):**
- `src/data/findings.json` - Should reflect FINDINGS_REGISTRY.md
- `src/data/actors.json` - Should reflect ACTORS_REGISTRY.md
- `src/data/timeline.json` - Should reflect MASTER_FORENSIC_CHRONOLOGY.md
- `src/data/essays.json` - Should reflect foundational documents in 03_LEGAL_FRAMEWORK/

**Current Findings Gap:** The JSON contains 204 findings but the registry has 359+. This should be addressed.

---

*End of Specification Document*
