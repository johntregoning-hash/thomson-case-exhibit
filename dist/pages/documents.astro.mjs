/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, r as renderComponent } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$Badge } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$DocumentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DocumentCard;
  const { document, compact = false } = Astro2.props;
  const tierStyles = {
    1: {
      bg: "bg-gold-500/20",
      text: "text-gold-400",
      border: "border-gold-500/30",
      label: "Highest"
    },
    2: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border-green-500/30",
      label: "High"
    },
    3: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      border: "border-purple-500/30",
      label: "High"
    },
    4: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      border: "border-blue-500/30",
      label: "Med-High"
    },
    5: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      label: "Medium"
    },
    6: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/30",
      label: "Medium"
    },
    7: {
      bg: "bg-red-500/20",
      text: "text-red-400",
      border: "border-red-500/30",
      label: "Lowest"
    }
  };
  const style = tierStyles[document.tier] || tierStyles[7];
  const isContradicted = document.significance.includes("CONTRADICTED");
  const isDisputed = document.significance.includes("DISPUTED");
  return renderTemplate`${maybeRenderHead()}<article class="document-card group relative" data-astro-cid-tno64eed> <div${addAttribute([
    "relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300",
    "bg-navy-800/40 hover:bg-navy-800/60",
    "border-navy-700/50 hover:border-navy-600/50",
    "hover:shadow-lg",
    compact ? "p-3" : "p-4"
  ], "class:list")} data-astro-cid-tno64eed> <div class="flex items-start gap-4" data-astro-cid-tno64eed> <!-- Tier Badge --> <div${addAttribute([
    "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold border",
    style.bg,
    style.text,
    style.border
  ], "class:list")} data-astro-cid-tno64eed> ${document.tier} </div> <!-- Content --> <div class="flex-1 min-w-0" data-astro-cid-tno64eed> <!-- Header Row --> <div class="flex items-start justify-between gap-2 mb-1" data-astro-cid-tno64eed> <h4${addAttribute([
    "font-medium text-white group-hover:text-gold-400 transition-colors truncate",
    compact ? "text-sm" : "text-base"
  ], "class:list")} data-astro-cid-tno64eed> ${document.name} </h4> <span class="text-xs text-navy-500 whitespace-nowrap flex-shrink-0" data-astro-cid-tno64eed> ${document.date} </span> </div> <!-- Significance --> <p${addAttribute([
    "leading-relaxed",
    compact ? "text-xs text-navy-400 line-clamp-1" : "text-sm text-navy-300 line-clamp-2",
    isContradicted ? "text-red-400/80" : "",
    isDisputed ? "text-amber-400/80" : ""
  ], "class:list")} data-astro-cid-tno64eed> ${document.significance} </p> <!-- Tier Label (on hover) --> ${!compact && renderTemplate`<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-tno64eed> <span${addAttribute([
    "text-xs px-2 py-0.5 rounded",
    style.bg,
    style.text
  ], "class:list")} data-astro-cid-tno64eed>
