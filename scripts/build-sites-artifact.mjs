import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const docusaurusBuild = path.join(root, 'build');
const distRoot = path.join(root, 'dist');
const clientRoot = path.join(distRoot, 'client');
const serverRoot = path.join(distRoot, 'server');

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

if (!(await pathExists(path.join(docusaurusBuild, 'index.html')))) {
  throw new Error('Docusaurus build output is missing. Run `yarn build` first.');
}

await rm(distRoot, { recursive: true, force: true });
await mkdir(clientRoot, { recursive: true });
await mkdir(serverRoot, { recursive: true });

await cp(docusaurusBuild, clientRoot, { recursive: true });
await mkdir(path.join(distRoot, '.openai'), { recursive: true });
await cp(path.join(root, '.openai', 'hosting.json'), path.join(distRoot, '.openai', 'hosting.json'));

const workerSource = String.raw`
const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

function contentType(pathname) {
  const match = pathname.match(/\.[^.\/]+$/);
  return MIME_TYPES[match?.[0]?.toLowerCase()] || 'application/octet-stream';
}

async function serveAsset(request, env) {
  const url = new URL(request.url);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  const candidates = [pathname.replace(/^\/+/, '')];
  if (!pathname.includes('.') && !pathname.endsWith('/index.html')) {
    candidates.push(pathname.replace(/^\/+/, '') + '/index.html');
  }

  candidates.push('404.html');

  for (const key of candidates) {
    const asset = await env.ASSETS.fetch(new URL('/' + key, url), request);
    if (asset.status !== 404) {
      const headers = new Headers(asset.headers);
      headers.set('content-type', contentType('/' + key));
      return new Response(asset.body, {
        status: key === '404.html' ? 404 : asset.status,
        headers,
      });
    }
  }

  return new Response('Not found', { status: 404 });
}

export default {
  fetch: serveAsset,
};
`;

await writeFile(path.join(serverRoot, 'index.js'), workerSource.trimStart(), 'utf8');

const packageJsonPath = path.join(distRoot, 'package.json');
const packageJson = JSON.stringify({ type: 'module' }, null, 2) + '\n';
await writeFile(packageJsonPath, packageJson, 'utf8');

const index = await readFile(path.join(clientRoot, 'index.html'), 'utf8');
if (!index.includes('Invarion Help Center')) {
  throw new Error('Unexpected Docusaurus output: index.html does not contain the site title.');
}
