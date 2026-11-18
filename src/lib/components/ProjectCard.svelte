<script lang="ts">
	import type { Project } from '#lib/projects.remote.ts';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<h3 class="title">{project.title}</h3>
	<p class="summary">{project.summary}</p>
	<p class="reactions" aria-hidden="true">{project.reactions}</p>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: var(--spacing-large);
		overflow: clip;
		background: var(--surface);
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.25);
	}

	.title,
	.reactions {
		font-size: 16px;
		font-weight: 700;
		letter-spacing: -0.05em;
	}

	.summary {
		font-size: 12px;
		line-height: normal;
	}
</style>
