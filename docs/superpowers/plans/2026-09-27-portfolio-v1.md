# Portfolio V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a memorable chapter-led portfolio with an in-place recruiter mode.

**Architecture:** Keep React/Vite and HashRouter. Centralize project and contact content, build two views over shared data, and give each featured project a distinct visual treatment. Use CSS for the design system, responsive layouts, and reduced-motion behavior.

**Tech Stack:** React 19, React Router 7, Vite 8, Tailwind 4 plus authored CSS, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-09-27-portfolio-v1-design.md`

## Global Constraints

- Keep `/Portfolio/` asset base and existing project IDs for old URLs.
- Do not fabricate contact addresses, links, metrics, or internship outcomes.
- Keep imagery as attractive, clearly labeled placeholders for V1.
- Support desktop through mobile, keyboard use, and reduced motion.
- No new production dependencies unless an implementation need is demonstrated.

## Review Focus

- Unknown project ID should show a useful way back home.
- Missing external URL should never render as a broken link.
- Recruiter mode should survive navigation and refresh.
- Mobile collages and recruiter view should not overflow horizontally.
- Placeholder labels should remain understandable to screen readers.

### Task 1: Content model and invariants

**Files:** `src/data/projects.js`, `src/data/site.js`, `tests/content.test.mjs`, `package.json`

**Interfaces:** Export `projects`, `featuredProjects`, and `siteLinks`. Project records expose `id`, `title`, `intro`, `why`, `built`, `detail`, `stack`, `visual`, and optional links.

- [x] Write and run a failing Node test for unique stable IDs, required featured fields, and valid optional URLs.
- [x] Replace legacy project data with story-first content, keeping legacy IDs.
- [x] Add `npm test` using `node --test` and confirm it passes.

### Task 2: Shared shell and recruiter state

**Files:** `src/App.jsx`, `src/components/Nav.jsx`, `src/pages/Home.jsx`

**Interfaces:** `App` owns recruiter mode, persistence, and routes; `Home` receives `recruiterMode`.

- [x] Build the persistent toggle with `aria-pressed`, hash-route navigation, and local persistence; animate the mode change with restrained layout and decoration transitions.
- [x] Keep the mode when opening and leaving a project detail page.
- [ ] Verify the toggle and navigation in a browser.

### Task 3: Story chapters and featured projects

**Files:** `src/pages/StoryHome.jsx`, `src/components/PhotoPlaceholder.jsx`, `src/components/ProjectFeature.jsx`, `src/pages/ProjectDetail.jsx`

- [x] Build the chapter sequence and distinct project compositions from shared data. Make the hero an unboxed 62/38 intro/About split; put four editable placeholder paragraphs and `EDIT ME` comments directly in the About JSX.
- [x] Make each detail page lead with motivation, built work, technical detail, and links only when valid.
- [x] Check the homepage and both a known and unknown project route via server rendering.

### Task 4: Recruiter view

**Files:** `src/pages/RecruiterHome.jsx`, `src/pages/Home.jsx`

- [x] Add compact experience, four engineering projects, technical areas, roles, and contact actions. Retain a simplified About column in the recruiter hero without repeating those sections.
- [ ] Verify mode switching, scannability, and keyboard focus.

### Task 5: Design system and responsive polish

**Files:** `src/index.css`, `index.html`, `public/favicon.svg`

- [x] Implement the paper and ink palette, type scale, visual motifs, project-specific layouts, and tactile motion (photo placement, staggered reveal, hover lift, delayed labels, spring easing).
- [x] Add tablet and mobile layouts plus reduced-motion rules; stack the About column below the hero intro.
- [x] Run `npm test`, `npm run lint`, and `npm run build`.
- [ ] Inspect browser screenshots at desktop and mobile sizes and fix failures (browser access is blocked in this sandbox).

### Task 6: Final review

- [ ] Check console, links, overflow, alternate modes, and all placeholder labels.
- [x] Review the diff for accidental generated files and preserve unrelated changes.
- [ ] Summarize V1 changes, replaceable images, copy requiring Tristan's review, and V2 issues.
