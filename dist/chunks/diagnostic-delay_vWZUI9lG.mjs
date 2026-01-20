import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BG5xGXoY.mjs';
import 'clsx';

const frontmatter = {
  "title": "The 10-Month Diagnostic Delay",
  "subtitle": "How T5-T8 Vertebral Fractures Went Undiagnosed Despite Red Flag Presentation",
  "date": "2026-01-17",
  "version": "1.0",
  "category": "BREACH",
  "status": "CURRENT",
  "critical": true,
  "keyFindings": ["F041", "F347", "F350", "F023"],
  "summary": "Documents the 10-month delay in diagnosing T5-T8 vertebral fractures from the December 2021 seizure until MRI confirmation in October 2022. Initial A&E assessment dismissed the injury as 'soft tissue' despite NICE NG59 red flag presentation. The delay was compounded by imaging the wrong spinal region (lumbar instead of thoracic).",
  "keyArguments": ["NICE NG59 red flags present but not actioned", "Initial A&E dismissed injury as 'soft tissue'", "Wrong spinal region imaged (lumbar MRI when thoracic was symptomatic)", "Patient discharged from Neurospine because 'no surgical target' - on lumbar MRI", "10 months of undiagnosed vertebral fractures caused prolonged suffering", "Thoracic MRI eventually confirmed T5-T8 fractures"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "executive-summary",
    "text": "Executive Summary"
  }, {
    "depth": 2,
    "slug": "the-index-event-23-december-2021",
    "text": "The Index Event: 23 December 2021"
  }, {
    "depth": 3,
    "slug": "the-seizure",
    "text": "The Seizure"
  }, {
    "depth": 3,
    "slug": "ae-presentation",
    "text": "A&E Presentation"
  }, {
    "depth": 3,
    "slug": "nice-ng59-red-flags",
    "text": "NICE NG59 Red Flags"
  }, {
    "depth": 2,
    "slug": "the-wrong-imaging-problem",
    "text": "The Wrong Imaging Problem"
  }, {
    "depth": 3,
    "slug": "lumbar-mri-instead-of-thoracic",
    "text": "Lumbar MRI Instead of Thoracic"
  }, {
    "depth": 3,
    "slug": "the-neurospine-discharge",
    "text": "The Neurospine Discharge"
  }, {
    "depth": 2,
    "slug": "the-10-month-timeline",
    "text": "The 10-Month Timeline"
  }, {
    "depth": 2,
    "slug": "the-october-2022-mri-findings",
    "text": "The October 2022 MRI Findings"
  }, {
    "depth": 2,
    "slug": "breach-analysis",
    "text": "Breach Analysis"
  }, {
    "depth": 3,
    "slug": "standard-of-care-failures",
    "text": "Standard of Care Failures"
  }, {
    "depth": 3,
    "slug": "the-bolam-test",
    "text": "The Bolam Test"
  }, {
    "depth": 2,
    "slug": "consequences-of-the-delay",
    "text": "Consequences of the Delay"
  }, {
    "depth": 3,
    "slug": "physical-impact",
    "text": "Physical Impact"
  }, {
    "depth": 3,
    "slug": "systemic-impact",
    "text": "Systemic Impact"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", createVNode(_components.p, {
      children: ["Following a tonic-clonic seizure on ", createVNode(_components.strong, {
        children: "23 December 2021"
      }), ", John Thomson sustained T5-T8 vertebral fractures that would remain undiagnosed for ", createVNode(_components.strong, {
        children: "ten months"
      }), ". The delay was not inevitable — it resulted from:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A&E dismissing"
        }), " the injury as “soft tissue” despite red flag symptoms"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Imaging the wrong region"
        }), " — lumbar MRI when thoracic spine was symptomatic"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Discharging the patient"
        }), " from Neurospine based on the wrong imaging"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["It was not until ", createVNode(_components.strong, {
        children: "October 2022"
      }), " that thoracic MRI finally confirmed what the patient had been reporting: significant spinal injury."]
    }), "\n", createVNode(_components.h2, {
      id: "the-index-event-23-december-2021",
      children: "The Index Event: 23 December 2021"
    }), "\n", createVNode(_components.h3, {
      id: "the-seizure",
      children: "The Seizure"
    }), "\n", createVNode(_components.p, {
      children: "On the morning of 23 December 2021, John Thomson experienced a tonic-clonic seizure at home. During the event:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "He fell heavily"
      }), "\n", createVNode(_components.li, {
        children: "His body struck furniture"
      }), "\n", createVNode(_components.li, {
        children: "He experienced immediate severe thoracic back pain"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ae-presentation",
      children: "A&E Presentation"
    }), "\n", createVNode(_components.p, {
      children: "The patient presented to Accident & Emergency with:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Acute thoracic spine pain"
        }), " following seizure"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Difficulty moving"
        }), " due to pain"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Point tenderness"
        }), " over mid-thoracic region"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mechanism of injury"
        }), " — high-impact fall during seizure"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "nice-ng59-red-flags",
      children: "NICE NG59 Red Flags"
    }), "\n", createVNode(_components.p, {
      children: "NICE Guideline NG59 (Low back pain and sciatica in over 16s) identifies red flags requiring urgent investigation. While technically for lumbar spine, the principles apply:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Red flags present in this case:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Trauma mechanism (seizure with fall)"
      }), "\n", createVNode(_components.li, {
        children: "Severe localised pain"
      }), "\n", createVNode(_components.li, {
        children: "New neurological symptoms"
      }), "\n", createVNode(_components.li, {
        children: "Age-related fracture risk"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Despite these indicators, the injury was dismissed as ", createVNode(_components.strong, {
        children: "“soft tissue”"
      }), " and the patient was discharged without imaging."]
    }), "\n", createVNode(_components.h2, {
      id: "the-wrong-imaging-problem",
      children: "The Wrong Imaging Problem"
    }), "\n", createVNode(_components.h3, {
      id: "lumbar-mri-instead-of-thoracic",
      children: "Lumbar MRI Instead of Thoracic"
    }), "\n", createVNode(_components.p, {
      children: ["When spinal imaging was eventually arranged, it was ordered for the ", createVNode(_components.strong, {
        children: "lumbar spine"
      }), " — not the ", createVNode(_components.strong, {
        children: "thoracic spine"
      }), " where the patient was experiencing symptoms."]
    }), "\n", createVNode(_components.p, {
      children: "The patient’s symptoms were clearly localised to the mid-back (T5-T8 region). However:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Referral was for lumbar MRI"
      }), "\n", createVNode(_components.li, {
        children: "Lumbar MRI (predictably) showed no acute pathology"
      }), "\n", createVNode(_components.li, {
        children: "Patient was discharged from Neurospine clinic"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "the-neurospine-discharge",
      children: "The Neurospine Discharge"
    }), "\n", createVNode(_components.p, {
      children: "The Neurospine clinic documented:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“No surgical target identified on lumbar MRI”"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This was correct — there was no surgical target in the ", createVNode(_components.strong, {
        children: "lumbar"
      }), " spine. However, the actual injury was in the ", createVNode(_components.strong, {
        children: "thoracic"
      }), " spine, which remained unimaged."]
    }), "\n", createVNode(_components.p, {
      children: "The patient continued to report thoracic symptoms, but was now discharged from the pathway that could have identified the injury."
    }), "\n", createVNode(_components.h2, {
      id: "the-10-month-timeline",
      children: "The 10-Month Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Date"
          }), createVNode(_components.th, {
            children: "Event"
          }), createVNode(_components.th, {
            children: "Outcome"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Dec 2021"
          }), createVNode(_components.td, {
            children: "Seizure and A&E attendance"
          }), createVNode(_components.td, {
            children: "Dismissed as “soft tissue”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Jan 2022"
          }), createVNode(_components.td, {
            children: "GP consultations for ongoing pain"
          }), createVNode(_components.td, {
            children: "Managed with analgesia"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Feb-Mar 2022"
          }), createVNode(_components.td, {
            children: "Repeated presentations"
          }), createVNode(_components.td, {
            children: "No imaging ordered"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Apr 2022"
          }), createVNode(_components.td, {
            children: "Lumbar MRI arranged"
          }), createVNode(_components.td, {
            children: "Wrong region imaged"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "May 2022"
          }), createVNode(_components.td, {
            children: "Neurospine review"
          }), createVNode(_components.td, {
            children: "Discharged - “no target”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Jun-Sep 2022"
          }), createVNode(_components.td, {
            children: "Continued symptoms"
          }), createVNode(_components.td, {
            children: "Pain management only"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Oct 2022"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Thoracic MRI finally performed"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "T5-T8 fractures confirmed"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "the-october-2022-mri-findings",
      children: "The October 2022 MRI Findings"
    }), "\n", createVNode(_components.p, {
      children: "The thoracic MRI report documented:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Altered marrow signal at T5-T8 with irregularity of the vertebral endplates consistent with healing fractures”"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After ten months of suffering, the fractures the patient had been reporting were finally confirmed."
    }), "\n", createVNode(_components.h2, {
      id: "breach-analysis",
      children: "Breach Analysis"
    }), "\n", createVNode(_components.h3, {
      id: "standard-of-care-failures",
      children: "Standard of Care Failures"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. A&E Assessment"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Red flag presentation dismissed"
      }), "\n", createVNode(_components.li, {
        children: "No imaging ordered despite mechanism of injury"
      }), "\n", createVNode(_components.li, {
        children: "Patient discharged without adequate investigation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. GP Management"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Repeated presentations without imaging escalation"
      }), "\n", createVNode(_components.li, {
        children: "Over-reliance on initial A&E assessment"
      }), "\n", createVNode(_components.li, {
        children: "Failure to recognise pattern of persistent symptoms"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. Imaging Request"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Wrong spinal region requested"
      }), "\n", createVNode(_components.li, {
        children: "Symptom location not considered in imaging protocol"
      }), "\n", createVNode(_components.li, {
        children: "Clinical correlation failure"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "4. Neurospine Discharge"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Discharged patient without thoracic imaging"
      }), "\n", createVNode(_components.li, {
        children: "Did not question why lumbar imaging was ordered for thoracic symptoms"
      }), "\n", createVNode(_components.li, {
        children: "No safety-netting for continued symptoms"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "the-bolam-test",
      children: "The Bolam Test"
    }), "\n", createVNode(_components.p, {
      children: "No responsible body of medical practitioners would support:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Dismissing post-seizure spinal trauma as “soft tissue” without imaging"
      }), "\n", createVNode(_components.li, {
        children: "Imaging the lumbar spine when thoracic symptoms are reported"
      }), "\n", createVNode(_components.li, {
        children: "Discharging a patient with ongoing symptoms based on imaging of the wrong region"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "consequences-of-the-delay",
      children: "Consequences of the Delay"
    }), "\n", createVNode(_components.h3, {
      id: "physical-impact",
      children: "Physical Impact"
    }), "\n", createVNode(_components.p, {
      children: "Ten months of undiagnosed vertebral fractures caused:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prolonged pain"
        }), " requiring escalating analgesia"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Potential delayed healing"
        }), " without appropriate management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Continued activity"
        }), " that may have worsened the injury"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Psychological distress"
        }), " from unexplained symptoms"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "systemic-impact",
      children: "Systemic Impact"
    }), "\n", createVNode(_components.p, {
      children: "The failure to diagnose the fractures contributed to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The somatoform narrative"
        }), " — unexplained pain was attributed to psychological causes"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Credibility damage"
        }), " — the patient was not believed when reporting injury"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Treatment delays"
        }), " — appropriate pain management was withheld"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "The 10-month delay in diagnosing T5-T8 vertebral fractures represents a cascade of clinical failures:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Initial dismissal of red flag presentation"
      }), "\n", createVNode(_components.li, {
        children: "Imaging the wrong spinal region"
      }), "\n", createVNode(_components.li, {
        children: "Discharging the patient based on irrelevant imaging"
      }), "\n", createVNode(_components.li, {
        children: "Failing to escalate despite persistent symptoms"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Each failure compounded the last. At any point, appropriate clinical attention to the patient’s reported symptoms and mechanism of injury would have led to correct diagnosis."
    }), "\n", createVNode(_components.p, {
      children: "The eventual October 2022 MRI vindicated everything the patient had been reporting. The fractures were real, significant, and should have been identified in December 2021."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "This essay is based on contemporaneous medical records, imaging reports, and clinic letters. The timeline is reconstructed from documented clinical encounters."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/essays/diagnostic-delay.mdx";
const file = "/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/diagnostic-delay.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/diagnostic-delay.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
