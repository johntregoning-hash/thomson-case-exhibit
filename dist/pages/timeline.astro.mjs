/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, r as renderComponent, F as Fragment$1 } from '../chunks/astro/server_BG5xGXoY.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$Badge } from '../chunks/Badge_DL3EHgdM.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_DQkrsiHj.mjs';
import 'clsx';
/* empty css                                    */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://johntregoning-hash.github.io");
const $$TimelineSpine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TimelineSpine;
  const { anchors } = Astro2.props;
  const typeStyles = {
    vindication: {
      dot: "bg-green-500",
      glow: "shadow-[0_0_20px_rgba(34,197,94,0.5)]",
      text: "text-green-400"
    },
    breach: {
      dot: "bg-red-500",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.5)]",
      text: "text-red-400"
    },
    anchor: {
      dot: "bg-gold-500",
      glow: "shadow-[0_0_25px_rgba(212,175,55,0.6)]",
      text: "text-gold-400"
    },
    standard: {
      dot: "bg-navy-500",
      glow: "",
      text: "text-navy-400"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="timeline-spine hidden lg:block fixed left-6 xl:left-12 top-24 bottom-24 w-1 z-30" data-astro-cid-du26vvra> <!-- Spine line with gradient --> <div class="absolute inset-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-navy-700 via-gold-500/30 to-navy-700 rounded-full" data-astro-cid-du26vvra></div> <!-- Anchor points --> <div class="relative h-full flex flex-col justify-between py-8" data-astro-cid-du26vvra> ${anchors.map((anchor, index) => {
    const styles = typeStyles[anchor.type] || typeStyles.standard;
    return renderTemplate`<div class="relative group"${addAttribute(anchor.id, "data-spine-event")} data-astro-cid-du26vvra>  <div${addAttribute([
      "w-4 h-4 rounded-full border-4 border-navy-900 transition-all duration-500",
      "hover:scale-150 cursor-pointer",
      styles.dot,
      styles.glow,
      "spine-dot"
    ], "class:list")} data-astro-cid-du26vvra></div>  <div class="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-astro-cid-du26vvra> <div class="bg-navy-800/95 backdrop-blur-xl border border-navy-700/50 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl" data-astro-cid-du26vvra> <p${addAttribute(["text-xs font-semibold", styles.text], "class:list")} data-astro-cid-du26vvra>${anchor.shortDate}</p> <p class="text-sm text-white" data-astro-cid-du26vvra>${anchor.label}</p> ${anchor.findingRef && renderTemplate`<p class="text-xs text-navy-500 font-mono mt-1" data-astro-cid-du26vvra>${anchor.findingRef}</p>`} </div>  <div class="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-navy-800 border-l border-b border-navy-700/50 rotate-45" data-astro-cid-du26vvra></div> </div> </div>`;
  })} </div> </div> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/timeline/TimelineSpine.astro", void 0);

const $$Astro$1 = createAstro("https://johntregoning-hash.github.io");
const $$TimelineEventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimelineEventCard;
  const {
    id,
    date,
    phase,
    title,
    description,
    status,
    findingRef,
    source,
    tier,
    isTruthSpine = false,
    isGpEntry = false,
    isAnchor = false,
    critical = false
  } = Astro2.props;
  const base = "/thomson-case-exhibit";
  const statusStyles = {
    verified: {
      bg: "bg-green-500/20 border-green-500/30",
      text: "text-green-400",
      icon: "✓"
    },
    unverified: {
      bg: "bg-amber-500/20 border-amber-500/30",
      text: "text-amber-400",
      icon: "?"
    },
    contradicted: {
      bg: "bg-red-500/20 border-red-500/30",
      text: "text-red-400",
      icon: "✗"
    },
    fabricated: {
      bg: "bg-navy-700/50 border-navy-600/50",
      text: "text-navy-400",
      icon: "⚫"
    }
  };
  const currentStatus = statusStyles[status] || statusStyles.unverified;
  const cardType = isTruthSpine ? "truth-spine" : isGpEntry ? "gp-entry" : "standard";
  const cardStyles = {
    "truth-spine": "bg-green-500/5 border-green-500/20 hover:border-green-500/40",
    "gp-entry": "bg-navy-800/40 border-navy-700/50 hover:border-navy-600/60",
    "standard": "bg-navy-800/40 border-navy-700/50 hover:border-navy-600/60"
  };
  const tierLabels = {
    1: "Imaging",
    2: "Specialist",
    3: "Hospital/A&E",
    4: "GP Entry"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "timeline-event timeline-event-hidden",
    "relative rounded-2xl border backdrop-blur-xl p-5 transition-all duration-500",
    cardStyles[cardType],
    isAnchor && "ring-2 ring-gold-500/50 shadow-gold-glow",
    critical && "ring-2 ring-red-500/50"
  ], "class:list")}${addAttribute(id, "data-event-id")}${addAttribute(date, "data-event-date")}${addAttribute(phase, "data-event-phase")} data-astro-cid-2rycpctc>  ${isAnchor && renderTemplate`<div class="absolute -top-3 left-4 px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full shadow-gold-glow" data-astro-cid-2rycpctc>
KEY MOMENT
</div>`}  <div class="flex items-start justify-between gap-4 mb-3" data-astro-cid-2rycpctc> <div class="flex items-center gap-3" data-astro-cid-2rycpctc>  <div${addAttribute(["w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border", currentStatus.bg], "class:list")} data-astro-cid-2rycpctc> <span${addAttribute(currentStatus.text, "class")} data-astro-cid-2rycpctc>${currentStatus.icon}</span> </div>  <div data-astro-cid-2rycpctc> <p class="text-lg font-display font-bold text-white" data-astro-cid-2rycpctc>${date}</p> ${tier && renderTemplate`<p class="text-xs text-navy-500" data-astro-cid-2rycpctc>Tier ${tier}: ${tierLabels[tier] || "Evidence"}</p>`} </div> </div>  ${findingRef && renderTemplate`<a${addAttribute(`${base}/findings/${findingRef.toLowerCase()}`, "href")} class="px-2 py-1 text-xs font-mono bg-navy-700/50 border border-navy-600/50 rounded text-gold-400 hover:text-gold-300 hover:border-gold-500/30 transition-colors" data-astro-cid-2rycpctc> ${findingRef} </a>`} </div>  <h4${addAttribute([
    "text-base font-semibold mb-2",
    isTruthSpine ? "text-green-300" : "text-white"
  ], "class:list")} data-astro-cid-2rycpctc> ${isTruthSpine && renderTemplate`<span class="inline-flex items-center gap-1 text-xs text-green-500 uppercase tracking-wider mr-2" data-astro-cid-2rycpctc> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2rycpctc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2rycpctc></path> </svg>
Truth Spine
</span>`} ${isGpEntry && renderTemplate`<span class="inline-flex items-center gap-1 text-xs text-navy-500 uppercase tracking-wider mr-2" data-astro-cid-2rycpctc> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2rycpctc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-2rycpctc></path> </svg>
GP Record
</span>`} ${title} </h4>  <p class="text-sm text-navy-300 leading-relaxed" data-astro-cid-2rycpctc>${description}</p>  ${source && renderTemplate`<p class="mt-3 pt-3 border-t border-navy-700/30 text-xs text-navy-500" data-astro-cid-2rycpctc>
Source: ${source} </p>`}  ${critical && renderTemplate`<div class="mt-3 pt-3 border-t border-red-500/20 flex items-center gap-2 text-xs text-red-400" data-astro-cid-2rycpctc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2rycpctc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-2rycpctc></path> </svg>
Critical finding - potential breach
</div>`} </div> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/timeline/TimelineEventCard.astro", void 0);

