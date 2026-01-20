/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$Badge } from '../../chunks/Badge_DL3EHgdM.mjs';
import { f as findingsData } from '../../chunks/findings_BAPSd5yg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://johntregoning-hash.github.io");
function getStaticPaths() {
  const findings = findingsData.findings;
  return findings.map((finding) => ({
    params: { id: finding.id.toLowerCase() },
    props: { finding }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { finding } = Astro2.props;
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
  const statusColor = finding.evidenceStatus?.toLowerCase().includes("verified") ? "text-vindication-500 bg-vindication-500/10" : finding.evidenceStatus?.toLowerCase().includes("contradicted") ? "text-breach-500 bg-breach-500/10" : finding.evidenceStatus?.toLowerCase().includes("supported") ? "text-gold-500 bg-gold-500/10" : "text-navy-400 bg-navy-800";
  const relatedFindings = (finding.relatedFindings || []).map((id) => findingsData.findings.find((f) => f.id === id)).filter((f) => f !== void 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${finding.id} - ${finding.title}`, "description": finding.summary }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<nav class="py-4 border-b border-navy-800/50 bg-navy-950"> <div class="container-wide"> <div class="flex items-center gap-2 text-sm"> <a${addAttribute(getHref("/"), "href")} class="text-navy-400 hover:text-white transition-colors">Home</a> <span class="text-navy-600">/</span> <a${addAttribute(getHref("/findings"), "href")} class="text-navy-400 hover:text-white transition-colors">Findings</a> <span class="text-navy-600">/</span> <span class="text-gold-500">${finding.id}</span> </div> </div> </nav>  <section class="py-12 bg-navy-900/30"> <div class="container-wide"> <div class="max-w-4xl"> <div class="flex flex-wrap items-center gap-4 mb-6"> <span class="text-2xl font-mono text-gold-500">${finding.id}</span> ${renderComponent($$result2, "Badge", $$Badge, { "variant": variant, "class": "text-sm" }, { "default": ($$result3) => renderTemplate`${finding.category}` })} ${finding.critical && renderTemplate`<span class="px-3 py-1 text-xs font-semibold rounded-full bg-breach-500/20 text-breach-400 border border-breach-500/30">
CRITICAL
</span>`} </div> <h1 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6"> ${finding.title} </h1> <div class="flex flex-wrap items-center gap-6 text-sm"> <div class="flex items-center gap-2"> <span class="text-navy-500">Status:</span> <span${addAttribute(["px-3 py-1 rounded-full font-medium", statusColor], "class:list")}> ${finding.evidenceStatus} </span> </div> ${finding.date && renderTemplate`<div class="flex items-center gap-2"> <span class="text-navy-500">Date:</span> <span class="text-white">${finding.date}</span> </div>`} ${finding.dateFound && renderTemplate`<div class="flex items-center gap-2"> <span class="text-navy-500">Found:</span> <span class="text-navy-300">${finding.dateFound}</span> </div>`} </div> </div> </div> </section>  <section class="py-12"> <div class="container-wide"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Column --> <div class="lg:col-span-2 space-y-8"> <!-- Summary --> <div class="card-base p-8"> <h2 class="text-xl font-serif font-bold text-white mb-4">Summary</h2> <p class="text-navy-200 leading-relaxed text-lg"> ${finding.summary} </p> </div> <!-- Legal Significance --> ${finding.legalSignificance && renderTemplate`<div class="card-base p-8 border-l-4 border-gold-500"> <h2 class="text-xl font-serif font-bold text-gold-400 mb-4">Legal Significance</h2> <p class="text-navy-200 leading-relaxed"> ${finding.legalSignificance} </p> </div>`} <!-- Evidence References --> ${finding.evidenceRefs && renderTemplate`<div class="card-base p-8"> <h2 class="text-xl font-serif font-bold text-white mb-4">Evidence References</h2> <div class="bg-navy-900/50 rounded-lg p-4 font-mono text-sm text-navy-300"> ${finding.evidenceRefs} </div> </div>`} <!-- Context Note (if applicable) --> ${"contextNote" in finding && finding.contextNote && renderTemplate`<div class="card-base p-8 border-l-4 border-amber-500 bg-amber-500/5"> <h2 class="text-xl font-serif font-bold text-amber-400 mb-4"> <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg>
Important Context
</h2> <p class="text-navy-200 leading-relaxed"> ${finding.contextNote} </p> </div>`} </div> <!-- Sidebar --> <div class="space-y-6"> <!-- Metadata Card --> <div class="card-base p-6"> <h3 class="text-lg font-serif font-bold text-white mb-4">Metadata</h3> <dl class="space-y-4"> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Finding ID</dt> <dd class="font-mono text-gold-500">${finding.id}</dd> </div> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Category</dt> <dd>${renderComponent($$result2, "Badge", $$Badge, { "variant": variant }, { "default": ($$result3) => renderTemplate`${finding.category}` })}</dd> </div> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Evidence Status</dt> <dd class="text-white">${finding.evidenceStatus}</dd> </div> <div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Workflow Status</dt> <dd class="text-navy-300">${finding.workflowStatus}</dd> </div> ${finding.source && renderTemplate`<div> <dt class="text-xs uppercase tracking-wider text-navy-500 mb-1">Source</dt> <dd class="text-navy-300 text-sm">${finding.source}</dd> </div>`} </dl> </div> <!-- Related Findings --> ${relatedFindings.length > 0 && renderTemplate`<div class="card-base p-6"> <h3 class="text-lg font-serif font-bold text-white mb-4">Related Findings</h3> <ul class="space-y-3"> ${relatedFindings.map((related) => renderTemplate`<li> <a${addAttribute(getHref(`/findings/${related.id.toLowerCase()}`), "href")} class="block p-3 rounded-lg bg-navy-800/50 hover:bg-navy-800 transition-colors group"> <div class="flex items-center gap-2 mb-1"> <span class="font-mono text-sm text-gold-500 group-hover:text-gold-400">${related.id}</span> ${renderComponent($$result2, "Badge", $$Badge, { "variant": categoryMap[related.category] || "default", "class": "text-xs" }, { "default": ($$result3) => renderTemplate`${related.category}` })} </div> <p class="text-sm text-navy-300 line-clamp-2">${related.title}</p> </a> </li>`)} </ul> </div>`} <!-- Actions --> <div class="card-base p-6"> <h3 class="text-lg font-serif font-bold text-white mb-4">Actions</h3> <div class="space-y-3"> <a${addAttribute(getHref("/findings"), "href")} class="flex items-center gap-2 text-navy-300 hover:text-white transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Back to All Findings
</a> <a${addAttribute(getHref("/timeline"), "href")} class="flex items-center gap-2 text-navy-300 hover:text-white transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
View Timeline
</a> <a${addAttribute(getHref("/evidence"), "href")} class="flex items-center gap-2 text-navy-300 hover:text-white transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Evidence Hierarchy
</a> </div> </div> </div> </div> </div> </section>  <section class="py-8 border-t border-navy-800/50"> <div class="container-wide"> <div class="flex justify-between items-center"> <a${addAttribute(getHref("/findings"), "href")} class="px-6 py-3 rounded-lg bg-navy-800/50 text-navy-300 hover:bg-navy-800 hover:text-white transition-colors">
← All Findings
</a> <a${addAttribute(getHref("/vindication"), "href")} class="px-6 py-3 rounded-lg bg-gold-600 text-navy-950 hover:bg-gold-500 transition-colors">
View Vindication Evidence →
</a> </div> </div> </section> ` })}`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings/[id].astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings/[id].astro";
const $$url = "/thomson-case-exhibit/findings/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
