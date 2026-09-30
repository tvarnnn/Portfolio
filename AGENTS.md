# Repository Guidelines

## Project Structure & Module Organization

This is a React portfolio built with Vite and served under `/Portfolio/`. `src/main.jsx` mounts the app, and `src/App.jsx` defines its hash-based routes. Page views live in `src/pages/`, reusable UI in `src/components/`, and project content in `src/data/projects.js`. Imported images belong in `src/assets/`; files in `public/` are served directly. Global styles and Tailwind setup are in `src/index.css`. Build and lint configuration live at the repository root.

## Build, Test, and Development Commands

- `npm ci` installs the versions pinned in `package-lock.json`.
- `npm run dev` starts the Vite development server.
- `npm run lint` checks JavaScript and JSX with ESLint.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the built site locally for review.
- `npm run deploy` builds and publishes `dist/` through `gh-pages`; use it for an intended release.

## Coding Style & Naming Conventions

Use two-space indentation and ES modules. Name React component files and components in PascalCase (`ProjectCard.jsx`); use camelCase for variables, props, and project data fields. Keep project IDs stable because they form detail-page URLs. Prefer Tailwind utility classes for component styling and put shared base rules in `src/index.css`. Existing files vary in quote and semicolon style, so match the file you edit. Run `npm run lint` before submitting; no separate formatter is configured.

## Testing Guidelines

There is currently no automated test framework, test script, coverage target, or test-file naming convention. Run `npm run lint` and `npm run build` for each change. For UI or content edits, also check the home page and a project detail route (for example, `/#/projects/fba-llm`) in the local server. If you add automated tests, document the runner, command, and naming convention with that change.

## Commit & Pull Request Guidelines

Recent commits use short, plain-English subjects without prefixes (for example, `added resume` and `configure github pages`). Write a concise subject that names the actual change, such as `add project screenshots`. Pull requests should explain the purpose, note affected pages or content, list verification performed, and include before/after screenshots for visual changes. Link a related issue when one exists.

## Configuration & Assets

Keep credentials out of the repository; local `.env` files are ignored. Everything in `public/` is part of the deployed site, so place only shareable assets there. Preserve the `/Portfolio/` base path in `vite.config.js` when changing asset URLs or navigation.
