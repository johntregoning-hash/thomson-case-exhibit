/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTransition, e as renderTemplate, F as Fragment } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { $ as $$Badge, a as $$BaseLayout } from '../chunks/Badge_DL3EHgdM.mjs';
/* empty css                                  */
/* empty css                                  */
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect, useCallback } from 'react';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import { a as actorsData } from '../chunks/actors_C6P3dApj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$ActorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ActorCard;
  const { actor, compact = false } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const classificationStyles = {
    "DEFENDANT": {
      bg: "bg-red-500/5",
      border: "border-red-500/30 hover:border-red-500/50",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      iconBg: "bg-red-500/20 text-red-400",
      label: "Potential Defendant",
      badgeVariant: "breach"
    },
    "WITNESS_FAVOURABLE": {
      bg: "bg-green-500/5",
      border: "border-green-500/30 hover:border-green-500/50",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      iconBg: "bg-green-500/20 text-green-400",
      label: "Favourable Witness",
      badgeVariant: "vindication"
    },
    "CURRENT_CARE": {
      bg: "bg-green-500/5",
      border: "border-green-500/30 hover:border-green-500/50",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      iconBg: "bg-green-500/20 text-green-400",
      label: "Current Care",
      badgeVariant: "vindication"
    },
    "WITNESS_ADVERSE": {
      bg: "bg-amber-500/5",
      border: "border-amber-500/30 hover:border-amber-500/50",
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      iconBg: "bg-amber-500/20 text-amber-400",
      label: "Adverse Witness",
      badgeVariant: "discrepancy"
    },
    "ADMINISTRATIVE": {
      bg: "bg-slate-500/5",
      border: "border-slate-500/30 hover:border-slate-500/50",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      iconBg: "bg-slate-500/20 text-slate-400",
      label: "Administrative",
      badgeVariant: "default"
    }
  };
  const style = classificationStyles[actor.classification] || classificationStyles["ADMINISTRATIVE"];
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "moderate":
        return "bg-yellow-500";
      default:
        return "bg-navy-500";
    }
  };
  const getVerificationBadge = (verification) => {
    if (!verification) return null;
    if (verification.includes("DOCUMENTARY")) return { label: "Documentary", color: "text-green-400 bg-green-500/10" };
    if (verification.includes("TESTIMONY")) return { label: "Testimony", color: "text-blue-400 bg-blue-500/10" };
    if (verification.includes("DISPROV")) return { label: "Disproved", color: "text-red-400 bg-red-500/10" };
    return null;
  };
  return renderTemplate`${maybeRenderHead()}<article class="actor-card group relative"${addAttribute(actor.id, "data-actor-id")}${addAttribute(actor.classification, "data-classification")} data-astro-cid-htql6uh2${addAttribute(renderTransition($$result, "ill3ji4n", "", `actor-${actor.id}`), "data-astro-transition-scope")}> <div${addAttribute([
    "relative bg-navy-800/50 backdrop-blur-xl border rounded-2xl transition-all duration-300",
    "group-hover:bg-navy-800/70 group-hover:shadow-xl",
    style.border,
    compact ? "p-4" : "p-6"
  ], "class:list")} data-astro-cid-htql6uh2> <!-- Critical Indicator --> ${actor.critical && renderTemplate`<div class="absolute -top-2 -right-2 z-10" data-astro-cid-htql6uh2> <div class="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/30 animate-pulse" data-astro-cid-htql6uh2> <svg class="w-4 h-4 text-navy-900" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-htql6uh2> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-htql6uh2></path> </svg> </div> </div>`} <!-- Header --> <div class="flex items-start gap-4" data-astro-cid-htql6uh2> <!-- Avatar/Icon --> <div${addAttribute([
    "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center",
    style.iconBg
  ], "class:list")} data-astro-cid-htql6uh2> <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-htql6uh2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(style.icon, "d")} data-astro-cid-htql6uh2></path> </svg> </div> <!-- Info --> <div class="flex-1 min-w-0" data-astro-cid-htql6uh2> <div class="flex items-start justify-between gap-2" data-astro-cid-htql6uh2> <div data-astro-cid-htql6uh2> <h3 class="text-lg font-display font-semibold text-white group-hover:text-gold-400 transition-colors" data-astro-cid-htql6uh2> ${actor.name} </h3> <p class="text-sm text-navy-400 mt-0.5" data-astro-cid-htql6uh2>${actor.role}</p> </div> <span class="text-xs font-mono text-navy-600" data-astro-cid-htql6uh2>${actor.id}</span> </div> <!-- Organisation --> <div class="mt-2 flex items-center gap-2 flex-wrap" data-astro-cid-htql6uh2> <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-navy-700/50 text-xs text-navy-300" data-astro-cid-htql6uh2> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-htql6uh2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-htql6uh2></path> </svg> ${actor.organisation} </span> ${actor.gmcNumber && actor.gmcNumber !== "To be obtained" && renderTemplate`<span class="text-xs text-navy-500" data-astro-cid-htql6uh2>GMC: ${actor.gmcNumber}</span>`} </div> </div> </div> <!-- Classification Badge --> <div class="mt-4 flex items-center gap-2" data-astro-cid-htql6uh2> ${renderComponent($$result, "Badge", $$Badge, { "variant": style.badgeVariant, "data-astro-cid-htql6uh2": true }, { "default": ($$result2) => renderTemplate`${style.label}` })} ${actor.isAdministrative && renderTemplate`<span class="text-xs text-navy-500 bg-navy-700/30 px-2 py-0.5 rounded" data-astro-cid-htql6uh2>Non-clinical</span>`} </div> ${!compact && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-htql6uh2": true }, { "default": ($$result2) => renderTemplate`  ${actor.legalSignificance && renderTemplate`<div class="mt-4 p-3 bg-navy-900/50 rounded-lg" data-astro-cid-htql6uh2> <p class="text-sm text-navy-300 leading-relaxed line-clamp-3" data-astro-cid-htql6uh2> ${actor.legalSignificance} </p> </div>`} ${actor.conduct && actor.conduct.length > 0 && renderTemplate`<div class="mt-4" data-astro-cid-htql6uh2> <h4 class="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3" data-astro-cid-htql6uh2>
Documented Conduct (${actor.conduct.length})
</h4> <div class="space-y-2" data-astro-cid-htql6uh2> ${actor.conduct.slice(0, 3).map((c) => {
    const verif = getVerificationBadge(c.verification);
    return renderTemplate`<div class="flex items-start gap-3 text-sm" data-astro-cid-htql6uh2> <div${addAttribute([
      "flex-shrink-0 w-2 h-2 rounded-full mt-1.5",
      getSeverityColor(c.severity)
    ], "class:list")} data-astro-cid-htql6uh2></div> <div class="flex-1 min-w-0" data-astro-cid-htql6uh2> <div class="flex items-center gap-2 flex-wrap" data-astro-cid-htql6uh2> <span class="text-xs text-navy-500 font-mono" data-astro-cid-htql6uh2>${c.date}</span> ${verif && renderTemplate`<span${addAttribute(["text-xs px-1.5 py-0.5 rounded", verif.color], "class:list")} data-astro-cid-htql6uh2> ${verif.label} </span>`} </div> <p class="text-navy-300 line-clamp-2 mt-0.5" data-astro-cid-htql6uh2>${c.description}</p> </div> </div>`;
  })} ${actor.conduct.length > 3 && renderTemplate`<p class="text-xs text-navy-500 pl-5" data-astro-cid-htql6uh2>
+${actor.conduct.length - 3} more documented instances
</p>`} </div> </div>`} ${actor.notes && renderTemplate`<div class="mt-4 p-2 bg-gold-500/10 rounded-lg border border-gold-500/20" data-astro-cid-htql6uh2> <p class="text-xs text-gold-400 flex items-start gap-2" data-astro-cid-htql6uh2> <svg class="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-htql6uh2> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-astro-cid-htql6uh2></path> </svg> ${actor.notes} </p> </div>`}` })}`} <!-- Related Findings --> ${actor.relatedFindings && actor.relatedFindings.length > 0 && renderTemplate`<div class="mt-4 pt-4 border-t border-navy-700/30" data-astro-cid-htql6uh2> <div class="flex items-center justify-between" data-astro-cid-htql6uh2> <div class="flex items-center gap-2 flex-wrap" data-astro-cid-htql6uh2> <span class="text-xs text-navy-500" data-astro-cid-htql6uh2>Related:</span> ${actor.relatedFindings.slice(0, compact ? 3 : 5).map((f) => renderTemplate`<a${addAttribute(getHref(`/findings/${f.toLowerCase()}`), "href")} class="text-xs font-mono px-1.5 py-0.5 rounded bg-navy-700/50 text-gold-500 hover:bg-navy-600/50 hover:text-gold-400 transition-colors" data-astro-cid-htql6uh2> ${f} </a>`)} ${actor.relatedFindings.length > (compact ? 3 : 5) && renderTemplate`<span class="text-xs text-navy-500" data-astro-cid-htql6uh2>+${actor.relatedFindings.length - (compact ? 3 : 5)}</span>`} </div> </div> </div>`} </div> </article> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/actors/ActorCard.astro", "self");

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$ActorFilters = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ActorFilters;
  const { classifications, organisations, totalActors } = Astro2.props;
  const classificationStyles = {
    "DEFENDANT": { bg: "bg-red-500/10", bgActive: "bg-red-500", text: "text-red-400", textActive: "text-white" },
    "WITNESS_FAVOURABLE": { bg: "bg-green-500/10", bgActive: "bg-green-500", text: "text-green-400", textActive: "text-white" },
    "CURRENT_CARE": { bg: "bg-green-500/10", bgActive: "bg-green-500", text: "text-green-400", textActive: "text-white" },
    "WITNESS_ADVERSE": { bg: "bg-amber-500/10", bgActive: "bg-amber-500", text: "text-amber-400", textActive: "text-white" },
    "ADMINISTRATIVE": { bg: "bg-slate-500/10", bgActive: "bg-slate-500", text: "text-slate-400", textActive: "text-white" }
  };
  const classificationLabels = {
    "DEFENDANT": "Defendants",
    "WITNESS_FAVOURABLE": "Favourable",
    "CURRENT_CARE": "Current Care",
    "WITNESS_ADVERSE": "Adverse",
    "ADMINISTRATIVE": "Admin"
  };
  return renderTemplate`${maybeRenderHead()}<div class="actor-filters sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 bg-navy-900/80 backdrop-blur-2xl border-b border-navy-700/50" data-astro-cid-j5p54dh3> <div class="flex flex-col gap-4" data-astro-cid-j5p54dh3> <!-- Top Row: Search + View Toggle --> <div class="flex flex-col sm:flex-row gap-3" data-astro-cid-j5p54dh3> <!-- Search Input --> <div class="relative flex-1" data-astro-cid-j5p54dh3> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j5p54dh3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-j5p54dh3></path> </svg> <input type="text" id="actor-search" placeholder="Search by name, role, or organisation..." class="w-full pl-10 pr-4 py-2.5 bg-navy-800/60 border border-navy-700/50 rounded-xl text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all" data-astro-cid-j5p54dh3> </div> <!-- Organisation Dropdown --> <div class="relative" data-astro-cid-j5p54dh3> <select id="organisation-filter" class="appearance-none pl-4 pr-10 py-2.5 bg-navy-800/60 border border-navy-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all cursor-pointer min-w-[180px]" data-astro-cid-j5p54dh3> <option value="ALL" data-astro-cid-j5p54dh3>All Organisations</option> ${organisations.map((org) => renderTemplate`<option${addAttribute(org, "value")} data-astro-cid-j5p54dh3>${org.length > 30 ? org.substring(0, 27) + "..." : org}</option>`)} </select> <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j5p54dh3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j5p54dh3></path> </svg> </div> <!-- View Toggle --> <div class="flex items-center gap-1 p-1 bg-navy-800/60 border border-navy-700/50 rounded-xl" data-astro-cid-j5p54dh3> <button id="view-grid" class="p-2 rounded-lg bg-gold-500/20 text-gold-400 transition-all" title="Card View" data-astro-cid-j5p54dh3> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j5p54dh3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-j5p54dh3></path> </svg> </button> <button id="view-network" class="p-2 rounded-lg text-navy-500 hover:text-white transition-all" title="Network View" data-astro-cid-j5p54dh3> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j5p54dh3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-astro-cid-j5p54dh3></path> </svg> </button> </div> </div> <!-- Bottom Row: Classification Pills + Results Count --> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3" data-astro-cid-j5p54dh3> <!-- Classification Pills --> <div class="flex flex-wrap gap-2" id="classification-filters" data-astro-cid-j5p54dh3> <button data-classification="ALL" class="classification-pill px-3 py-1.5 rounded-full text-xs font-medium bg-gold-500 text-navy-900 transition-all" data-astro-cid-j5p54dh3>
All
</button> ${classifications.map((cls) => {
    const style = classificationStyles[cls] || { bg: "bg-navy-700/50", text: "text-navy-400"};
    const label = classificationLabels[cls] || cls;
    return renderTemplate`<button${addAttribute(cls, "data-classification")}${addAttribute([
      "classification-pill px-3 py-1.5 rounded-full text-xs font-medium transition-all border border-transparent",
      style.bg,
      style.text,
      "hover:border-current"
    ], "class:list")} data-astro-cid-j5p54dh3> ${label} </button>`;
  })} </div> <!-- Results Count + Critical Toggle --> <div class="flex items-center gap-4" data-astro-cid-j5p54dh3> <!-- Critical Only Toggle --> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-j5p54dh3> <input type="checkbox" id="critical-only" class="w-4 h-4 rounded bg-navy-800 border-navy-600 text-gold-500 focus:ring-gold-500/50 focus:ring-offset-0" data-astro-cid-j5p54dh3> <span class="text-sm text-navy-400" data-astro-cid-j5p54dh3>Critical only</span> </label> <!-- Results Count --> <div class="flex items-center gap-2 text-sm" data-astro-cid-j5p54dh3> <span class="text-navy-500" data-astro-cid-j5p54dh3>Showing</span> <span id="results-count" class="font-mono text-gold-500" data-astro-cid-j5p54dh3>${totalActors}</span> <span class="text-navy-500" data-astro-cid-j5p54dh3>actors</span> </div> <!-- Clear Filters Button --> <button id="clear-filters" class="hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-all" data-astro-cid-j5p54dh3> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j5p54dh3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-j5p54dh3></path> </svg>
Clear
</button> </div> </div> </div> </div>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/actors/ActorFilters.astro", void 0);

function ActorNetwork({ actors, basePath }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isSimulating, setIsSimulating] = useState(true);
  const animationRef = useRef();
  const getNodeColor = (node) => {
    if (node.type === "organisation") return "#6366f1";
    if (node.type === "finding") return "#d4af37";
    switch (node.classification) {
      case "DEFENDANT":
        return "#ef4444";
      case "WITNESS_FAVOURABLE":
      case "CURRENT_CARE":
        return "#22c55e";
      case "WITNESS_ADVERSE":
        return "#f59e0b";
      default:
        return "#64748b";
    }
  };
  useEffect(() => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const actorNodes = actors.map((actor, i) => {
      const angle = i / actors.length * 2 * Math.PI;
      const radius = 150 + Math.random() * 100;
      return {
        id: actor.id,
        type: "actor",
        label: actor.name,
        classification: actor.classification,
        critical: actor.critical,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: actor.critical ? 30 : 24
      };
    });
    const organisations = [...new Set(actors.map((a) => a.organisation))];
    const orgNodes = organisations.map((org, i) => {
      const angle = i / organisations.length * 2 * Math.PI;
      return {
        id: `org-${org}`,
        type: "organisation",
        label: org.length > 25 ? org.substring(0, 22) + "..." : org,
        x: centerX + Math.cos(angle) * 50,
        y: centerY + Math.sin(angle) * 50,
        vx: 0,
        vy: 0,
        radius: 20
      };
    });
    const orgLinks = actors.map((actor) => ({
      source: actor.id,
      target: `org-${actor.organisation}`,
      type: "works_at"
    }));
    const topFindings = /* @__PURE__ */ new Map();
    actors.forEach((actor) => {
      actor.relatedFindings?.forEach((f) => {
        topFindings.set(f, (topFindings.get(f) || 0) + 1);
      });
    });
    const sharedFindings = [...topFindings.entries()].filter(([_, count]) => count >= 2).slice(0, 15).map(([id]) => id);
    const findingNodes = sharedFindings.map((f, i) => {
      const angle = i / sharedFindings.length * 2 * Math.PI + Math.PI / 4;
      const radius = 280 + Math.random() * 40;
      return {
        id: f,
        type: "finding",
        label: f,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: 16
      };
    });
    const findingLinks = [];
    actors.forEach((actor) => {
      actor.relatedFindings?.forEach((f) => {
        if (sharedFindings.includes(f)) {
          findingLinks.push({
            source: actor.id,
            target: f,
            type: "related_finding"
          });
        }
      });
    });
    setNodes([...actorNodes, ...orgNodes, ...findingNodes]);
    setLinks([...orgLinks, ...findingLinks]);
  }, [actors, dimensions]);
  useEffect(() => {
    if (!isSimulating || nodes.length === 0) return;
    const simulate = () => {
      setNodes((prevNodes) => {
        const newNodes = prevNodes.map((node) => ({ ...node }));
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        newNodes.forEach((node, i) => {
          const dx = centerX - node.x;
          const dy = centerY - node.y;
          node.vx += dx * 1e-3;
          node.vy += dy * 1e-3;
          newNodes.forEach((other, j) => {
            if (i !== j) {
              const diffX = node.x - other.x;
              const diffY = node.y - other.y;
              const dist = Math.sqrt(diffX * diffX + diffY * diffY) || 1;
              const minDist = node.radius + other.radius + 30;
              if (dist < minDist) {
                const force = (minDist - dist) / dist * 0.5;
                node.vx += diffX * force;
                node.vy += diffY * force;
              }
            }
          });
        });
        links.forEach((link) => {
          const source = newNodes.find((n) => n.id === link.source);
          const target = newNodes.find((n) => n.id === link.target);
          if (source && target) {
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const idealDist = link.type === "works_at" ? 100 : 150;
            const force = (dist - idealDist) * 0.01;
            source.vx += dx / dist * force;
            source.vy += dy / dist * force;
            target.vx -= dx / dist * force;
            target.vy -= dy / dist * force;
          }
        });
        newNodes.forEach((node) => {
          node.vx *= 0.9;
          node.vy *= 0.9;
          node.x += node.vx;
          node.y += node.vy;
          const margin = node.radius + 10;
          node.x = Math.max(margin, Math.min(dimensions.width - margin, node.x));
          node.y = Math.max(margin, Math.min(dimensions.height - margin, node.y));
        });
        return newNodes;
      });
      animationRef.current = requestAnimationFrame(simulate);
    };
    animationRef.current = requestAnimationFrame(simulate);
    const timeout = setTimeout(() => {
      setIsSimulating(false);
    }, 5e3);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeout);
    };
  }, [isSimulating, nodes.length, links, dimensions]);
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: Math.min(rect.width * 0.75, 600)
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const getConnectedNodes = useCallback((nodeId) => {
    const connected = /* @__PURE__ */ new Set();
    links.forEach((link) => {
      if (link.source === nodeId) connected.add(link.target);
      if (link.target === nodeId) connected.add(link.source);
    });
    return connected;
  }, [links]);
  const activeNode = selectedNode || hoveredNode;
  const connectedNodes = activeNode ? getConnectedNodes(activeNode) : /* @__PURE__ */ new Set();
  const handleNodeClick = (node) => {
    if (node.type === "actor") {
      setSelectedNode(selectedNode === node.id ? null : node.id);
    } else if (node.type === "finding") {
      window.location.href = `${basePath}/findings/${node.id.toLowerCase()}`;
    }
  };
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative w-full rounded-2xl bg-navy-800/30 border border-navy-700/50 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 z-10 flex flex-wrap gap-3 text-xs", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-red-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-navy-300", children: "Defendant" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-green-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-navy-300", children: "Favourable" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-indigo-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-navy-300", children: "Organisation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#d4af37]" }),
        /* @__PURE__ */ jsx("span", { className: "text-navy-300", children: "Finding" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 z-10 flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsSimulating(true),
          className: "px-3 py-1.5 text-xs font-medium text-navy-300 bg-navy-900/80 backdrop-blur rounded-lg hover:bg-navy-800 transition-colors",
          children: isSimulating ? "Simulating..." : "Restart"
        }
      ),
      selectedNode && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSelectedNode(null),
          className: "px-3 py-1.5 text-xs font-medium text-gold-400 bg-navy-900/80 backdrop-blur rounded-lg hover:bg-navy-800 transition-colors",
          children: "Clear Selection"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        ref: svgRef,
        width: dimensions.width,
        height: dimensions.height,
        className: "cursor-move",
        children: [
          /* @__PURE__ */ jsx("g", { className: "links", children: links.map((link, i) => {
            const source = nodes.find((n) => n.id === link.source);
            const target = nodes.find((n) => n.id === link.target);
            if (!source || !target) return null;
            const isHighlighted = activeNode && (link.source === activeNode || link.target === activeNode);
            const opacity = activeNode ? isHighlighted ? 0.8 : 0.1 : 0.3;
            return /* @__PURE__ */ jsx(
              "line",
              {
                x1: source.x,
                y1: source.y,
                x2: target.x,
                y2: target.y,
                stroke: link.type === "works_at" ? "#6366f1" : "#d4af37",
                strokeWidth: isHighlighted ? 2 : 1,
                strokeOpacity: opacity,
                strokeDasharray: link.type === "related_finding" ? "4,4" : void 0
              },
              `link-${i}`
            );
          }) }),
          /* @__PURE__ */ jsx("g", { className: "nodes", children: nodes.map((node) => {
            const isActive = node.id === activeNode;
            const isConnected = connectedNodes.has(node.id);
            const opacity = activeNode ? isActive || isConnected ? 1 : 0.3 : 1;
            const scale = isActive ? 1.2 : 1;
            return /* @__PURE__ */ jsxs(
              "g",
              {
                transform: `translate(${node.x}, ${node.y})`,
                style: {
                  opacity,
                  transition: "opacity 0.3s",
                  cursor: "pointer"
                },
                onClick: () => handleNodeClick(node),
                onMouseEnter: () => setHoveredNode(node.id),
                onMouseLeave: () => setHoveredNode(null),
                children: [
                  node.critical && /* @__PURE__ */ jsx(
                    "circle",
                    {
                      r: node.radius + 8,
                      fill: "none",
                      stroke: "#d4af37",
                      strokeWidth: 2,
                      strokeOpacity: 0.4,
                      className: "animate-pulse"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "circle",
                    {
                      r: node.radius * scale,
                      fill: getNodeColor(node),
                      stroke: isActive ? "#d4af37" : "#1a2744",
                      strokeWidth: isActive ? 3 : 2,
                      style: { transition: "r 0.3s, stroke 0.3s" }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "text",
                    {
                      textAnchor: "middle",
                      dy: node.radius + 14,
                      fill: "#c8d4e8",
                      fontSize: 10,
                      fontFamily: "Inter, sans-serif",
                      style: {
                        pointerEvents: "none",
                        opacity: isActive || isConnected ? 1 : 0.7
                      },
                      children: node.label.length > 15 ? node.label.substring(0, 12) + "..." : node.label
                    }
                  ),
                  node.type === "organisation" && /* @__PURE__ */ jsx(
                    "text",
                    {
                      textAnchor: "middle",
                      dy: 4,
                      fill: "white",
                      fontSize: 12,
                      style: { pointerEvents: "none" },
                      children: "🏥"
                    }
                  ),
                  node.type === "finding" && /* @__PURE__ */ jsx(
                    "text",
                    {
                      textAnchor: "middle",
                      dy: 4,
                      fill: "#0a0f1a",
                      fontSize: 9,
                      fontWeight: "bold",
                      fontFamily: "JetBrains Mono, monospace",
                      style: { pointerEvents: "none" },
                      children: node.label
                    }
                  ),
                  node.type === "actor" && /* @__PURE__ */ jsx(
                    "text",
                    {
                      textAnchor: "middle",
                      dy: 4,
                      fill: "white",
                      fontSize: 11,
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      style: { pointerEvents: "none" },
                      children: node.label.split(" ").map((n) => n[0]).join("").substring(0, 2)
                    }
                  )
                ]
              },
              node.id
            );
          }) })
        ]
      }
    ),
    selectedNode && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4 p-4 bg-navy-900/95 backdrop-blur-xl rounded-xl border border-navy-700/50", children: (() => {
      const actor = actors.find((a) => a.id === selectedNode);
      if (!actor) return null;
      return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center ${actor.classification === "DEFENDANT" ? "bg-red-500/20 text-red-400" : actor.classification === "WITNESS_FAVOURABLE" || actor.classification === "CURRENT_CARE" ? "bg-green-500/20 text-green-400" : "bg-slate-500/20 text-slate-400"}`, children: /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: actor.name.split(" ").map((n) => n[0]).join("").substring(0, 2) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: actor.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-navy-400", children: actor.role }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-500 mt-1", children: actor.organisation }),
          actor.relatedFindings && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: actor.relatedFindings.slice(0, 6).map((f) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `${basePath}/findings/${f.toLowerCase()}`,
              className: "text-xs font-mono px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 transition-colors",
              children: f
            },
            f
          )) })
        ] })
      ] });
    })() })
  ] });
}

