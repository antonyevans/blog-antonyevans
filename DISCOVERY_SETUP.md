# Discovery Setup

## What Was Implemented

- Static crawl/indexing endpoints:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/rss.xml`
  - `/llms.txt`
- Environment-driven robots controls with explicit allow rules for:
  - `Googlebot`
  - `Bingbot`
  - `OAI-SearchBot`
  - `GPTBot`
  - `ClaudeBot`
  - `CCBot`
- Automatic sitemap generation for public pages, posts, category archives, tag archives, and paginated blog archives.
- Per-page canonical tags, robots directives, Open Graph tags, Twitter cards, and JSON-LD `BlogPosting` schema.
- Google/Bing verification support through meta tags and optional file generation from env config.
- Related-post internal linking on post pages.
- Optional IndexNow support:
  - root key file generated when `INDEXNOW_KEY` is set
  - CLI submission script at `npm run indexnow`
- Build-time safety validation script at `npm run check:discovery`

## Environment Variables

Configure these in production as needed:

```env
PUBLIC_SITE_URL=https://antonyevans.com
PUBLIC_SITE_NAME=Antony Evans
PUBLIC_SITE_AUTHOR=Antony Evans
PUBLIC_SITE_DESCRIPTION=DTC operator turned AI builder. Writing on agentic commerce, AI systems, and the future of commerce.
PUBLIC_SITE_DEFAULT_SOCIAL_IMAGE=/favicon.svg
PUBLIC_TWITTER_HANDLE=
PUBLIC_GOOGLE_SITE_VERIFICATION=
PUBLIC_BING_SITE_VERIFICATION=
PUBLIC_GA_MEASUREMENT_ID=
PUBLIC_SITE_INDEXING=true
PUBLIC_ROBOTS_BLOCK_BOTS=
PUBLIC_ROBOTS_EXTRA_DISALLOW=
PUBLIC_LLMS_SUMMARY=Editorial blog covering agentic commerce, AI systems, engineering, product strategy, and operator notes.
INDEXNOW_KEY=
```

Notes:

- Set `PUBLIC_ROBOTS_BLOCK_BOTS=GPTBot,ClaudeBot` to block specific bots later.
- Set `PUBLIC_SITE_INDEXING=false` only for intentionally non-indexable environments.
- Setting `PUBLIC_GOOGLE_SITE_VERIFICATION` generates both the verification meta tag and the `google<token>.html` verification file.
- Setting `PUBLIC_BING_SITE_VERIFICATION` generates both the Bing meta tag and `BingSiteAuth.xml`.
- Setting `PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics 4 in production builds.
- Setting `INDEXNOW_KEY` generates `/<key>.txt` and enables IndexNow submissions.

## Operating It

Build and verify:

```bash
npm run build
npm run check:discovery
```

Submit updated URLs to IndexNow:

```bash
npm run indexnow -- /blog/engineering/c044-ai-stack-terminal/
```

Submit multiple URLs from a file:

```bash
npm run indexnow -- --file urls.txt
```

## Launch Checklist

Exact URLs to submit/check:

- `https://antonyevans.com/robots.txt`
- `https://antonyevans.com/sitemap.xml`
- `https://antonyevans.com/rss.xml`
- `https://antonyevans.com/blog/engineering/c044-ai-stack-terminal/`
- `https://antonyevans.com/blog/product/c023-ai-native-pe-buying-plumbers/`
- `https://antonyevans.com/blog/engineering/c028-5-levels-agentic-commerce/`
- `https://antonyevans.com/blog/engineering/c011-dalio-diamandis-tension/`
- `https://antonyevans.com/blog/engineering/c008-ai-tools-junior-delegation/`

Operator reminders:

- Verify the domain in Google Search Console.
- Submit `https://antonyevans.com/sitemap.xml` in Google Search Console.
- Verify the domain in Bing Webmaster Tools.
- Submit `https://antonyevans.com/sitemap.xml` in Bing Webmaster Tools or use Bing URL submission.
- Optionally enable `INDEXNOW_KEY` and submit newly published URLs with `npm run indexnow`.
