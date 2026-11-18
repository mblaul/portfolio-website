<script lang="ts">
	import { gsap } from 'gsap';
	import portrait from '#lib/assets/portrait.png';

	let root: HTMLElement;
	let about: HTMLElement;
	let aboutContent: HTMLElement;
	let cta: HTMLElement;
	let ctaContent: HTMLElement;

	// The intro plays the three states of the Figma design in order: just the name, then the box
	// opens to show the bio and photo, then the call to action. Reduced-motion users get the
	// finished state straight away.
	$effect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.from(root, { autoAlpha: 0, y: 24, scale: 0.96, duration: 0.8 })
				.addLabel('about', '+=0.35')
				.from(
					root,
					{ paddingTop: 0, paddingBottom: 0, paddingLeft: 18, paddingRight: 18, duration: 0.7 },
					'about'
				)
				.from(about, { height: 0, duration: 0.7 }, 'about')
				.from(aboutContent, { autoAlpha: 0, y: 16, duration: 0.5 }, 'about+=0.25')
				.addLabel('cta', '+=0.2')
				.from(cta, { height: 0, duration: 0.6 }, 'cta')
				.from(ctaContent, { autoAlpha: 0, y: 12, duration: 0.45 }, 'cta+=0.2');
		});
		return () => mm.revert();
	});

	// Reads the name aloud with the browser's built-in voice. Swap this for a recorded clip if the
	// synthetic pronunciation is off.
	function sayName() {
		if (!('speechSynthesis' in window)) return;
		speechSynthesis.cancel();
		speechSynthesis.speak(new SpeechSynthesisUtterance('Matt Blaul'));
	}
</script>

<div class="intro" bind:this={root}>
	<div class="header">
		<h1 class="name">Hey I’m Matt Blaul</h1>
		<button class="say" type="button" aria-label="Hear how to say my name" onclick={sayName}>
			🔊
		</button>
	</div>

	<div class="reveal" bind:this={about}>
		<div class="description" bind:this={aboutContent}>
			<div class="text">
				<p class="about">
					I’m a <span class="role">Software Engineer</span>
				</p>
				<p class="tagline">that loves experimenting<br />with new technology.</p>
			</div>
			<img class="portrait" src={portrait} alt="Matt Blaul" width="228" height="225" />
		</div>
	</div>

	<div class="reveal" bind:this={cta}>
		<div class="cta" bind:this={ctaContent}>
			<p class="prompt">want to make something neat?</p>
			<a class="button" href="#connect">Let’s Connect</a>
		</div>
	</div>
</div>

<style>
	.intro {
		position: relative; /* above the shader */
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
		padding: var(--spacing-medium) var(--spacing-large) var(--spacing-large);
		background: #000;
		color: var(--ink-on-dark);
	}

	/* Hidden until the intro animation starts, so the finished layout never flashes first. Only
	   with JavaScript and only when motion is allowed; otherwise it is simply shown. */
	@media (prefers-reduced-motion: no-preference) {
		:global(html.js) .intro {
			visibility: hidden;
		}
	}

	.header {
		display: flex;
		align-items: baseline;
		gap: 0.25em;
	}

	.name {
		font-family: var(--font-serif);
		font-size: clamp(2.75rem, 6.67vw, 6rem);
		font-weight: 700;
		letter-spacing: -0.09em;
		line-height: normal;
		text-transform: capitalize;
		white-space: nowrap;
	}

	.say {
		padding: 0;
		border: 0;
		background: none;
		font-size: 24px;
		line-height: 1;
		cursor: pointer;
	}

	/* the parts the animation opens up; the space above each lives inside so it collapses too */
	.reveal {
		overflow: hidden;
		width: 100%;
	}

	.description {
		display: flex;
		align-items: flex-start;
		justify-content: space-between; /* photo sits flush right, under the end of the name */
		gap: var(--spacing-large);
		padding-top: 10px;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.about,
	.tagline {
		font-family: var(--font-serif);
		font-size: clamp(1.375rem, 2.22vw, 2rem);
		font-weight: 400;
		letter-spacing: -0.05em;
	}

	.about {
		display: flex;
		align-items: center;
		gap: 10px;
		line-height: normal;
		white-space: nowrap;
	}

	.role {
		padding: var(--spacing-extra-small) var(--spacing-medium);
		background: var(--secondary-dark);
		font-weight: 800;
		text-transform: capitalize;
	}

	.tagline {
		line-height: 1.52;
	}

	.portrait {
		flex-shrink: 0;
		width: 228px;
		height: 225px;
		object-fit: cover;
		object-position: bottom;
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--spacing-small);
		padding-top: calc(10px + var(--spacing-large));
	}

	.prompt {
		color: var(--ink-on-dark-muted);
		font-size: 24px;
		letter-spacing: -0.05em;
		line-height: 1.52;
	}

	.button {
		padding: var(--spacing-medium) 28px;
		background: var(--primary-dark);
		color: var(--ink-on-dark);
		font-size: 32px;
		font-weight: 700;
		letter-spacing: -0.05em;
		text-decoration: none;
		transition: background-color 150ms ease;
	}

	.button:hover,
	.button:focus-visible {
		background: var(--secondary-dark);
	}

	@media (max-width: 720px) {
		.name {
			white-space: normal;
		}

		.description {
			flex-direction: column;
		}

		.button {
			font-size: 24px;
		}
	}
</style>
