# SocioLoca Website Test

A minimal Next.js, TypeScript, and Tailwind CSS site for testing the GitHub → Codex → Cloudflare deployment pipeline.

## Local development

Use Node.js 20.9 or newer, then install the pinned project dependencies:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Next.js exports the static site to `out/`. For Cloudflare Pages, use `npm run build` as the build command and `out` as the build output directory.
