# Portfolio website

Matt Blaul's portfolio, a SvelteKit rewrite on the `rewrite` branch (`master` is the old 2021 app).

Design: Figma file `JJmyGhLnQTpttUhrEFobus` ("Sites"), node `73:12`, "Portfolio, Desktop - Final Design". Its three frames read as an intro sequence: name, then bio and photo, then call to action and Projects.

## Commands

Use bun (no npm/node on the main dev machine).

```bash
bun install        # also applies patches/shaders@4.0.7.patch
bun run dev        # we usually run it on --port 5300
bun run check      # svelte-check; keep it at 0 errors, 0 warnings
bun run build      # adapter-node output, for self-hosting
```

## Stack quirks (SvelteKit 3.1, Svelte 5 runes)

- Config lives in `vite.config.ts`; there is no `svelte.config.js`.
- `$lib` is gone: import from `#lib/...` (the package.json `imports` alias). `$app/environment` is now `$app/env`.
- Experimental features are on: remote functions (`src/lib/projects.remote.ts`, a `query` awaited in markup) and Svelte's async markup.

## How the pieces fit

- `src/lib/CheckerRipple.svelte`: the WebGPU hero (the `shaders` library). Lazy-loaded from `+page.svelte` because the library is ~1.3 MB.
- `src/routes/+page.svelte`: full-screen hero; `.wash` is a CSS radial gradient in the page colour that fades the ripple out (deliberately CSS, not in-shader).
- `src/lib/components/Intro.svelte`: GSAP intro timeline, then the role flipper. Roles, colours and taglines are in `src/lib/roles.ts`.
- `src/lib/motion.ts`: `GSAP_ENABLED` master switch for every GSAP animation.
- Theme: the jijiui pattern. Tokens in `src/app.css` switch on `data-theme="theme-light" | "theme-dark"` on `<html>`, defaulting to the system setting. `ThemeToggle.svelte` flips and saves it; the inline script in `src/app.html` applies a saved choice before first paint.

## Performance rules (learned the hard way)

The ripple saturated the GPU on a 1.25× laptop display; profiles showed dropped frames, not main-thread work. Keep these:

- The ripple renders at half resolution (`renderScale` prop) with exact integer pixel mapping, and falls back to full resolution when blocks don't divide evenly. Don't go much lower: 1/5 resolution looked too soft.
- It is capped at 30 fps via the `frameRateCap` prop, which we added to the library's Svelte `Shader` with `bun patch`. The patch must stay in `package.json` `patchedDependencies`.
- Animate only `transform` and `opacity` near the shader, on elements with `will-change`; anything that repaints over the WebGPU canvas drops frames. Avoid GSAP `autoAlpha` there (it toggles `visibility`, which repaints).
- Dev-only URL switches for comparisons: `?rs=1` (full resolution), `?fps=60` or `?fps=0` (uncapped).
- A real Chrome DevTools performance trace from the user's machine is the only reliable measure; headless SwiftShader can't reproduce GPU lag.

## Open items

- "Let's Connect" links to a `#connect` placeholder.
- Project cards use placeholder data in `src/lib/projects.remote.ts`.
- The 🔊 button uses browser speech synthesis; the plan is to replace it with a recorded clip of the name (IPA `mæt blaʊl`, "Blaul" rhymes with "wow") and keep speech only as a fallback.
