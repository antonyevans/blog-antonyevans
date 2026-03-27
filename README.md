# blog-antonyevans

Minimal editorial blog built with Astro and deployed to Cloudflare Pages.

## Stack

- Astro (static output)
- Astro Content Collections (`src/content/blog`)
- Markdown + MDX posts
- Cloudflare Pages deployment via Wrangler
- RSS + sitemap + client-side static search

## Commands

- `npm install` install dependencies
- `npm run dev` start local development server
- `npm run build` build static site to `dist/`
- `npm run check:discovery` validate generated crawl/indexing assets in `dist/`
- `npm run indexnow -- <url ...>` submit updated URLs to IndexNow
- `npm run preview` preview build output locally
- `npm run deploy:pages` deploy `dist/` to Cloudflare Pages

## Content Authoring

Posts live in `src/content/blog/`.

Use `.md` for standard articles and `.mdx` when you need embedded components.

Required frontmatter fields:

- `title`
- `description`
- `pubDate`
- `category` (one of: `engineering`, `product`, `writing`, `notes`, `operator-insights`)
- `tags` (non-empty array)

Optional fields:

- `updatedDate`
- `draft` (defaults to `false`)
- `private` (defaults to `false`)
- `heroImage`
- `heroImageAlt`

Permalink format:

- `/blog/<category>/<slug>/`

## Mixed Media in MDX

Import reusable components:

- `Figure` from `src/components/content/Figure.astro`
- `VideoEmbed` from `src/components/content/VideoEmbed.astro`
- `ImageCarousel` from `src/components/content/ImageCarousel.astro`

Concrete example:

- `src/content/blog/media-rich-post-example.mdx`

That example shows:

- `heroImage` + `heroImageAlt` in frontmatter
- `Figure` for a captioned inline image
- `ImageCarousel` for multiple images
- `VideoEmbed` for iframe-based embeds such as YouTube or Vimeo

## Search, Feeds, SEO

- Search index generated at `/search-index.json`
- Search UI at `/search/`
- RSS feed at `/rss.xml`
- Sitemap generated at `/sitemap.xml`
- Robots rules generated at `/robots.txt`
- Optional `llms.txt` generated at `/llms.txt`
- Page metadata includes canonical tags, Open Graph/Twitter cards, and JSON-LD blog posting schema
- Google/Bing verification meta tags and verification files can be enabled with env vars
- Optional IndexNow support is available via `npm run indexnow`

## Cloudflare Setup

1. Authenticate:
   - `npx wrangler login`
2. Create project (first run only):
   - `npx wrangler pages project create blog-antonyevans --production-branch main`
3. Build and deploy manually (fallback):
   - `npm run build`
   - `npm run deploy:pages`

## Automatic Deployments (Git Push/PR)

This repository includes a GitHub Actions workflow at `.github/workflows/pages-auto-deploy.yml`:

- Push to `main` -> automatic production deployment.
- Open/update a pull request -> automatic preview deployment.

Required GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

After these secrets are configured, `git push` to `main` will automatically publish to the live site.

Optional analytics token:

- Set `PUBLIC_CF_ANALYTICS_TOKEN` in your environment (see `.env.example`).

Discovery and launch operations are documented in `DISCOVERY_SETUP.md`.
