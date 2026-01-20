import { c as createAstro, a as createComponent, b as addAttribute, e as renderTemplate, m as maybeRenderHead, j as createTransitionScope, r as renderComponent, k as renderHead, i as renderSlot, d as renderTransition } from './astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro("https://johntregoning-hash.github.io");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://johntregoning-hash.github.io");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const { currentPath = "/" } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => {
    if (path === "/") return base;
    return `${base}${path}`;
  };
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/findings", label: "Findings" },
    { href: "/vindication", label: "Vindication" },
    { href: "/essays", label: "Essays" },
    { href: "/timeline", label: "Timeline" },
    { href: "/evidence", label: "Evidence" },
    { href: "/actors", label: "Actors" },
    { href: "/documents", label: "Documents" }
  ];
  const isActive = (href) => {
    if (href === "/") return currentPath === "/" || currentPath === base;
    return currentPath.includes(href);
  };
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 glass-nav"${addAttribute(createTransitionScope($$result, "4u2npes6"), "data-astro-transition-persist")}> <div class="container-wide"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a${addAttribute(getHref("/"), "href")} class="flex items-center gap-3 text-white hover:text-gold-400 transition-colors"> <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-gold-glow"> <span class="font-display font-bold text-navy-950 text-lg">T</span> </div> <div class="hidden sm:block"> <div class="font-display font-semibold text-lg leading-tight">Thomson Case</div> <div class="text-xs text-navy-400">Evidence Repository</div> </div> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center gap-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(getHref(item.href), "href")}${addAttribute([
    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
    isActive(item.href) ? "bg-navy-700/60 text-gold-400" : "text-navy-300 hover:text-white hover:bg-navy-700/40"
  ], "class:list")}> ${item.label} </a>`)} </div> <!-- Search / Command Palette Trigger --> <div class="flex items-center gap-3"> <button id="cmd-palette-trigger" class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg
                 bg-navy-800/50 border border-navy-700/50
                 text-navy-400 hover:text-white hover:border-navy-600
                 transition-all text-sm cursor-pointer" aria-label="Open command palette (Cmd+K)"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <span class="hidden lg:inline">Search...</span> <span class="kbd-hint"> <kbd>⌘</kbd><kbd>K</kbd> </span> </button> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-navy-300 hover:text-white hover:bg-navy-700/40 transition-colors" aria-label="Toggle menu"> <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden lg:hidden border-t border-navy-700/30 bg-navy-900/95 backdrop-blur-2xl"> <div class="container-wide py-4 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(getHref(item.href), "href")}${addAttribute([
    "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
    isActive(item.href) ? "bg-navy-700/60 text-gold-400" : "text-navy-300 hover:text-white hover:bg-navy-700/40"
  ], "class:list")}> ${item.label} </a>`)} <!-- Mobile Search Button --> <button class="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg
               bg-navy-800/50 border border-navy-700/50
               text-navy-300 hover:text-white hover:border-navy-600
               transition-all text-sm" onclick="window.dispatchEvent(new CustomEvent('open-command-palette'))"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <span>Search findings...</span> </button> </div> </div> </nav> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/navigation/Nav.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const base = "/thomson-case-exhibit";
  const getHref = (path) => {
    if (path === "/") return base;
    return `${base}${path}`;
  };
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-navy-800/50 bg-navy-950"> <div class="container-wide py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- About --> <div> <div class="flex items-center gap-3 mb-4"> <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center"> <span class="font-serif font-bold text-navy-950 text-lg">T</span> </div> <div> <div class="font-serif font-semibold text-white">Thomson Case</div> <div class="text-xs text-navy-400">Evidence Repository</div> </div> </div> <p class="text-sm text-navy-400 leading-relaxed">
Comprehensive evidence repository documenting clinical negligence
          findings with verified medical evidence and timeline analysis.
</p> </div> <!-- Quick Links --> <div> <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4> <ul class="space-y-2"> <li><a${addAttribute(getHref("/findings"), "href")} class="text-sm text-navy-400 hover:text-gold-400 transition-colors">All Findings</a></li> <li><a${addAttribute(getHref("/vindication"), "href")} class="text-sm text-navy-400 hover:text-gold-400 transition-colors">Vindication Evidence</a></li> <li><a${addAttribute(getHref("/timeline"), "href")} class="text-sm text-navy-400 hover:text-gold-400 transition-colors">Case Timeline</a></li> <li><a${addAttribute(getHref("/evidence"), "href")} class="text-sm text-navy-400 hover:text-gold-400 transition-colors">Evidence Hierarchy</a></li> </ul> </div> <!-- Statistics --> <div> <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Repository Statistics</h4> <div class="space-y-2 text-sm text-navy-400"> <div class="flex justify-between"> <span>Documented Findings</span> <span class="text-gold-500 font-medium">200+</span> </div> <div class="flex justify-between"> <span>Vindication Evidence</span> <span class="text-vindication-500 font-medium">22+</span> </div> <div class="flex justify-between"> <span>Timeline Phases</span> <span class="text-white font-medium">8</span> </div> <div class="flex justify-between"> <span>Diagnostic Delay</span> <span class="text-breach-500 font-medium">11 months</span> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="mt-12 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row justify-between items-center gap-4"> <p class="text-xs text-navy-500">
Thomson v Multiple NHS Defendants - Clinical Negligence Case Repository
</p> <p class="text-xs text-navy-500">
Evidence compiled ${currentYear}. All medical evidence verified.
</p> </div> </div> </footer>`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/navigation/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const base = "/thomson-case-exhibit";
  const {
    title,
    description = "Comprehensive evidence repository for the Thomson clinical negligence case, featuring 200+ documented findings, timeline analysis, and verified medical evidence.",
    ogImage = `${base}/og-image.png`
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const siteTitle = `${title} | Thomson Case Evidence`;
  const faviconPath = `${base}/favicon.svg`;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(siteTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="website"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(siteTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml"${addAttribute(faviconPath, "href")}><title>${siteTitle}</title><!-- Astro View Transitions for seamless navigation -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="min-h-screen flex flex-col"> ${renderComponent($$result, "Nav", $$Nav, { "currentPath": currentPath })} <main class="flex-1 pt-16"${addAttribute(renderTransition($$result, "rqbmvsd7", "fade", ""), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/layouts/BaseLayout.astro", "self");

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", size = "md", class: className = "" } = Astro2.props;
  const baseStyles = "inline-flex items-center rounded-full font-medium";
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs"
  };
  const variants = {
    vindication: "bg-vindication-500/20 text-vindication-500 ring-1 ring-vindication-500/30",
    breach: "bg-breach-500/20 text-breach-500 ring-1 ring-breach-500/30",
    discrepancy: "bg-discrepancy-500/20 text-discrepancy-500 ring-1 ring-discrepancy-500/30",
    causation: "bg-causation-500/20 text-causation-500 ring-1 ring-causation-500/30",
    quantum: "bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30",
    procedural: "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30",
    strategic: "bg-gold-500/20 text-gold-500 ring-1 ring-gold-500/30",
    witness: "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30",
    fabrication: "bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/30",
    default: "bg-navy-700/50 text-navy-300 ring-1 ring-navy-600/30"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([baseStyles, sizes[size], variants[variant], className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/common/Badge.astro", void 0);

export { $$Badge as $, $$BaseLayout as a };
