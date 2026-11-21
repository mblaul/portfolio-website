<script lang="ts">
	// Light/dark switch, the jijiui way: it sets data-theme="theme-light" or "theme-dark" on <html>
	// and the CSS variables in app.css follow. The choice is saved, and app.html re-applies it
	// before the next page paints. Until someone picks, the system setting decides, and this
	// keeps up if the system setting changes while the page is open.
	type Theme = 'theme-light' | 'theme-dark';

	const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
	const current = (): Theme => {
		const set = document.documentElement.dataset.theme;
		if (set === 'theme-light' || set === 'theme-dark') return set;
		return systemDark() ? 'theme-dark' : 'theme-light';
	};

	let theme = $state<Theme>('theme-light');
	const dark = $derived(theme === 'theme-dark');

	$effect(() => {
		theme = current();
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const follow = () => {
			theme = current();
		};
		media.addEventListener('change', follow);
		return () => media.removeEventListener('change', follow);
	});

	function toggle() {
		theme = dark ? 'theme-light' : 'theme-dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {}
	}
</script>

<button
	class="toggle"
	type="button"
	onclick={toggle}
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if dark}
		<!-- sun -->
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
			<circle cx="12" cy="12" r="4.5" fill="currentColor" />
			<path
				d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<!-- moon -->
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
			<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="currentColor" />
		</svg>
	{/if}
</button>

<style>
	.toggle {
		position: fixed;
		top: var(--spacing-medium);
		right: var(--spacing-medium);
		z-index: 10;
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		padding: 0;
		border: 0;
		background: var(--intro-surface);
		box-shadow: 0 0 0 1px var(--intro-edge);
		color: var(--ink-on-dark);
		cursor: pointer;
		transition: background-color 150ms ease;
	}

	.toggle:hover,
	.toggle:focus-visible {
		background: var(--secondary-dark);
	}

	.toggle svg {
		display: block;
	}
</style>
