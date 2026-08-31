# adamlangshaw.com

Personal site for Adam Langshaw. Built with [Astro](https://astro.build), static
output, no client-side JavaScript. Deployed to GitHub Pages via GitHub Actions on
every push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Structure

- `src/pages/` — one file per route (`/`, `/experience/`, `/writing/`, `/honors/`,
  `/press/`, `/research/`, `/contact/`)
- `src/data/` — content (writing list, experience, press) as typed modules
- `src/components/`, `src/layouts/` — shared nav, footer, head, page shell
- `src/styles/global.css` — design tokens and base styles (light + dark)
- `public/` — static assets, `CNAME`, `robots.txt`, images under `public/img/`

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes with
`actions/deploy-pages`. The repo's **Settings → Pages → Source** must be set to
**GitHub Actions**.
