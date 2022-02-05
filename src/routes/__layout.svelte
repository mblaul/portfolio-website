<script lang="ts">
  import '../normalize.css'
  import '../app.css';
  import Background from '../scripts/Background'
  import { onMount } from 'svelte';

  let canvasElement;

  onMount(() => {
    const canvasContext = canvasElement.getContext('2d');
    const bg = new Background({ canvasContext });
	});
</script>

<div id="app" class="viewport">
  <canvas id="background" bind:this={canvasElement}></canvas>
  <main class="">
    <section class="">
      <slot />
    </section>
  </main>
  
  <footer class="container mx-auto px-4">
    <p>Footer</p>
  </footer>
</div>