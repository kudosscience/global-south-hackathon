# Global South AI Safety Hackathon Plan

## Working Title
Bogota AI Governance Monitor

## Thesis
Build a lightweight, cross-platform civic monitoring app focused on Colombia, with Bogotá as the concrete pilot. The strongest hackathon entry is a public-sector AI governance auditor: it scans official announcements, policy documents, and related public sources for evidence of AI use, then flags likely governance gaps using the Colombia-specific context in [hackathon-docs/deep-research-report.md](hackathon-docs/deep-research-report.md).

The entry should optimize for the judging criteria in [hackathon-docs/Judging Criteria.md](hackathon-docs/Judging%20Criteria.md) by maximizing:

- Impact: it addresses a real enforcement gap in Colombia, where policy exists but is weakly enforceable.
- Innovation: it applies automated auditing to public-sector AI governance, which is more neglected than private-sector compliance.
- Execution quality: it stays narrow, testable, and grounded in public evidence.
- Presentation: it tells one clear story around Bogotá and Colombia rather than a diffuse regional platform.

## Product Concept

The app should answer a simple question: what AI-related activity is the Colombian public sector publicly disclosing, and where do the documents suggest governance gaps?

Core flow:

1. Select a source or agency.
2. Ingest public evidence from official announcements, policy pages, and open data where available.
3. Extract mentions of AI use, automated decision-making, surveillance, chatbots, or related initiatives.
4. Compare those findings against a Colombia-specific governance checklist derived from the research report.
5. Show a concise gap report, scorecard, and citation-backed alert summary.

The app should frame results as potential gaps, not legal conclusions.

## Why This Is the Best Winning Angle

This concept best matches the hackathon rubric because it combines a real policy gap with a clear, demoable workflow.

- Colombia’s AI policy environment is active but still largely advisory, with weak enforcement mechanisms.
- The research report highlights the lack of binding oversight, sanctions, and transparent compliance tracking.
- A monitoring tool is more credible than a general dashboard because it directly addresses the missing enforcement layer.
- Bogotá gives the project a concrete pilot without losing the national policy framing.

## Scope

### In scope
- Colombia only as the main jurisdiction.
- Bogotá as the primary pilot.
- Public-sector AI governance monitoring.
- English as the default UI language, with easy in-app switching to Spanish at any time.
- Cross-platform operation on older machines with low RAM requirements.
- A lightweight written submission plus a working prototype.

### Out of scope
- Building a full regulator replacement.
- Training custom deep learning models.
- Expanding to all of Latin America in the first version.
- Issuing definitive legal judgments.
- Heavy client-side processing or large local model dependencies.

## Research Grounding

The plan should explicitly reflect the research findings in the deep research report:

- Colombia’s CONPES 4144 is policy-oriented and still lacks strong enforcement teeth.
- The country’s AI governance is more about coordination and reporting than sanctions.
- There is a visible gap between policy ambition and practical oversight.
- A monitoring system can help surface that gap in a repeatable, evidence-backed way.

The app should use these findings as the backbone of the demo narrative and scoring story.

## User Experience Requirements

- English should be the default language.
- Spanish should be switchable easily at any point during use.
- The UI should be lightweight and responsive.
- The app should feel usable on older laptops.
- The demo should be one end-to-end workflow rather than a large multi-module product.

## Technical Direction

Keep the core logic deterministic and memory-efficient:

- Use manual seed documents for the demo.
- Supplement them with public APIs, open data, and scheduled scraping/crawling where available.
- Use optional AI summarization only for readable output, not as the core engine.
- Cache fetched sources.
- Avoid large local models and avoid memory-heavy client state.

Preferred design principles:

- Thin client.
- Small, readable evidence pipeline.
- Citation-backed results.
- Easy translation setup.
- Minimal RAM footprint.

## Evaluation Plan

The submission should include a small, credible evaluation layer:

- Source coverage: how much of the selected evidence set is successfully ingested.
- Extraction accuracy: whether AI-related mentions are correctly identified.
- Alert precision: whether the system flags meaningful gaps rather than noise.
- Performance: whether the app remains responsive on low-spec hardware.

These metrics should support the narrative that the tool is practical, not just conceptually interesting.

## Judging Criteria Mapping

### Impact Potential & Innovation
- Focus on the public-sector enforcement gap in Colombia.
- Present the tool as a neglected but important accountability layer.
- Emphasize that the app turns policy ambiguity into actionable monitoring.

### Execution Quality
- Keep the workflow narrow and reproducible.
- Use public evidence and deterministic processing where possible.
- Show a prototype that works end to end rather than a broad concept mockup.

### Presentation & Clarity
- Use one clear narrative: Bogotá public-sector AI monitoring.
- Keep the product story simple enough to explain quickly.
- Make the output easy to read: scorecard, gap report, and citations.

## Demo Story

The demo should follow one complete investigation:

1. Choose a Bogotá public-sector source.
2. Ingest a small set of documents and announcements.
3. Detect AI-related references.
4. Compare them against the governance checklist.
5. Show a concise report with highlighted gaps and citations.

The final frame should be: this is a lightweight tool that helps policymakers, researchers, and watchdogs see where Colombia’s public-sector AI governance is visible, missing, or weakly enforced.

## Language Strategy

The UI must default to English, but Spanish should be easy to activate manually during use.

Recommended approach:

- Centralize all visible strings.
- Keep translation handling simple.
- Allow a manual language toggle in the interface.
- Do not let language support add significant memory overhead.

## Low-RAM Strategy

The app should be designed for older machines and limited RAM.

Recommended constraints:

- Avoid large in-browser datasets.
- Minimize heavy client-side rendering.
- Cache remote data rather than reprocessing it repeatedly.
- Keep any AI assistance optional.
- Prefer small, composable processing steps over large memory spikes.

## Risks to Avoid

- Building something that looks like a generic AI dashboard instead of a focused accountability tool.
- Over-scoping beyond Colombia.
- Turning the product into a legal advisory engine.
- Depending on large models that make the app unusable on older hardware.
- Losing the narrative thread by trying to cover too many policy themes at once.

## Final Recommendation

The best chance of winning is to present this as a Bogotá-first public-sector AI governance monitor that turns Colombia’s policy gap into a practical, lightweight, citation-backed workflow. That gives the project a strong impact story, a concrete innovation angle, and a clean demo that can be explained quickly to judges.