import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, i as renderSlot, e as renderTemplate } from './astro/server_BG5xGXoY.mjs';
import 'clsx';

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$GlassCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GlassCard;
  const {
    variant = "default",
    padding = "md",
    href,
    class: className = "",
    transitionName
  } = Astro2.props;
  const baseStyles = "rounded-2xl transition-all duration-300";
  const variants = {
    default: "bg-navy-800/40 backdrop-blur-xl border border-navy-700/50",
    elevated: "bg-navy-800/60 backdrop-blur-2xl border border-navy-600/50 shadow-lg",
    vindication: "bg-vindication-500/10 backdrop-blur-xl border border-vindication-500/30 shadow-vindication-glow",
    breach: "bg-breach-500/10 backdrop-blur-xl border border-breach-500/30",
    highlight: "bg-navy-800/50 backdrop-blur-xl border border-gold-500/30 shadow-gold-glow",
    interactive: "bg-navy-800/40 backdrop-blur-xl border border-navy-700/50 hover:bg-navy-800/60 hover:border-navy-600/60 hover:shadow-card-hover cursor-pointer"
  };
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
  };
  const transitionAttr = transitionName ? { "transition:name": transitionName } : {};
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([baseStyles, variants[variant], paddings[padding], className], "class:list")}${spreadAttributes(transitionAttr)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<div${addAttribute([baseStyles, variants[variant], paddings[padding], className], "class:list")}${spreadAttributes(transitionAttr)}>${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/ui/GlassCard.astro", void 0);

export { $$GlassCard as $ };