Tier ${document.tier} - ${style.label} Reliability
</span> </div>`} </div> <!-- Status Indicator for contradicted items --> ${isContradicted && renderTemplate`<div class="flex-shrink-0" data-astro-cid-tno64eed> <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" data-astro-cid-tno64eed></div> </div>`} </div> </div> </article> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/documents/DocumentCard.astro", void 0);

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$DocumentVault = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocumentVault;
  const { categories, defaultExpanded = [] } = Astro2.props;
  const colorStyles = {
    gold: {
      iconBg: "bg-gold-500/20",
      iconText: "text-gold-400",
      border: "border-gold-500/30 hover:border-gold-500/50",
      headerBg: "bg-gradient-to-r from-gold-500/5 to-transparent",
      countBg: "bg-gold-500/20",
      countText: "text-gold-400"
    },
    vindication: {
      iconBg: "bg-green-500/20",
      iconText: "text-green-400",
      border: "border-green-500/30 hover:border-green-500/50",
      headerBg: "bg-gradient-to-r from-green-500/5 to-transparent",
      countBg: "bg-green-500/20",
      countText: "text-green-400"
    },
    causation: {
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-400",
      border: "border-purple-500/30 hover:border-purple-500/50",
      headerBg: "bg-gradient-to-r from-purple-500/5 to-transparent",
      countBg: "bg-purple-500/20",
      countText: "text-purple-400"
    },
    breach: {
      iconBg: "bg-red-500/20",
      iconText: "text-red-400",
      border: "border-red-500/30 hover:border-red-500/50",
      headerBg: "bg-gradient-to-r from-red-500/5 to-transparent",
      countBg: "bg-red-500/20",
      countText: "text-red-400"
    },
    default: {
      iconBg: "bg-navy-700/50",
      iconText: "text-navy-400",
      border: "border-navy-700/50 hover:border-navy-600/50",
      headerBg: "bg-gradient-to-r from-navy-700/20 to-transparent",
      countBg: "bg-navy-700/50",
      countText: "text-navy-400"
    }
  };
  const getStyle = (color) => colorStyles[color] || colorStyles.default;
  const tierBadgeColors = {
    1: "bg-gold-500/20 text-gold-400",
    2: "bg-green-500/20 text-green-400",
    3: "bg-purple-500/20 text-purple-400",
    4: "bg-blue-500/20 text-blue-400",
    5: "bg-cyan-500/20 text-cyan-400",
    6: "bg-amber-500/20 text-amber-400",
    7: "bg-red-500/20 text-red-400"
  };
  return renderTemplate`${maybeRenderHead()}<div class="document-vault space-y-6" data-astro-cid-fvt7tr2j> ${categories.map((category, categoryIndex) => {
    const style = getStyle(category.color);
    const isExpanded = defaultExpanded.includes(category.slug);
    return renderTemplate`<div class="vault-category rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-300 bg-navy-800/40"${addAttribute(category.slug, "data-category")}${addAttribute(isExpanded ? "true" : "false", "data-expanded")}${addAttribute(`animation-delay: ${categoryIndex * 100}ms`, "style")} data-astro-cid-fvt7tr2j> <!-- Category Header (clickable) --> <button${addAttribute([
      "vault-header w-full p-5 flex items-center gap-4 transition-all duration-300",
      style.headerBg,
      style.border.split(" ")[0]
    ], "class:list")}${addAttribute(isExpanded, "aria-expanded")} data-astro-cid-fvt7tr2j> <!-- Icon --> <div${addAttribute([
      "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
      style.iconBg
    ], "class:list")} data-astro-cid-fvt7tr2j> <svg${addAttribute(["w-6 h-6", style.iconText], "class:list")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvt7tr2j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(category.icon, "d")} data-astro-cid-fvt7tr2j></path> </svg> </div> <!-- Title & Count --> <div class="flex-1 text-left" data-astro-cid-fvt7tr2j> <h3 class="text-lg font-display font-semibold text-white" data-astro-cid-fvt7tr2j> ${category.name} </h3> <p class="text-sm text-navy-400" data-astro-cid-fvt7tr2j> ${category.documents.length} document${category.documents.length !== 1 ? "s" : ""} </p> </div> <!-- Document Count Badge --> <div${addAttribute([
      "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
      style.countBg,
      style.countText
    ], "class:list")} data-astro-cid-fvt7tr2j> <span data-astro-cid-fvt7tr2j>${category.documents.length}</span> <span class="text-xs opacity-70" data-astro-cid-fvt7tr2j>docs</span> </div> <!-- Expand/Collapse Icon --> <div class="expand-icon w-8 h-8 rounded-lg bg-navy-700/50 flex items-center justify-center transition-transform duration-300" data-astro-cid-fvt7tr2j> <svg class="w-5 h-5 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvt7tr2j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-fvt7tr2j></path> </svg> </div> </button> <!-- Documents Container --> <div class="vault-content overflow-hidden transition-all duration-500"${addAttribute(isExpanded ? "" : "max-height: 0;", "style")} data-astro-cid-fvt7tr2j> <div class="p-5 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-fvt7tr2j> ${category.documents.map((doc, docIndex) => renderTemplate`<div${addAttribute(`animation-delay: ${docIndex * 50}ms`, "style")} data-astro-cid-fvt7tr2j> ${renderComponent($$result, "DocumentCard", $$DocumentCard, { "document": doc, "compact": true, "data-astro-cid-fvt7tr2j": true })} </div>`)} </div> <!-- Tier Summary Footer --> <div class="px-5 pb-5" data-astro-cid-fvt7tr2j> <div class="flex items-center gap-4 p-3 rounded-xl bg-navy-900/50 border border-navy-700/30" data-astro-cid-fvt7tr2j> <span class="text-xs text-navy-500 uppercase tracking-wider" data-astro-cid-fvt7tr2j>Tier Distribution:</span> <div class="flex items-center gap-2 flex-wrap" data-astro-cid-fvt7tr2j> ${[1, 2, 3, 4, 5, 6, 7].map((tier) => {
      const count = category.documents.filter((d) => d.tier === tier).length;
      if (count === 0) return null;
      return renderTemplate`<span${addAttribute([
        "px-2 py-0.5 rounded text-xs font-mono",
        tierBadgeColors[tier]
      ], "class:list")} data-astro-cid-fvt7tr2j>
T${tier}: ${count} </span>`;
    })} </div> </div> </div> </div> </div>`;
  })} </div>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/documents/DocumentVault.astro", void 0);

const $$Documents = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const documentCategories = [
    {
      name: "Imaging Reports",
      slug: "imaging",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "gold",
      description: "Objective diagnostic imaging - highest reliability evidence",
      documents: [
        { name: "MRI T5-T8 Fractures", date: "Nov 2022", significance: "Documents vertebral fractures 11 months after seizure", tier: 1 },
        { name: "Duplex Ultrasound TOS", date: "Jun 2019", significance: "First objective TOS-positive finding", tier: 1 },
        { name: "UCLH MR Thoracic Inlet/Outlet", date: "Jan 2024", significance: "Dynamic subclavian compression demonstrated", tier: 1 },
        { name: "CT Aorta with Contrast", date: "Apr 2024", significance: "Radiologist notes TOS cannot be excluded", tier: 1 },
        { name: "US Doppler Upper Limb Veins", date: "Jun 2025", significance: "Bilateral subclavian occlusion in abduction", tier: 1 }
      ]
    },
    {
      name: "Specialist Letters",
      slug: "specialist",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "vindication",
      description: "Independent specialist assessments and clinical letters",
      documents: [
        { name: "Dr Gupta Psychiatric Assessment", date: "2023", significance: "Formal clearance - no psychiatric disorders found", tier: 2 },
        { name: "Pain Clinic Somatoform Refutation", date: "2023", significance: '"felt not somatic" - specialist disagreement', tier: 2 },
        { name: "Dr Karunaratne Neurology Letter", date: "Mar 2022", significance: "Epilepsy pathway documentation", tier: 2 },
        { name: "UCLH Hypermobility Service", date: "Jul 2021", significance: "Physical examination findings documented", tier: 2 },
        { name: "Sumeer Bhamm MSK Letter", date: "Nov 2021", significance: "Documents Pain Clinic rejection without consultation", tier: 5 }
      ]
    },
    {
      name: "Emergency Records",
      slug: "emergency",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "causation",
      description: "Ambulance service and emergency department records",
      documents: [
        { name: "LAS ePCR - First Seizure", date: "23 Dec 2021", significance: "Hardcoded timestamps, 5-min response, HR 133", tier: 3 },
        { name: "ED Discharge Summary", date: "24 Dec 2021", significance: '"Soft tissue injury" - inadequate diagnosis', tier: 3 },
        { name: "ED Summary - Second Seizure", date: "18 Feb 2022", significance: 'Epilepsy diagnosis, "first seizure on 23/12"', tier: 3 }
      ]
    },
    {
      name: "GP Records",
      slug: "gp",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      color: "breach",
      description: "GP consultation entries - lowest reliability, requires verification",
      documents: [
        { name: "MH1 Referral - Somatisation Framing", date: "Sep 2020", significance: "Links symptoms to brother's death", tier: 7 },
        { name: '"Sleeping Pain-Free" Entry', date: "Sep 2021", significance: "CONTRADICTED by MSK physio notes", tier: 7 },
        { name: "F45.4 Somatoform Coding", date: "Jan 2023", significance: "Covert psychiatric diagnosis without assessment", tier: 7 },
        { name: "Somatoform Removal Entry", date: "Jul 2025", significance: '"clear causes for his pain"', tier: 7 }
      ]
    },
    {
      name: "Witness Evidence",
      slug: "witness",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "default",
      description: "Third-party corroboration and witness statements",
      documents: [
        { name: "iMessage Evidence - Clive Polles", date: "2021-2026", significance: "50+ messages documenting care failures", tier: 3 },
        { name: 'MSK Physio "Attention Seeking" Note', date: "Aug 2021", significance: "Third-party documentation of GP dismissal", tier: 5 },
        { name: "Parent Witness Statements", date: "Pending", significance: '"Data manipulation" statement witnesses', tier: 3 }
      ]
    }
  ];
  const totalDocuments = documentCategories.reduce((sum, cat) => sum + cat.documents.length, 0);
  const tier1Count = documentCategories.reduce((sum, cat) => sum + cat.documents.filter((d) => d.tier === 1).length, 0);
  const tier7Count = documentCategories.reduce((sum, cat) => sum + cat.documents.filter((d) => d.tier === 7).length, 0);
  const tierReference = [
    { tier: 1, label: "Highest", description: "Objective imaging (MRI, CT, ultrasound)", color: "gold" },
    { tier: 2, label: "High", description: "Independent specialist letters", color: "green" },
    { tier: 3, label: "High", description: "Ambulance/A&E records", color: "purple" },
    { tier: 4, label: "Med-High", description: "Pharmacy records", color: "blue" },
    { tier: 5, label: "Medium", description: "Independent clinician notes", color: "cyan" },
    { tier: 6, label: "Medium", description: "GP referral responses", color: "amber" },
    { tier: 7, label: "Lowest", description: "GP consultation entries", color: "red" }
  ];
  const tierColorMap = {
    gold: { bg: "bg-gold-500/10", text: "text-gold-400", border: "border-gold-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
    red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" }
  };
  const tierFilterColors = {
    1: "bg-gold-500/20 text-gold-400 hover:bg-gold-500 hover:text-navy-900",
    2: "bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white",
    3: "bg-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-white",
    4: "bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white",
    5: "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white",
    6: "bg-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-white",
    7: "bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Document Vault", "description": "Key evidence documents organised by category and reliability tier" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div> <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div> <!-- Decorative Folder Icon --> <div class="absolute top-20 right-20 w-32 h-32 text-navy-800/30 hidden lg:block"> <svg fill="currentColor" viewBox="0 0 24 24"> <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path> </svg> </div> <div class="container-wide relative z-10"> <div class="max-w-4xl mx-auto text-center"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8"> <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path> </svg> <span class="text-sm font-medium text-gold-400">Evidence Repository</span> </div> <!-- Title --> <h1 class="text-5xl sm:text-6xl font-display font-bold text-white mb-6 leading-tight">
Document
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400">
Vault
</span> </h1> <!-- Subtitle --> <p class="text-xl text-navy-300 leading-relaxed mb-12 max-w-2xl mx-auto">
Primary evidence documents organised by category. Each document is assigned an evidence tier based on reliability and independence from disputed sources.
</p> <!-- Stats Row --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-gold-400 mb-1">${totalDocuments}</div> <p class="text-xs text-navy-400">Total Documents</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-green-400 mb-1">${documentCategories.length}</div> <p class="text-xs text-navy-400">Categories</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-purple-400 mb-1">${tier1Count}</div> <p class="text-xs text-navy-400">Tier 1 (Highest)</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-red-400 mb-1">${tier7Count}</div> <p class="text-xs text-navy-400">Tier 7 (GP Entries)</p> ` })} </div> </div> </div> </section>  <section class="py-16 bg-navy-900/30"> <div class="container-wide"> <div class="flex items-end justify-between mb-10"> <div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "strategic", "class": "mb-4" }, { "default": ($$result3) => renderTemplate`Reference Guide` })} <h2 class="text-3xl font-display font-bold text-white">
Evidence Reliability Tiers
</h2> <p class="text-navy-400 mt-2">Understanding document reliability hierarchy</p> </div> <a${addAttribute(getHref("/evidence"), "href")} class="hidden sm:inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"> <span>Full methodology</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"> ${tierReference.map((tier, index) => {
    const style = tierColorMap[tier.color];
    return renderTemplate`<div${addAttribute([
      "p-4 rounded-xl border backdrop-blur-sm transition-all hover:scale-105",
      style.bg,
      style.border
    ], "class:list")}${addAttribute(`animation-delay: ${index * 50}ms`, "style")}> <div class="flex items-center gap-2 mb-2"> <span${addAttribute(["text-2xl font-display font-bold", style.text], "class:list")}> ${tier.tier} </span> <span${addAttribute(["text-xs px-1.5 py-0.5 rounded", style.bg, style.text], "class:list")}> ${tier.label} </span> </div> <p class="text-xs text-navy-400 leading-relaxed"> ${tier.description} </p> </div>`;
  })} </div> </div> </section>  <div class="sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 bg-navy-900/80 backdrop-blur-2xl border-b border-navy-700/50"> <div class="flex items-center justify-between gap-4"> <div class="flex items-center gap-3 overflow-x-auto pb-1"> <span class="text-sm text-navy-500 whitespace-nowrap">Filter by tier:</span> <div class="flex gap-2" id="tier-filters"> <button data-tier="all" class="tier-btn active px-3 py-1.5 rounded-full text-xs font-medium bg-gold-500 text-navy-900 transition-all hover:scale-105">
