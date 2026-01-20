/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, r as renderComponent } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$Badge } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$EvidencePyramid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EvidencePyramid;
  const { tiers, compact = false } = Astro2.props;
  const tierColors = {
    gold: {
      bg: "bg-gradient-to-br from-gold-500/20 via-gold-500/10 to-amber-600/20",
      border: "border-gold-500/40",
      glow: "shadow-gold-500/20",
      text: "text-gold-400",
      badge: "bg-gold-500/20 text-gold-400 border-gold-500/30"
    },
    vindication: {
      bg: "bg-gradient-to-br from-green-500/15 via-green-500/5 to-emerald-600/15",
      border: "border-green-500/30",
      glow: "shadow-green-500/15",
      text: "text-green-400",
      badge: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    causation: {
      bg: "bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-violet-600/15",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/15",
      text: "text-purple-400",
      badge: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    breach: {
      bg: "bg-gradient-to-br from-red-500/15 via-red-500/5 to-rose-600/15",
      border: "border-red-500/30",
      glow: "shadow-red-500/15",
      text: "text-red-400",
      badge: "bg-red-500/20 text-red-400 border-red-500/30"
    },
    default: {
      bg: "bg-gradient-to-br from-navy-700/50 via-navy-700/30 to-navy-800/50",
      border: "border-navy-600/40",
      glow: "shadow-navy-500/10",
      text: "text-navy-300",
      badge: "bg-navy-700/50 text-navy-300 border-navy-600/30"
    }
  };
  const getTierStyle = (color) => tierColors[color] || tierColors.default;
  return renderTemplate`${maybeRenderHead()}<div class="evidence-pyramid relative py-8"${addAttribute(compact, "data-compact")} data-astro-cid-oesfqh62> <!-- 3D Perspective Container --> <div class="pyramid-container relative max-w-4xl mx-auto" style="perspective: 1200px;" data-astro-cid-oesfqh62> <!-- Vertical Guide Lines --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-oesfqh62> <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-navy-600/20 to-red-500/30 transform -translate-x-1/2" data-astro-cid-oesfqh62></div> </div> <!-- Pyramid Tiers --> <div class="relative space-y-2" data-astro-cid-oesfqh62> ${tiers.map((tier, index) => {
    const style = getTierStyle(tier.color);
    const widthPercent = 35 + index * 9.5;
    const offset = index * 2;
    return renderTemplate`<div class="pyramid-tier group relative mx-auto cursor-pointer"${addAttribute(`width: ${widthPercent}%; animation-delay: ${index * 100}ms;`, "style")}${addAttribute(tier.tier, "data-tier")} data-astro-cid-oesfqh62> <!-- 3D Shadow Layer --> <div class="absolute inset-0 rounded-xl bg-black/20 blur-md transform translate-y-1 translate-x-1"${addAttribute(`transform: translateY(${4 + offset}px) translateX(${2}px);`, "style")} data-astro-cid-oesfqh62></div> <!-- Main Tier Block --> <div${addAttribute([
      "relative rounded-xl border backdrop-blur-xl transition-all duration-300",
      "group-hover:scale-[1.02] group-hover:z-10 group-hover:shadow-2xl",
      style.bg,
      style.border,
      `shadow-lg ${style.glow}`,
      compact ? "p-3" : "p-4 sm:p-5"
    ], "class:list")} data-astro-cid-oesfqh62> <!-- Tier Content --> <div class="flex items-center justify-between gap-4" data-astro-cid-oesfqh62> <!-- Left: Tier Number + Name --> <div class="flex items-center gap-3 sm:gap-4" data-astro-cid-oesfqh62> <!-- Tier Number Badge --> <div${addAttribute([
      "flex-shrink-0 rounded-lg flex items-center justify-center font-display font-bold border",
      style.badge,
      compact ? "w-10 h-10 text-lg" : "w-12 h-12 sm:w-14 sm:h-14 text-xl sm:text-2xl"
    ], "class:list")} data-astro-cid-oesfqh62> ${tier.tier} </div> <div class="min-w-0" data-astro-cid-oesfqh62> <h3${addAttribute([
      "font-display font-semibold text-white truncate",
      compact ? "text-sm" : "text-sm sm:text-base"
    ], "class:list")} data-astro-cid-oesfqh62> ${tier.name} </h3> <p${addAttribute([
      "text-navy-400 hidden sm:block truncate",
      compact ? "text-xs" : "text-xs sm:text-sm"
    ], "class:list")} data-astro-cid-oesfqh62> ${tier.reliability} </p> </div> </div> <!-- Right: Count Badge --> <div${addAttribute([
      "flex-shrink-0 px-3 py-1.5 rounded-lg font-mono font-semibold border",
      style.badge,
      compact ? "text-xs" : "text-sm"
    ], "class:list")} data-astro-cid-oesfqh62> ${tier.count} </div> </div> <!-- Expanded Details (shown on hover) --> ${!compact && renderTemplate`<div class="tier-details mt-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:mt-4 group-hover:max-h-40" data-astro-cid-oesfqh62> <p class="text-sm text-navy-400 mb-3" data-astro-cid-oesfqh62>${tier.description}</p> ${tier.examples && tier.examples.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2" data-astro-cid-oesfqh62> ${tier.examples.slice(0, 3).map((example) => renderTemplate`<span class="text-xs px-2 py-1 rounded bg-navy-900/50 text-navy-300 border border-navy-700/50" data-astro-cid-oesfqh62> ${example.length > 35 ? example.substring(0, 32) + "..." : example} </span>`)} ${tier.examples.length > 3 && renderTemplate`<span class="text-xs px-2 py-1 rounded bg-navy-900/50 text-navy-500" data-astro-cid-oesfqh62>
+${tier.examples.length - 3} more
</span>`} </div>`} </div>`} </div> <!-- Connecting Line to Next Tier --> ${index < tiers.length - 1 && renderTemplate`<div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-0" data-astro-cid-oesfqh62> <div class="w-px h-4 bg-gradient-to-b from-navy-600/50 to-transparent" data-astro-cid-oesfqh62></div> </div>`} </div>`;
  })} </div> <!-- Apex Label --> <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center" data-astro-cid-oesfqh62> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20" data-astro-cid-oesfqh62> <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oesfqh62> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" data-astro-cid-oesfqh62></path> </svg> <span class="text-xs font-medium text-gold-400" data-astro-cid-oesfqh62>Highest Reliability</span> </div> </div> <!-- Base Label --> <div class="text-center mt-6" data-astro-cid-oesfqh62> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20" data-astro-cid-oesfqh62> <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oesfqh62> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-oesfqh62></path> </svg> <span class="text-xs font-medium text-red-400" data-astro-cid-oesfqh62>Requires Verification</span> </div> </div> </div> </div>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/evidence/EvidencePyramid.astro", void 0);

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$EvidenceTierCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EvidenceTierCard;
  const { tier, name, description, reliability, color, count, examples, expanded = false } = Astro2.props;
  const colorStyles = {
    gold: {
      tierBg: "bg-gradient-to-br from-gold-500 via-amber-500 to-gold-600",
      tierText: "text-navy-900",
      cardBg: "bg-gradient-to-br from-gold-500/5 via-navy-800/50 to-navy-800/50",
      cardBorder: "border-gold-500/30 hover:border-gold-500/50",
      accent: "text-gold-400",
      badgeBg: "bg-gold-500/20 text-gold-400",
      icon: "text-gold-500"
    },
    vindication: {
      tierBg: "bg-gradient-to-br from-green-500 via-emerald-500 to-green-600",
      tierText: "text-white",
      cardBg: "bg-gradient-to-br from-green-500/5 via-navy-800/50 to-navy-800/50",
      cardBorder: "border-green-500/30 hover:border-green-500/50",
      accent: "text-green-400",
      badgeBg: "bg-green-500/20 text-green-400",
      icon: "text-green-500"
    },
    causation: {
      tierBg: "bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600",
      tierText: "text-white",
      cardBg: "bg-gradient-to-br from-purple-500/5 via-navy-800/50 to-navy-800/50",
      cardBorder: "border-purple-500/30 hover:border-purple-500/50",
      accent: "text-purple-400",
      badgeBg: "bg-purple-500/20 text-purple-400",
      icon: "text-purple-500"
    },
    breach: {
      tierBg: "bg-gradient-to-br from-red-500 via-rose-500 to-red-600",
      tierText: "text-white",
      cardBg: "bg-gradient-to-br from-red-500/5 via-navy-800/50 to-navy-800/50",
      cardBorder: "border-red-500/30 hover:border-red-500/50",
      accent: "text-red-400",
      badgeBg: "bg-red-500/20 text-red-400",
      icon: "text-red-500"
    },
    default: {
      tierBg: "bg-gradient-to-br from-navy-600 via-navy-700 to-navy-600",
      tierText: "text-white",
      cardBg: "bg-navy-800/50",
      cardBorder: "border-navy-700/50 hover:border-navy-600/50",
      accent: "text-navy-300",
      badgeBg: "bg-navy-700/50 text-navy-300",
      icon: "text-navy-400"
    }
  };
  const style = colorStyles[color] || colorStyles.default;
  const reliabilityStyles = {
    "HIGHEST": "bg-gold-500/20 text-gold-400 border-gold-500/30",
    "HIGH": "bg-green-500/20 text-green-400 border-green-500/30",
    "MEDIUM-HIGH": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "MEDIUM": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "LOWEST": "bg-red-500/20 text-red-400 border-red-500/30"
  };
  const reliabilityStyle = reliabilityStyles[reliability] || reliabilityStyles["MEDIUM"];
  return renderTemplate`${maybeRenderHead()}<article class="evidence-tier-card group"${addAttribute(tier, "data-tier")}${addAttribute(color, "data-color")} data-astro-cid-qcldk4xc> <div${addAttribute([
    "relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
    "hover:shadow-xl hover:shadow-navy-900/50",
    style.cardBg,
    style.cardBorder
  ], "class:list")} data-astro-cid-qcldk4xc> <!-- Tier Badge (positioned left) --> <div class="absolute -left-2 top-6 z-10" data-astro-cid-qcldk4xc> <div${addAttribute([
    "w-16 h-16 rounded-xl flex items-center justify-center font-display font-bold text-3xl shadow-lg",
    style.tierBg,
    style.tierText
  ], "class:list")} data-astro-cid-qcldk4xc> ${tier} </div> </div> <!-- Main Content --> <div class="pl-20 pr-6 py-6" data-astro-cid-qcldk4xc> <!-- Header --> <div class="flex items-start justify-between gap-4 mb-4" data-astro-cid-qcldk4xc> <div data-astro-cid-qcldk4xc> <h3 class="text-xl font-display font-semibold text-white mb-1" data-astro-cid-qcldk4xc> ${name} </h3> <p class="text-sm text-navy-400" data-astro-cid-qcldk4xc> ${description} </p> </div> <!-- Stats --> <div class="flex flex-col items-end gap-2" data-astro-cid-qcldk4xc> <span${addAttribute([
    "px-3 py-1 rounded-lg text-xs font-semibold border",
    reliabilityStyle
  ], "class:list")} data-astro-cid-qcldk4xc> ${reliability} </span> <span${addAttribute([
    "px-3 py-1.5 rounded-lg font-mono font-bold",
    style.badgeBg
  ], "class:list")} data-astro-cid-qcldk4xc> ${count} items
</span> </div> </div> <!-- Examples Section --> <div class="mt-6" data-astro-cid-qcldk4xc> <h4 class="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3 flex items-center gap-2" data-astro-cid-qcldk4xc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qcldk4xc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-qcldk4xc></path> </svg>
Key Examples
</h4> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3" data-astro-cid-qcldk4xc> ${examples.map((example, index) => renderTemplate`<li class="flex items-start gap-3 text-sm example-item"${addAttribute(`animation-delay: ${index * 50}ms`, "style")} data-astro-cid-qcldk4xc> <div${addAttribute([
    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
    style.badgeBg
  ], "class:list")} data-astro-cid-qcldk4xc> <svg${addAttribute(["w-3 h-3", style.icon], "class:list")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qcldk4xc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-qcldk4xc></path> </svg> </div> <span class="text-navy-300 leading-relaxed" data-astro-cid-qcldk4xc> ${example} </span> </li>`)} </ul> </div> <!-- Decorative Corner Element --> <div${addAttribute([
    "absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none",
    style.icon
  ], "class:list")} data-astro-cid-qcldk4xc> <svg viewBox="0 0 100 100" fill="currentColor" data-astro-cid-qcldk4xc> <polygon points="100,0 100,100 0,0" data-astro-cid-qcldk4xc></polygon> </svg> </div> </div> </div> </article>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/evidence/EvidenceTierCard.astro", void 0);

const $$Evidence = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const evidenceTiers = [
    {
      tier: 1,
      name: "Objective Imaging",
      description: "MRI, CT, Ultrasound, X-ray with objective findings that cannot be fabricated or misinterpreted",
      reliability: "HIGHEST",
      color: "gold",
      examples: [
        "MRI T5-T8 fractures (Nov 2022)",
        "Duplex Ultrasound TOS-positive (Jun 2019)",
        "UCLH MR dynamic compression (Jan 2024)",
        "CT Aorta findings (Apr 2024)",
        "Doppler bilateral occlusion (Jun 2025)",
        "X-ray rib fracture confirmation"
      ],
      count: 6
    },
    {
      tier: 2,
      name: "Independent Specialist Letters",
      description: "Consultants with no prior involvement documenting objective clinical findings",
      reliability: "HIGH",
      color: "vindication",
      examples: [
        "Dr Gupta psychiatric clearance (2023)",
        "Pain Clinic refutation of somatoform",
        "UCLH Hypermobility Service assessment",
        "Dr Karunaratne neurology letter",
        "Imperial epilepsy diagnosis",
        "Chelsea & Westminster Pain Clinic",
        "Royal Free vascular assessment",
        "Dr Gorrie clinical notes"
      ],
      count: 8
    },
    {
      tier: 3,
      name: "Ambulance/A&E Records",
      description: "Emergency services documentation with hardcoded timestamps and objective observations",
      reliability: "HIGH",
      color: "causation",
      examples: [
        "LAS ePCR 23 Dec 2021 (5-min response, HR 133)",
        "ED Discharge Summary 24 Dec 2021",
        "ED Summary 18 Feb 2022 (epilepsy diagnosis)",
        "Ambulance crew witness statements",
        "A&E triage documentation"
      ],
      count: 5
    },
    {
      tier: 4,
      name: "Pharmacy Records",
      description: "Dispensing records showing actual medication received, with timestamps",
      reliability: "MEDIUM-HIGH",
      color: "default",
      examples: [
        "Prescription dispensing history",
        "Controlled substance records",
        "Medication timeline reconstruction"
      ],
      count: 3
    },
    {
      tier: 5,
      name: "Independent Clinician Notes",
      description: "MSK Physio, practice nurses, allied health professionals - independent of GP practice",
      reliability: "MEDIUM",
      color: "default",
      examples: [
        'MSK Physio "attention seeking" note (Aug 2021)',
        "Bhamm Pain Clinic rejection letter (Nov 2021)",
        "Jason Parry physical examination (Jul 2021)",
        "Practice nurse observations"
      ],
      count: 4
    },
    {
      tier: 6,
      name: "GP Referral Responses",
      description: "Specialist responses to GP referrals - may be influenced by referral framing",
      reliability: "MEDIUM",
      color: "default",
      examples: [
        "Pain Clinic responses",
        "Neurology outpatient letters",
        "Mental health referral responses",
        "Physiotherapy referral responses",
        "Secondary care discharge letters",
        "Specialist review outcomes"
      ],
      count: 6
    },
    {
      tier: 7,
      name: "GP Consultation Entries",
      description: "GP clinical records - requires verification against higher-tier evidence due to identified discrepancies",
      reliability: "LOWEST",
      color: "breach",
      examples: [
        '"Sleeping pain-free" (Sep 2021) - CONTRADICTED',
        "Somatisation framing (2020) - CONTRADICTED",
        "F45.4 coding (Jan 2023) - CONTRADICTED",
        "Misattributed symptoms",
        "Incomplete medication records"
      ],
      count: "2,449"
    }
  ];
  const totalItems = evidenceTiers.reduce((sum, tier) => {
    const count = typeof tier.count === "string" ? parseInt(tier.count.replace(",", "")) : tier.count;
    return sum + count;
  }, 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Evidence", "description": "Evidence hierarchy and reliability tiers in the Thomson clinical negligence case" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div> <div class="container-wide relative z-10"> <div class="max-w-4xl mx-auto text-center"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8"> <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="text-sm font-medium text-gold-400">Forensic Evidence System</span> </div> <!-- Title --> <h1 class="text-5xl sm:text-6xl font-display font-bold text-white mb-6 leading-tight">
Evidence
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400">
Hierarchy
</span> </h1> <!-- Subtitle --> <p class="text-xl text-navy-300 leading-relaxed mb-12 max-w-2xl mx-auto">
A 7-tier forensic evidence system where <strong class="text-gold-400">objective imaging</strong> sits at the apex
          and GP consultation entries require verification against independent evidence.
</p> <!-- Stats Row --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-gold-400 mb-1">7</div> <p class="text-xs text-navy-400">Evidence Tiers</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-green-400 mb-1">6</div> <p class="text-xs text-navy-400">Imaging Studies</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-purple-400 mb-1">8</div> <p class="text-xs text-navy-400">Specialist Letters</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-amber-400 mb-1">${totalItems.toLocaleString()}</div> <p class="text-xs text-navy-400">Total Documents</p> ` })} </div> </div> </div> </section>  <section class="py-20"> <div class="container-wide"> <div class="text-center mb-16"> <h2 class="text-3xl font-display font-bold text-white mb-4">
The Evidence Pyramid
</h2> <p class="text-navy-400 max-w-2xl mx-auto">
Higher-tier evidence is used to verify or contradict lower-tier claims.
          Hover over each tier to see key examples.
