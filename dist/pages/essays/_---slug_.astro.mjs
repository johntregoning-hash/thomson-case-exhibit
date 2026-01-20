/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_rI3dqb29.mjs';
import { a as $$BaseLayout, $ as $$Badge } from '../../chunks/Badge_DL3EHgdM.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { f as findingsData } from '../../chunks/findings_BAPSd5yg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector("article") || document.body;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentProgress = Math.min(100, scrollTop / documentHeight * 100);
      setProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 right-0 z-50 h-1 bg-navy-900/50", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-150 ease-out",
      style: { width: `${progress}%` }
    }
  ) });
}

const $$Astro = createAstro("https://johntregoning-hash.github.io");
async function getStaticPaths() {
  const essays = await getCollection("essays");
  return essays.map((essay) => ({
    params: { slug: essay.slug },
    props: { essay }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { essay } = Astro2.props;
  const { Content } = await essay.render();
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const categoryVariants = {
    "BREACH": "breach",
    "CAUSATION": "causation",
    "VINDICATION": "vindication",
    "PROCEDURAL": "procedural"
  };
  const variant = categoryVariants[essay.data.category] || "default";
  (essay.data.keyFindings || []).map((id) => findingsData.findings.find((f) => f.id === id)).filter((f) => f !== void 0);
  const allEssays = await getCollection("essays");
  const otherEssays = allEssays.filter((e) => e.slug !== essay.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": essay.data.title, "description": essay.data.summary }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "ReadingProgress", ReadingProgress, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/essays/ReadingProgress", "client:component-export": "default" })}  ${maybeRenderHead()}<nav class="py-4 border-b border-navy-800/50 bg-navy-950"> <div class="container-wide"> <div class="flex items-center gap-2 text-sm"> <a${addAttribute(getHref("/"), "href")} class="text-navy-400 hover:text-white transition-colors">Home</a> <span class="text-navy-600">/</span> <a${addAttribute(getHref("/essays"), "href")} class="text-navy-400 hover:text-white transition-colors">Essays</a> <span class="text-navy-600">/</span> <span class="text-gold-500">${essay.slug}</span> </div> </div> </nav>  <section class="py-16 bg-navy-900/30"> <div class="container-wide"> <div class="max-w-4xl"> <div class="flex flex-wrap items-center gap-4 mb-6"> ${renderComponent($$result2, "Badge", $$Badge, { "variant": variant, "class": "text-sm" }, { "default": async ($$result3) => renderTemplate`${essay.data.category}` })} ${essay.data.critical && renderTemplate`<span class="px-3 py-1 text-xs font-semibold rounded-full bg-breach-500/20 text-breach-400 border border-breach-500/30">
CRITICAL
</span>`} <span class="text-sm text-navy-500">Version ${essay.data.version}</span> </div> <h1 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4"> ${essay.data.title} </h1> <p class="text-xl text-gold-500/90 mb-6">${essay.data.subtitle}</p> <div class="flex flex-wrap items-center gap-6 text-sm"> <div class="flex items-center gap-2"> <span class="text-navy-500">Date:</span> <span class="text-white">${essay.data.date}</span> </div> <div class="flex items-center gap-2"> <span class="text-navy-500">Status:</span> <span${addAttribute([
    "px-2 py-1 rounded-full text-xs font-medium",
    essay.data.status === "CURRENT" ? "bg-vindication-500/20 text-vindication-400" : "bg-navy-800 text-navy-400"
  ], "class:list")}> ${essay.data.status} </span> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container-wide"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Main Column - Full Essay Content --> <div class="lg:col-span-3"> <article class="card-base p-8 lg:p-12"> <div class="prose prose-lg prose-invert prose-gold max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> <!-- Sidebar --> <div class="space-y-6"> <!-- Table of Contents Placeholder --> <div class="card-base p-6 sticky top-24"> <h3 class="text-lg font-serif font-bold text-white mb-4">Document Info</h3> <dl class="space-y-4"> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Category</dt> <dd>${renderComponent($$result2, "Badge", $$Badge, { "variant": variant }, { "default": async ($$result3) => renderTemplate`${essay.data.category}` })}</dd> </div> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Version</dt> <dd class="text-white">${essay.data.version}</dd> </div> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Last Updated</dt> <dd class="text-white">${essay.data.date}</dd> </div> </dl> <!-- Key Findings Quick Links --> <div class="mt-6 pt-6 border-t border-navy-700/50"> <h4 class="text-sm font-semibold text-white mb-3">Key Findings</h4> <div class="flex flex-wrap gap-2"> ${essay.data.keyFindings.map((finding) => renderTemplate`<a${addAttribute(getHref(`/findings/${finding.toLowerCase()}`), "href")} class="px-2 py-1 text-xs font-mono rounded bg-navy-800 text-gold-500 hover:bg-navy-700 hover:text-gold-400 transition-colors"> ${finding} </a>`)} </div> </div> <!-- Other Essays --> <div class="mt-6 pt-6 border-t border-navy-700/50"> <h4 class="text-sm font-semibold text-white mb-3">Related Essays</h4> <ul class="space-y-2"> ${otherEssays.slice(0, 3).map((other) => renderTemplate`<li> <a${addAttribute(getHref(`/essays/${other.slug}`), "href")} class="block text-sm text-navy-400 hover:text-gold-400 transition-colors line-clamp-2"> ${other.data.title} </a> </li>`)} </ul> <a${addAttribute(getHref("/essays"), "href")} class="block mt-3 text-xs text-gold-500 hover:text-gold-400">
View All Essays →
</a> </div> </div> </div> </div> </div> </section>  <section class="py-8 border-t border-navy-800/50"> <div class="container-wide"> <div class="flex justify-between items-center"> <a${addAttribute(getHref("/essays"), "href")} class="px-6 py-3 rounded-lg bg-navy-800/50 text-navy-300 hover:bg-navy-800 hover:text-white transition-colors">
← All Essays
</a> <a${addAttribute(getHref("/findings"), "href")} class="px-6 py-3 rounded-lg bg-gold-600 text-navy-950 hover:bg-gold-500 transition-colors">
Browse Findings →
</a> </div> </div> </section> ` })} `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays/[...slug].astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays/[...slug].astro";
const $$url = "/thomson-case-exhibit/essays/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
