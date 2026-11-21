<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { getProjects } from '#lib/projects.remote.ts';
	import { GSAP_ENABLED } from '#lib/motion.ts';
	import ProjectCard from './ProjectCard.svelte';

	// Cards rise in one after another as they scroll into view. Attachments only run in the
	// browser, so the plugin is registered here rather than at module level.
	function staggerIn(node: HTMLElement) {
		if (!GSAP_ENABLED) return;
		gsap.registerPlugin(ScrollTrigger);
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.set(node.children, { autoAlpha: 0, y: 32 });
			ScrollTrigger.batch(node.children, {
				start: 'top 90%',
				once: true,
				onEnter: (cards) =>
					gsap.to(cards, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12 })
			});
		});
		return () => mm.revert();
	}
</script>

<section class="projects" aria-labelledby="projects-heading">
	<h2 id="projects-heading">Projects</h2>

	<svelte:boundary>
		<div class="cards" {@attach staggerIn}>
			{#each await getProjects() as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>

		{#snippet pending()}
			<p class="status">Loading projects…</p>
		{/snippet}

		{#snippet failed()}
			<p class="status">Projects couldn’t be loaded.</p>
		{/snippet}
	</svelte:boundary>
</section>

<style>
	.projects {
		padding: var(--spacing-large) var(--spacing-extra-large);
		background: var(--surface-muted);
	}

	h2 {
		font-family: var(--font-serif);
		font-size: 32px;
		font-weight: 700;
		letter-spacing: -0.05em;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 350px));
		gap: var(--spacing-medium);
		padding: var(--spacing-medium) var(--spacing-large) var(--spacing-large);
	}

	.status {
		padding: var(--spacing-medium) var(--spacing-large) var(--spacing-large);
	}

	@media (max-width: 720px) {
		.projects {
			padding-inline: var(--spacing-medium);
		}

		.cards {
			grid-template-columns: 1fr;
			padding-inline: 0;
		}
	}
</style>
