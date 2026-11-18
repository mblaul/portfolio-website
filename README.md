# portfolio-website

Matt Blaul's portfolio. A SvelteKit 3 rewrite, with the design in Figma under **Sites → Portfolio → Desktop - Final Design**.

## What's in it

- **Hero:** a pixel-art checkerboard with colour bands rippling outward (`src/lib/CheckerRipple.svelte`, built on the [`shaders`](https://shaders.com) WebGPU library). It is loaded separately from the rest of the page, so text appears first.
- **Intro animation:** GSAP plays the design's three frames in order: the name, then the bio and photo, then the call to action (`src/lib/components/Intro.svelte`). Project cards rise in on scroll with `ScrollTrigger`. Both are skipped when the visitor prefers reduced motion.
- **Remote functions (experimental):** projects come from `getProjects` in `src/lib/projects.remote.ts`, a server-only `query` the page awaits directly in markup. Enabled in `vite.config.ts` with `experimental.remoteFunctions` and Svelte's `experimental.async`.

## Developing

```bash
bun install
bun run dev
```

## Building

Uses `@sveltejs/adapter-node`, so the output is a plain Node server for self-hosting.

```bash
bun run build
node build
```
