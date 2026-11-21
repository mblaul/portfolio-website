<script lang="ts">
	import '@fontsource-variable/source-serif-4';
	import '@fontsource-variable/manrope';
	import '../app.css';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Matt Blaul</title>
	<meta name="description" content="Matt Blaul — a software engineer who loves experimenting with new technology." />
</svelte:head>

<ThemeToggle />

{@render children()}
