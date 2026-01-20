/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, e as renderTemplate } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_rI3dqb29.mjs';
import { $ as $$Badge, a as $$BaseLayout } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
/* empty css                                  */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$EssayCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EssayCard;
  const { essay, featured = false } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const categoryStyles = {
    "BREACH": {
      variant: "breach",
      bg: "bg-gradient-to-br from-red-500/5 via-navy-800/50 to-navy-800/50",
      border: "border-red-500/30 hover:border-red-500/50",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      iconColor: "text-red-400"
    },
    "CAUSATION": {
      variant: "causation",
      bg: "bg-gradient-to-br from-purple-500/5 via-navy-800/50 to-navy-800/50",
      border: "border-purple-500/30 hover:border-purple-500/50",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      iconColor: "text-purple-400"
    },
    "VINDICATION": {
      variant: "vindication",
      bg: "bg-gradient-to-br from-green-500/5 via-navy-800/50 to-navy-800/50",
      border: "border-green-500/30 hover:border-green-500/50",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      iconColor: "text-green-400"
    },
    "PROCEDURAL": {
      variant: "procedural",
      bg: "bg-gradient-to-br from-cyan-500/5 via-navy-800/50 to-navy-800/50",
      border: "border-cyan-500/30 hover:border-cyan-500/50",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      iconColor: "text-cyan-400"
    }
  };
  const style = categoryStyles[essay.category] || {
    variant: "default",
    bg: "bg-navy-800/50",
    border: "border-navy-700/50 hover:border-navy-600/50",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    iconColor: "text-navy-400"
  };
  const wordCount = (essay.summary?.split(" ").length || 0) + (essay.keyArguments?.join(" ").split(" ").length || 0);
  const readingTime = Math.max(5, Math.ceil(wordCount / 200) + 3);
  return renderTemplate`${maybeRenderHead()}<article class="essay-card group relative"${addAttribute(essay.id, "data-essay-id")}${addAttribute(essay.category, "data-category")} data-astro-cid-54dbqjd4> <div${addAttribute([
    "relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
    "hover:shadow-xl hover:shadow-navy-900/50",
    style.bg,
    style.border,
    featured ? "p-8" : "p-6"
  ], "class:list")} data-astro-cid-54dbqjd4> <!-- Critical Badge --> ${essay.critical && renderTemplate`<div class="absolute top-4 right-4 z-10" data-astro-cid-54dbqjd4> <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold border border-gold-500/30" data-astro-cid-54dbqjd4> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-54dbqjd4> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-54dbqjd4></path> </svg>