</p> </div> ${renderComponent($$result2, "EvidencePyramid", $$EvidencePyramid, { "tiers": evidenceTiers })} </div> </section>  <section class="py-20 bg-navy-900/30"> <div class="container-wide"> <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"> <div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "strategic", "class": "mb-4" }, { "default": ($$result3) => renderTemplate`Detailed Breakdown` })} <h2 class="text-3xl font-display font-bold text-white">
Evidence Tiers Explained
</h2> <p class="text-navy-400 mt-2">Each tier's characteristics, reliability level, and key examples</p> </div> </div> <div class="space-y-6"> ${evidenceTiers.map((tier, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> ${renderComponent($$result2, "EvidenceTierCard", $$EvidenceTierCard, { "tier": tier.tier, "name": tier.name, "description": tier.description, "reliability": tier.reliability, "color": tier.color, "count": tier.count, "examples": tier.examples })} </div>`)} </div> </div> </section>  <section class="py-20"> <div class="container-wide"> <div class="max-w-4xl mx-auto"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "highlight", "class": "p-8 sm:p-12 relative overflow-hidden" }, { "default": ($$result3) => renderTemplate`  <div class="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10"> <div class="flex items-center gap-4 mb-8"> <div class="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center"> <svg class="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path> </svg> </div> <div> <h2 class="text-2xl font-display font-bold text-white">Verification Methodology</h2> <p class="text-sm text-navy-400">How GP entries are validated against independent evidence</p> </div> </div> <p class="text-navy-300 mb-8 leading-relaxed">
GP consultation entries (Tier 7) are systematically verified against higher-tier evidence.
              Each entry receives a verification status based on independent corroboration:
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="flex items-start gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20"> <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <h4 class="font-semibold text-green-400 mb-1">VERIFIED</h4> <p class="text-sm text-navy-400">Confirmed by independent higher-tier evidence</p> </div> </div> <div class="flex items-start gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"> <div class="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-amber-400 mb-1">UNVERIFIED</h4> <p class="text-sm text-navy-400">No independent corroboration available</p> </div> </div> <div class="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20"> <div class="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> <div> <h4 class="font-semibold text-red-400 mb-1">CONTRADICTED</h4> <p class="text-sm text-navy-400">Conflicts with higher-tier evidence</p> </div> </div> <div class="flex items-start gap-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20"> <div class="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-400 mb-1">FABRICATED</h4> <p class="text-sm text-navy-400">Impossible given known facts and timeline</p> </div> </div> </div> <!-- CTA --> <div class="mt-10 flex flex-wrap gap-4"> <a${addAttribute(getHref("/findings"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all shadow-lg shadow-gold-500/25"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
View All Findings
</a> <a${addAttribute(getHref("/vindication"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-navy-700/50 hover:bg-navy-700 text-white font-semibold rounded-xl border border-navy-600/50 transition-all"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg>
Vindication Evidence
</a> </div> </div> ` })} </div> </div> </section> ` })}`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/evidence.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/evidence.astro";
const $$url = "/thomson-case-exhibit/evidence";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Evidence,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
