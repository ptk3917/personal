# AGENTS.md — TK Portfolio Site

## Goal
Maintain and improve TK's robotics / Physical AI engineering portfolio website.

## Source of truth
1. `https://github.com/ptk3917/robotics-portfolio` README and `docs/` are the primary source for robotics project facts.
2. This repository's `portfolio-site/data.js` is the website content layer.
3. Do not present planned, scaffolded, or unfinished work as completed.
4. `Failure Hub` is a concept / architecture proposal made internally, not a completed product.
5. For the Pulmuone project, describe it as a robot-based automatic product property checking system using FR5 robot arms, gripper, pressure/tactile sensing, DI inputs, teaching, sequence execution, and operator GUI. Do not claim the remaining sensor-value-to-auto-offset path is finished unless the source repo proves it.

## Writing style
- Korean first. English technical terms are fine where natural.
- Keep language professional but understandable to a hiring manager and engineer.
- Prefer concrete implementation details over inflated architecture jargon.
- Avoid claiming ownership of technologies that were only studied or planned.
- Separate `Completed / Verified`, `In Progress`, and `Concept / Proposal` clearly.

## Portfolio positioning
Primary positioning: `Robotics / Physical AI System Engineer`
Secondary strengths:
- Robot + vision + sensor integration
- Field automation and operator software
- ROS2 task flow
- Industrial IoT / Modbus / MQTT
- Robot diagnostics and debugging
- Simulation / digital twin validation

## Project priority
1. Pulmuone robot-based product property checking system
2. Natural-language vision picking
3. YOLO11 OBB orientation alignment
4. ROS2 tray verification / correction
5. Unity digital twin / ServoJ validation
6. 3D scan / RGB-D inspection
7. FR5 wall-mount collision false-positive diagnosis
8. Industrial IoT / smart-factory data pipeline
9. Failure Hub (Concept / Architecture Proposal only)

## Technical rules
- Keep the site dependency-light unless there is a clear benefit.
- Current version is static HTML/CSS/JS and must work on Netlify without a build step.
- Content should be edited primarily in `data.js`.
- Maintain responsive behavior.
- Do not expose private source code, company secrets, customer-sensitive details, IP addresses, credentials, or unpublished business data.
- Public GitHub links may be used.

## Verification checklist before committing
- Read the relevant source in `ptk3917/robotics-portfolio` before changing project facts.
- Check every project for completion status.
- Check mobile layout.
- Check all links.
- Confirm `index.html` loads without console errors.
- If changing content substantially, summarize exactly what factual claims were added or removed.
