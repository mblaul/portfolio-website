<script lang="ts">
	import { Shader, Group, Ripples, Perspective, DisplacementMap, Checkerboard, Pixelate } from 'shaders/svelte';

	type Band = { color: string; length: number };

	let {
		class: className = '',
		style = '',
		// colour bands that travel outward through the squares, listed from the leading (innermost)
		// band. Lengths are relative. Keep them equal: there is one wave per colour and the waves
		// are evenly spaced, so unequal bands would slide out of step with them.
		palette = [
			{ color: '#FFFFFF', length: 1 },
			{ color: '#75B9C4', length: 1 },
			{ color: '#2C6E85', length: 1 },
			{ color: '#CC3600', length: 1 },
			{ color: '#B5480A', length: 1 },
			{ color: '#EB8B36', length: 1 }
		],
		// side of one square in CSS px, so squares stay the same size whatever the box size
		cellSize = 40,
		// board rotation in degrees; 45 turns the squares into diamonds
		rotation = 45,
		// where the ripples start, as a fraction of the box (0,0 = top left)
		center = { x: 0.5, y: 0 },
		// how tightly the colour cycles pack; higher = more, narrower bands on screen
		rings = 5,
		// how fast the bands travel outward, 0 = frozen
		speed = 0.75,
		// how far each wave drags the squares, 0 = no warp; past about 0.05 squares start to tear
		push = 0.03,
		// how far neighbouring bands bleed into each other: 0 = hard stripes, 1 = one continuous gradient
		blend = 0.5,
		// how far the board is tipped away from you, in degrees: 0 = looking straight down at it,
		// higher = lower to the surface, looking across the waves
		tilt = 50,
		// how far the board is swung sideways, in degrees, so you look across it at a slight angle
		// instead of straight down its centre line; 0 = dead on
		pan = 12,
		// zoom after tilting, to push the tipped board's empty corners out of frame
		zoom = 1.6,
		// size of one pixel-art pixel in CSS px; 0 = smooth
		pixelSize = 5,
		// performance: how many screen pixels each rendered pixel covers. 2 = render at half
		// resolution (a quarter of the GPU work) and enlarge with hard edges; 1 = full resolution.
		// Only used when a pixel-art pixel divides evenly into it, so every block stays one size.
		renderScale = 2,
		// performance: highest frames per second the ripple renders at. It moves slowly, so 30
		// looks the same as 60 for half the GPU work. 0 = every display frame
		frameRate = 30
	}: {
		blend?: number;
		tilt?: number;
		pan?: number;
		zoom?: number;
		class?: string;
		style?: string;
		palette?: Band[];
		cellSize?: number;
		rotation?: number;
		center?: { x: number; y: number };
		rings?: number;
		speed?: number;
		push?: number;
		pixelSize?: number;
		renderScale?: number;
		frameRate?: number;
	} = $props();

	// How the library draws a ring: it takes a sine wave running outward from the centre and
	// paints wherever the sine is below a threshold set by `thickness`. That makes thickness
	// non-linear (0.1 does not mean a tenth of the cycle) and makes `softness` a tolerance on the
	// sine's height, not a distance. These two helpers convert from what we actually want, a
	// fraction of the cycle, into those units.
	const thicknessFor = (fraction: number) => (1 - Math.cos(Math.PI * fraction)) / 2;
	const softnessFor = (fraction: number, fadeWidth: number) =>
		Math.max(
			0.0005,
			Math.min(
				Math.sin(Math.PI * fraction) * Math.sin(2 * Math.PI * fadeWidth),
				// any softer than this and the ring never reaches full strength at its centre
				1 - Math.cos(Math.PI * fraction)
			)
		);

	// The last band is the board's own colour. Every earlier band is a ring layer on top, each
	// covering its own length plus all the bands before it, so stacking them leaves exactly one
	// band's worth of each colour showing. Shifting each ring by half its width lines up their
	// inner edges, which is what puts the colours in order instead of nested inside each other.
	const total = $derived(palette.reduce((sum, b) => sum + b.length, 0));
	const base = $derived(palette[palette.length - 1].color);
	const layers = $derived(
		palette
			.slice(0, -1)
			.map((b, i) => {
				const cover = palette.slice(0, i + 1).reduce((sum, p) => sum + p.length, 0) / total;
				// fade across the edge, but never wider than half the narrower band beside it, or a
				// tiny band gets smeared into a wide one
				const narrower = Math.min(b.length, palette[i + 1].length) / total;
				const fadeWidth = Math.min(blend / 6, narrower / 2);
				return {
					color: b.color,
					thickness: thicknessFor(cover),
					phase: 2 * Math.PI - Math.PI * cover,
					softness: softnessFor(cover, fadeWidth)
				};
			})
			.reverse() // widest first, so narrower bands paint over it
	);

	// One wave per colour band. With equal bands that is simply a second, finer set of rings:
	// as many times finer as there are colours, and that many times faster, because the library
	// moves rings by phase and finer rings would otherwise travel outward more slowly. The phase
	// puts each wave's crest in the middle of its colour.
	const waveCount = $derived(rings * palette.length);
	const waveSpeed = $derived(speed * palette.length);
	const wavePhase = $derived.by(() => {
		const turn = 2 * Math.PI;
		const phase = Math.PI / 2 - (3 * Math.PI * palette.length) / 2;
		return ((phase % turn) + turn) % turn;
	});

	// A rotated board no longer reaches the corners of the box. Wrapping it round to fill them
	// leaves seams where two squares of the same colour meet and read as one double-length
	// square, so instead the board is enlarged until it covers the box at this rotation, with
	// proportionally more cells so the squares stay the size `cells` asks for.
	const cover = $derived.by(() => {
		if (!width || !height) return 1;
		const aspect = Math.max(width / height, height / width);
		const r = (rotation * Math.PI) / 180;
		return Math.abs(Math.cos(r)) + aspect * Math.abs(Math.sin(r));
	});

	// Slide the board so a coloured square sits exactly on the ripple origin, instead of wherever
	// the grid happens to fall for this box size. This follows the library's own maths: first
	// where the origin lands in the board's rotated, enlarged space, then how far that is from
	// the middle of the nearest square.
	const nudge = $derived.by(() => {
		if (!width || !height) return { x: 0, y: 0 };
		const aspect = width / height;
		const n = cells * cover;
		const r = (rotation * Math.PI) / 180;
		// positions are measured from the bottom left inside the shader, so flip y
		const sx = ((center.x - 0.5) / cover) * aspect;
		const sy = (1 - center.y - 0.5) / cover;
		const u = (sx * Math.cos(r) - sy * Math.sin(r)) / aspect + 0.5;
		const v = sx * Math.sin(r) + sy * Math.cos(r) + 0.5;
		const px = u * aspect * n;
		const py = (1 - v) * n;
		let tx = Math.floor(px) + 0.5;
		const ty = Math.floor(py) + 0.5;
		// squares alternate, so if the nearest one is an empty square, step one across
		if ((Math.floor(tx) + Math.floor(ty)) % 2 === 0) tx += 1;
		return { x: -(tx - px) / (aspect * n), y: (ty - py) / n };
	});

	// Checkerboard counts squares along the box height, so convert the pixel size into a count.
	const cells = $derived.by(() => (height && cellSize > 0 ? height / cellSize : 9));

	let width = $state(0);
	let height = $state(0);

	// Art pixels are rounded to a whole number of device pixels, so every block is the same size.
	const dpr = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
	const blockDevicePx = $derived(pixelSize > 0 ? Math.max(1, Math.round(pixelSize * dpr)) : 0);

	// Render scale actually used: it has to divide the block exactly (6 device px per block at 5px
	// on a 1.25× screen → 2 works, 3 rendered pixels per block), otherwise blocks come out uneven.
	const factor = $derived(
		renderScale > 1 && blockDevicePx > 0 && blockDevicePx % renderScale === 0 ? renderScale : 1
	);

	// The shader draws into a stage `factor` times smaller and CSS enlarges it back with hard
	// edges. The stage size is nudged so its canvas buffer is a whole number of pixels, which keeps
	// the browser from resampling it unevenly.
	const wholeBuffer = (cssPx: number) => {
		let n = Math.ceil(cssPx);
		for (let i = 0; i < 8; i++, n++) {
			if (Math.abs(n * dpr - Math.round(n * dpr)) < 1e-6) return n;
		}
		return Math.ceil(cssPx);
	};
	const stageWidth = $derived(width ? wholeBuffer(width / factor) : 0);
	const stageHeight = $derived(height ? wholeBuffer(height / factor) : 0);

	// Pixelate takes "cells along the longest edge": the stage's longest edge in rendered pixels,
	// divided by rendered pixels per block.
	const scale = $derived.by(() => {
		if (!blockDevicePx) return 0;
		const longest = Math.max(stageWidth, stageHeight) * dpr;
		return longest / (blockDevicePx / factor);
	});
