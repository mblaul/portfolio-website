import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// a plain Node server, for self-hosting on a droplet
			adapter: adapter(),
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				// lets components `await` directly in markup, which remote functions are designed around
				experimental: {
					async: true
				}
			},
			experimental: {
				// `*.remote.ts` files: typed server functions the page calls like local ones
				remoteFunctions: true
			}
		})
	]
});
