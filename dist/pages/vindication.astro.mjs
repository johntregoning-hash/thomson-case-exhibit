/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, r as renderComponent } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$Badge } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import 'clsx';
/* empty css                                       */
import { jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$VindicationQuote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VindicationQuote;
  const { quote, specialist, organisation, date, findingId, title, tier, featured = false, summary } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const tierStyles = {
    "Imaging": {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    "Clinical": {
      bg: "bg-green-500/20",
      text: "text-green-400",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    "Testimony": {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    }
  };
  const tierStyle = tierStyles[tier] || tierStyles["Clinical"];
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "vindication-quote group relative",
    featured ? "featured" : ""
  ], "class:list")}${addAttribute(findingId, "data-finding-id")} data-astro-cid-22uvnq77> <div${addAttribute([
    "relative overflow-hidden rounded-2xl transition-all duration-500",
    "bg-gradient-to-br from-green-500/5 via-navy-800/50 to-navy-800/50",
    "backdrop-blur-xl border border-green-500/20",
    "hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10",
    featured ? "p-8" : "p-6"
  ], "class:list")} data-astro-cid-22uvnq77> <!-- Decorative quote mark --> <div class="absolute -top-4 -left-2 text-green-500/10 pointer-events-none select-none" data-astro-cid-22uvnq77> <svg${addAttribute(["fill-current", featured ? "w-24 h-24" : "w-16 h-16"], "class:list")} viewBox="0 0 24 24" data-astro-cid-22uvnq77> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" data-astro-cid-22uvnq77></path> </svg> </div> <!-- Featured badge --> ${featured && renderTemplate`<div class="absolute top-4 right-4" data-astro-cid-22uvnq77> <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold" data-astro-cid-22uvnq77> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-22uvnq77> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-22uvnq77></path> </svg>
