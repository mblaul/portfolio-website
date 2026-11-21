<script lang="ts">
	import { browser, dev } from '$app/env';
	import Intro from '#lib/components/Intro.svelte';
	import Projects from '#lib/components/Projects.svelte';

	// The shader library is most of the page's JavaScript and only draws in the browser, so it is
	// fetched separately: the text and photo appear first and the ripple fades in after.
	const ripple = browser ? import('#lib/CheckerRipple.svelte') : null;

	// The ripple covers the first screen plus this much more below it (a percentage of the screen
	// height), where the projects begin.
	const fadeZone = 5;

	// The ripple renders at half resolution for speed. On the dev server, ?rs=1 renders it at full
	// resolution instead, for comparing the two,
	const renderScale = browser && dev ? Number(new URL(location.href).searchParams.get('rs') ?? 2) : 2;
	// and ?fps=60 (or 0 for uncapped) overrides the ripple's 30 fps cap
	const frameRate = browser && dev ? Number(new URL(location.href).searchParams.get('fps') ?? 30) : 30;
</script>

<main style:--fade-zone="{fadeZone}svh">
	<section class="hero">
		{#if ripple}
			{#await ripple then { default: CheckerRipple }}
				<!-- the ripple fills the hero and fades itself out into the white page -->
				<div class="ripple">
					<CheckerRipple style="position:absolute;inset:0" {renderScale} {frameRate} />
					<!-- wash over the ripple in the page colour: clear across the top middle, solid toward
					     the sides and bottom, so the ripple melts into the page in either theme -->
					<div class="wash"></div>
				</div>
			{/await}
		{/if}
		<Intro />
	</section>

	<Projects />
</main>

<style>
	main {
		padding-bottom: var(--spacing-extra-large);
		overflow-x: clip; /* the ripple hangs below the hero, never sideways */
	}

	/* leave room under the hero for the ripple to fade out before the projects begin */
	main :global(.projects) {
		margin-top: var(--fade-zone);
	}

	/* exactly one screen tall, with the intro box centred in it */
	.hero {
		position: relative;
		display: grid;
		place-items: center;
		min-height: 100svh;
		padding: var(--spacing-extra-large) var(--spacing-large);
	}

	/* one screen plus the fade zone below it, so the projects start once the ripple has faded out */
	.ripple {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: calc(100svh + var(--fade-zone));
		animation: fade-in 1.2s ease-out both;
	}

	.wash {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(
			ellipse 80% 100% at 50% 0%,
			transparent 55%,
			color-mix(in srgb, var(--surface) 45%, transparent) 80%,
			var(--surface) 100%
		);
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.ripple {
			animation: none;
		}
	}

	@media (max-width: 720px) {
		.hero {
			padding-inline: var(--spacing-medium);
		}
	}
</style>
