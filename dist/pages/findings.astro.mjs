/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTransition, e as renderTemplate } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { $ as $$Badge, a as $$BaseLayout } from '../chunks/Badge_DL3EHgdM.mjs';
/* empty css                                    */
/* empty css                                  */
import 'clsx';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import { f as findingsData } from '../chunks/findings_BAPSd5yg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$FindingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FindingCard;
  const { finding, expanded = false, showRelated = true } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const categoryMap = {
    "VINDICATION": "vindication",
    "BREACH": "breach",
    "DISCREPANCY": "discrepancy",
    "CAUSATION": "causation",
    "QUANTUM": "quantum",
    "PROCEDURAL": "procedural",
    "STRATEGIC": "strategic",
    "WITNESS": "witness",
    "FABRICATION": "fabrication",
    "NEUROLOGICAL": "causation",
    "MEDICATION": "breach",
    "FND/SOMATOFORM": "breach"
  };
  const variant = categoryMap[finding.category] || "default";
  const statusStyles = {
    "VERIFIED": {
      bg: "bg-green-500/20",
      text: "text-green-400",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    "SUPPORTED": {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    "UNVERIFIED": {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    "DISPUTED": {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    },
    "CONTRADICTED": {
      bg: "bg-red-500/20",
      text: "text-red-400",
      icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  };
  const status = finding.evidenceStatus?.toUpperCase() || "UNVERIFIED";
  const statusStyle = statusStyles[status] || statusStyles["UNVERIFIED"];
  const tabColors = {
    "vindication": "bg-green-500",
    "breach": "bg-red-500",
    "discrepancy": "bg-amber-500",
    "causation": "bg-purple-500",
    "fabrication": "bg-red-600",
    "witness": "bg-blue-500",
    "quantum": "bg-cyan-500",
    "procedural": "bg-slate-500",
    "strategic": "bg-indigo-500",
    "default": "bg-navy-500"
  };
  const tabColor = tabColors[variant] || tabColors["default"];
  return renderTemplate`${maybeRenderHead()}<article class="finding-card group relative"${addAttribute(finding.id, "data-finding-id")}${addAttribute(finding.category, "data-category")} data-astro-cid-q7337zdo${addAttribute(renderTransition($$result, "ufnorsrn", "", `finding-${finding.id}`), "data-astro-transition-scope")}> <!-- Evidence Folder Tab --> <div class="absolute -top-3 left-6 z-10" data-astro-cid-q7337zdo> <div${addAttribute([
    "px-3 py-1 rounded-t-lg text-xs font-mono font-bold tracking-wider",
    "shadow-lg transform group-hover:-translate-y-0.5 transition-transform duration-300",
    tabColor,
    finding.critical ? "ring-2 ring-gold-500 ring-offset-2 ring-offset-navy-900" : ""
  ], "class:list")} data-astro-cid-q7337zdo> ${finding.id} ${finding.critical && renderTemplate`<span class="ml-1 text-gold-300" data-astro-cid-q7337zdo>★</span>`} </div> </div> <!-- Main Card Body --> <div class="bg-navy-800/50 backdrop-blur-xl border border-navy-700/50 rounded-2xl rounded-tl-none pt-6 pb-5 px-6 transition-all duration-300 group-hover:bg-navy-800/70 group-hover:border-navy-600/60 group-hover:shadow-xl" data-astro-cid-q7337zdo> <!-- Header Row --> <div class="flex items-start justify-between mb-4" data-astro-cid-q7337zdo> <div class="flex items-center gap-3 flex-wrap" data-astro-cid-q7337zdo> ${renderComponent($$result, "Badge", $$Badge, { "variant": variant, "data-astro-cid-q7337zdo": true }, { "default": ($$result2) => renderTemplate`${finding.category}` })} ${finding.date && renderTemplate`<span class="text-xs text-navy-500 font-mono" data-astro-cid-q7337zdo>${finding.date}</span>`} </div> <!-- Evidence Status Badge --> <div${addAttribute([
    "flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium",
    statusStyle.bg,
    statusStyle.text
  ], "class:list")} data-astro-cid-q7337zdo> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-q7337zdo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(statusStyle.icon, "d")} data-astro-cid-q7337zdo></path> </svg> ${status} </div> </div> <!-- Title --> <h3 class="text-lg font-display font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors leading-snug" data-astro-cid-q7337zdo> ${finding.title} </h3> <!-- Summary --> <p class="text-sm text-navy-300 leading-relaxed line-clamp-3 mb-4" data-astro-cid-q7337zdo> ${finding.summary || "No summary available"} </p> <!-- Legal Significance (expanded only) --> ${expanded && finding.legalSignificance && renderTemplate`<div class="mb-4 p-3 bg-navy-900/50 rounded-lg border-l-2 border-gold-500/50" data-astro-cid-q7337zdo> <h4 class="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-2 flex items-center gap-2" data-astro-cid-q7337zdo> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-q7337zdo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" data-astro-cid-q7337zdo></path> </svg>
Legal Significance
</h4> <p class="text-sm text-navy-300 leading-relaxed" data-astro-cid-q7337zdo>${finding.legalSignificance}</p> </div>`} <!-- Related Findings (hover reveal) --> ${showRelated && finding.relatedFindings && finding.relatedFindings.length > 0 && renderTemplate`<div class="related-findings overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out" data-astro-cid-q7337zdo> <div class="flex items-center gap-2 flex-wrap pt-3 border-t border-navy-700/50" data-astro-cid-q7337zdo> <span class="text-xs text-navy-500" data-astro-cid-q7337zdo>Related:</span> ${finding.relatedFindings.slice(0, 4).map((refId) => renderTemplate`<a${addAttribute(getHref(`/findings/${refId.toLowerCase()}`), "href")} class="text-xs font-mono px-2 py-0.5 rounded bg-navy-700/50 text-navy-300 hover:bg-navy-600/50 hover:text-white transition-colors" data-astro-cid-q7337zdo> ${refId} </a>`)} ${finding.relatedFindings.length > 4 && renderTemplate`<span class="text-xs text-navy-500" data-astro-cid-q7337zdo>+${finding.relatedFindings.length - 4} more</span>`} </div> </div>`} <!-- Footer Actions --> <div class="flex items-center justify-between pt-4 border-t border-navy-700/30" data-astro-cid-q7337zdo> ${finding.source && renderTemplate`<span class="text-xs text-navy-500 truncate max-w-[200px]"${addAttribute(finding.source, "title")} data-astro-cid-q7337zdo> ${finding.source} </span>`} <a${addAttribute(getHref(`/findings/${finding.id.toLowerCase()}`), "href")} class="text-sm text-gold-500 hover:text-gold-400 transition-colors inline-flex items-center gap-2 ml-auto group/link" data-astro-cid-q7337zdo>
View Details
<svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-q7337zdo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-q7337zdo></path> </svg> </a> </div> </div> </article> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/findings/FindingCard.astro", "self");

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$FindingFilters = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FindingFilters;
  const { categories, statuses, totalFindings } = Astro2.props;
  const categoryStyles = {
    "VINDICATION": { bg: "bg-green-500/10", bgActive: "bg-green-500", text: "text-green-400" },
    "BREACH": { bg: "bg-red-500/10", bgActive: "bg-red-500", text: "text-red-400" },
    "DISCREPANCY": { bg: "bg-amber-500/10", bgActive: "bg-amber-500", text: "text-amber-400" },
    "CAUSATION": { bg: "bg-purple-500/10", bgActive: "bg-purple-500", text: "text-purple-400" },
    "FABRICATION": { bg: "bg-red-600/10", bgActive: "bg-red-600", text: "text-red-300" },
    "WITNESS": { bg: "bg-blue-500/10", bgActive: "bg-blue-500", text: "text-blue-400" },
    "QUANTUM": { bg: "bg-cyan-500/10", bgActive: "bg-cyan-500", text: "text-cyan-400" },
    "PROCEDURAL": { bg: "bg-slate-500/10", bgActive: "bg-slate-500", text: "text-slate-400" },
    "STRATEGIC": { bg: "bg-indigo-500/10", bgActive: "bg-indigo-500", text: "text-indigo-400" },
    "NEUROLOGICAL": { bg: "bg-purple-500/10", bgActive: "bg-purple-500", text: "text-purple-400" },
    "MEDICATION": { bg: "bg-red-500/10", bgActive: "bg-red-500", text: "text-red-400" },
    "FND/SOMATOFORM": { bg: "bg-red-500/10", bgActive: "bg-red-500", text: "text-red-400" }
  };
  return renderTemplate`${maybeRenderHead()}<div class="finding-filters sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 bg-navy-900/80 backdrop-blur-2xl border-b border-navy-700/50" data-astro-cid-oebid3y6> <div class="flex flex-col gap-4" data-astro-cid-oebid3y6> <!-- Top Row: Search + Sort --> <div class="flex flex-col sm:flex-row gap-3" data-astro-cid-oebid3y6> <!-- Search Input --> <div class="relative flex-1" data-astro-cid-oebid3y6> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oebid3y6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-oebid3y6></path> </svg> <input type="text" id="finding-search" placeholder="Search findings..." class="w-full pl-10 pr-4 py-2.5 bg-navy-800/60 border border-navy-700/50 rounded-xl text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all" data-astro-cid-oebid3y6> <kbd class="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-0.5 px-1.5 py-0.5 text-xs text-navy-500 bg-navy-800 border border-navy-700 rounded" data-astro-cid-oebid3y6> <span data-astro-cid-oebid3y6>/</span> </kbd> </div> <!-- Sort Dropdown --> <div class="relative" data-astro-cid-oebid3y6> <select id="finding-sort" class="appearance-none pl-4 pr-10 py-2.5 bg-navy-800/60 border border-navy-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all cursor-pointer" data-astro-cid-oebid3y6> <option value="id-asc" data-astro-cid-oebid3y6>ID (A-Z)</option> <option value="id-desc" data-astro-cid-oebid3y6>ID (Z-A)</option> <option value="date-newest" data-astro-cid-oebid3y6>Date (Newest)</option> <option value="date-oldest" data-astro-cid-oebid3y6>Date (Oldest)</option> <option value="category" data-astro-cid-oebid3y6>Category</option> <option value="status" data-astro-cid-oebid3y6>Status</option> </select> <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oebid3y6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-oebid3y6></path> </svg> </div> <!-- View Toggle --> <div class="flex items-center gap-1 p-1 bg-navy-800/60 border border-navy-700/50 rounded-xl" data-astro-cid-oebid3y6> <button id="view-grid" class="p-2 rounded-lg bg-gold-500/20 text-gold-400 transition-all" title="Grid View" data-astro-cid-oebid3y6> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oebid3y6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-oebid3y6></path> </svg> </button> <button id="view-list" class="p-2 rounded-lg text-navy-500 hover:text-white transition-all" title="List View" data-astro-cid-oebid3y6> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oebid3y6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-astro-cid-oebid3y6></path> </svg> </button> </div> </div> <!-- Bottom Row: Category Pills + Status + Results Count --> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3" data-astro-cid-oebid3y6> <!-- Category Pills --> <div class="flex flex-wrap gap-2" id="category-filters" data-astro-cid-oebid3y6> <button data-category="ALL" class="category-pill px-3 py-1.5 rounded-full text-xs font-medium bg-gold-500 text-navy-900 transition-all" data-astro-cid-oebid3y6>
All
</button> ${categories.map((cat) => {
    const style = categoryStyles[cat] || { bg: "bg-navy-700/50", text: "text-navy-400" };
    return renderTemplate`<button${addAttribute(cat, "data-category")}${addAttribute([
      "category-pill px-3 py-1.5 rounded-full text-xs font-medium transition-all border border-transparent",
      style.bg,
      style.text,
      "hover:border-current"
    ], "class:list")} data-astro-cid-oebid3y6> ${cat} </button>`;
  })} </div> <!-- Status Filter + Results Count --> <div class="flex items-center gap-4" data-astro-cid-oebid3y6> <!-- Status Dropdown --> <select id="status-filter" class="appearance-none pl-3 pr-8 py-1.5 bg-navy-800/60 border border-navy-700/50 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all cursor-pointer" data-astro-cid-oebid3y6> <option value="ALL" data-astro-cid-oebid3y6>All Statuses</option> ${statuses.map((status) => renderTemplate`<option${addAttribute(status, "value")} data-astro-cid-oebid3y6>${status}</option>`)} </select> <!-- Results Count --> <div class="flex items-center gap-2 text-sm" data-astro-cid-oebid3y6> <span class="text-navy-500" data-astro-cid-oebid3y6>Showing</span> <span id="results-count" class="font-mono text-gold-500" data-astro-cid-oebid3y6>${totalFindings}</span> <span class="text-navy-500" data-astro-cid-oebid3y6>findings</span> </div> <!-- Clear Filters Button (hidden by default) --> <button id="clear-filters" class="hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-all" data-astro-cid-oebid3y6> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-oebid3y6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-oebid3y6></path> </svg>
Clear
</button> </div> </div> </div> </div>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/findings/FindingFilters.astro", void 0);

const $$Findings = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const allFindings = findingsData.findings || [];
  const metadata = findingsData.metadata;
  const priorityFindingIds = findingsData.priorityFindings || [];
  const categories = metadata.categories || [];
  const statuses = metadata.evidenceStatuses || [];
  const stats = {
    total: allFindings.length,
    verified: allFindings.filter((f) => f.evidenceStatus === "VERIFIED").length,
    vindication: allFindings.filter((f) => f.category === "VINDICATION").length,
    breach: allFindings.filter((f) => f.category === "BREACH").length,
    critical: allFindings.filter((f) => f.critical).length
  };
  const priorityFindings = priorityFindingIds.map((id) => allFindings.find((f) => f.id === id)).filter((f) => f !== void 0);
  const sortedFindings = [...allFindings].sort((a, b) => {
    const aIsPriority = priorityFindingIds.includes(a.id);
    const bIsPriority = priorityFindingIds.includes(b.id);
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    if (a.critical && !b.critical) return -1;
    if (!a.critical && b.critical) return 1;
    return a.id.localeCompare(b.id);
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Findings", "description": "Browse 200+ documented forensic findings in the Thomson clinical negligence case", "data-astro-cid-2dknxgrt": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-12 lg:py-16 overflow-hidden" data-astro-cid-2dknxgrt> <!-- Background decoration --> <div class="absolute inset-0 bg-gradient-to-b from-navy-800/30 to-transparent pointer-events-none" data-astro-cid-2dknxgrt></div> <div class="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" data-astro-cid-2dknxgrt></div> <div class="container-wide relative" data-astro-cid-2dknxgrt> <div class="max-w-4xl" data-astro-cid-2dknxgrt> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-sm mb-6" data-astro-cid-2dknxgrt> <a${addAttribute(getHref("/"), "href")} class="text-navy-500 hover:text-white transition-colors" data-astro-cid-2dknxgrt>Home</a> <svg class="w-4 h-4 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2dknxgrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-2dknxgrt></path> </svg> <span class="text-gold-500" data-astro-cid-2dknxgrt>Findings Registry</span> </nav> <h1 class="text-4xl lg:text-5xl font-display font-bold text-white mb-4" data-astro-cid-2dknxgrt>
Forensic Findings<br data-astro-cid-2dknxgrt> <span class="text-gold-500" data-astro-cid-2dknxgrt>Registry</span> </h1> <p class="text-lg text-navy-300 leading-relaxed max-w-2xl" data-astro-cid-2dknxgrt>
Browse <strong class="text-white" data-astro-cid-2dknxgrt>${stats.total}+</strong> documented findings, each cross-referenced
          with primary evidence documents. Every finding is categorised, verified, and linked to relevant
          actors in this clinical negligence case.
</p> </div> </div> </section>  <section class="py-6 border-y border-navy-700/50 bg-navy-800/20" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6" data-astro-cid-2dknxgrt> <!-- Total --> <div class="text-center" data-astro-cid-2dknxgrt> <p class="text-3xl lg:text-4xl font-display font-bold text-white" data-astro-cid-2dknxgrt>${stats.total}+</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-2dknxgrt>Total Findings</p> </div> <!-- Verified --> <div class="text-center" data-astro-cid-2dknxgrt> <p class="text-3xl lg:text-4xl font-display font-bold text-green-400" data-astro-cid-2dknxgrt>${stats.verified}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-2dknxgrt>Verified</p> </div> <!-- Vindication --> <div class="text-center" data-astro-cid-2dknxgrt> <p class="text-3xl lg:text-4xl font-display font-bold text-green-500" data-astro-cid-2dknxgrt>${stats.vindication}+</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-2dknxgrt>Vindication</p> </div> <!-- Breach --> <div class="text-center" data-astro-cid-2dknxgrt> <p class="text-3xl lg:text-4xl font-display font-bold text-red-400" data-astro-cid-2dknxgrt>${stats.breach}+</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-2dknxgrt>Breach</p> </div> <!-- Critical --> <div class="text-center hidden lg:block" data-astro-cid-2dknxgrt> <p class="text-3xl lg:text-4xl font-display font-bold text-gold-500" data-astro-cid-2dknxgrt>${stats.critical}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-2dknxgrt>Critical</p> </div> </div> </div> </section>  ${priorityFindings.length > 0 && renderTemplate`<section class="py-6 bg-gold-500/5 border-b border-gold-500/20" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <div class="flex items-start gap-4" data-astro-cid-2dknxgrt> <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center" data-astro-cid-2dknxgrt> <svg class="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-2dknxgrt> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-2dknxgrt></path> </svg> </div> <div class="flex-1 min-w-0" data-astro-cid-2dknxgrt> <h2 class="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-2" data-astro-cid-2dknxgrt>Priority Findings</h2> <div class="flex flex-wrap gap-2" data-astro-cid-2dknxgrt> ${priorityFindings.slice(0, 8).map((finding) => renderTemplate`<a${addAttribute(getHref(`/findings/${finding.id.toLowerCase()}`), "href")} class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-navy-700/50 hover:border-gold-500/50 hover:bg-navy-800 transition-all group" data-astro-cid-2dknxgrt> <span class="text-xs font-mono text-gold-500" data-astro-cid-2dknxgrt>${finding.id}</span> <span class="text-sm text-navy-300 group-hover:text-white transition-colors truncate max-w-[200px]" data-astro-cid-2dknxgrt> ${finding.title} </span> </a>`)} ${priorityFindings.length > 8 && renderTemplate`<span class="text-sm text-navy-500 self-center" data-astro-cid-2dknxgrt>+${priorityFindings.length - 8} more</span>`} </div> </div> </div> </div> </section>`} <div class="container-wide" data-astro-cid-2dknxgrt> ${renderComponent($$result2, "FindingFilters", $$FindingFilters, { "categories": categories, "statuses": statuses, "totalFindings": stats.total, "data-astro-cid-2dknxgrt": true })} </div>  <section class="py-8 lg:py-12" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <div id="findings-grid" class="findings-grid-view grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8" data-astro-cid-2dknxgrt> ${sortedFindings.map((finding, index) => renderTemplate`<div${addAttribute(`animation-delay: ${Math.min(index * 50, 500)}ms`, "style")} data-astro-cid-2dknxgrt> ${renderComponent($$result2, "FindingCard", $$FindingCard, { "finding": finding, "data-astro-cid-2dknxgrt": true })} </div>`)} </div> <!-- Empty State --> <div id="empty-state" class="hidden py-16 text-center" data-astro-cid-2dknxgrt> <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-navy-800/50 flex items-center justify-center" data-astro-cid-2dknxgrt> <svg class="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2dknxgrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2dknxgrt></path> </svg> </div> <h3 class="text-lg font-display font-semibold text-white mb-2" data-astro-cid-2dknxgrt>No findings match your criteria</h3> <p class="text-navy-400 mb-4" data-astro-cid-2dknxgrt>Try adjusting your filters or search terms</p> <button onclick="document.getElementById('clear-filters')?.click()" class="text-gold-500 hover:text-gold-400 transition-colors" data-astro-cid-2dknxgrt>
Clear all filters
</button> </div> </div> </section>  <section class="py-12 border-t border-navy-700/50 bg-navy-800/20" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <div class="flex items-center justify-between mb-8" data-astro-cid-2dknxgrt> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-2dknxgrt>Finding Categories</h2> <a${addAttribute(getHref("/evidence"), "href")} class="text-sm text-gold-500 hover:text-gold-400 transition-colors" data-astro-cid-2dknxgrt>
View Evidence Tiers →
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-2dknxgrt> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "vindication", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`VINDICATION` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Independent specialists confirming diagnoses were inappropriate or removing psychiatric labels</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "breach", "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "breach", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`BREACH` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Potential Bolam/Bolitho breach of duty by healthcare providers</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "discrepancy", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`DISCREPANCY` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>GP entries contradicting contemporaneous medical evidence</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "witness", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`WITNESS` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Third-party corroboration of events from family or clinicians</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "causation", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`CAUSATION` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Evidence linking breach of duty to patient harm</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "fabrication", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`FABRICATION` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Entries impossible given known facts or timeline</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "procedural", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`PROCEDURAL` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Administrative failures and data protection issues</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-2dknxgrt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Badge", $$Badge, { "variant": "quantum", "class": "mb-3", "data-astro-cid-2dknxgrt": true }, { "default": ($$result4) => renderTemplate`QUANTUM` })} <p class="text-sm text-navy-300" data-astro-cid-2dknxgrt>Evidence supporting damages calculation</p> ` })} </div> </div> </section>  <section class="py-8 border-t border-navy-700/50" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <h3 class="text-lg font-display font-semibold text-white mb-6" data-astro-cid-2dknxgrt>Evidence Status Key</h3> <div class="flex flex-wrap gap-6" data-astro-cid-2dknxgrt> <div class="flex items-center gap-3" data-astro-cid-2dknxgrt> <div class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium" data-astro-cid-2dknxgrt> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2dknxgrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2dknxgrt></path> </svg>
VERIFIED
</div> <span class="text-sm text-navy-400" data-astro-cid-2dknxgrt>Confirmed by independent documentary evidence</span> </div> <div class="flex items-center gap-3" data-astro-cid-2dknxgrt> <div class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium" data-astro-cid-2dknxgrt> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2dknxgrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2dknxgrt></path> </svg>
SUPPORTED
</div> <span class="text-sm text-navy-400" data-astro-cid-2dknxgrt>Consistent with evidence but not definitively proven</span> </div> <div class="flex items-center gap-3" data-astro-cid-2dknxgrt> <div class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium" data-astro-cid-2dknxgrt> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2dknxgrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2dknxgrt></path> </svg>
CONTRADICTED
</div> <span class="text-sm text-navy-400" data-astro-cid-2dknxgrt>Evidence disproves this claim</span> </div> </div> </div> </section>  <section class="py-4 border-t border-navy-700/30" data-astro-cid-2dknxgrt> <div class="container-wide" data-astro-cid-2dknxgrt> <p class="text-xs text-navy-600 text-center" data-astro-cid-2dknxgrt>
Registry last updated: ${metadata.lastUpdated} · Highest Finding ID: ${metadata.highestFindingId} </p> </div> </section> ` })}  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings.astro";
const $$url = "/thomson-case-exhibit/findings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Findings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