All
</button> ${[1, 2, 3, 4, 5, 6, 7].map((tier) => renderTemplate`<button${addAttribute(tier, "data-tier")}${addAttribute([
    "tier-btn px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105",
    tierFilterColors[tier]
  ], "class:list")}>
Tier ${tier} </button>`)} </div> </div> <div class="hidden sm:flex items-center gap-2 text-xs text-navy-500"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Click category to expand</span> </div> </div> </div>  <section class="py-16"> <div class="container-wide"> <div class="flex items-end justify-between mb-10"> <div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "vindication", "class": "mb-4" }, { "default": ($$result3) => renderTemplate`Evidence Archive` })} <h2 class="text-3xl font-display font-bold text-white">
Document Categories
</h2> <p class="text-navy-400 mt-2">Click to expand each category</p> </div> <div class="hidden sm:block text-sm text-navy-500"> ${documentCategories.length} categories • ${totalDocuments} documents
</div> </div> ${renderComponent($$result2, "DocumentVault", $$DocumentVault, { "categories": documentCategories, "defaultExpanded": ["imaging"] })} </div> </section>  <section class="py-16"> <div class="container-wide"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "highlight", "class": "p-10 text-center relative overflow-hidden" }, { "default": ($$result3) => renderTemplate`  <div class="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 max-w-2xl mx-auto"> <h2 class="text-3xl font-display font-bold text-white mb-4">
Document Access
</h2> <p class="text-navy-300 mb-8">
Full document copies are available in the evidence repository for legal review. All documents are preserved in their original format with metadata intact. For the complete evidence methodology, see the Evidence page.
</p> <div class="flex flex-wrap justify-center gap-4"> <a${addAttribute(getHref("/evidence"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all shadow-lg shadow-gold-500/25"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path> </svg>
View Evidence Methodology
</a> <a${addAttribute(getHref("/findings"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-navy-700/50 hover:bg-navy-700 text-white font-semibold rounded-xl border border-navy-600/50 transition-all"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
View Findings
</a> </div> </div> ` })} </div> </section> ` })} `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/documents.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/documents.astro";
const $$url = "/thomson-case-exhibit/documents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Documents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