CRITICAL
</div> </div>`} <!-- Category Icon --> <div${addAttribute([
    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
    `bg-${style.iconColor.replace("text-", "")}/10`
  ], "class:list")} data-astro-cid-54dbqjd4> <svg${addAttribute(["w-6 h-6", style.iconColor], "class:list")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-54dbqjd4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(style.icon, "d")} data-astro-cid-54dbqjd4></path> </svg> </div> <!-- Header --> <div class="flex items-start justify-between gap-4 mb-4" data-astro-cid-54dbqjd4> ${renderComponent($$result, "Badge", $$Badge, { "variant": style.variant, "data-astro-cid-54dbqjd4": true }, { "default": ($$result2) => renderTemplate`${essay.category}` })} <div class="flex items-center gap-3 text-xs text-navy-500" data-astro-cid-54dbqjd4> <span class="flex items-center gap-1" data-astro-cid-54dbqjd4> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-54dbqjd4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-54dbqjd4></path> </svg> ${readingTime} min read
</span> <span data-astro-cid-54dbqjd4>${essay.date}</span> </div> </div> <!-- Title --> <h3${addAttribute([
    "font-display font-bold text-white mb-2 group-hover:text-gold-400 transition-colors leading-tight",
    featured ? "text-2xl" : "text-xl"
  ], "class:list")} data-astro-cid-54dbqjd4> ${essay.title} </h3> <!-- Subtitle --> ${essay.subtitle && renderTemplate`<p${addAttribute([
    "text-navy-400 mb-4 leading-relaxed",
    featured ? "text-base" : "text-sm"
  ], "class:list")} data-astro-cid-54dbqjd4> ${essay.subtitle} </p>`} <!-- Summary --> <p class="text-sm text-navy-300 mb-6 leading-relaxed line-clamp-3" data-astro-cid-54dbqjd4> ${essay.summary} </p> <!-- Key Arguments Preview (featured only) --> ${featured && essay.keyArguments && essay.keyArguments.length > 0 && renderTemplate`<div class="mb-6 p-4 bg-navy-900/50 rounded-xl border border-navy-700/30" data-astro-cid-54dbqjd4> <h4 class="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3" data-astro-cid-54dbqjd4>Key Arguments</h4> <ul class="space-y-2" data-astro-cid-54dbqjd4> ${essay.keyArguments.slice(0, 3).map((arg) => renderTemplate`<li class="flex items-start gap-2 text-sm text-navy-300" data-astro-cid-54dbqjd4> <svg${addAttribute(["w-4 h-4 mt-0.5 flex-shrink-0", style.iconColor], "class:list")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-54dbqjd4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-54dbqjd4></path> </svg> <span class="line-clamp-1" data-astro-cid-54dbqjd4>${arg}</span> </li>`)} ${essay.keyArguments.length > 3 && renderTemplate`<li class="text-xs text-navy-500 pl-6" data-astro-cid-54dbqjd4>+${essay.keyArguments.length - 3} more arguments</li>`} </ul> </div>`} <!-- Related Findings --> ${essay.keyFindings && essay.keyFindings.length > 0 && renderTemplate`<div class="flex items-center gap-2 flex-wrap relative z-20" data-astro-cid-54dbqjd4> <span class="text-xs text-navy-500" data-astro-cid-54dbqjd4>Related:</span> ${essay.keyFindings.slice(0, featured ? 6 : 4).map((findingId) => renderTemplate`<a${addAttribute(getHref(`/findings/${findingId.toLowerCase()}`), "href")} class="text-xs font-mono px-2 py-0.5 rounded bg-navy-700/50 text-gold-500 hover:bg-navy-600/50 hover:text-gold-400 transition-colors" data-astro-cid-54dbqjd4> ${findingId} </a>`)} ${essay.keyFindings.length > (featured ? 6 : 4) && renderTemplate`<span class="text-xs text-navy-500" data-astro-cid-54dbqjd4>+${essay.keyFindings.length - (featured ? 6 : 4)}</span>`} </div>`} <!-- Version Badge --> ${essay.version && renderTemplate`<div class="absolute bottom-4 right-4" data-astro-cid-54dbqjd4> <span class="text-xs text-navy-600 font-mono" data-astro-cid-54dbqjd4>v${essay.version}</span> </div>`} <!-- Hover Arrow --> <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-54dbqjd4> <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-54dbqjd4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-54dbqjd4></path> </svg> </div> <!-- Full card link overlay --> <a${addAttribute(getHref(`/essays/${essay.id}`), "href")} class="absolute inset-0 z-10"${addAttribute(`Read ${essay.title}`, "aria-label")} data-astro-cid-54dbqjd4></a> </div> </article> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/essays/EssayCard.astro", void 0);

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$EssayCategoryNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EssayCategoryNav;
  const { categories, activeCategory = "ALL" } = Astro2.props;
  const categoryStyles = {
    "ALL": {
      bg: "bg-navy-700/50",
      bgActive: "bg-gold-500",
      text: "text-navy-400",
      textActive: "text-navy-900"
    },
    "BREACH": {
      bg: "bg-red-500/10",
      bgActive: "bg-red-500",
      text: "text-red-400",
      textActive: "text-white"
    },
    "CAUSATION": {
      bg: "bg-purple-500/10",
      bgActive: "bg-purple-500",
      text: "text-purple-400",
      textActive: "text-white"
    },
    "VINDICATION": {
      bg: "bg-green-500/10",
      bgActive: "bg-green-500",
      text: "text-green-400",
      textActive: "text-white"
    },
    "PROCEDURAL": {
      bg: "bg-cyan-500/10",
      bgActive: "bg-cyan-500",
      text: "text-cyan-400",
      textActive: "text-white"
    }
  };
  const getStyle = (category) => categoryStyles[category] || categoryStyles["ALL"];
  return renderTemplate`${maybeRenderHead()}<nav class="essay-category-nav sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 bg-navy-900/80 backdrop-blur-2xl border-b border-navy-700/50" data-astro-cid-bes7zmix> <div class="flex items-center justify-between gap-4" data-astro-cid-bes7zmix> <!-- Category Pills --> <div class="flex flex-wrap gap-2" id="essay-category-filters" data-astro-cid-bes7zmix> ${categories.map((cat) => {
    const style = getStyle(cat.category);
    const isActive = cat.category === activeCategory;
    return renderTemplate`<button${addAttribute(cat.category, "data-category")}${addAttribute([
      "category-pill flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
      isActive ? style.bgActive : style.bg,
      isActive ? style.textActive : style.text,
      "hover:scale-105"
    ], "class:list")} data-astro-cid-bes7zmix> <span data-astro-cid-bes7zmix>${cat.label}</span> <span${addAttribute([
      "px-1.5 py-0.5 rounded text-xs font-mono",
      isActive ? "bg-white/20" : "bg-navy-900/30"
    ], "class:list")} data-astro-cid-bes7zmix> ${cat.count} </span> </button>`;
  })} </div> <!-- Critical Filter --> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-bes7zmix> <input type="checkbox" id="critical-only-essays" class="w-4 h-4 rounded bg-navy-800 border-navy-600 text-gold-500 focus:ring-gold-500/50 focus:ring-offset-0" data-astro-cid-bes7zmix> <span class="text-sm text-navy-400 whitespace-nowrap" data-astro-cid-bes7zmix>Critical only</span> </label> </div> </nav>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/essays/EssayCategoryNav.astro", void 0);

