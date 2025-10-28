# Page Transition (Next.js)

A small Next.js app showcasing scroll‑driven page transitions and smooth scrolling. It uses GSAP for animations, `@gsap/react` for React bindings, and Lenis for smooth scrolling. The UI is styled with Tailwind CSS v4 via the new `@tailwindcss/postcss` pipeline.

The app exposes:
- A home page with a link to projects: `app/page.tsx`
- A projects list page: `app/projects/page.tsx`
- A dynamic project detail page: `app/projects/[slug]/page.jsx`
- Global layout and styles: `app/layout.tsx`, `app/globals.css`

Images for projects live in `public/`.

## Requirements

- Node.js 18.18+ (or 20+) and npm
  - Note: Next.js 16 generally targets Node 18.18+ or 20+. TODO: Confirm exact minimum Node version used in deployment/runtime.
- Modern browser for scroll/animation features

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- GSAP `^3.13.0` and `@gsap/react` `^2.1.2`
- Lenis `^1.3.13`
- TypeScript for Next.js config and most pages (`.tsx`), plus one dynamic route in `.jsx`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
```

Start the production server (after build):

```bash
npm start
```

Lint the project:

```bash
npm run lint
```

## Available Scripts

Defined in `package.json`:

- `dev` — Run Next.js in development mode (`next dev`)
- `build` — Build the production bundle (`next build`)
- `start` — Start Next.js in production (`next start`)
- `lint` — Run ESLint (`eslint`)

## Environment Variables

No required environment variables are currently detected in this repository. Common Next.js variables (e.g., `PORT`) can be used when needed.

- TODO: Document any future environment variables if/when API integrations or external services are added.

## Project Structure

```
.
├─ app/
│  ├─ layout.tsx            # Root layout & metadata
│  ├─ globals.css           # Global styles (imports Tailwind CSS)
│  ├─ page.tsx              # Home page (link to Projects)
│  └─ projects/
│     ├─ page.tsx           # Projects list page
│     └─ [slug]/
│        ├─ page.jsx        # Dynamic project detail page
│        └─ project-client.jsx  # Client-side logic for animations/interactions
├─ public/                  # Static assets (project images)
├─ next.config.ts           # Next.js config
├─ postcss.config.mjs       # PostCSS/Tailwind pipeline
├─ eslint.config.mjs        # ESLint config
├─ tsconfig.json            # TypeScript config
├─ package.json             # Scripts and dependencies
└─ README.md
```

## Styling and Tailwind CSS

Tailwind v4 is enabled via PostCSS. Global styles import Tailwind:

```css
/* app/globals.css */
@import "tailwindcss";
```

Use utility classes in your components as usual. Custom CSS for the transitions and layout also lives in `app/globals.css`.

## Animations and Scrolling

- GSAP and `@gsap/react` power timeline‑based animations and scroll progress indicators.
- Lenis provides smooth scrolling behavior.
- The project pages implement scroll‑driven progress bars and image sequences defined in `app/projects.js` and rendered under `app/projects/[slug]/`.

## Tests

No tests are included yet.
- TODO: Add unit tests (e.g., with Vitest/Jest) and basic component tests (e.g., with React Testing Library/Playwright).
- TODO: Document test commands once added (e.g., `npm test`).

## Deployment

- Standard Next.js deployment flow applies. You can deploy on platforms like Vercel, Netlify, or any Node hosting.
- Build: `npm run build`
- Serve: `npm start`
- TODO: Add environment‑specific notes if deploying behind custom hosts or CDNs.

## License

No license file is present.
- TODO: Add a `LICENSE` file and reflect the chosen license here (e.g., MIT, Apache-2.0).

## Acknowledgements

- Next.js team and docs: https://nextjs.org/docs
- GSAP: https://greensock.com/gsap/
- Lenis: https://github.com/darkroomengineering/lenis
- Tailwind CSS: https://tailwindcss.com/
