<script lang="ts">
	import { gsap } from 'gsap';
	import portrait from '#lib/assets/portrait.png';
	import { roles } from '#lib/roles.ts';
	import { GSAP_ENABLED } from '#lib/motion.ts';

	let root: HTMLElement;
	let about: HTMLElement;
	let aboutContent: HTMLElement;
	let cta: HTMLElement;
	let ctaContent: HTMLElement;
	let swap: HTMLElement;
	let tagline: HTMLElement;

	// which role the title box is showing
	let current = $state(0);
	const role = $derived(roles[current]);

	// seconds each role stays up before flipping to the next
	const HOLD = 3;

	// The title box flips like a card: it squashes flat to a line, swaps to the next title and colour
	// while it is too thin to see, then springs back open. The tagline lifts out and the next one
	// rises in alongside it.
	//
	// Performance: the shader already keeps the GPU busy, so the flip must not add repaints. Both
	// elements sit on their own small compositor layers (will-change in the CSS), and the tweens
	// touch only transform and opacity, so during a flip the GPU just moves and fades pixels it
	// already has. A profile showed frames dropping exactly on each flip when these were repainted
	// every frame instead.
	function flip() {
		return gsap
			.timeline()
			.to(swap, { scaleY: 0, duration: 0.3, ease: 'power2.in' })
			.to(tagline, { opacity: 0, y: -12, duration: 0.3, ease: 'power2.in' }, 0)
			.add(() => {
				current = (current + 1) % roles.length;
			})
			.to(swap, { scaleY: 1, duration: 0.5, ease: 'back.out(1.7)' })
			.fromTo(
				tagline,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
				'<0.05'
			);
	}

	// Reduced motion: no turning or sliding, just a quick cross-fade between roles.
	function fade() {
		return gsap
			.timeline()
			.to([swap, tagline], { opacity: 0, duration: 0.25 })
			.add(() => {
				current = (current + 1) % roles.length;
			})
			.to([swap, tagline], { opacity: 1, duration: 0.25 });
	}

	// The intro plays the three states of the Figma design in order: just the name, then the box
	// opens to show the bio and photo, then the call to action. After that the role keeps cycling.
	// Reduced-motion users get the finished state straight away and gentler role changes.
	$effect(() => {
		if (!GSAP_ENABLED) return;
		let cycle: gsap.core.Tween | undefined;
		const startCycling = (step: () => gsap.core.Timeline) => {
			const loop = () => {
				cycle = gsap.delayedCall(HOLD, () => step().eventCallback('onComplete', loop));
			};
			loop();
		};

		const mm = gsap.matchMedia();
		mm.add(
			{
				motion: '(prefers-reduced-motion: no-preference)',
				reduce: '(prefers-reduced-motion: reduce)'
			},
			(context) => {
				if (context.conditions?.reduce) {
					startCycling(fade);
					return;
				}
				gsap
					.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => startCycling(flip) })
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
			}
		);
		return () => {
			cycle?.kill();
			mm.revert();
		};
	});

	// Reads the name aloud with the browser's built-in voice. "Blaul" rhymes with "wow", the way
	// German reads it, so a German voice says the full name when the device has one. Browsers ignore
	// phonetic (IPA) markup, so otherwise an English voice gets the respelling "Matt blaow". Swap
	// this for a recorded clip if a voice still gets it wrong.
	//
	// Browsers load their voice list in the background and getVoices() is empty until it arrives,
	// which is why the first click used to fall back to English. So the list is fetched as soon as
	// the page loads and refreshed whenever the browser says it changed.
	let voices: SpeechSynthesisVoice[] = [];
	$effect(() => {
		if (!('speechSynthesis' in window)) return;
		const load = () => {
			voices = speechSynthesis.getVoices();
		};
		load();
		speechSynthesis.addEventListener('voiceschanged', load);
		return () => speechSynthesis.removeEventListener('voiceschanged', load);
	});

	function sayName() {
		if (!('speechSynthesis' in window)) return;
		speechSynthesis.cancel();
		if (!voices.length) voices = speechSynthesis.getVoices();
		const german = voices.find((voice) => voice.lang.startsWith('de'));
		const utterance = new SpeechSynthesisUtterance(german ? 'Matt Blaul' : 'Matt blaow');
		if (german) {
			utterance.voice = german;
			utterance.lang = german.lang;
		}
		speechSynthesis.speak(utterance);
	}
