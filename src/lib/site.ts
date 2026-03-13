import type { CollectionEntry } from 'astro:content';

const DEFAULT_SITE_URL = 'https://antonyevans.com';
const DEFAULT_SITE_NAME = 'Antony Evans';
const DEFAULT_SITE_DESCRIPTION =
  'DTC operator turned AI builder. Writing on agentic commerce, AI systems, and the future of commerce.';
const DEFAULT_SOCIAL_IMAGE = '/favicon.svg';
const DEFAULT_ALLOWED_BOTS = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'GPTBot', 'ClaudeBot', 'CCBot'] as const;
const DEFAULT_PRIVATE_PATHS = ['/drafts/', '/private/', '/admin/', '/preview/'] as const;

function parseCsv(value?: string): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizePath(path: string): string {
  if (!path.startsWith('/')) {
    return `/${path}`;
  }

  return path;
}

export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || DEFAULT_SITE_URL;
export const SITE = new URL(SITE_URL);
export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME || DEFAULT_SITE_NAME;
export const SITE_DESCRIPTION = import.meta.env.PUBLIC_SITE_DESCRIPTION || DEFAULT_SITE_DESCRIPTION;
export const SITE_AUTHOR = import.meta.env.PUBLIC_SITE_AUTHOR || SITE_NAME;
export const SITE_LANGUAGE = import.meta.env.PUBLIC_SITE_LANGUAGE || 'en';
export const SITE_TWITTER_HANDLE = import.meta.env.PUBLIC_TWITTER_HANDLE || '';
export const SITE_SOCIAL_IMAGE = import.meta.env.PUBLIC_SITE_DEFAULT_SOCIAL_IMAGE || DEFAULT_SOCIAL_IMAGE;
export const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '';
export const BING_SITE_VERIFICATION = import.meta.env.PUBLIC_BING_SITE_VERIFICATION || '';
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY || '';
export const SITE_SUMMARY =
  import.meta.env.PUBLIC_LLMS_SUMMARY ||
  'Editorial blog covering agentic commerce, AI systems, engineering, product strategy, and operator notes.';

export const indexingEnabled = import.meta.env.PUBLIC_SITE_INDEXING !== 'false';
export const blockedBots = new Set(parseCsv(import.meta.env.PUBLIC_ROBOTS_BLOCK_BOTS));
export const extraDisallowPaths = parseCsv(import.meta.env.PUBLIC_ROBOTS_EXTRA_DISALLOW).map(normalizePath);
export const privatePaths = [...DEFAULT_PRIVATE_PATHS, ...extraDisallowPaths];
export const allowedBots = DEFAULT_ALLOWED_BOTS.filter((bot) => !blockedBots.has(bot));

export function toAbsoluteUrl(path: string): string {
  return new URL(path, SITE).toString();
}

export function getCanonicalPath(path?: string): string {
  if (!path) {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

export function getDefaultSocialImage(): string {
  return toAbsoluteUrl(SITE_SOCIAL_IMAGE);
}

export function getRobotsDirectives(indexable = true): string {
  if (!indexingEnabled || !indexable) {
    return 'noindex, nofollow';
  }

  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}

export function getGoogleVerificationFilename(): string | null {
  if (!GOOGLE_SITE_VERIFICATION) {
    return null;
  }

  return `google${GOOGLE_SITE_VERIFICATION}.html`;
}

export function getIndexNowKeyLocation(): string | null {
  if (!INDEXNOW_KEY) {
    return null;
  }

  return toAbsoluteUrl(`/${INDEXNOW_KEY}.txt`);
}

export function getSocialImageForPost(post: CollectionEntry<'blog'>): string {
  if (post.data.heroImage) {
    return toAbsoluteUrl(post.data.heroImage);
  }

  return getDefaultSocialImage();
}