const $$Essays = createComponent(async ($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const essayEntries = await getCollection("essays");
  const essays = essayEntries.map((entry) => ({
    id: entry.slug,
    ...entry.data
  }));
  const metadata = {
    totalEssays: essays.length,
    description: "Foundational essays documenting the core arguments, evidence chains, and legal analysis for Thomson v NHS Providers"
  };
  const correctionLog = [
    {
      date: "2026-01-18",
      essay: "somatoform-contamination",
      change: "FND/Somatoform distinction clarified. FND Tremor WAS assessed (methodology disputed); Somatoform Pain Disorder NEVER assessed - PRIMARY BREACH focus refocused accordingly."
    }
  ];
  const categoryCounts = essays.reduce((acc, essay) => {
    acc[essay.category] = (acc[essay.category] || 0) + 1;
    return acc;
  }, {});
  const categories = [
    { category: "ALL", count: essays.length, label: "All Essays" },
    { category: "BREACH", count: categoryCounts["BREACH"] || 0, label: "Breach" },
    { category: "CAUSATION", count: categoryCounts["CAUSATION"] || 0, label: "Causation" },
    { category: "VINDICATION", count: categoryCounts["VINDICATION"] || 0, label: "Vindication" },
    { category: "PROCEDURAL", count: categoryCounts["PROCEDURAL"] || 0, label: "Procedural" }
  ].filter((cat) => cat.category === "ALL" || cat.count > 0);
  const criticalEssays = essays.filter((e) => e.critical);
  const allEssays = essays;
  const stats = {
    total: essays.length,
    critical: criticalEssays.length,
    categories: Object.keys(categoryCounts).length,
    findings: essays.reduce((sum, e) => sum + (e.keyFindings?.length || 0), 0)
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Foundational Essays", "description": "In-depth analysis documents covering the core arguments in Thomson v NHS Providers" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div> <!-- Decorative Book Icon --> <div class="absolute top-20 right-20 w-32 h-32 text-navy-800/30 hidden lg:block"> <svg fill="currentColor" viewBox="0 0 24 24"> <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <div class="container-wide relative z-10"> <div class="max-w-4xl mx-auto text-center"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8"> <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <span class="text-sm font-medium text-gold-400">Legal Analysis Documents</span> </div> <!-- Title --> <h1 class="text-5xl sm:text-6xl font-display font-bold text-white mb-6 leading-tight">
Foundational
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400">
Essays
</span> </h1> <!-- Subtitle --> <p class="text-xl text-navy-300 leading-relaxed mb-12 max-w-2xl mx-auto"> ${metadata.description} </p> <!-- Stats Row --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": async ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-gold-400 mb-1">${stats.total}</div> <p class="text-xs text-navy-400">Total Essays</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": async ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-red-400 mb-1">${stats.critical}</div> <p class="text-xs text-navy-400">Critical Essays</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": async ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-purple-400 mb-1">${stats.categories}</div> <p class="text-xs text-navy-400">Categories</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-5 text-center" }, { "default": async ($$result3) => renderTemplate` <div class="text-3xl font-display font-bold text-green-400 mb-1">${stats.findings}</div> <p class="text-xs text-navy-400">Linked Findings</p> ` })} </div> </div> </div> </section>  ${renderComponent($$result2, "EssayCategoryNav", $$EssayCategoryNav, { "categories": categories, "activeCategory": "ALL" })}  <section class="py-16"> <div class="container-wide"> <div class="flex items-end justify-between mb-10"> <div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "breach", "class": "mb-4" }, { "default": async ($$result3) => renderTemplate`Priority Reading` })} <h2 class="text-3xl font-display font-bold text-white">
Critical Essays
</h2> <p class="text-navy-400 mt-2">The most important analysis documents for the case</p> </div> <div class="hidden sm:block text-sm text-navy-500"> ${stats.critical} critical essays
</div> </div> <!-- Featured Essays Grid --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${criticalEssays.slice(0, 2).map((essay, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> ${renderComponent($$result2, "EssayCard", $$EssayCard, { "essay": essay, "featured": true })} </div>`)} </div> </div> </section>  <section class="py-16 bg-navy-900/30"> <div class="container-wide"> <div class="flex items-end justify-between mb-10"> <div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "strategic", "class": "mb-4" }, { "default": async ($$result3) => renderTemplate`Complete Collection` })} <h2 class="text-3xl font-display font-bold text-white">
All Essays
</h2> <p class="text-navy-400 mt-2">Browse all foundational essays by category</p> </div> </div> <!-- Essays Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="essays-grid"> ${allEssays.map((essay, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 50}ms`, "style")}> ${renderComponent($$result2, "EssayCard", $$EssayCard, { "essay": essay })} </div>`)} </div> </div> </section>  ${correctionLog && correctionLog.length > 0 && renderTemplate`<section class="py-16"> <div class="container-wide"> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "class": "p-8" }, { "default": async ($$result3) => renderTemplate` <div class="flex items-center gap-4 mb-6"> <div class="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center"> <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <div> <h3 class="text-lg font-display font-semibold text-white">Correction Log</h3> <p class="text-sm text-navy-400">Amendments and clarifications to essays</p> </div> </div> <div class="space-y-4"> ${correctionLog.map((correction) => renderTemplate`<div class="p-4 bg-navy-900/50 rounded-lg border border-navy-700/30"> <div class="flex items-center gap-3 mb-2"> <span class="text-xs font-mono text-navy-500">${correction.date}</span> <span class="text-xs px-2 py-0.5 rounded bg-navy-700/50 text-navy-300"> ${correction.essay} </span> </div> <p class="text-sm text-navy-300 leading-relaxed">${correction.change}</p> </div>`)} </div> ` })} </div> </div> </section>`} <section class="py-16"> <div class="container-wide"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "highlight", "class": "p-10 text-center relative overflow-hidden" }, { "default": async ($$result3) => renderTemplate`  <div class="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 max-w-2xl mx-auto"> <h2 class="text-3xl font-display font-bold text-white mb-4">
Explore the Evidence
</h2> <p class="text-navy-300 mb-8">
These essays synthesize findings from across the evidence base. Dive deeper into the individual findings and the complete timeline.
</p> <div class="flex flex-wrap justify-center gap-4"> <a${addAttribute(getHref("/findings"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all shadow-lg shadow-gold-500/25"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
View All Findings
</a> <a${addAttribute(getHref("/timeline"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-navy-700/50 hover:bg-navy-700 text-white font-semibold rounded-xl border border-navy-600/50 transition-all"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
View Timeline
</a> </div> </div> ` })} </div> </section> ` })}`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays.astro";
const $$url = "/thomson-case-exhibit/essays";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Essays,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
