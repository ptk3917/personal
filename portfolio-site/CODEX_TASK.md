# Codex Task — TK Portfolio Refresh

## Objective
Refresh and maintain the portfolio website for TK, a robotics / Physical AI system engineer.

## Current site
- Public site: https://tk-port-folio.netlify.app/
- This repository folder is a clean static-site baseline for Codex work.
- The previous deployment source was not identifiable from the currently connected GitHub repositories, so this folder should be treated as the new maintainable source unless a better source repo is later found.

## Required work
1. Review the current public site visually and preserve any useful tone/layout patterns where practical.
2. Review all relevant public project evidence in:
   - https://github.com/ptk3917/robotics-portfolio
   - especially `README.ko.md` and the Korean files under `docs/`
3. Keep the current information architecture centered on:
   - About
   - Experience
   - Selected Projects
   - Concept / Architecture Proposal
   - Skills
   - Education
4. Improve visual quality, hierarchy, interaction, and responsive behavior without making the site look like a generic template.
5. Keep all content factually bounded by source evidence.

## Important project framing
### Pulmuone robot-based product property checking system
Treat this as the top field-system project.
Supported framing:
- Fairino FR5 robot arms
- PGC-140 gripper
- pressure/tactile sensing
- product check points and teach/replay sequences
- PyQt5 operator station
- DI toggle inputs for operation state
- non-blocking robot motion + state polling
- tactile event logging / diagnostics

Do not claim the unfinished automatic sensor-value-to-offset integration is complete.

### Failure Hub
This is an internally proposed concept / architecture direction based on repeated field failures.
It is NOT a shipped product.
Present it under a clearly labeled `Concept / Architecture Proposal` section.

### Planned / unfinished items
Examples from the public robotics portfolio that must remain labeled as unfinished where applicable:
- CAD matching + Next-Best-View beyond scaffolding
- Unity ML-Agents policy training → ONNX → real deployment
- VLA fine-tuning
- tactile measurement automatic connection to offset runner

## Tone
- Professional, concrete, field-engineering oriented.
- Avoid inflated claims such as 'platform architect', 'foundation model developer', or 'production-grade Physical AI platform' unless directly supported.
- Prefer phrases like 'implemented', 'tested on real hardware', 'investigated', 'built a prototype', or 'proposed' according to evidence.

## Implementation constraints
- Default to static HTML/CSS/JS with no build step unless a framework is clearly justified.
- Keep content modular; `data.js` should remain the primary data source unless replacing it with an equally simple structure.
- Must deploy cleanly on Netlify.
- No credentials, internal IP addresses, private code, or confidential customer information.

## Definition of done
- Site renders cleanly on desktop and mobile.
- No console errors.
- All claims match public source evidence.
- Completed vs in-progress vs proposal content is visually distinguishable.
- Pulmuone project is the first major project.
- Failure Hub is clearly labeled as proposal/concept.
- GitHub robotics portfolio is linked prominently.