const $$Actors = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const allActors = actorsData.actors || [];
  const metadata = actorsData.metadata;
  const organisationSummary = actorsData.organisationSummary || {};
  const classifications = metadata.classifications || [];
  const organisations = [...new Set(allActors.map((a) => a.organisation))];
  const stats = {
    total: allActors.length,
    defendants: allActors.filter((a) => a.classification === "DEFENDANT").length,
    favourable: allActors.filter((a) => a.classification === "WITNESS_FAVOURABLE" || a.classification === "CURRENT_CARE").length,
    critical: allActors.filter((a) => a.critical).length,
    organisations: organisations.length
  };
  const defendants = allActors.filter((a) => a.classification === "DEFENDANT");
  const favourableWitnesses = allActors.filter((a) => a.classification === "WITNESS_FAVOURABLE" || a.classification === "CURRENT_CARE");
  const adverseWitnesses = allActors.filter((a) => a.classification === "WITNESS_ADVERSE");
  const administrative = allActors.filter((a) => a.classification === "ADMINISTRATIVE");
  const networkActors = allActors.map((a) => ({
    id: a.id,
    name: a.name,
    role: a.role,
    organisation: a.organisation,
    classification: a.classification,
    critical: a.critical,
    relatedFindings: a.relatedFindings
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Actors", "description": "Key individuals in the Thomson clinical negligence case with relationship network", "data-astro-cid-5wz2cemd": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-12 lg:py-16 overflow-hidden" data-astro-cid-5wz2cemd> <div class="absolute inset-0 bg-gradient-to-b from-navy-800/30 to-transparent pointer-events-none" data-astro-cid-5wz2cemd></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" data-astro-cid-5wz2cemd></div> <div class="container-wide relative" data-astro-cid-5wz2cemd> <div class="max-w-4xl" data-astro-cid-5wz2cemd> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-sm mb-6" data-astro-cid-5wz2cemd> <a${addAttribute(getHref("/"), "href")} class="text-navy-500 hover:text-white transition-colors" data-astro-cid-5wz2cemd>Home</a> <svg class="w-4 h-4 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5wz2cemd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-5wz2cemd></path> </svg> <span class="text-gold-500" data-astro-cid-5wz2cemd>Key Actors</span> </nav> <h1 class="text-4xl lg:text-5xl font-display font-bold text-white mb-4" data-astro-cid-5wz2cemd>
Case<br data-astro-cid-5wz2cemd> <span class="text-gold-500" data-astro-cid-5wz2cemd>Actors</span> </h1> <p class="text-lg text-navy-300 leading-relaxed max-w-2xl" data-astro-cid-5wz2cemd> <strong class="text-white" data-astro-cid-5wz2cemd>${stats.total}</strong> individuals documented across
<strong class="text-white" data-astro-cid-5wz2cemd>${stats.organisations}</strong> organisations.
          Each actor's documented conduct is verified by contemporaneous evidence and linked to relevant findings.
</p> </div> </div> </section>  <section class="py-6 border-y border-navy-700/50 bg-navy-800/20" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6" data-astro-cid-5wz2cemd> <div class="text-center" data-astro-cid-5wz2cemd> <p class="text-3xl lg:text-4xl font-display font-bold text-white" data-astro-cid-5wz2cemd>${stats.total}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-5wz2cemd>Total Actors</p> </div> <div class="text-center" data-astro-cid-5wz2cemd> <p class="text-3xl lg:text-4xl font-display font-bold text-red-400" data-astro-cid-5wz2cemd>${stats.defendants}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-5wz2cemd>Defendants</p> </div> <div class="text-center" data-astro-cid-5wz2cemd> <p class="text-3xl lg:text-4xl font-display font-bold text-green-400" data-astro-cid-5wz2cemd>${stats.favourable}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-5wz2cemd>Favourable</p> </div> <div class="text-center" data-astro-cid-5wz2cemd> <p class="text-3xl lg:text-4xl font-display font-bold text-gold-500" data-astro-cid-5wz2cemd>${stats.critical}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-5wz2cemd>Critical</p> </div> <div class="text-center hidden lg:block" data-astro-cid-5wz2cemd> <p class="text-3xl lg:text-4xl font-display font-bold text-indigo-400" data-astro-cid-5wz2cemd>${stats.organisations}</p> <p class="text-sm text-navy-500 uppercase tracking-wider mt-1" data-astro-cid-5wz2cemd>Organisations</p> </div> </div> </div> </section>  <div class="container-wide" data-astro-cid-5wz2cemd> ${renderComponent($$result2, "ActorFilters", $$ActorFilters, { "classifications": classifications, "organisations": organisations, "totalActors": stats.total, "data-astro-cid-5wz2cemd": true })} </div>  <section id="actors-network" class="hidden py-8 lg:py-12" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <div class="mb-6" data-astro-cid-5wz2cemd> <h2 class="text-xl font-display font-semibold text-white mb-2" data-astro-cid-5wz2cemd>Relationship Network</h2> <p class="text-sm text-navy-400" data-astro-cid-5wz2cemd>
Click actors to see connections. Gold nodes are shared findings linking multiple actors.
</p> </div> ${renderComponent($$result2, "ActorNetwork", ActorNetwork, { "client:load": true, "actors": networkActors, "basePath": base, "client:component-hydration": "load", "client:component-path": "@components/actors/ActorNetwork", "client:component-export": "default", "data-astro-cid-5wz2cemd": true })} </div> </section>  <section id="actors-grid" class="py-8 lg:py-12" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <!-- Potential Defendants Section --> ${defendants.length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-5wz2cemd> <div class="flex items-center gap-3 mb-6" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-red-500" data-astro-cid-5wz2cemd></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-5wz2cemd>Potential Defendants</h2> <span class="text-sm text-navy-500" data-astro-cid-5wz2cemd>(${defendants.length})</span> </div> <p class="text-navy-400 mb-6 max-w-2xl" data-astro-cid-5wz2cemd>
Healthcare professionals and staff whose documented actions form part of the negligence allegations.
</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-5wz2cemd> ${defendants.map((actor, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-5wz2cemd> ${renderComponent($$result2, "ActorCard", $$ActorCard, { "actor": actor, "data-astro-cid-5wz2cemd": true })} </div>`)} </div> </div>`} <!-- Favourable Witnesses Section --> ${favourableWitnesses.length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-5wz2cemd> <div class="flex items-center gap-3 mb-6" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-green-500" data-astro-cid-5wz2cemd></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-5wz2cemd>Favourable Witnesses</h2> <span class="text-sm text-navy-500" data-astro-cid-5wz2cemd>(${favourableWitnesses.length})</span> </div> <p class="text-navy-400 mb-6 max-w-2xl" data-astro-cid-5wz2cemd>
Healthcare professionals who documented objective findings, refuted psychiatric mischaracterisation,
            or advocated for appropriate care.
</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-5wz2cemd> ${favourableWitnesses.map((actor, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-5wz2cemd> ${renderComponent($$result2, "ActorCard", $$ActorCard, { "actor": actor, "data-astro-cid-5wz2cemd": true })} </div>`)} </div> </div>`} <!-- Adverse Witnesses Section (if any) --> ${adverseWitnesses.length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-5wz2cemd> <div class="flex items-center gap-3 mb-6" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-amber-500" data-astro-cid-5wz2cemd></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-5wz2cemd>Adverse Witnesses</h2> <span class="text-sm text-navy-500" data-astro-cid-5wz2cemd>(${adverseWitnesses.length})</span> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-5wz2cemd> ${adverseWitnesses.map((actor, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-5wz2cemd> ${renderComponent($$result2, "ActorCard", $$ActorCard, { "actor": actor, "data-astro-cid-5wz2cemd": true })} </div>`)} </div> </div>`} <!-- Administrative (if any and not defendants) --> ${administrative.length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-5wz2cemd> <div class="flex items-center gap-3 mb-6" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-slate-500" data-astro-cid-5wz2cemd></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-5wz2cemd>Administrative</h2> <span class="text-sm text-navy-500" data-astro-cid-5wz2cemd>(${administrative.length})</span> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-5wz2cemd> ${administrative.map((actor, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-5wz2cemd> ${renderComponent($$result2, "ActorCard", $$ActorCard, { "actor": actor, "data-astro-cid-5wz2cemd": true })} </div>`)} </div> </div>`} </div> </section>  <section class="py-12 border-t border-navy-700/50 bg-navy-800/20" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <h2 class="text-2xl font-display font-bold text-white mb-8" data-astro-cid-5wz2cemd>Organisation Summary</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-5wz2cemd> <!-- Former GP Practice --> ${organisationSummary.groveParkTerraceSurgery && renderTemplate`${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "breach", "padding": "md", "data-astro-cid-5wz2cemd": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-5wz2cemd> <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5wz2cemd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-5wz2cemd></path> </svg> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "breach", "data-astro-cid-5wz2cemd": true }, { "default": ($$result4) => renderTemplate`Primary` })} </div> <h3 class="font-display font-semibold text-white mb-1" data-astro-cid-5wz2cemd>Former GP Practice</h3> <p class="text-xs text-navy-400 mb-3" data-astro-cid-5wz2cemd>${organisationSummary.groveParkTerraceSurgery.name}</p> <div class="flex items-center gap-4 text-sm" data-astro-cid-5wz2cemd> <span class="text-red-400 font-semibold" data-astro-cid-5wz2cemd>${organisationSummary.groveParkTerraceSurgery.defendants?.length || 0} defendants</span> </div> ${organisationSummary.groveParkTerraceSurgery.note && renderTemplate`<p class="text-xs text-gold-400 mt-3 italic" data-astro-cid-5wz2cemd>${organisationSummary.groveParkTerraceSurgery.note}</p>`}` })}`} <!-- Imperial College Healthcare --> ${organisationSummary.imperialCollegeHealthcare && renderTemplate`${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-5wz2cemd": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-5wz2cemd> <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5wz2cemd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-5wz2cemd></path> </svg> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "default", "data-astro-cid-5wz2cemd": true }, { "default": ($$result4) => renderTemplate`Mixed` })} </div> <h3 class="font-display font-semibold text-white mb-1" data-astro-cid-5wz2cemd>Imperial College Healthcare</h3> <p class="text-xs text-navy-400 mb-3" data-astro-cid-5wz2cemd>${organisationSummary.imperialCollegeHealthcare.name}</p> <div class="flex items-center gap-4 text-sm" data-astro-cid-5wz2cemd> <span class="text-red-400" data-astro-cid-5wz2cemd>${organisationSummary.imperialCollegeHealthcare.potentialDefendants?.length || 0} defendants</span> <span class="text-green-400" data-astro-cid-5wz2cemd>${organisationSummary.imperialCollegeHealthcare.favourableWitnesses?.length || 0} favourable</span> </div> ` })}`} <!-- Chelsea & Westminster --> ${organisationSummary.chelseaWestminster && renderTemplate`${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md", "data-astro-cid-5wz2cemd": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-5wz2cemd> <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5wz2cemd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-5wz2cemd></path> </svg> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "vindication", "data-astro-cid-5wz2cemd": true }, { "default": ($$result4) => renderTemplate`Supportive` })} </div> <h3 class="font-display font-semibold text-white mb-1" data-astro-cid-5wz2cemd>Chelsea & Westminster</h3> <p class="text-xs text-navy-400 mb-3" data-astro-cid-5wz2cemd>${organisationSummary.chelseaWestminster.name}</p> <div class="flex items-center gap-4 text-sm" data-astro-cid-5wz2cemd> <span class="text-green-400 font-semibold" data-astro-cid-5wz2cemd>${organisationSummary.chelseaWestminster.favourableWitnesses?.length || 0} favourable</span> </div> ` })}`} <!-- Current Practice --> ${organisationSummary.currentPractice && renderTemplate`${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md", "data-astro-cid-5wz2cemd": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-5wz2cemd> <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5wz2cemd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-5wz2cemd></path> </svg> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "vindication", "data-astro-cid-5wz2cemd": true }, { "default": ($$result4) => renderTemplate`Current` })} </div> <h3 class="font-display font-semibold text-white mb-1" data-astro-cid-5wz2cemd>Current Practice</h3> <p class="text-xs text-navy-400 mb-3" data-astro-cid-5wz2cemd>${organisationSummary.currentPractice.name}</p> ${organisationSummary.currentPractice.note && renderTemplate`<p class="text-xs text-gold-400 italic" data-astro-cid-5wz2cemd>${organisationSummary.currentPractice.note}</p>`}` })}`} </div> </div> </section>  <section class="py-8 border-t border-navy-700/50" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <h3 class="text-lg font-display font-semibold text-white mb-6" data-astro-cid-5wz2cemd>Classification Key</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-5wz2cemd> <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/30" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-red-500" data-astro-cid-5wz2cemd></div> <div data-astro-cid-5wz2cemd> <p class="text-sm font-medium text-white" data-astro-cid-5wz2cemd>Defendant</p> <p class="text-xs text-navy-400" data-astro-cid-5wz2cemd>Potential defendant in claim</p> </div> </div> <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/30" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-green-500" data-astro-cid-5wz2cemd></div> <div data-astro-cid-5wz2cemd> <p class="text-sm font-medium text-white" data-astro-cid-5wz2cemd>Favourable Witness</p> <p class="text-xs text-navy-400" data-astro-cid-5wz2cemd>Evidence supports the claim</p> </div> </div> <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/30" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-green-500" data-astro-cid-5wz2cemd></div> <div data-astro-cid-5wz2cemd> <p class="text-sm font-medium text-white" data-astro-cid-5wz2cemd>Current Care</p> <p class="text-xs text-navy-400" data-astro-cid-5wz2cemd>Currently treating provider</p> </div> </div> <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/30" data-astro-cid-5wz2cemd> <div class="w-4 h-4 rounded-full bg-amber-500" data-astro-cid-5wz2cemd></div> <div data-astro-cid-5wz2cemd> <p class="text-sm font-medium text-white" data-astro-cid-5wz2cemd>Adverse Witness</p> <p class="text-xs text-navy-400" data-astro-cid-5wz2cemd>Evidence may oppose claim</p> </div> </div> </div> </div> </section>  <section class="py-4 border-t border-navy-700/30" data-astro-cid-5wz2cemd> <div class="container-wide" data-astro-cid-5wz2cemd> <div class="flex flex-wrap items-center justify-center gap-6 text-xs" data-astro-cid-5wz2cemd> <div class="flex items-center gap-2" data-astro-cid-5wz2cemd> <span class="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400" data-astro-cid-5wz2cemd>Documentary</span> <span class="text-navy-500" data-astro-cid-5wz2cemd>Verified by documents</span> </div> <div class="flex items-center gap-2" data-astro-cid-5wz2cemd> <span class="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400" data-astro-cid-5wz2cemd>Testimony</span> <span class="text-navy-500" data-astro-cid-5wz2cemd>Witness statement</span> </div> <div class="flex items-center gap-2" data-astro-cid-5wz2cemd> <span class="px-1.5 py-0.5 rounded bg-red-500/10 text-red-400" data-astro-cid-5wz2cemd>Disproved</span> <span class="text-navy-500" data-astro-cid-5wz2cemd>Contradicted by evidence</span> </div> </div> </div> </section> ` })} `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/actors.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/actors.astro";
const $$url = "/thomson-case-exhibit/actors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Actors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