</script>

<div class="ripple-root {className}" {style} bind:clientWidth={width} bind:clientHeight={height}>
	<!-- the stage the shader renders into, enlarged back to full size by CSS -->
	<div
		class="stage"
		style:width="{stageWidth}px"
		style:height="{stageHeight}px"
		style:transform={factor > 1 ? `scale(${factor})` : undefined}
	>
	<!-- No opaque base layer on purpose: whatever is behind the canvas shows through the empty squares. -->
	<Shader style="display:block;width:100%;height:100%" colorSpace="srgb" frameRateCap={frameRate}>
		<!-- Hidden rings: the height of the water, one smooth rise and fall per colour, tipped into
		     the same perspective as the board. Displacement reads brightness in linear light, where
		     #bcbcbc means "don't move", so white crests lift and grey troughs rest. -->
		<Perspective id="push" visible={false} {tilt} {pan} {zoom} edges="mirror">
			<Ripples
				{center}
				colorA="#ffffff"
				colorB="#bcbcbc"
				frequency={waveCount}
				softness={1}
				thickness={0.5}
				phase={wavePhase}
				speed={waveSpeed}
			/>
		</Perspective>

		<!-- Everything visible, grouped. The fade into the page is done outside the shader, with a CSS
		     gradient laid over it (see the page). -->
		<Group>
			<!-- Seen from a low angle, a point on the water rising simply moves up the screen. So the
			     flat coloured board is tipped into perspective first, and then the wave heights shift
			     it straight up and down (angle 90). Squares and colours move together. -->
			<DisplacementMap source="push" channelMode="directional" angle={90} amount={push} edges="mirror">
				<Perspective {tilt} {pan} {zoom} edges="mirror">
					<Group>
						<Checkerboard
							id="board"
							colorA="#00000000"
							colorB={base}
							cells={cells * cover}
							softness={0}
							transform={{ rotation, scale: cover, offsetX: nudge.x, offsetY: nudge.y }}
						/>

						<!-- The other bands, each clipped to the board so only the squares take the colour. -->
						{#each layers as layer (layer.color)}
							<Ripples
								{center}
								colorA={layer.color}
								colorB="#00000000"
								frequency={rings}
								softness={layer.softness}
								thickness={layer.thickness}
								phase={layer.phase}
								{speed}
								maskSource="board"
								maskType="alpha"
							/>
						{/each}
					</Group>
				</Perspective>
			</DisplacementMap>
		</Group>

		<!-- no children, so it pixelates everything above; empty squares stay empty -->
		{#if scale > 0}
			<Pixelate {scale} />
		{/if}
	</Shader>
	</div>
</div>

<style>
	.ripple-root {
		overflow: hidden;
	}

	.stage {
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: 0 0;
	}

	/* enlarge the half-size render with hard pixel edges instead of blurring it */
	.stage :global(canvas) {
		image-rendering: pixelated;
	}
</style>