KEY
</span> </div>`} <!-- Header --> <div class="flex items-start gap-3 mb-4 relative z-10" data-astro-cid-22uvnq77> <span class="text-sm font-mono text-green-500" data-astro-cid-22uvnq77>${findingId}</span> <div${addAttribute([
    "flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium",
    tierStyle.bg,
    tierStyle.text
  ], "class:list")} data-astro-cid-22uvnq77> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-22uvnq77> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(tierStyle.icon, "d")} data-astro-cid-22uvnq77></path> </svg> ${tier} </div> </div> <!-- Title --> <h3${addAttribute([
    "font-display font-semibold text-white mb-4 group-hover:text-green-400 transition-colors",
    featured ? "text-xl" : "text-lg"
  ], "class:list")} data-astro-cid-22uvnq77> ${title} </h3> <!-- Quote --> <blockquote${addAttribute([
    "relative z-10 font-serif italic text-green-400 mb-4",
    "border-l-3 border-green-500/50 pl-4",
    featured ? "text-xl leading-relaxed" : "text-lg"
  ], "class:list")} data-astro-cid-22uvnq77> ${quote} </blockquote> <!-- Summary (if provided) --> ${summary && renderTemplate`<p class="text-sm text-navy-300 mb-4 leading-relaxed" data-astro-cid-22uvnq77> ${summary} </p>`} <!-- Attribution --> <div class="relative z-10 flex items-center gap-4 pt-4 border-t border-green-500/20" data-astro-cid-22uvnq77> <!-- Specialist Avatar --> <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center" data-astro-cid-22uvnq77> <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-22uvnq77> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-22uvnq77></path> </svg> </div> <div class="flex-1 min-w-0" data-astro-cid-22uvnq77> <p class="text-sm font-medium text-white truncate" data-astro-cid-22uvnq77>${specialist}</p> <p class="text-xs text-navy-400 truncate" data-astro-cid-22uvnq77>${organisation}</p> </div> <div class="text-right" data-astro-cid-22uvnq77> <p class="text-xs text-navy-500" data-astro-cid-22uvnq77>${date}</p> </div> </div> <!-- View Finding Link --> <a${addAttribute(getHref(`/findings/${findingId.toLowerCase()}`), "href")} class="absolute inset-0 z-20"${addAttribute(`View finding ${findingId}`, "aria-label")} data-astro-cid-22uvnq77> <span class="sr-only" data-astro-cid-22uvnq77>View finding details</span> </a> <!-- Hover Arrow --> <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" data-astro-cid-22uvnq77> <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-22uvnq77> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-22uvnq77></path> </svg> </div> </div> </article> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/vindication/VindicationQuote.astro", void 0);

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$VindicationTimeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VindicationTimeline;
  const { milestones } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const defaultMilestones = [
    {
      date: "Sep 2020",
      title: "MH1 Referral",
      description: 'GP referral includes "somatisation" framing before any injuries',
      type: "negative",
      findingRef: "F002"
    },
    {
      date: "Jun 2019",
      title: "TOS Confirmed",
      description: "Duplex ultrasound shows vascular compression",
      type: "positive",
      findingRef: "F032"
    },
    {
      date: "Dec 2021",
      title: "Seizure Event",
      description: "Witnessed tonic-clonic seizure, ambulance response",
      type: "neutral"
    },
    {
      date: "Oct 2022",
      title: "Fractures Found",
      description: "MRI reveals T5-T8 vertebral fractures after 11-month delay",
      type: "neutral"
    },
    {
      date: "Jan 2023",
      title: "Covert Diagnosis",
      description: "Somatoform Pain Disorder applied without assessment",
      type: "negative",
      findingRef: "F040"
    },
    {
      date: "2023",
      title: "Psychiatric Clearance",
      description: "Dr Gupta finds NO psychiatric disorders",
      type: "positive",
      findingRef: "F038"
    },
    {
      date: "Dec 2024",
      title: "Epilepsy Confirmed",
      description: "Formal epilepsy diagnosis validates seizure history",
      type: "positive",
      findingRef: "F354"
    },
    {
      date: "Jul 2025",
      title: "Diagnosis Removed",
      description: '"There were clear causes for his pain"',
      type: "positive",
      findingRef: "F030"
    }
  ];
  const timelineMilestones = milestones || defaultMilestones;
  const typeStyles = {
    negative: {
      dot: "bg-red-500",
      glow: "shadow-red-500/50",
      line: "from-red-500/50"
    },
    neutral: {
      dot: "bg-amber-500",
      glow: "shadow-amber-500/50",
      line: "from-amber-500/50"
    },
    positive: {
      dot: "bg-green-500",
      glow: "shadow-green-500/50",
      line: "from-green-500/50"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="vindication-timeline relative py-8" data-astro-cid-nasjw4pu> <!-- Timeline Track --> <div class="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500/30 via-amber-500/30 to-green-500/30 transform -translate-y-1/2 rounded-full" data-astro-cid-nasjw4pu></div> <!-- Progress Overlay (animated) --> <div class="timeline-progress absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-green-500 transform -translate-y-1/2 rounded-full" style="width: 0%;" data-astro-cid-nasjw4pu></div> <!-- Milestones Container --> <div class="relative flex justify-between items-start px-4" data-astro-cid-nasjw4pu> ${timelineMilestones.map((milestone, index) => {
    const style = typeStyles[milestone.type];
    const isLast = index === timelineMilestones.length - 1;
    return renderTemplate`<div class="milestone relative flex flex-col items-center"${addAttribute(`animation-delay: ${index * 150}ms`, "style")}${addAttribute(index, "data-index")} data-astro-cid-nasjw4pu> <!-- Dot --> <div${addAttribute([
      "w-4 h-4 rounded-full z-10 transition-all duration-300",
      "hover:scale-150 cursor-pointer",
      style.dot,
      `shadow-lg ${style.glow}`
    ], "class:list")} data-astro-cid-nasjw4pu> ${isLast && renderTemplate`<div class="absolute inset-0 rounded-full animate-ping bg-green-500/50" data-astro-cid-nasjw4pu></div>`} </div> <!-- Content Card --> <div${addAttribute([
      "mt-4 w-28 text-center group",
      index % 2 === 0 ? "" : "lg:-mt-20 lg:mb-4"
    ], "class:list")} data-astro-cid-nasjw4pu> <p class="text-xs font-mono text-navy-500 mb-1" data-astro-cid-nasjw4pu>${milestone.date}</p> <h4${addAttribute([
      "text-sm font-semibold mb-1 transition-colors",
      milestone.type === "positive" ? "text-green-400" : milestone.type === "negative" ? "text-red-400" : "text-white"
    ], "class:list")} data-astro-cid-nasjw4pu> ${milestone.title} </h4> <p class="text-xs text-navy-400 leading-tight hidden lg:block" data-astro-cid-nasjw4pu> ${milestone.description} </p> ${milestone.findingRef && renderTemplate`<a${addAttribute(getHref(`/findings/${milestone.findingRef.toLowerCase()}`), "href")} class="inline-block mt-1 text-xs font-mono text-gold-500 hover:text-gold-400 transition-colors" data-astro-cid-nasjw4pu> ${milestone.findingRef} </a>`} </div> <!-- Tooltip for mobile --> <div class="lg:hidden absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20" data-astro-cid-nasjw4pu> <div class="bg-navy-800/95 backdrop-blur-xl border border-navy-700/50 rounded-lg p-3 whitespace-nowrap shadow-xl" data-astro-cid-nasjw4pu> <p class="text-xs text-navy-400" data-astro-cid-nasjw4pu>${milestone.description}</p> </div> </div> </div>`;
  })} </div> </div>  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/vindication/VindicationTimeline.astro", void 0);

function AnimatedCounter({
  end,
  duration = 2e3,
  prefix = "",
  suffix = "",
  className = ""
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);
  const animateCount = () => {
    const startTime = performance.now();
    const startValue = 0;
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutExpo);
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(updateCount);
  };
  return /* @__PURE__ */ jsxs("span", { ref, className, children: [
    prefix,
    count,
    suffix
  ] });
}

const $$Vindication = createComponent(($$result, $$props, $$slots) => {
  const base = "/thomson-case-exhibit";
  const getHref = (path) => path === "/" ? base : `${base}${path}`;
  const vindicationFindings = [
    {
      id: "F030",
      title: "Dr Gorrie Removes Somatoform Diagnosis",
      date: "22 July 2025",
      specialist: "Dr Alexander Gorrie (GP)",
      organisation: "Current Practice",
      quote: '"there were clear causes for his pain."',
      summary: "Marked the Somatoform Pain Disorder diagnosis as INACTIVE. Highly unusual to remove without formal psychiatric reassessment - the error was self-evident.",
      legalSignificance: "Subsequent NHS clinician independently determined original psychiatric diagnosis was inappropriate. This is internal vindication, not litigation-driven expert opinion.",
      tier: "Clinical",
      featured: true
    },
    {
      id: "F031",
      title: "Pain Clinic Refutes Somatoform",
      date: "2023",
      specialist: "C&W Pain Clinic",
      organisation: "Chelsea & Westminster Hospital",
      quote: '"GP prev told somatic, pain clinic at C&W; felt not somatic."',
      summary: "Pain Clinic explicitly disagreed with somatoform characterisation.",
      legalSignificance: "Independent specialist refutation of GP diagnosis. Supports argument that diagnosis had no valid clinical basis.",
      tier: "Clinical"
    },
    {
      id: "F128",
      title: "Dr Karunaratne Confirms Organic Basis",
      date: "20 November 2023",
      specialist: "Dr Karunaratne",
      organisation: "Chelsea & Westminster Pain Clinic",
      quote: '"Medical explanations have been found for the symptoms he has."',
      summary: "Pain Clinic consultant explicitly states organic/medical causes have been identified - directly contradicting functional framing.",
      legalSignificance: "Senior NHS consultant on record stating medical explanations exist. Directly refutes somatoform characterisation.",
      tier: "Clinical",
      featured: true
    },
    {
      id: "F356",
      title: "Vascular Surgeon Confirms Organic Diagnoses",
      date: "3 July 2024",
      specialist: "Mr Aaron Goh",
      organisation: "Royal Free Hospital",
      quote: "Thoracic outlet syndrome (neurogenic), subclavian steal syndrome, vertebral artery compression",
      summary: "Vascular surgeon formally lists multiple organic conditions including TOS, subclavian steal, and vertebral artery compression.",
      legalSignificance: "Senior specialist confirming multiple organic diagnoses directly contradicts any functional/somatoform framing.",
      tier: "Clinical",
      featured: true
    },
    {
      id: "F357",
      title: "MRA Confirms Subclavian Compression & Stenosis",
      date: "3 July 2024",
      specialist: "Mr Aaron Goh",
      organisation: "Royal Free Hospital",
      quote: "MRA... confirms compression and focal stenosis of subclavian arteries bilaterally",
      summary: "MRA imaging confirms bilateral subclavian compression with focal stenosis - objective evidence of vascular pathology.",
      legalSignificance: "High-tier imaging evidence confirming organic pathology. Cannot be dismissed as functional.",
      tier: "Imaging",
      featured: true
    },
    {
      id: "F032",
      title: "2019 Duplex Ultrasound - TOS Positive",
      date: "13 June 2019",
      specialist: "Vascular Sonographer",
      organisation: "Royal Free Hospital",
      quote: '"Marked haemodynamic changes... a positive result."',
      summary: "Complete cessation of flow within the distal subclavian artery during Adson's and EAST manoeuvres bilaterally.",
      legalSignificance: 'High-tier objective evidence that vascular compression existed years before later disputes. Undermines any "no objective evidence / purely functional" framing.',
      tier: "Imaging"
    },
    {
      id: "F033",
      title: "2024 UCLH MR - Dynamic Subclavian Compression",
      date: "10 January 2024",
      specialist: "Dr An Thanh Ngo",
      organisation: "UCLH",
      quote: "Compression of the left subclavian artery and vein in the subclavicular space with arms abducted",
      summary: "MR thoracic inlet/outlet report describes compression including apparent focal stenosis.",
      legalSignificance: 'High-tier imaging evidence. Reinforces long-running TOS reality. Rebuts "functional / non-organic" framing.',
      tier: "Imaging"
    },
    {
      id: "F036",
      title: "US Doppler - Bilateral Subclavian Occlusion",
      date: "9 June 2025",
      specialist: "Vascular Team",
      organisation: "Royal Free Hospital",
      quote: 'At 90° abduction, subclavian veins "compressed with no flow"',
      summary: "Dynamic vascular compression demonstrated with positional occlusion. Both arms show flow cessation in provocative positions.",
      legalSignificance: "Establishes SIX-YEAR timeline of documented vascular pathology when combined with 2019 Doppler.",
      tier: "Imaging",
      featured: true
    },
    {
      id: "F037",
      title: "CT Aorta - TOS Not Excluded",
      date: "16 April 2024",
      specialist: "Consultant Radiologist",
      organisation: "UCLH",
      quote: '"A thoracic outlet syndrome affecting left subclavian artery cannot be excluded"',
      summary: "Arms-down study shows no stenosis but radiologist explicitly states TOS cannot be excluded without dynamic study.",
      legalSignificance: "Radiologist acknowledging static imaging does not negate condition. Recommended duplex was subsequently performed.",
      tier: "Imaging"
    },
    {
      id: "F034",
      title: "Dr Gorrie Recognises 2021 Seizure/Fractures",
      date: "17 October 2023",
      specialist: "Dr Alexander Gorrie",
      organisation: "Current Practice",
      quote: "History of tonic-clonic seizure in 2021 with rib injury... pain was not investigated properly",
      summary: "First GP to properly recognise and act on injury pattern - what previous GPs dismissed for nearly 2 years.",
      legalSignificance: "Shows concrete escalation step by new GP. Demonstrates persistence of symptoms and continuing need for assessment.",
      tier: "Clinical"
    },
    {
      id: "F354",
      title: "Formal Epilepsy Diagnosis Confirmed",
      date: "December 2024",
      specialist: "Neurology Team",
      organisation: "Imperial College Healthcare",
      quote: "Epilepsy formally diagnosed",
      summary: "Formal diagnosis validates all prior seizure events as genuine neurological episodes.",
      legalSignificance: "Validates entire seizure history. Contradicts any suggestion of NEAD or functional episodes.",
      tier: "Clinical"
    }
  ];
  const featuredFindings = vindicationFindings.filter((f) => f.featured);
  const imagingFindings = vindicationFindings.filter((f) => f.tier === "Imaging");
  const clinicalFindings = vindicationFindings.filter((f) => f.tier === "Clinical");
  const stats = {
    totalFindings: 22,
    imagingStudies: 6,
    specialists: 10,
    yearsOfEvidence: 6
  };
  const timelineMilestones = [
    {
      date: "2019",
      title: "First Positive Imaging",
      description: "Duplex ultrasound shows vascular compression",
      type: "positive",
      findingRef: "F032"
    },
    {
      date: "2021",
      title: "Seizure Event",
      description: "Tonic-clonic seizure with rib fractures",
      type: "neutral"
    },
    {
      date: "2023",
      title: "Pain Clinic Refutes",
      description: "C&W Pain Clinic disagrees with somatoform",
      type: "positive",
      findingRef: "F031"
    },
    {
      date: "2023",
      title: "Psychiatric Clearance",
      description: "Dr Gupta finds no psychiatric disorders",
      type: "positive",
      findingRef: "F038"
    },
    {
      date: "2024",
      title: "MR Confirms TOS",
      description: "UCLH imaging shows subclavian compression",
      type: "positive",
      findingRef: "F033"
    },
    {
      date: "2024",
      title: "Epilepsy Diagnosed",
      description: "Formal neurological diagnosis",
      type: "positive",
      findingRef: "F354"
    },
    {
      date: "2025",
      title: "Somatoform Removed",
      description: "Dr Gorrie marks diagnosis as INACTIVE",
      type: "positive",
      findingRef: "F030"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Vindication", "description": "22+ independent specialist findings that vindicate the patient's presentation", "data-astro-cid-ftpypwp7": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-24 overflow-hidden" data-astro-cid-ftpypwp7> <!-- Background Effects --> <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-astro-cid-ftpypwp7></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" data-astro-cid-ftpypwp7></div> <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" data-astro-cid-ftpypwp7></div> <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" data-astro-cid-ftpypwp7></div> <!-- Floating Particles --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-ftpypwp7> <div class="particle particle-1" data-astro-cid-ftpypwp7></div> <div class="particle particle-2" data-astro-cid-ftpypwp7></div> <div class="particle particle-3" data-astro-cid-ftpypwp7></div> </div> <div class="container-wide relative z-10" data-astro-cid-ftpypwp7> <div class="max-w-4xl mx-auto text-center" data-astro-cid-ftpypwp7> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8" data-astro-cid-ftpypwp7> <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse" data-astro-cid-ftpypwp7></div> <span class="text-sm font-medium text-green-400" data-astro-cid-ftpypwp7>Independent Clinical Evidence</span> </div> <!-- Title --> <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight" data-astro-cid-ftpypwp7>
The Defence
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-gold-400 to-green-400" data-astro-cid-ftpypwp7>
Cannot Argue
</span> </h1> <!-- Subtitle --> <p class="text-xl text-navy-300 leading-relaxed mb-12 max-w-2xl mx-auto" data-astro-cid-ftpypwp7>
Over <strong class="text-green-400" data-astro-cid-ftpypwp7>22 independent specialist findings</strong> that refute
          the psychiatric dismissal narrative and demonstrate clear organic pathology.
          Each vindication comes from NHS clinicians with no stake in this case.
</p> <!-- Animated Stats --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto" data-astro-cid-ftpypwp7> <div class="glass-card p-6 text-center" data-astro-cid-ftpypwp7> <div class="text-4xl font-display font-bold text-green-400 mb-2" data-astro-cid-ftpypwp7> ${renderComponent($$result2, "AnimatedCounter", AnimatedCounter, { "client:load": true, "end": stats.totalFindings, "suffix": "+", "client:component-hydration": "load", "client:component-path": "@components/vindication/AnimatedCounter", "client:component-export": "default", "data-astro-cid-ftpypwp7": true })} </div> <p class="text-sm text-navy-400" data-astro-cid-ftpypwp7>Vindication Findings</p> </div> <div class="glass-card p-6 text-center" data-astro-cid-ftpypwp7> <div class="text-4xl font-display font-bold text-blue-400 mb-2" data-astro-cid-ftpypwp7> ${renderComponent($$result2, "AnimatedCounter", AnimatedCounter, { "client:load": true, "end": stats.imagingStudies, "suffix": "+", "client:component-hydration": "load", "client:component-path": "@components/vindication/AnimatedCounter", "client:component-export": "default", "data-astro-cid-ftpypwp7": true })} </div> <p class="text-sm text-navy-400" data-astro-cid-ftpypwp7>Imaging Studies</p> </div> <div class="glass-card p-6 text-center" data-astro-cid-ftpypwp7> <div class="text-4xl font-display font-bold text-gold-400 mb-2" data-astro-cid-ftpypwp7> ${renderComponent($$result2, "AnimatedCounter", AnimatedCounter, { "client:load": true, "end": stats.specialists, "suffix": "+", "client:component-hydration": "load", "client:component-path": "@components/vindication/AnimatedCounter", "client:component-export": "default", "data-astro-cid-ftpypwp7": true })} </div> <p class="text-sm text-navy-400" data-astro-cid-ftpypwp7>Specialists</p> </div> <div class="glass-card p-6 text-center" data-astro-cid-ftpypwp7> <div class="text-4xl font-display font-bold text-purple-400 mb-2" data-astro-cid-ftpypwp7> ${renderComponent($$result2, "AnimatedCounter", AnimatedCounter, { "client:load": true, "end": stats.yearsOfEvidence, "client:component-hydration": "load", "client:component-path": "@components/vindication/AnimatedCounter", "client:component-export": "default", "data-astro-cid-ftpypwp7": true })} </div> <p class="text-sm text-navy-400" data-astro-cid-ftpypwp7>Years of Evidence</p> </div> </div> </div> </div> </section>  <section class="py-16 bg-navy-900/30" data-astro-cid-ftpypwp7> <div class="container-wide" data-astro-cid-ftpypwp7> <div class="text-center mb-12" data-astro-cid-ftpypwp7> <h2 class="text-3xl font-display font-bold text-white mb-4" data-astro-cid-ftpypwp7>The Vindication Journey</h2> <p class="text-navy-400 max-w-2xl mx-auto" data-astro-cid-ftpypwp7>
From first positive imaging to formal vindication - a timeline of independent specialist findings
</p> </div> ${renderComponent($$result2, "VindicationTimeline", $$VindicationTimeline, { "milestones": timelineMilestones, "data-astro-cid-ftpypwp7": true })} </div> </section>  <section class="py-20" data-astro-cid-ftpypwp7> <div class="container-wide" data-astro-cid-ftpypwp7> <div class="flex items-end justify-between mb-12" data-astro-cid-ftpypwp7> <div data-astro-cid-ftpypwp7> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "vindication", "class": "mb-4", "data-astro-cid-ftpypwp7": true }, { "default": ($$result3) => renderTemplate`Key Evidence` })} <h2 class="text-3xl font-display font-bold text-white" data-astro-cid-ftpypwp7>
Landmark Vindication Findings
</h2> <p class="text-navy-400 mt-2" data-astro-cid-ftpypwp7>The most significant independent clinical conclusions</p> </div> </div> <!-- Featured Quote Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-ftpypwp7> ${featuredFindings.map((finding) => renderTemplate`${renderComponent($$result2, "VindicationQuote", $$VindicationQuote, { "findingId": finding.id, "title": finding.title, "quote": finding.quote, "specialist": finding.specialist, "organisation": finding.organisation, "date": finding.date, "tier": finding.tier, "summary": finding.summary, "featured": true, "data-astro-cid-ftpypwp7": true })}`)} </div> </div> </section>  <section class="py-20 bg-navy-900/30" data-astro-cid-ftpypwp7> <div class="container-wide" data-astro-cid-ftpypwp7> <!-- Tier Filter Pills --> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12" data-astro-cid-ftpypwp7> <div data-astro-cid-ftpypwp7> <h2 class="text-3xl font-display font-bold text-white mb-2" data-astro-cid-ftpypwp7>Complete Evidence Wall</h2> <p class="text-navy-400" data-astro-cid-ftpypwp7>Filter by evidence tier to explore the vindication findings</p> </div> <div class="flex flex-wrap gap-2" id="tier-filters" data-astro-cid-ftpypwp7> <button data-tier="ALL" class="tier-pill active px-4 py-2 rounded-full text-sm font-medium bg-gold-500 text-navy-900 transition-all" data-astro-cid-ftpypwp7>
All Evidence
</button> <button data-tier="Imaging" class="tier-pill px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all" data-astro-cid-ftpypwp7> <svg class="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ftpypwp7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ftpypwp7></path> </svg>
Imaging (${imagingFindings.length})
</button> <button data-tier="Clinical" class="tier-pill px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all" data-astro-cid-ftpypwp7> <svg class="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ftpypwp7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-ftpypwp7></path> </svg>
Clinical (${clinicalFindings.length})
</button> </div> </div> <!-- Quote Wall Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="quote-wall" data-astro-cid-ftpypwp7> ${vindicationFindings.map((finding, index) => renderTemplate`<div class="quote-card"${addAttribute(finding.tier, "data-tier")}${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-ftpypwp7> ${renderComponent($$result2, "VindicationQuote", $$VindicationQuote, { "findingId": finding.id, "title": finding.title, "quote": finding.quote, "specialist": finding.specialist, "organisation": finding.organisation, "date": finding.date, "tier": finding.tier, "summary": finding.summary, "featured": finding.featured, "data-astro-cid-ftpypwp7": true })} </div>`)} </div> </div> </section>  <section class="py-20" data-astro-cid-ftpypwp7> <div class="container-wide" data-astro-cid-ftpypwp7> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "class": "p-12 text-center relative overflow-hidden", "data-astro-cid-ftpypwp7": true }, { "default": ($$result3) => renderTemplate`  <div class="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" data-astro-cid-ftpypwp7></div> <div class="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" data-astro-cid-ftpypwp7></div> <div class="relative z-10 max-w-3xl mx-auto" data-astro-cid-ftpypwp7> <!-- Icon --> <div class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center border border-green-500/30" data-astro-cid-ftpypwp7> <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ftpypwp7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-ftpypwp7></path> </svg> </div> <h2 class="text-4xl font-display font-bold text-white mb-6" data-astro-cid-ftpypwp7>
Independent Clinical Vindication
</h2> <p class="text-lg text-navy-300 mb-8 leading-relaxed" data-astro-cid-ftpypwp7>
Every vindication finding comes from NHS clinicians with no prior involvement in the case.
            They independently examined the patient, reviewed the evidence, and reached conclusions
            that <strong class="text-green-400" data-astro-cid-ftpypwp7>contradict the psychiatric dismissal narrative</strong> applied by the former GP practice.
</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-ftpypwp7> <a${addAttribute(getHref("/findings"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40" data-astro-cid-ftpypwp7> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ftpypwp7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ftpypwp7></path> </svg>
View All Findings
</a> <a${addAttribute(getHref("/timeline"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-navy-700/50 hover:bg-navy-700 text-white font-semibold rounded-xl border border-navy-600/50 transition-all" data-astro-cid-ftpypwp7> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ftpypwp7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ftpypwp7></path> </svg>
See Full Timeline
</a> </div> </div> ` })} </div> </section> ` })}  `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/vindication.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/vindication.astro";
const $$url = "/thomson-case-exhibit/vindication";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vindication,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
