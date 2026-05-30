# Full Stack Developer — Portfolio Funnel

A bold, glassmorphism-themed single-page funnel site to showcase your work and
convert hiring managers and clients. Built with **Angular 21** (standalone
components), **Tailwind CSS v4**, **SCSS**, and **Lucide** icons.

## Tech stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | Angular 21, standalone components, Angular Router (SPA)       |
| Styling        | Tailwind CSS v4 (design tokens in CSS `@theme`)               |
| Custom effects | SCSS partials (glassmorphism, keyframes, blobs, parallax)     |
| Icons          | `lucide-angular` (no emojis anywhere)                         |
| Fonts          | Space Grotesk (headings) + Inter (body), loaded in index.html |

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/
npm test           # unit tests (Vitest)
```

## Project structure

```
src/
  index.html                 Google Fonts <link> tags + meta
  styles.css                 Tailwind v4 entry + design tokens (@theme)  ← brand colors/fonts/animations
  styles.scss                Global SCSS entry (imports the partials below)
  scss/
    _variables.scss          CSS custom properties (glass recipe, blob colors, shadows)
    _glass.scss              Reusable glass-card mixin + .glass-card classes
    _animations.scss         All @keyframes + scroll-reveal classes
  app/
    app.ts/.html/.scss       Root shell: background blobs + navbar + outlet + footer
    app.routes.ts            '' → HomeComponent
    app.config.ts            Router with smooth anchor scrolling
    pages/home/              Composes all 7 sections in order
    components/
      navbar/                Sticky glass bar, scroll-spy, mobile drawer
      hero/                  Parallax blobs, CTAs, scroll chevron
      about/  skills/  experience/  portfolio/  testimonials/  contact/  footer/
    shared/
      reveal-on-scroll.directive.ts   [appReveal] IntersectionObserver fade-up
```

## How to customize

Every file is labeled with `[SECTION] / [ELEMENT] / [COMPONENT]` comments so you
can find things fast. Search the codebase for these bracketed placeholders and
replace them with your details:

- `[YOUR FULL NAME]`, `[YOUR TAGLINE]`, `[YOUR BIO]`, `[YOUR PHOTO URL]`
- `[YOUR EMAIL]`, `[YOUR GITHUB URL]`, `[YOUR LINKEDIN URL]`
- Projects: edit the `projects` array in `components/portfolio/portfolio.ts`
- Experience: edit the `entries` array in `components/experience/experience.ts`
- Skills: edit the `categories` array in `components/skills/skills.ts`
- Testimonials: edit the `testimonials` array in `components/testimonials/testimonials.ts`

### Change the design system

- **Colors / fonts / animation tokens** → `src/styles.css` (`@theme` block).
  e.g. `--color-brand-purple` generates `text-brand-purple`, `bg-brand-purple`, …
- **Glass blur / opacity / border** → `src/scss/_variables.scss`.
- **Keyframes (float, glow-pulse, blob-move, fade-up)** → `src/scss/_animations.scss`.

### Swap an icon

Icons are [Lucide](https://lucide.dev/icons). Import the icon in the component's
`.ts` file (e.g. `import { Rocket } from 'lucide-angular'`), assign it to a field,
and bind it in the template via `<lucide-icon [img]="RocketIcon" class="size-6 text-brand-glow" />`.

### Wire up the contact form

`components/contact/contact.ts` → `onSubmit()` currently logs the form value.
Replace the `TODO` with a call to your backend or an email service
(e.g. Formspree, EmailJS, or your own API).
```
