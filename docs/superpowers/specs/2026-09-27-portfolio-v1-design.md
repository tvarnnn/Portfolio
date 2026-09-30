# Portfolio V1 Design

## Purpose

Help visitors remember Tristan as a person who moved from restaurant leadership into engineering, worked at IBM, and builds unusual systems from personal curiosity. The public story should feel warm, playful, editorial, and handcrafted. Recruiter mode should make the same work quick to scan.

## Visual system

Use paper, ink, terracotta, muted blue, sage, and plum. Pair a large editorial serif with a clean sans serif. Alternate open whitespace with framed image placeholders, small captions, labels, and restrained tape motifs. Keep imagery deliberately replaceable. No glowing cards, neon, glass surfaces, generic bento wall, or constant motion. The desktop hero gives roughly 62% width to the intro and 38% to an unboxed About column visible above the fold. About stacks beneath the intro on tablet and mobile.

## Page architecture

Keep the existing Vite/React app and hash routes. The homepage chapters are intro with compact About, restaurants, transition into software, IBM, five featured projects, life outside code, and contact. The About column contains TL;DR, How I Work, What I'm Good At, and Outside Code as explicit editable placeholders with adjacent `EDIT ME` JSX comments. Each featured project has its own visual treatment and a detail route. Keep the existing nonfeatured projects in a small archive so old work is still discoverable. Featured project records share clear fields for motivation, built work, technical detail, and qualitative result; do not invent metrics.

## Recruiter mode

A persistent button toggles a focused view in place, with no route change. It leads with name, degree, school, graduation date, contact actions, experience, four strongest projects, technical areas, and target roles. Its hero retains a shorter, professional About column without repeating facts in the experience and projects below. The view removes scrapbook decoration and tightens spacing. The toggle is keyboard accessible and announces its pressed state. The chosen mode persists locally.

## Interaction and access

Use one-time staggered reveals, photo-placement rotations, small hover lifts, and occasional spring-like easing. Let decorative notes arrive after the main content. A few decorative elements may react subtly to the pointer, but the resting page is still. Recruiter mode straightens imagery, quiets labels, tightens spacing, and reorganizes content with a controlled transition. Use CSS and small React behavior first; add a motion dependency only if it proves necessary. Respect `prefers-reduced-motion`. On small screens, all collages become simple grids or stacks with no clipping or horizontal overflow. Use semantic landmarks, clear focus rings, descriptive placeholder labels, and valid links. Contact details were checked against the existing resume; Tristan will provide an updated `public/resume.pdf` before release.

## Verification

Run lint and a production build. Inspect the hero at desktop and mobile widths, then exercise both modes, open a project detail route, check keyboard navigation, console errors, broken links, and page overflow. Iterate on spacing and legibility after the first render.
