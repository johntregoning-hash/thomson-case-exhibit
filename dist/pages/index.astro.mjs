/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, e as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { $ as $$Badge, a as $$BaseLayout } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { Command } from 'cmdk';
import { useState, useEffect, useCallback } from 'react';
import { f as findingsData } from '../chunks/findings_BAPSd5yg.mjs';
import { a as actorsData } from '../chunks/actors_C6P3dApj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoGrid;
  const { stats, priorityFindings = [] } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const keyDates = [
    { label: "First Seizure", date: "23 Dec 2021", color: "text-white" },
    { label: "MRI Confirms", date: "Oct 2022", color: "text-white" },
    { label: "Covert Diagnosis", date: "5 Jan 2023", color: "text-red-400" },
    { label: "Vindication", date: "22 Jul 2025", color: "text-green-400" }
  ];
  const navCards = [
    {
      href: "/findings",
      label: "Findings",
      count: `${stats.findings}+`,
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
      color: "text-gold-500"
    },
    {
      href: "/timeline",
      label: "Timeline",
      count: "8 phases",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
      color: "text-gold-500"
    },
    {
      href: "/evidence",
      label: "Evidence",
      count: "7 tiers",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`,
      color: "text-blue-400"
    },
    {
      href: "/actors",
      label: "Actors",
      count: "10+",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`,
      color: "text-purple-400"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-8 lg:py-12" data-astro-cid-si5fybew> <div class="container-wide" data-astro-cid-si5fybew> <!-- Main Bento Grid --> <div class="grid grid-cols-12 gap-4 lg:gap-6" data-astro-cid-si5fybew> <!-- ==========================================
           ROW 1: Hero Statement + Stats
           ========================================== --> <!-- Hero Statement - Large Left (spans 2 rows on lg) --> <div class="col-span-12 lg:col-span-6 lg:row-span-2" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "variant": "elevated", "padding": "lg", "class": "h-full flex flex-col justify-between min-h-[320px] lg:min-h-[400px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <div data-astro-cid-si5fybew> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-si5fybew": true }, { "default": ($$result3) => renderTemplate`Clinical Negligence Case` })} <h1 class="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mt-6 mb-4 leading-tight" data-astro-cid-si5fybew>
Thomson v<br data-astro-cid-si5fybew> <span class="text-gold-500" data-astro-cid-si5fybew>Multiple NHS Defendants</span> </h1> <p class="text-navy-300 text-lg leading-relaxed max-w-lg" data-astro-cid-si5fybew>
An <strong class="text-white" data-astro-cid-si5fybew>${stats.delayMonths}-month diagnostic delay</strong>
for T5-T8 vertebral fractures, documented across
<strong class="text-gold-400" data-astro-cid-si5fybew>${stats.findings}+ forensic findings</strong>.
</p> </div> <div class="mt-8 flex flex-wrap gap-3" data-astro-cid-si5fybew> <a${addAttribute(getHref("/findings"), "href")} class="btn-primary" data-astro-cid-si5fybew>
Explore Findings
</a> <a${addAttribute(getHref("/timeline"), "href")} class="btn-secondary" data-astro-cid-si5fybew>
View Timeline
</a> </div> ` })} </div> <!-- Verified Stat Card --> <div class="col-span-6 lg:col-span-3" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "padding": "md", "class": "h-full flex flex-col justify-center text-center min-h-[140px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <p class="text-4xl lg:text-5xl font-display font-bold text-white mb-2" data-astro-cid-si5fybew>${stats.verified}+</p> <p class="text-sm text-navy-400 uppercase tracking-wider" data-astro-cid-si5fybew>Verified Findings</p> ` })} </div> <!-- Breach Stat Card --> <div class="col-span-6 lg:col-span-3" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "variant": "breach", "padding": "md", "class": "h-full flex flex-col justify-center text-center min-h-[140px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <p class="text-4xl lg:text-5xl font-display font-bold text-red-400 mb-2" data-astro-cid-si5fybew>${stats.breach}+</p> <p class="text-sm text-navy-400 uppercase tracking-wider" data-astro-cid-si5fybew>Breach Findings</p> ` })} </div> <!-- ==========================================
           ROW 2: Vindication + Timeline Preview
           ========================================== --> <!-- Vindication Highlight Card --> <div class="col-span-12 sm:col-span-6 lg:col-span-3" data-astro-cid-si5fybew> <a${addAttribute(getHref("/vindication"), "href")} class="block h-full" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md", "class": "h-full hover:border-green-400/50 transition-all cursor-pointer min-h-[200px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <div class="flex items-start justify-between mb-4" data-astro-cid-si5fybew> <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-si5fybew> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-si5fybew></path> </svg> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "vindication", "data-astro-cid-si5fybew": true }, { "default": ($$result3) => renderTemplate`KEY` })} </div> <p class="text-3xl lg:text-4xl font-display font-bold text-green-400 mb-1" data-astro-cid-si5fybew>${stats.vindication}+</p> <p class="text-white font-semibold mb-2" data-astro-cid-si5fybew>Vindication Evidence</p> <p class="text-sm text-navy-400 leading-relaxed" data-astro-cid-si5fybew>