function ScrollObserver({ events, onEventInView }) {
  const [currentDate, setCurrentDate] = useState("");
  const [currentPhase, setCurrentPhase] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const eventId = element.dataset.eventId;
          const eventDate = element.dataset.eventDate || "";
          const eventPhase = parseInt(element.dataset.eventPhase || "1", 10);
          if (entry.isIntersecting) {
            element.classList.add("timeline-event-visible");
            element.classList.remove("timeline-event-hidden");
            setCurrentDate(eventDate);
            setCurrentPhase(eventPhase);
            setIsVisible(true);
            if (onEventInView && eventId) {
              onEventInView(eventId, eventDate);
            }
            const spineDot = document.querySelector(`[data-spine-event="${eventId}"]`);
            if (spineDot) {
              spineDot.classList.add("spine-dot-active");
            }
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > 0) {
              element.classList.add("timeline-event-hidden");
              element.classList.remove("timeline-event-visible");
            }
            const spineDot = document.querySelector(`[data-spine-event="${eventId}"]`);
            if (spineDot) {
              spineDot.classList.remove("spine-dot-active");
            }
          }
        });
      },
      {
        root: null,
        // viewport
        rootMargin: "-20% 0px -30% 0px",
        // Trigger when element is in middle 50% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );
    const timelineEvents = document.querySelectorAll("[data-event-id]");
    timelineEvents.forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [events, onEventInView]);
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("scrollytelling-timeline");
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0d1526]/90 backdrop-blur-xl border border-[#1a2744]/50 rounded-2xl p-4 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-[#5a6b8a] uppercase tracking-wider mb-1", children: [
            "Phase ",
            currentPhase
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-display font-bold text-white", children: currentDate || "—" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mt-3", children: [1, 2, 3, 4, 5, 6, 7, 8].map((phase) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${phase === currentPhase ? "bg-[#d4af37] scale-125" : phase < currentPhase ? "bg-[#10b981]" : "bg-[#1a2744]"}`
            },
            phase
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed right-0 top-16 bottom-0 w-1 z-40 bg-[#0d1526]", children: /* @__PURE__ */ jsx(
      "div",
      {
        id: "scroll-progress-bar",
        className: "w-full bg-gradient-to-b from-[#d4af37] to-[#10b981] transition-all duration-100",
        style: { height: "0%" }
      }
    ) })
  ] });
}

const $$Astro = createAstro("https://johntregoning-hash.github.io");
const $$TheVoid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TheVoid;
  const {
    startDate,
    endDate,
    delayDays = 82,
    delayMonths = "~3 months",
    message = "MRI confirmed fractures. Patient still wasn't told."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="the-void relative py-32 my-8" id="the-void" data-astro-cid-2xhk42va> <!-- Void Background --> <div class="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#020617] to-navy-950 opacity-80" data-astro-cid-2xhk42va></div> <!-- Animated particles (subtle) --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-2xhk42va> <div class="void-particle particle-1" data-astro-cid-2xhk42va></div> <div class="void-particle particle-2" data-astro-cid-2xhk42va></div> <div class="void-particle particle-3" data-astro-cid-2xhk42va></div> </div> <!-- Content --> <div class="relative z-10 text-center px-6" data-astro-cid-2xhk42va> <!-- The Void Label --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 border border-navy-700/50 mb-8" data-astro-cid-2xhk42va> <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" data-astro-cid-2xhk42va></div> <span class="text-sm font-mono text-red-400 uppercase tracking-wider" data-astro-cid-2xhk42va>The Void</span> </div> <!-- Time Markers --> <div class="flex justify-center items-center gap-4 mb-8" data-astro-cid-2xhk42va> <div class="text-right" data-astro-cid-2xhk42va> <p class="text-sm text-navy-500" data-astro-cid-2xhk42va>MRI Confirmed</p> <p class="text-xl font-display font-bold text-gold-400" data-astro-cid-2xhk42va>${startDate}</p> </div> <!-- Arrow with days --> <div class="flex items-center gap-2 px-6" data-astro-cid-2xhk42va> <div class="h-px w-12 bg-gradient-to-r from-gold-500/50 to-transparent" data-astro-cid-2xhk42va></div> <span class="text-3xl font-display font-bold text-red-400" data-astro-cid-2xhk42va>${delayDays}</span> <span class="text-sm text-navy-400" data-astro-cid-2xhk42va>days</span> <div class="h-px w-12 bg-gradient-to-l from-red-500/50 to-transparent" data-astro-cid-2xhk42va></div> </div> <div class="text-left" data-astro-cid-2xhk42va> <p class="text-sm text-navy-500" data-astro-cid-2xhk42va>Covert Diagnosis</p> <p class="text-xl font-display font-bold text-red-400" data-astro-cid-2xhk42va>${endDate}</p> </div> </div> <!-- Delay Counter --> <div class="inline-block px-8 py-4 rounded-2xl bg-navy-900/60 border border-red-500/20 backdrop-blur-xl" data-astro-cid-2xhk42va> <p class="text-sm text-navy-400 mb-1" data-astro-cid-2xhk42va>Diagnostic Gap</p> <p class="text-4xl font-display font-bold text-white" data-astro-cid-2xhk42va> ${delayMonths} </p> </div> <!-- Message --> <p class="mt-8 text-lg text-navy-300 max-w-md mx-auto leading-relaxed" data-astro-cid-2xhk42va> ${message} </p> <!-- Subtle accusation --> <p class="mt-4 text-sm text-red-400/70 italic" data-astro-cid-2xhk42va>
"Instead, a psychiatric label was applied."
</p> </div> <!-- Bottom gradient fade --> <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" data-astro-cid-2xhk42va></div> </div> `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/components/timeline/TheVoid.astro", void 0);

const metadata = {
	totalPhases: 8,
	diagnosticDelay: "10 months",
	vindicationDate: "September 2025"
};
const phases = [
	{
		id: 1,
		title: "Pre-Existing Conditions & Early Dismissal Pattern",
		period: "Pre-2020 to October 2020",
		description: "Objective medical history documenting EDS, TOS-positive Doppler, and chronic pain predating the care failures.",
		truthSpine: [
			{
				date: "13 Jun 2019",
				event: "Duplex Ultrasound (TOS Protocol)",
				finding: "COMPLETE FLOW CESSATION in distal subclavian during Adson's/EAST manoeuvres. 'Positive result.'",
				source: "Royal Free Doppler",
				findingRef: "F032",
				tier: 1
			},
			{
				date: "Pre-2020",
				event: "Ehlers-Danlos Syndrome diagnosed",
				finding: "Chronic pain documented across multiple specialist letters",
				source: "Multiple specialist letters",
				tier: 2
			},
			{
				date: "Pre-2020",
				event: "DEXA Scan",
				finding: "T/Z scores -2.3 to -2.6 (osteopenic range) - bone fragility documented",
				source: "Radiology records",
				tier: 1
			}
		],
		gpEntries: [
		],
		criticalFindings: [
			"F032"
		],
		keyMessage: "2019 duplex ultrasound objectively demonstrated vascular TOS. Any subsequent GP entries treating TOS as 'speculative' or 'functional' are contradicted by this high-tier evidence."
	},
	{
		id: 2,
		title: "Psychiatric Framing Begins",
		period: "October 2020 - December 2021",
		description: "The pattern of dismissing physical symptoms as psychological begins, despite objective evidence of pathology.",
		truthSpine: [
			{
				date: "04 Aug 2021",
				event: "MSK Physiotherapy Notes",
				finding: "'issues with GP, as they did not believe his pain and accused him for attention seeking'",
				source: "MSK Physio records",
				findingRef: "F022",
				tier: 3
			},
			{
				date: "18 Oct 2021",
				event: "Pain Clinic Response",
				finding: "Referral REJECTED - 'Advised to refer to psychiatrist'",
				source: "Clinic Letters Binder",
				findingRef: "F043",
				tier: 2
			},
			{
				date: "22 Jul 2021",
				event: "UCLH Hypermobility Service",
				finding: "Jason Parry documented paraspinal muscle spasm, 'struggling to sleep as a result of back pain'",
				source: "Jason Parry letter",
				findingRef: "F026",
				tier: 2
			}
		],
		gpEntries: [
			{
				date: "28 Sep 2020",
				clinician: "Dr Gupta",
				content: "MH1 Referral: explicitly links 'somatisation' to brother's death",
				status: "VERIFIED",
				findingRef: "F002"
			},
			{
				date: "23 Oct 2020",
				clinician: "Dr Gupta",
				content: "'on same path as his brother who committed suicide after chronic pain'",
				status: "CONTRADICTED",
				findingRef: "F002"
			},
			{
				date: "Sep 2021",
				clinician: "Dr Bulale",
				content: "'sleeping pain-free'",
				status: "CONTRADICTED",
				findingRef: "F001"
			},
			{
				date: "Oct 2021",
				clinician: "Unknown",
				content: "Pregabalin reduced 600mg → 100mg (83% reduction)",
				status: "VERIFIED",
				findingRef: "F042"
			}
		],
		criticalFindings: [
			"F001",
			"F002",
			"F022",
			"F042",
			"F043"
		],
		keyMessage: "Independent MSK physio documented GP dismissal BEFORE the December 2021 seizure. Pregabalin abruptly reduced contrary to BNF guidance, increasing seizure risk."
	},
	{
		id: 3,
		title: "The Index Event - First Seizure",
		period: "23-24 December 2021",
		description: "First tonic-clonic seizure causing T5-T8 vertebral fractures. A&E and GP dismissed as 'soft tissue injury' without spinal imaging.",
		truthSpine: [
			{
				date: "23 Dec 2021 22:39",
				event: "999 Call",
				finding: "Tonic-clonic seizure witnessed by family. 5-minute ambulance response (Category 1/2 life-threatening).",
				source: "Ambulance ePCR F250",
				findingRef: "F023",
				tier: 1
			},
			{
				date: "23 Dec 2021",
				event: "Ambulance Assessment",
				finding: "HR 133bpm (tachycardia), Entonox for back pain, 'extremely combative and confused', 'held to ground by father'",
				source: "Ambulance ePCR F250",
				findingRef: "F023a",
				tier: 1
			},
			{
				date: "24 Dec 2021",
				event: "A&E Attendance",
				finding: "CT Head NAD. NO thoracic spine imaging. Discharged as 'soft tissue injury'.",
				source: "ED Depart Summary",
				findingRef: "F047",
				tier: 2
			}
		],
		gpEntries: [
			{
				date: "24 Dec 2021",
				clinician: "Dr Khemani",
				content: "'Went to CXH A&E yesterday as had ?seizure - severe back pain'",
				status: "VERIFIED"
			},
			{
				date: "24 Dec 2021",
				clinician: "GP",
				content: "111 prescribed 2 weeks morphine - GP removes second week claiming 'soft tissue injury'",
				status: "CONTRADICTED"
			},
			{
				date: "31 Dec 2021",
				clinician: "Dr Idowu",
				content: "'imaging has all been normal' - only CT head done, NOT spinal imaging",
				status: "CONTRADICTED",
				findingRef: "F-GEM-011"
			}
		],
		criticalFindings: [
			"F023",
			"F023a",
			"F047"
		],
		keyMessage: "Ambulance documented life-threatening triaging (5-min response), severe back pain requiring Entonox, combative post-ictal state. These objective markers were subsequently ignored.",
		breaches: [
			"No thoracic spine imaging despite NICE NG59 red flags",
			"Dismissed as 'soft tissue' - fractures confirmed 10 months later",
			"No neurology referral until SECOND seizure"
		]
	},
	{
		id: 4,
		title: "The Diagnostic Void",
		period: "January 2022 - October 2022 (~10 months)",
		description: "The period during which T5-T8 vertebral fractures remained undiagnosed while patient repeatedly presented with thoracic pain.",
		truthSpine: [
			{
				date: "Feb 2022",
				event: "Second Seizure",
				finding: "Epilepsy formally diagnosed. Right rib fracture 'aggravated further'.",
				source: "ED records",
				findingRef: "F024",
				tier: 2
			},
			{
				date: "08 Feb 2022",
				event: "Neurospine Clinic",
				finding: "Mr Hassany: 'MRI findings does not explain his severe back pain' - but discharged because LUMBAR MRI normal. WRONG AREA IMAGED.",
				source: "CL009",
				findingRef: "F347",
				tier: 2
			},
			{
				date: "16 Oct 2022",
				event: "UCLH MRI (study date)",
				finding: "T5-T8 VERTEBRAL FRACTURES confirmed. 'Development of mild depression... superior endplate of T5 to T8.'",
				source: "MRI Report - Dr A. Kenji Yamamoto",
				findingRef: "F048",
				tier: 1
			}
		],
		gpEntries: [
			{
				date: "Jan-Nov 2022",
				clinician: "Multiple",
				content: "Pain medication adjustments only - no thoracic imaging ordered",
				status: "CONTRADICTED"
			},
			{
				date: "Throughout",
				clinician: "Multiple",
				content: "Psychiatric referral suggested while objective spinal pathology present",
				status: "CONTRADICTED"
			}
		],
		criticalFindings: [
			"F041",
			"F347",
			"F048"
		],
		keyMessage: "10-MONTH DIAGNOSTIC DELAY. Patient complained of exact thoracic pain location where fractures later confirmed. Neurospine discharged patient after imaging WRONG spinal region (lumbar not thoracic).",
		diagnosticDelay: {
			start: "23 December 2021",
			end: "16 October 2022",
			duration: "10 months",
			standard: "Within days of presentation"
		}
	},
	{
		id: 5,
		title: "The Covert Psychiatric Diagnosis",
		period: "January 2023",
		description: "Somatoform Pain Disorder applied during a telephone call about medication - AFTER MRI had already proven physical fractures.",
		truthSpine: [
			{
				date: "03 Jan 2023",
				event: "Dr Karunaratne Clinic Letter",
				finding: "'Pain remains a major concern' - documented severe physical symptoms 2 DAYS before somatoform applied",
				source: "CL016",
				findingRef: "F127",
				tier: 2
			},
			{
				date: "05 Jan 2023",
				event: "Scheduled Skull Surgery (SCDS)",
				finding: "Major surgery planned - validates organic pathology",
				source: "Hospital records",
				tier: 2
			}
		],
		gpEntries: [
			{
				date: "05 Jan 2023 17:52",
				clinician: "Dr Bulale Ali",
				content: "Somatoform Pain Disorder (E278) applied during telephone call about opioid switching. Patient never informed.",
				status: "CONTRADICTED",
				findingRef: "F040",
				critical: true
			},
			{
				date: "10 Jan 2023",
				clinician: "Practice",
				content: "Morphine prescription coded 'Indication: Somatoform pain disorder' - legitimate pain medication for proven fractures being coded as psychiatric",
				status: "CONTRADICTED"
			}
		],
		criticalFindings: [
			"F040",
			"F127"
		],
		keyMessage: "Psychiatric diagnosis applied (1) without psychiatric assessment, (2) without patient knowledge, (3) AFTER MRI proved T5-T8 fractures. Used wrong ICD-10 code (E278 vs F45.4).",
		breaches: [
			"Telephone call, not psychiatric assessment",
			"Patient never informed",
			"Applied AFTER physical pathology proven",
			"Wrong diagnostic code"
		]
	},
	{
		id: 6,
		title: "Further GP Misconduct",
		period: "August 2023",
		description: "Addiction allegations without testing; brother's suicide weaponised to dismiss physical symptoms.",
		truthSpine: [
			{
				date: "04 Aug 2021",
				event: "UCLH Holter Monitor (predates)",
				finding: "Mean HR 99bpm, sinus tachycardia documented - OBJECTIVE baseline 2 years before Morgan accused of stimulant use",
				source: "Holter Report",
				findingRef: "F117",
				tier: 1
			}
		],
		gpEntries: [
			{
				date: "02 Aug 2023",
				clinician: "Dr Morgan",
				content: "'the main issue here is opaite [sic] addiction' - NO toxicology testing performed",
				status: "CONTRADICTED",
				findingRef: "F044",
				critical: true
			},
			{
				date: "02 Aug 2023",
				clinician: "Dr Morgan",
				content: "'Pulse 100 - I'm not sure about this' re stimulant denial - ignored 2 years of documented cardiac investigation",
				status: "CONTRADICTED",
				findingRef: "F104"
			},
			{
				date: "18 Aug 2023",
				clinician: "Dr Drewry",
				content: "'doing same behaviour as brother trying to get pain medication and he committed suicide'",
				status: "CONTRADICTED",
				findingRef: "F045",
				critical: true
			}
		],
		criticalFindings: [
			"F044",
			"F045",
			"F104",
			"F115",
			"F116",
			"F117"
		],
		keyMessage: "'Addiction' label applied without toxicology testing. Tachycardia (pulse 100) attributed to stimulants when 2-year documented cardiac history showed it was baseline. Brother's death weaponised to dismiss symptoms.",
		breaches: [
			"Addiction diagnosis without formal assessment or toxicology",
			"Defamatory entry weaponising family tragedy",
			"Ignored documented cardiac history"
		]
	},
	{
		id: 7,
		title: "Vindication",
		period: "2023-2025",
		description: "Independent specialists refute the psychiatric framing. Multiple vindication statements documented.",
		truthSpine: [
			{
				date: "29 Aug 2022",
				event: "Dr Simeoni (C&W Neurology)",
				finding: "'Has never been reviewed by the FND team' - FND label applied without formal assessment",
				source: "CL075",
				findingRef: "F323",
				tier: 2
			},
			{
				date: "2023",
				event: "Pain Clinic Psychology (C&W)",
				finding: "'no psychiatric/psychological basis for patient's pain' - explicitly rejected somatoform",
				source: "Psychology discharge",
				findingRef: "F031",
				tier: 2
			},
			{
				date: "2023",
				event: "Dr Gupta (Psychiatrist)",
				finding: "Psychiatric assessment found NO PTSD, depression, psychosis, personality disorder, OR somatisation disorder",
				source: "Psychiatric assessment",
				findingRef: "F038",
				tier: 2
			},
			{
				date: "05 Dec 2023",
				event: "Dr Karunaratne",
				finding: "'medical explanations have been found for symptoms that he has been experiencing for a long time'",
				source: "CL019",
				findingRef: "F128",
				tier: 2
			},
			{
				date: "10 Dec 2024",
				event: "Dr Karunaratne",
				finding: "Formal diagnosis: 'Epilepsy with generalised seizures' - NOT functional/dissociative",
				source: "CL032",
				findingRef: "F354",
				tier: 2
			}
		],
		gpEntries: [
			{
				date: "Jul/Sep 2025",
				clinician: "Dr Alexander Gorrie",
				content: "Somatoform diagnosis marked INACTIVE - 'there were clear causes for his pain'",
				status: "VERIFIED",
				findingRef: "F030",
				critical: true
			}
		],
		criticalFindings: [
			"F030",
			"F031",
			"F128",
			"F323",
			"F337",
			"F354",
			"F356"
		],
		keyMessage: "Internal NHS vindication from subsequent GP. Multiple independent specialists confirmed organic pathology and rejected psychiatric framing."
	},
	{
		id: 8,
		title: "Continuing Objective Pathology",
		period: "2024-2025",
		description: "Further imaging continues to confirm objective vascular and structural pathology, establishing 6-year timeline of documented disease.",
		truthSpine: [
			{
				date: "10 Jan 2024",
				event: "MR Thoracic Inlet/Outlet (UCLH)",
				finding: "Dynamic compression of left subclavian artery + vein with arms abducted; focal stenosis",
				source: "MR Report",
				findingRef: "F033",
				tier: 1
			},
			{
				date: "16 Apr 2024",
				event: "CT Aorta (UCLH)",
				finding: "'A thoracic outlet syndrome affecting left subclavian artery cannot be excluded'",
				source: "CT Report",
				findingRef: "F037",
				tier: 1
			},
			{
				date: "09 Jun 2025",
				event: "Doppler Upper Limbs (Royal Free)",
				finding: "Bilateral subclavian veins 'compressed with no flow' at 90° abduction. Both artery and vein occluded in Surrender position.",
				source: "US Doppler Report",
				findingRef: "F036",
				tier: 1
			}
		],
		gpEntries: [
		],
		criticalFindings: [
			"F033",
			"F036",
			"F037"
		],
		keyMessage: "SIX-YEAR TIMELINE of documented vascular TOS: 2019 Duplex → 2024 MR → 2025 Doppler. All positive. Rebuts any 'functional/non-organic' narrative.",
		tosTimeline: {
			start: "June 2019",
			end: "June 2025",
			span: "6 years",
			studies: [
				{
					date: "Jun 2019",
					type: "Duplex Ultrasound",
					result: "Complete flow cessation - POSITIVE"
				},
				{
					date: "Jan 2024",
					type: "Dynamic MR",
					result: "Compression with arms abducted - POSITIVE"
				},
				{
					date: "Jul 2024",
					type: "MRA (Vascular)",
					result: "Subclavian compression + stenosis - POSITIVE"
				},
				{
					date: "Jun 2025",
					type: "Doppler",
					result: "Bilateral occlusion at 90° - POSITIVE"
				}
			]
		},
		vascularVindication: {
			date: "03 July 2024",
			clinician: "Mr Aaron Goh",
			organisation: "Royal Free Hospital - Vascular Surgery",
			findingRefs: [
				"F356",
				"F357",
				"F358",
				"F359"
			],
			keyFindings: [
				"Formal diagnoses: Epilepsy, T5-T8 fractures, EDS (all ORGANIC)",
				"Tremor listed as 'unknown aetiology' - NOT labelled functional",
				"MRA confirms subclavian compression + stenosis",
				"Patient states would prefer amputation - severity documented",
				"Care transferred between hospitals to consolidate fragmented records"
			],
			significance: "Independent non-neurology specialist vindicates organic pathology. Critical quantum evidence."
		}
	}
];
const causationChain = {
	title: "Sleep Deprivation → Seizure → Fracture Chain",
	findingRef: "F050",
	steps: [
		{
			date: "October 2020",
			event: "Back pain documented"
		},
		{
			date: "October 2021",
			event: "Pregabalin reduced contrary to BNF (F042)",
			breach: true
		},
		{
			date: "Late 2021",
			event: "Inadequate pain control → sleep deprivation"
		},
		{
			date: "23 December 2021",
			event: "First tonic-clonic seizure (INDEX EVENT)",
			critical: true
		},
		{
			date: "23 December 2021",
			event: "T5-T8 vertebral fractures sustained",
			critical: true
		},
		{
			date: "23-24 December 2021",
			event: "A&E + GP dismiss as 'soft tissue' (F047)",
			breach: true
		},
		{
			date: "January - October 2022",
			event: "10-month diagnostic delay (F041)",
			breach: true
		},
		{
			date: "16 October 2022",
			event: "MRI finally confirms fractures"
		},
		{
			date: "05 January 2023",
			event: "Somatoform diagnosis applied AFTER fractures proven (F040)",
			breach: true
		},
		{
			date: "2023-2025",
			event: "Contaminated referrals → deprioritised care"
		},
		{
			date: "September 2025",
			event: "Dr Gorrie removes inappropriate diagnosis (VINDICATION)",
			vindication: true
		}
	],
	butForTest: "But for the failures to treat pain adequately (leading to sleep deprivation) and image the spine (leading to delayed diagnosis), the patient would not have suffered the seizure, sustained the fractures, gone 10 months with untreated spinal fractures, or had psychiatric label contaminate his care for 2.5 years."
};
const limitationAnalysis = {
	findingRef: "F080",
	indexInjury: "23 December 2021",
	dateOfKnowledge: "August 2025",
	section32: "s.32(1)(b) deliberate concealment available - patient was never told of psychiatric diagnosis",
	limitationExpires: "August 2028",
	timeRemaining: "~2.5 years"
};
const breachRegister = [
	{
		id: "B001",
		date: "23-24 Dec 2021",
		clinician: "Charing Cross A&E",
		nature: "Failed to image thoracic spine despite red flags",
		status: "VERIFIED"
	},
	{
		id: "B002",
		date: "24 Dec 2021",
		clinician: "Dr Khemani",
		nature: "Failed to order spinal imaging post-seizure",
		status: "VERIFIED"
	},
	{
		id: "B003",
		date: "Jan-Oct 2022",
		clinician: "Multiple GPs",
		nature: "10-month diagnostic delay for T5-T8 fractures",
		status: "VERIFIED"
	},
	{
		id: "B004",
		date: "Oct 2021",
		clinician: "Unknown GP",
		nature: "Pregabalin reduction contrary to BNF",
		status: "VERIFIED"
	},
	{
		id: "B005",
		date: "05 Jan 2023",
		clinician: "Dr Bulale",
		nature: "Somatoform diagnosis without assessment",
		status: "VERIFIED"
	},
	{
		id: "B006",
		date: "02 Aug 2023",
		clinician: "Dr Morgan",
		nature: "Addiction allegation without testing",
		status: "VERIFIED"
	},
	{
		id: "B007",
		date: "18 Aug 2023",
		clinician: "Dr Drewry",
		nature: "Defamatory entry re brother's death",
		status: "VERIFIED"
	},
	{
		id: "B008",
		date: "Dec 2021",
		clinician: "Clive Polles",
		nature: "Non-clinical staff refusing medication",
		status: "VERIFIED"
	},
	{
		id: "B009",
		date: "Various",
		clinician: "Multiple",
		nature: "Lamotrigine removed without taper",
		status: "VERIFIED"
	}
];
const timelineData = {
	metadata: metadata,
	phases: phases,
	causationChain: causationChain,
	limitationAnalysis: limitationAnalysis,
	breachRegister: breachRegister
};

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const phases = timelineData.phases;
  const metadata = timelineData.metadata;
  const causationChain = timelineData.causationChain;
  const breachRegister = timelineData.breachRegister;
  const limitationAnalysis = timelineData.limitationAnalysis;
  const spineAnchors = [
    { id: "anchor-tos", date: "2019-06-13", shortDate: "Jun 2019", label: "TOS Positive", type: "vindication", findingRef: "F032" },
    { id: "anchor-seizure", date: "2021-12-23", shortDate: "Dec 2021", label: "First Seizure", type: "anchor", findingRef: "F023" },
    { id: "anchor-mri", date: "2022-10-16", shortDate: "Oct 2022", label: "Fractures Confirmed", type: "anchor", findingRef: "F048" },
    { id: "anchor-covert", date: "2023-01-05", shortDate: "Jan 2023", label: "Covert Diagnosis", type: "breach", findingRef: "F027" },
    { id: "anchor-vindication", date: "2025-07-22", shortDate: "Jul 2025", label: "Diagnosis Removed", type: "vindication", findingRef: "F030" }
  ];
  const allEvents = phases.flatMap((phase) => [
    ...phase.truthSpine.map((e, i) => ({
      id: `${phase.id}-truth-${i}`,
      date: e.date,
      phase: phase.id,
      isAnchor: spineAnchors.some((a) => a.findingRef === e.findingRef)
    })),
    ...(phase.gpEntries || []).map((e, i) => ({
      id: `${phase.id}-gp-${i}`,
      date: e.date,
      phase: phase.id,
      isAnchor: false
    }))
  ]);
  const totalEvents = allEvents.length;
  const truthSpineCount = phases.reduce((acc, p) => acc + p.truthSpine.length, 0);
  const gpEntryCount = phases.reduce((acc, p) => acc + (p.gpEntries?.length || 0), 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Timeline", "description": "8-phase forensic chronology with scrollytelling - Thomson clinical negligence case", "data-astro-cid-qlh7ngej": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ScrollObserver", ScrollObserver, { "client:load": true, "events": allEvents, "client:component-hydration": "load", "client:component-path": "@components/timeline/ScrollObserver", "client:component-export": "default", "data-astro-cid-qlh7ngej": true })}  ${renderComponent($$result2, "TimelineSpine", $$TimelineSpine, { "anchors": spineAnchors, "data-astro-cid-qlh7ngej": true })}  ${maybeRenderHead()}<section class="relative py-16 lg:py-20 overflow-hidden" data-astro-cid-qlh7ngej> <div class="absolute inset-0 bg-gradient-to-b from-navy-800/30 to-transparent" data-astro-cid-qlh7ngej></div> <div class="container-wide relative" data-astro-cid-qlh7ngej> <div class="max-w-3xl lg:ml-24" data-astro-cid-qlh7ngej> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "class": "mb-4", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate`Forensic Chronology` })} <h1 class="text-4xl lg:text-5xl font-display font-bold text-white mb-6" data-astro-cid-qlh7ngej>