</script>

<div class="intro" class:animated={GSAP_ENABLED} bind:this={root}>
	<div class="header">
		<h1 class="name">Hey I’m Matt Blaul</h1>
		<button
			class="say"
			type="button"
			aria-label="Hear how to say Blaul, which rhymes with wow"
			title="Blaul — rhymes with “wow”"
			onclick={sayName}
		>
			<!-- speaker with two sound waves; flat, drawn in the text colour -->
			<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
				<path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor" />
				<path
					d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</button>
	</div>

	<div class="reveal" bind:this={about}>
		<div class="description" bind:this={aboutContent}>
			<div class="text">
				<!-- screen readers get the whole list once instead of hearing every change -->
				<p class="visually-hidden">
					I’m {new Intl.ListFormat('en', { type: 'conjunction' }).format(
						roles.map((r) => `${r.article} ${r.title}`)
					)}.
				</p>
				<div class="rotating" aria-hidden="true">
					<!-- every role laid out invisibly in the same spot, so this column is always as wide
					     as the widest one and the box never changes size as the roles flip -->
					{#each roles as sizer (sizer.title)}
						<div class="sizer">
							<p class="about">
								<span>I’m {sizer.article}</span><span class="role">{sizer.title}</span>
							</p>
							<p class="tagline">{sizer.tagline[0]}<br />{sizer.tagline[1]}</p>
						</div>
					{/each}
					<div class="live">
					<p class="about">
						<span>I’m {role.article}</span>
						<!-- only the box flips; "a"/"an" just changes while it is squashed flat -->
						<span class="swap" bind:this={swap}>
							<span class="role" style:background-color={role.color}>{role.title}</span>
						</span>
					</p>
					<p class="tagline" bind:this={tagline}>{role.tagline[0]}<br />{role.tagline[1]}</p>
					</div>
				</div>
			</div>
			<img class="portrait" src={portrait} alt="Matt Blaul" width="194" height="191" />
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
		background: var(--intro-surface);
		/* a faint edge so the black box still reads against a dark page */
		box-shadow: 0 0 0 1px var(--intro-edge);
		color: var(--ink-on-dark);
	}

	/* Hidden until the intro animation starts, so the finished layout never flashes first. Only
	   with JavaScript, only when the animations are switched on and only when motion is allowed;
	   otherwise it is simply shown. */
	@media (prefers-reduced-motion: no-preference) {
		:global(html.js) .intro.animated {
			visibility: hidden;
		}
	}

	.header {
		display: flex;
		align-items: center;
		gap: var(--spacing-medium);
	}

	.name {
		font-family: var(--font-serif);
		font-size: clamp(2.25rem, 4.72vw, 4.25rem);
		font-weight: 700;
		letter-spacing: -0.09em;
		line-height: normal;
		text-transform: capitalize;
		white-space: nowrap;
	}

	.say {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		padding: var(--spacing-extra-small);
		border: 0;
		background: none;
		color: var(--ink-on-dark);
		cursor: pointer;
		opacity: 0.85;
		transition: opacity 150ms ease;
	}

	.say:hover,
	.say:focus-visible {
		opacity: 1;
	}

	.say svg {
		display: block;
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
		font-size: clamp(1.25rem, 1.94vw, 1.75rem);
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

	.swap {
		display: inline-block;
		transform-origin: 50% 50%;
		will-change: transform; /* own layer: flips move it without repainting */
	}

	.role {
		display: inline-block;
		padding: var(--spacing-extra-small) var(--spacing-medium);
		font-weight: 800;
		text-transform: capitalize;
	}

	.tagline {
		line-height: 1.52;
	}

	.live .tagline {
		will-change: transform, opacity; /* own layer: fades and slides without repainting */
	}

	/* the live role and the invisible sizers share one grid cell */
	.rotating {
		display: grid;
	}

	.sizer,
	.live {
		grid-area: 1 / 1;
	}

	.sizer {
		visibility: hidden;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	.portrait {
		flex-shrink: 0;
		width: 194px;
		height: 191px;
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
		font-size: 20px;
		letter-spacing: -0.05em;
		line-height: 1.52;
	}

	.button {
		padding: 14px 24px;
		background: var(--primary-dark);
		color: var(--ink-on-dark);
		font-size: 26px;
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