Independent specialists confirmed: "there were clear causes for his pain"
</p> ` })} </a> </div> <!-- Timeline Preview Card --> <div class="col-span-12 sm:col-span-6 lg:col-span-3" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "variant": "highlight", "padding": "md", "class": "h-full min-h-[200px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between mb-4" data-astro-cid-si5fybew> <h3 class="text-sm font-semibold text-gold-500 uppercase tracking-wider" data-astro-cid-si5fybew>
Key Dates
</h3> <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-si5fybew> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-si5fybew></path> </svg> </div> <div class="space-y-3" data-astro-cid-si5fybew> ${keyDates.map((item) => renderTemplate`<div class="flex justify-between items-center text-sm" data-astro-cid-si5fybew> <span class="text-navy-400" data-astro-cid-si5fybew>${item.label}</span> <span${addAttribute(["font-medium", item.color], "class:list")} data-astro-cid-si5fybew>${item.date}</span> </div>`)} </div> <a${addAttribute(getHref("/timeline"), "href")} class="mt-4 inline-flex items-center text-sm text-gold-500 hover:text-gold-400 transition-colors" data-astro-cid-si5fybew>
Full Timeline
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-si5fybew> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-si5fybew></path> </svg> </a> ` })} </div> <!-- ==========================================
           ROW 3: Priority Findings (if available)
           ========================================== --> ${priorityFindings.length > 0 && renderTemplate`<div class="col-span-12" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between mb-4" data-astro-cid-si5fybew> <h3 class="text-lg font-display font-semibold text-white" data-astro-cid-si5fybew>Priority Findings</h3> <a${addAttribute(getHref("/findings"), "href")} class="text-sm text-gold-500 hover:text-gold-400 transition-colors" data-astro-cid-si5fybew>
View all →
</a> </div> <div class="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin scrollbar-thumb-navy-700 scrollbar-track-transparent" data-astro-cid-si5fybew> ${priorityFindings.slice(0, 6).map((finding) => renderTemplate`<a${addAttribute(getHref(`/findings/${finding.id.toLowerCase()}`), "href")} class="flex-shrink-0 w-64 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50
                         hover:border-navy-600/60 hover:bg-navy-800/60 transition-all" data-astro-cid-si5fybew> <div class="flex items-center gap-2 mb-2" data-astro-cid-si5fybew> <span class="text-xs font-mono text-navy-500" data-astro-cid-si5fybew>${finding.id}</span> ${renderComponent($$result2, "Badge", $$Badge, { "variant": finding.category.toLowerCase(), "data-astro-cid-si5fybew": true }, { "default": ($$result3) => renderTemplate`${finding.category}` })} </div> <p class="text-sm text-white font-medium line-clamp-2" data-astro-cid-si5fybew>${finding.title}</p> </a>`)} </div> ` })} </div>`} <!-- ==========================================
           ROW 4: Quick Navigation Cards
           ========================================== --> ${navCards.map((card) => renderTemplate`<div class="col-span-6 sm:col-span-6 lg:col-span-3" data-astro-cid-si5fybew> <a${addAttribute(getHref(card.href), "href")} class="block h-full" data-astro-cid-si5fybew> ${renderComponent($$result, "GlassCard", $$GlassCard, { "variant": "interactive", "padding": "md", "class": "h-full min-h-[120px]", "data-astro-cid-si5fybew": true }, { "default": ($$result2) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-si5fybew> <div${addAttribute([card.color], "class:list")} data-astro-cid-si5fybew> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(card.icon)}` })} </div> <span class="text-xs text-navy-500 font-medium" data-astro-cid-si5fybew>${card.count}</span> </div> <p class="text-white font-semibold" data-astro-cid-si5fybew>${card.label}</p> ` })} </a> </div>`)} </div> </div> </section> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/home/BentoGrid.astro", void 0);

