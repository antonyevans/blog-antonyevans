import process from 'node:process';
import { readFile } from 'node:fs/promises';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://antonyevans.com';
const indexNowKey = process.env.INDEXNOW_KEY;
const keyLocation = `${siteUrl.replace(/\/$/, '')}/${indexNowKey}.txt`;

function normalizeUrl(value) {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return new URL(value, siteUrl).toString();
}

async function getUrls(args) {
  const fileIndex = args.indexOf('--file');
  if (fileIndex !== -1) {
    const filePath = args[fileIndex + 1];
    if (!filePath) {
      throw new Error('Missing value for --file');
    }

    const contents = await readFile(filePath, 'utf8');
    return contents
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map(normalizeUrl);
  }

  return args.filter((arg) => arg !== '--file').map(normalizeUrl);
}

async function main() {
  if (!indexNowKey) {
    throw new Error('INDEXNOW_KEY is not set.');
  }

  const args = process.argv.slice(2);
  const urls = await getUrls(args);

  if (urls.length === 0) {
    throw new Error('Provide one or more URLs or use --file <path>.');
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key: indexNowKey,
      keyLocation,
      urlList: urls,
    }),
  });

  if (!response.ok) {
    throw new Error(`IndexNow request failed: ${response.status} ${response.statusText}`);
  }

  process.stdout.write(`Submitted ${urls.length} URL(s) to IndexNow.\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});

