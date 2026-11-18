<script lang="ts">
	import { browser } from '$app/env';
	import Intro from '#lib/components/Intro.svelte';
	import Projects from '#lib/components/Projects.svelte';

	// The shader library is most of the page's JavaScript and only draws in the browser, so it is
	// fetched separately: the text and photo appear first and the ripple fades in after.
	const ripple = browser ? import('#lib/CheckerRipple.svelte') : null;
</script>

<main>
	<section class="hero">
		{#if ripple}
			{#await ripple then { default: CheckerRipple }}
				<!-- the ripple fills the hero and fades itself out into the white page -->
				<div class="ripple">
					<CheckerRipple style="position:absolute;inset:0" />
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
	}

	.hero {
		position: relative;
		display: grid;
		place-items: center;
		min-height: 638px;
		padding: var(--spacing-extra-large) var(--spacing-large);
		margin-bottom: var(--spacing-large);
		overflow: hidden;
	}

	.ripple {
		position: absolute;
		inset: 0;
		animation: fade-in 1.2s ease-out both;
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