const categoryConfig = {
  VINDICATION: { color: "text-green-400", label: "Vindication" },
  BREACH: { color: "text-red-400", label: "Breach" },
  DISCREPANCY: { color: "text-amber-400", label: "Discrepancy" },
  FABRICATION: { color: "text-red-500", label: "Fabrication" },
  WITNESS: { color: "text-blue-400", label: "Witness" },
  CAUSATION: { color: "text-blue-500", label: "Causation" },
  QUANTUM: { color: "text-purple-400", label: "Quantum" },
  PROCEDURAL: { color: "text-slate-400", label: "Procedural" },
  STRATEGIC: { color: "text-indigo-400", label: "Strategic" },
  NEUROLOGICAL: { color: "text-cyan-400", label: "Neurological" },
  MEDICATION: { color: "text-orange-400", label: "Medication" },
  "FND/SOMATOFORM": { color: "text-pink-400", label: "FND/Somatoform" }
};
const pages = [
  { href: "/findings", label: "All Findings", count: "359+", icon: "file" },
  { href: "/vindication", label: "Vindication Evidence", count: "27+", icon: "check" },
  { href: "/timeline", label: "Case Timeline", count: "8 phases", icon: "clock" },
  { href: "/evidence", label: "Evidence Hierarchy", count: "7 tiers", icon: "layers" },
  { href: "/actors", label: "Actors Registry", count: "10+", icon: "users" },
  { href: "/essays", label: "Essays", count: "6+", icon: "book" },
  { href: "/documents", label: "Documents", count: "", icon: "folder" }
];
function CommandPalette({ findings, actors, basePath }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-command-palette", handleOpen);
    return () => {
      window.removeEventListener("open-command-palette", handleOpen);
    };
  }, []);
  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const navigate = useCallback((path) => {
    window.location.href = `${basePath}${path}`;
    setOpen(false);
    setSearch("");
  }, [basePath]);
  const filteredFindings = findings.filter((f) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return f.id.toLowerCase().includes(searchLower) || f.title.toLowerCase().includes(searchLower) || f.category.toLowerCase().includes(searchLower);
  }).slice(0, 8);
  const filteredActors = actors.filter((a) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return a.name.toLowerCase().includes(searchLower) || a.role.toLowerCase().includes(searchLower) || (a.organisation?.toLowerCase().includes(searchLower) ?? false);
  }).slice(0, 5);
  const getIcon = (icon) => {
    switch (icon) {
      case "file":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) });
      case "check":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
      case "clock":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) });
      case "layers":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) });
      case "users":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }) });
      case "book":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) });
      case "folder":
        return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }) });
      default:
        return null;
    }
  };
  if (!open) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-[#0a0f1a]/80 backdrop-blur-sm",
        onClick: () => {
          setOpen(false);
          setSearch("");
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed left-1/2 top-[20vh] -translate-x-1/2 w-full max-w-xl", children: /* @__PURE__ */ jsxs(
      Command,
      {
        className: "bg-[#0d1526]/95 backdrop-blur-2xl border border-[#1a2744]/80 rounded-2xl shadow-2xl overflow-hidden",
        loop: true,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-4 border-b border-[#1a2744]/50", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#5a6b8a]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }),
            /* @__PURE__ */ jsx(
              Command.Input,
              {
                placeholder: "Search findings, actors, pages...",
                className: "flex-1 bg-transparent text-white placeholder:text-[#5a6b8a] focus:outline-none text-lg",
                value: search,
                onValueChange: setSearch
              }
            ),
            /* @__PURE__ */ jsx("kbd", { className: "px-2 py-1 text-xs font-mono bg-[#1a2744] border border-[#2a3a5c] rounded text-[#7a8ba8]", children: "esc" })
          ] }),
          /* @__PURE__ */ jsxs(Command.List, { className: "max-h-[60vh] overflow-auto p-2", children: [
            /* @__PURE__ */ jsx(Command.Empty, { className: "py-8 text-center text-[#5a6b8a]", children: "No results found." }),
            /* @__PURE__ */ jsxs(Command.Group, { heading: "Pages", className: "mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider", children: "Pages" }),
              pages.map((page) => /* @__PURE__ */ jsxs(
                Command.Item,
                {
                  value: `page ${page.label}`,
                  onSelect: () => navigate(page.href),
                  className: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer\n                             data-[selected=true]:bg-[#1a2744]/60 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: page.href === "/vindication" ? "text-green-400" : "text-[#d4af37]", children: getIcon(page.icon) }),
                    /* @__PURE__ */ jsx("span", { className: "flex-1", children: page.label }),
                    page.count && /* @__PURE__ */ jsx("span", { className: "text-xs text-[#5a6b8a]", children: page.count })
                  ]
                },
                page.href
              ))
            ] }),
            filteredFindings.length > 0 && /* @__PURE__ */ jsxs(Command.Group, { heading: "Findings", className: "mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider", children: "Findings" }),
              filteredFindings.map((finding) => {
                const config = categoryConfig[finding.category] || { color: "text-[#7a8ba8]", label: finding.category };
                return /* @__PURE__ */ jsxs(
                  Command.Item,
                  {
                    value: `finding ${finding.id} ${finding.title} ${finding.category}`,
                    onSelect: () => navigate(`/findings/${finding.id.toLowerCase()}`),
                    className: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer\n                                 data-[selected=true]:bg-[#1a2744]/60 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-[#5a6b8a] w-12", children: finding.id }),
                      /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: finding.title }),
                      /* @__PURE__ */ jsx("span", { className: `text-xs ${config.color}`, children: config.label })
                    ]
                  },
                  finding.id
                );
              })
            ] }),
            filteredActors.length > 0 && /* @__PURE__ */ jsxs(Command.Group, { heading: "Actors", className: "mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider", children: "Actors" }),
              filteredActors.map((actor) => /* @__PURE__ */ jsxs(
                Command.Item,
                {
                  value: `actor ${actor.name} ${actor.role} ${actor.organisation || ""}`,
                  onSelect: () => navigate(`/actors#${actor.id.toLowerCase()}`),
                  className: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer\n                               data-[selected=true]:bg-[#1a2744]/60 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-[#5a6b8a] w-12", children: actor.id }),
                    /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium", children: actor.name }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#5a6b8a] ml-2", children: actor.role })
                    ] })
                  ]
                },
                actor.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-4 py-2.5 border-t border-[#1a2744]/50 flex items-center gap-6 text-xs text-[#5a6b8a]", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("kbd", { className: "px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded", children: "↑" }),
              /* @__PURE__ */ jsx("kbd", { className: "px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded", children: "↓" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1", children: "Navigate" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("kbd", { className: "px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded", children: "↵" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1", children: "Select" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("kbd", { className: "px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded", children: "esc" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1", children: "Close" })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const allFindings = findingsData.findings || [];
  const priorityFindingIds = findingsData.priorityFindings || [];
  const stats = {
    findings: allFindings.length || 200,
    vindication: allFindings.filter((f) => f.category === "VINDICATION").length || 22,
    breach: allFindings.filter((f) => f.category === "BREACH").length || 24,
    verified: allFindings.filter((f) => f.evidenceStatus === "VERIFIED").length || 150,
    delayMonths: 11
  };
  const priorityFindings = priorityFindingIds.map((id) => allFindings.find((f) => f.id === id)).filter((f) => f !== void 0).slice(0, 6);
  const cmdFindings = allFindings.map((f) => ({
    id: f.id,
    title: f.title,
    category: f.category,
    evidenceStatus: f.evidenceStatus
  }));
  const cmdActors = (actorsData.actors || []).map((a) => ({
    id: a.id,
    name: a.name,
    role: a.role,
    organisation: a.organisation
  }));
  const featuredFinding = allFindings.find((f) => f.id === "F030") || {
    id: "F030",
    title: "Dr Gorrie Removes Somatoform Diagnosis",
    summary: 'Dr Alexander Gorrie marked the Somatoform Pain Disorder diagnosis as INACTIVE on 22 July 2025, noting "there were clear causes for his pain."',
    legalSignificance: "Subsequent NHS clinician independently determined original psychiatric diagnosis was inappropriate and removed it. This is internal vindication, not litigation-driven expert opinion."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "CommandPalette", CommandPalette, { "client:load": true, "findings": cmdFindings, "actors": cmdActors, "basePath": base, "client:component-hydration": "load", "client:component-path": "@components/ui/CommandPalette", "client:component-export": "default" })}  ${maybeRenderHead()}<section class="relative py-12 lg:py-16 overflow-hidden"> <!-- Subtle background gradient --> <div class="absolute inset-0 bg-gradient-to-b from-navy-800/20 to-transparent pointer-events-none"></div> <div class="container-wide relative"> <!-- Tagline --> <div class="text-center mb-8"> <p class="inline-flex items-center gap-3 text-sm text-navy-400"> <span class="w-8 h-px bg-navy-700"></span>
Digital Legal Exhibit & Forensic Evidence Platform
<span class="w-8 h-px bg-navy-700"></span> </p> </div> </div> </section>  ${renderComponent($$result2, "BentoGrid", $$BentoGrid, { "stats": stats, "priorityFindings": priorityFindings })}  <section class="py-12 lg:py-16"> <div class="container-wide"> <div class="text-center mb-8"> <h2 class="text-2xl lg:text-3xl font-display font-bold text-white mb-2">Featured Vindication</h2> <p class="text-navy-400">Key evidence demonstrating independent medical validation</p> </div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "lg", "class": "max-w-4xl mx-auto" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col lg:flex-row lg:items-start gap-6"> <!-- Left: Icon and ID --> <div class="flex-shrink-0 flex lg:flex-col items-center gap-4 lg:gap-2"> <div class="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center"> <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <span class="text-sm font-mono text-green-400">${featuredFinding.id}</span> </div> <!-- Right: Content --> <div class="flex-1"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "vindication", "class": "mb-3" }, { "default": ($$result4) => renderTemplate`VINDICATION` })} <h3 class="text-xl lg:text-2xl font-display font-bold text-white mb-4"> ${featuredFinding.title} </h3> <p class="text-navy-300 leading-relaxed mb-4"> ${featuredFinding.summary} </p> <p class="text-sm text-navy-400 italic"> <strong class="text-green-400 not-italic">Legal Significance:</strong> ${featuredFinding.legalSignificance} </p> <div class="mt-6 pt-6 border-t border-green-500/20"> <a${addAttribute(getHref("/vindication"), "href")} class="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
View all vindication evidence
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> ` })} </div> </section>  <section class="py-12 lg:py-16 bg-navy-800/20"> <div class="container-wide"> <div class="text-center mb-10"> <h2 class="text-2xl lg:text-3xl font-display font-bold text-white mb-2">Case Milestones</h2> <p class="text-navy-400">Critical events in the chronology of this clinical negligence case</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"> <!-- Index Event --> <div class="relative"> <div class="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold-500/50 to-transparent -translate-y-1/2 z-0"></div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "class": "relative z-10" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-2">Index Event</p> <p class="text-xl font-display font-bold text-white mb-2">23 December 2021</p> <p class="text-sm text-navy-400">Witnessed tonic-clonic seizure with 5-minute ambulance response</p> ` })} </div> <!-- Fracture Discovery --> <div class="relative"> <div class="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold-500/40 to-transparent -translate-y-1/2 z-0"></div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "class": "relative z-10" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-2">Fracture Discovery</p> <p class="text-xl font-display font-bold text-white mb-2">October 2022</p> <p class="text-sm text-navy-400">MRI reveals T5-T8 vertebral fractures after <strong class="text-red-400">11-month delay</strong></p> ` })} </div> <!-- Covert Diagnosis --> <div class="relative"> <div class="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold-500/30 to-transparent -translate-y-1/2 z-0"></div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "breach", "padding": "md", "class": "relative z-10" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Covert Diagnosis</p> <p class="text-xl font-display font-bold text-white mb-2">5 January 2023</p> <p class="text-sm text-navy-400">F45.4 Somatoform Pain Disorder applied without assessment or patient knowledge</p> ` })} </div> <!-- Vindication --> <div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Vindication</p> <p class="text-xl font-display font-bold text-white mb-2">22 July 2025</p> <p class="text-sm text-navy-400">New GP removes diagnosis: "there were clear causes for his pain"</p> ` })} </div> </div> <div class="text-center mt-10"> <a${addAttribute(getHref("/timeline"), "href")} class="btn-secondary gap-2">
View Full Timeline
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section>  <section class="py-12 lg:py-16"> <div class="container-wide"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "highlight", "padding": "lg", "class": "text-center" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl lg:text-3xl font-display font-bold text-white mb-4"> ${stats.findings}+ Documented Findings
</h2> <p class="text-navy-300 max-w-2xl mx-auto mb-8">
Each finding is cross-referenced with primary evidence documents, creating a comprehensive
          and verifiable forensic record of the case. Press <kbd class="kbd-hint mx-1"><kbd>⌘</kbd><kbd>K</kbd></kbd> to search.
</p> <div class="flex flex-wrap justify-center gap-4"> <a${addAttribute(getHref("/findings"), "href")} class="btn-primary">
Browse All Findings
</a> <a${addAttribute(getHref("/documents"), "href")} class="btn-secondary">
View Key Documents
</a> </div> ` })} </div> </section> ` })}`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/index.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/index.astro";
const $$url = "/thomson-case-exhibit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