Case Timeline
</h1> <p class="text-lg text-navy-300 leading-relaxed mb-6" data-astro-cid-qlh7ngej> <strong class="text-gold-400" data-astro-cid-qlh7ngej>${metadata.totalPhases} phases</strong> spanning from pre-2020 to ${metadata.vindicationDate}.
          Scroll to witness the <strong class="text-white" data-astro-cid-qlh7ngej>${metadata.diagnosticDelay}</strong> diagnostic delay unfold.
</p> <!-- Quick stats --> <div class="flex flex-wrap gap-6 text-sm" data-astro-cid-qlh7ngej> <div data-astro-cid-qlh7ngej> <span class="text-2xl font-display font-bold text-gold-400" data-astro-cid-qlh7ngej>${totalEvents}</span> <span class="text-navy-400 ml-2" data-astro-cid-qlh7ngej>Key Events</span> </div> <div data-astro-cid-qlh7ngej> <span class="text-2xl font-display font-bold text-green-400" data-astro-cid-qlh7ngej>${truthSpineCount}</span> <span class="text-navy-400 ml-2" data-astro-cid-qlh7ngej>Truth Spine</span> </div> <div data-astro-cid-qlh7ngej> <span class="text-2xl font-display font-bold text-navy-300" data-astro-cid-qlh7ngej>${gpEntryCount}</span> <span class="text-navy-400 ml-2" data-astro-cid-qlh7ngej>GP Entries</span> </div> </div> </div> </div> </section>  <section class="border-y border-navy-700/30 bg-navy-900/50 sticky top-16 z-20 backdrop-blur-xl" data-astro-cid-qlh7ngej> <div class="container-wide py-4" data-astro-cid-qlh7ngej> <div class="flex items-center gap-2 overflow-x-auto lg:ml-24 scrollbar-hide" data-astro-cid-qlh7ngej> ${spineAnchors.map((anchor, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, { "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <a${addAttribute(`#phase-${anchor.date.split("-")[0] === "2019" ? "1" : anchor.date.split("-")[0] === "2020" || anchor.date.split("-")[0] === "2021" && anchor.date.includes("12") ? "3" : "4"}`, "href")}${addAttribute([
    "flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
    anchor.type === "vindication" && "bg-green-500/10 hover:bg-green-500/20",
    anchor.type === "breach" && "bg-red-500/10 hover:bg-red-500/20",
    anchor.type === "anchor" && "bg-gold-500/10 hover:bg-gold-500/20"
  ], "class:list")} data-astro-cid-qlh7ngej> <div${addAttribute([
    "w-2.5 h-2.5 rounded-full",
    anchor.type === "vindication" && "bg-green-500",
    anchor.type === "breach" && "bg-red-500",
    anchor.type === "anchor" && "bg-gold-500"
  ], "class:list")} data-astro-cid-qlh7ngej></div> <div data-astro-cid-qlh7ngej> <p${addAttribute([
    "text-sm font-semibold",
    anchor.type === "vindication" && "text-green-400",
    anchor.type === "breach" && "text-red-400",
    anchor.type === "anchor" && "text-gold-400"
  ], "class:list")} data-astro-cid-qlh7ngej>${anchor.shortDate}</p> <p class="text-xs text-navy-500" data-astro-cid-qlh7ngej>${anchor.label}</p> </div> </a> ${index < spineAnchors.length - 1 && renderTemplate`<div class="w-8 h-px bg-gradient-to-r from-navy-600 to-transparent flex-shrink-0" data-astro-cid-qlh7ngej></div>`}` })}`)} </div> </div> </section>  <section class="border-b border-navy-700/30 bg-navy-900/30" data-astro-cid-qlh7ngej> <div class="container-wide py-4" data-astro-cid-qlh7ngej> <div class="flex flex-wrap items-center gap-6 text-sm lg:ml-24" data-astro-cid-qlh7ngej> <span class="text-navy-500 font-medium" data-astro-cid-qlh7ngej>Evidence Track:</span> <div class="flex items-center gap-2" data-astro-cid-qlh7ngej> <div class="w-3 h-3 rounded-full bg-green-500" data-astro-cid-qlh7ngej></div> <span class="text-green-400" data-astro-cid-qlh7ngej>Truth Spine</span> <span class="text-navy-600" data-astro-cid-qlh7ngej>|</span> <span class="text-navy-500 text-xs" data-astro-cid-qlh7ngej>High reliability</span> </div> <div class="flex items-center gap-2" data-astro-cid-qlh7ngej> <div class="w-3 h-3 rounded-full bg-navy-500" data-astro-cid-qlh7ngej></div> <span class="text-navy-300" data-astro-cid-qlh7ngej>GP Record</span> <span class="text-navy-600" data-astro-cid-qlh7ngej>|</span> <span class="text-navy-500 text-xs" data-astro-cid-qlh7ngej>Subject to verification</span> </div> </div> </div> </section>  <section id="scrollytelling-timeline" class="py-12 lg:py-20" data-astro-cid-qlh7ngej> <div class="container-wide" data-astro-cid-qlh7ngej> <div class="lg:ml-24 max-w-3xl" data-astro-cid-qlh7ngej> ${phases.map((phase) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, { "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate`${phase.id === 5 && renderTemplate`${renderComponent($$result3, "TheVoid", $$TheVoid, { "startDate": "16 Oct 2022", "endDate": "05 Jan 2023", "delayDays": 82, "delayMonths": "~3 months", "message": "MRI confirmed T5-T8 vertebral fractures. Patient was never informed of the results.", "data-astro-cid-qlh7ngej": true })}`}<div${addAttribute(`phase-${phase.id}`, "id")} class="mb-20 last:mb-0" data-astro-cid-qlh7ngej> <!-- Phase Header --> <div class="sticky top-32 z-10 mb-8" data-astro-cid-qlh7ngej> ${renderComponent($$result3, "GlassCard", $$GlassCard, { "variant": "elevated", "padding": "md", "data-astro-cid-qlh7ngej": true }, { "default": ($$result4) => renderTemplate` <div class="flex items-start justify-between gap-4" data-astro-cid-qlh7ngej> <div data-astro-cid-qlh7ngej> <div class="flex items-center gap-3 mb-2" data-astro-cid-qlh7ngej> <span class="text-3xl font-display font-bold text-gold-400" data-astro-cid-qlh7ngej> ${phase.id.toString().padStart(2, "0")} </span> <div class="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" data-astro-cid-qlh7ngej></div> </div> <h2 class="text-xl lg:text-2xl font-display font-bold text-white mb-2" data-astro-cid-qlh7ngej> ${phase.title} </h2> <p class="text-sm text-navy-400" data-astro-cid-qlh7ngej>${phase.period}</p> </div> </div> ${phase.keyMessage && renderTemplate`<p class="mt-4 pt-4 border-t border-navy-700/30 text-sm text-navy-300 leading-relaxed" data-astro-cid-qlh7ngej> <strong class="text-gold-400" data-astro-cid-qlh7ngej>Key:</strong> ${phase.keyMessage} </p>`}` })} </div> <!-- Phase Events --> <div class="space-y-4 pl-4 border-l-2 border-navy-700/30" data-astro-cid-qlh7ngej>  ${phase.truthSpine.map((event, i) => renderTemplate`${renderComponent($$result3, "TimelineEventCard", $$TimelineEventCard, { "id": `${phase.id}-truth-${i}`, "date": event.date, "phase": phase.id, "title": event.event, "description": event.finding, "status": "verified", "findingRef": event.findingRef, "source": event.source, "tier": event.tier, "isTruthSpine": true, "isAnchor": spineAnchors.some((a) => a.findingRef === event.findingRef), "data-astro-cid-qlh7ngej": true })}`)}  ${(phase.gpEntries || []).map((entry, i) => renderTemplate`${renderComponent($$result3, "TimelineEventCard", $$TimelineEventCard, { "id": `${phase.id}-gp-${i}`, "date": entry.date, "phase": phase.id, "title": `GP Entry: ${entry.clinician || "Unknown"}`, "description": entry.content, "status": entry.status?.toLowerCase() || "unverified", "findingRef": entry.findingRef, "isGpEntry": true, "critical": entry.critical, "data-astro-cid-qlh7ngej": true })}`)}  ${phase.breaches && phase.breaches.length > 0 && renderTemplate`<div class="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20" data-astro-cid-qlh7ngej> <h4 class="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2" data-astro-cid-qlh7ngej> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlh7ngej> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-qlh7ngej></path> </svg>
Breaches Identified
</h4> <ul class="space-y-2" data-astro-cid-qlh7ngej> ${phase.breaches.map((breach) => renderTemplate`<li class="text-sm text-red-300 flex items-start gap-2" data-astro-cid-qlh7ngej> <span class="text-red-500 mt-1" data-astro-cid-qlh7ngej>•</span> ${breach} </li>`)} </ul> </div>`} </div> </div> ` })}`)} </div> </div> </section>  <section class="py-16 border-t border-navy-700/30 bg-navy-900/30" data-astro-cid-qlh7ngej> <div class="container-wide" data-astro-cid-qlh7ngej> <div class="lg:ml-24 max-w-3xl" data-astro-cid-qlh7ngej> <div class="flex items-center gap-3 mb-8" data-astro-cid-qlh7ngej> <div class="w-4 h-4 rounded-full bg-blue-500" data-astro-cid-qlh7ngej></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-qlh7ngej>
Causation Chain
</h2> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "causation", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate`${causationChain.findingRef}` })} </div> <p class="text-navy-400 mb-8" data-astro-cid-qlh7ngej>${causationChain.title}</p> <div class="relative pl-8 border-l-2 border-blue-500/30 space-y-4" data-astro-cid-qlh7ngej> ${causationChain.steps.map((step) => renderTemplate`<div class="relative" data-astro-cid-qlh7ngej> <div${addAttribute([
    "absolute -left-[25px] w-4 h-4 rounded-full border-2 border-navy-900",
    step.critical ? "bg-red-500" : step.breach ? "bg-amber-500" : step.vindication ? "bg-green-500" : "bg-blue-500"
  ], "class:list")} data-astro-cid-qlh7ngej></div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": step.critical ? "breach" : step.vindication ? "vindication" : "default", "padding": "sm", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <p class="text-xs text-navy-500 mb-1" data-astro-cid-qlh7ngej>${step.date}</p> <p${addAttribute([
    "text-sm",
    step.critical ? "text-red-400 font-semibold" : step.vindication ? "text-green-400" : "text-navy-300"
  ], "class:list")} data-astro-cid-qlh7ngej>${step.event}</p> ` })} </div>`)} </div> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "highlight", "padding": "md", "class": "mt-8", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <h4 class="text-sm font-semibold text-gold-400 mb-2" data-astro-cid-qlh7ngej>But-For Test</h4> <p class="text-sm text-navy-300" data-astro-cid-qlh7ngej>${causationChain.butForTest}</p> ` })} </div> </div> </section>  <section class="py-16 border-t border-navy-700/30" data-astro-cid-qlh7ngej> <div class="container-wide" data-astro-cid-qlh7ngej> <div class="lg:ml-24" data-astro-cid-qlh7ngej> <h2 class="text-2xl font-display font-bold text-white mb-8" data-astro-cid-qlh7ngej>Breach Register</h2> <div class="overflow-x-auto rounded-xl border border-navy-700/30" data-astro-cid-qlh7ngej> <table class="w-full text-sm" data-astro-cid-qlh7ngej> <thead class="bg-navy-800/50" data-astro-cid-qlh7ngej> <tr data-astro-cid-qlh7ngej> <th class="text-left py-3 px-4 text-navy-500 font-medium" data-astro-cid-qlh7ngej>ID</th> <th class="text-left py-3 px-4 text-navy-500 font-medium" data-astro-cid-qlh7ngej>Date</th> <th class="text-left py-3 px-4 text-navy-500 font-medium" data-astro-cid-qlh7ngej>Clinician</th> <th class="text-left py-3 px-4 text-navy-500 font-medium" data-astro-cid-qlh7ngej>Nature</th> <th class="text-left py-3 px-4 text-navy-500 font-medium" data-astro-cid-qlh7ngej>Status</th> </tr> </thead> <tbody data-astro-cid-qlh7ngej> ${breachRegister.map((breach) => renderTemplate`<tr class="border-t border-navy-700/30 hover:bg-navy-800/30 transition-colors" data-astro-cid-qlh7ngej> <td class="py-3 px-4 font-mono text-gold-400" data-astro-cid-qlh7ngej>${breach.id}</td> <td class="py-3 px-4 text-navy-400" data-astro-cid-qlh7ngej>${breach.date}</td> <td class="py-3 px-4 text-white" data-astro-cid-qlh7ngej>${breach.clinician}</td> <td class="py-3 px-4 text-navy-300" data-astro-cid-qlh7ngej>${breach.nature}</td> <td class="py-3 px-4" data-astro-cid-qlh7ngej> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "vindication", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate`${breach.status}` })} </td> </tr>`)} </tbody> </table> </div> </div> </div> </section>  <section class="py-16 border-t border-navy-700/30 bg-navy-900/30" data-astro-cid-qlh7ngej> <div class="container-wide" data-astro-cid-qlh7ngej> <div class="lg:ml-24 max-w-2xl" data-astro-cid-qlh7ngej> <div class="flex items-center gap-3 mb-8" data-astro-cid-qlh7ngej> <div class="w-4 h-4 rounded-full bg-gold-500" data-astro-cid-qlh7ngej></div> <h2 class="text-2xl font-display font-bold text-white" data-astro-cid-qlh7ngej>Limitation Analysis</h2> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate`${limitationAnalysis.findingRef}` })} </div> <div class="grid grid-cols-2 gap-4" data-astro-cid-qlh7ngej> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <p class="text-xs text-navy-500 mb-1" data-astro-cid-qlh7ngej>Index Injury</p> <p class="text-lg font-semibold text-white" data-astro-cid-qlh7ngej>${limitationAnalysis.indexInjury}</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <p class="text-xs text-navy-500 mb-1" data-astro-cid-qlh7ngej>Date of Knowledge</p> <p class="text-lg font-semibold text-gold-400" data-astro-cid-qlh7ngej>${limitationAnalysis.dateOfKnowledge}</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "padding": "md", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <p class="text-xs text-navy-500 mb-1" data-astro-cid-qlh7ngej>Limitation Expires</p> <p class="text-lg font-semibold text-red-400" data-astro-cid-qlh7ngej>${limitationAnalysis.limitationExpires}</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "variant": "vindication", "padding": "md", "data-astro-cid-qlh7ngej": true }, { "default": ($$result3) => renderTemplate` <p class="text-xs text-navy-500 mb-1" data-astro-cid-qlh7ngej>Time Remaining</p> <p class="text-lg font-semibold text-green-400" data-astro-cid-qlh7ngej>${limitationAnalysis.timeRemaining}</p> ` })} </div> <p class="text-sm text-navy-400 mt-6" data-astro-cid-qlh7ngej> <strong class="text-gold-400" data-astro-cid-qlh7ngej>s.32(1)(b):</strong> ${limitationAnalysis.section32} </p> </div> </div> </section>  <section class="py-16 border-t border-navy-700/30" data-astro-cid-qlh7ngej> <div class="container-wide" data-astro-cid-qlh7ngej> <div class="lg:ml-24 grid grid-cols-2 md:grid-cols-4 gap-6" data-astro-cid-qlh7ngej> <div class="text-center" data-astro-cid-qlh7ngej> <p class="text-4xl font-display font-bold text-gold-400" data-astro-cid-qlh7ngej>${metadata.totalPhases}</p> <p class="text-sm text-navy-400 mt-1" data-astro-cid-qlh7ngej>Timeline Phases</p> </div> <div class="text-center" data-astro-cid-qlh7ngej> <p class="text-4xl font-display font-bold text-white" data-astro-cid-qlh7ngej>${totalEvents}+</p> <p class="text-sm text-navy-400 mt-1" data-astro-cid-qlh7ngej>Key Events</p> </div> <div class="text-center" data-astro-cid-qlh7ngej> <p class="text-4xl font-display font-bold text-red-400" data-astro-cid-qlh7ngej>${metadata.diagnosticDelay}</p> <p class="text-sm text-navy-400 mt-1" data-astro-cid-qlh7ngej>Diagnostic Delay</p> </div> <div class="text-center" data-astro-cid-qlh7ngej> <p class="text-4xl font-display font-bold text-green-400" data-astro-cid-qlh7ngej>6+</p> <p class="text-sm text-navy-400 mt-1" data-astro-cid-qlh7ngej>Years of Evidence</p> </div> </div> </div> </section> ` })} `;
}, "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/timeline.astro", void 0);
const $$file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/timeline.astro";
const $$url = "/thomson-case-exhibit/timeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Timeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
