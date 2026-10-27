# Anisha Karmakar — Portfolio

A personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Build and check

```sh
npm run typecheck
npm run lint
npm run build
```

The production site is generated in `dist/`.

## Deploy

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The site is configured as a project page at `https://anisha-coded.github.io/anisha.io/`. Vite switches to that base path for the Pages build and uses `/` for local development.

## Content to personalize

Edit `src/content.ts` to update the portfolio copy. Replace the marked placeholders for the projects, outside-of-work bio, email address, and LinkedIn profile. The portrait is in `src/assets/portfolio/me.png`.
