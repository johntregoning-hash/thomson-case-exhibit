# COPY THIS ENTIRE BLOCK INTO CLAUDE CODE
# Thomson Case Exhibit V2 Overhaul - Mega Prompt

---

I need to perform a complete 'V2' overhaul of the Thomson Case Exhibit website. This is a **Digital Legal Exhibit** for a clinical negligence case (Thomson v Multiple NHS Defendants). The design must convey authority, precision, and the gravity of 359+ forensic findings.

**Repository:** `johntregoning-hash/thomson-case-exhibit`  
**Stack:** Astro 4.16.7 + React + Tailwind CSS  
**Live:** https://johntregoning-hash.github.io/thomson-case-exhibit/

---

## DESIGN AESTHETIC: "Forensic Cleanroom" / "Data Noir"

Blend *NYT interactive journalism* with *Linear.app* UI precision.

**Colour Palette:**
- Background: Deep midnight blues (#0a192f, #0d1526, #1a2744)
- Text: Crisp white (#ffffff), navy-200 (#c8d4e8) for body
- Accent: Metallic gold (#d4af37) **ONLY** for vindication/wins - overuse dilutes impact
- Breach: Red (#ef4444) for breach markers
- Verified: Green (#22c55e) for verified status

**Typography:**
- Headlines: Playfair Display or Domine (serif) - legal authority
- Body: Inter or Geist (sans-serif) - technical precision
- Data: Monospace for Finding IDs (F001, F323, etc.)

**Visual Effects:**
- Glassmorphism cards (backdrop-blur-xl, subtle gradient borders)
- Depth through layered surfaces
- Subtle "glow" on critical data points

---

## TECHNICAL REQUIREMENTS

1. **Astro View Transitions API** - Every navigation feels instant, morphing elements between pages
2. **Command Palette (Cmd+K)** - React component using `cmdk` library for instant search across Findings, Actors, Dates
3. **Scrollytelling Timeline** - Vertical spine with Intersection Observer, scroll-triggered evidence cards sliding in, date ticker advancing
4. **Bento Grid Dashboard** - Home page with asymmetric grid showing key stats
5. **Evidence Card Design** - Finding cards styled as physical evidence folder tabs

---

## CASE CONTEXT (Critical)

**The Story:**
- October 2021: Pregabalin abruptly reduced against BNF guidance
- 23 December 2021: First seizure, vertebral fractures sustained
- October 2022: MRI confirms T5-T8 fractures — **11-MONTH DELAY**
- January 2023: Somatoform Pain Disorder covertly applied during phone call
- July 2025: Current GP removes somatoform: "there were clear causes for his pain" — **VINDICATION**

**Key Numbers:**
- 359+ Total Findings
- 180+ Verified
- 30+ Breach
- 27+ Vindication
- 11-month diagnostic delay

**Evidence Hierarchy (Visual Pyramid):**
```
IMAGING (MRI, CT) ← HIGHEST
SPECIALIST LETTERS
AMBULANCE/A&E RECORDS
PHARMACY RECORDS
INDEPENDENT CLINICIANS
GP ENTRIES ← LOWEST (requires verification)
```

---

## PHASE 1: START HERE

Please:
1. **Read the current codebase** - Analyse `/src` structure, components, data files
2. **Update tailwind.config.mjs** - Add Legal Palette colour tokens as specified
3. **Install fonts** - Add Playfair Display and Inter via Google Fonts or local
4. **Rebuild Navigation** - Blur effect, elevated, command palette trigger (Cmd+K hint)
5. **Redesign Home Page** - Bento Grid dashboard with:
   - Hero: "Thomson v NHS Providers" headline, key stats
   - Grid: Timeline preview, Verified count, Breach count, Vindication count, Priority Findings list, Latest updates

**Show me your analysis of the current state and your implementation plan before coding.**

---

## REFERENCE DOCUMENT

Full specification with page-by-page details, component structure, and implementation phases is at:
`/CLAUDE_CODE_V2_SPEC.md` in the repository root.

Read it for:
- Complete colour system
- Typography scale
- Target file structure
- All page specifications
- Scrollytelling timeline details
- Actor network view concept
- Evidence card design specs

---

*The stakes are real. The evidence is damning. The design must match.*
