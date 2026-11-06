# Vineeth Kumar Reddy Pasala — Portfolio

A single-page portfolio for a fresher software engineer: dark, editorial layout with
scroll-driven reveals, 3D tilt cards, an animated skills filter and a project
switcher. Built to be read by a recruiter in 60 seconds.

**Live sections:** Hero · About · Skills · Projects · Experience · Education &
Certifications · Contact

## Stack

| Layer     | Choice                                            |
| --------- | ------------------------------------------------- |
| Framework | React 19 + TypeScript (Vite)                      |
| Styling   | Tailwind CSS 3 with a custom design-token theme   |
| Motion    | Framer Motion (reveals, parallax, layout, tilt)   |
| Icons     | Lucide + hand-drawn brand SVGs                    |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle in dist/
npm run preview  # preview the production build
```

## Editing your content

Everything written in your voice lives in **`src/data.ts`** — profile, stats,
skills, projects, experience, education and certifications. Change the text there
and the whole page updates; no component edits needed.

- Profile photo + resume live in `public/` (`portrait.jpg`, `avatar.jpg`, `Vineeth-Kumar-Reddy-Resume.pdf`).
- Update the resume PDF in `public/` and the "Download CV" button picks it up automatically.
- LinkedIn URL in `profile.links.linkedin` is a placeholder — replace it with your exact profile URL.



## Accessibility & performance notes

- All interactive elements are real links/buttons with labels and visible focus rings.
- `prefers-reduced-motion` disables every non-essential animation.
- A print stylesheet turns the page into a clean light document for PDF saving.
- Production JS is ~140 kB gzipped, CSS ~8 kB gzipped; fonts are preconnected.
