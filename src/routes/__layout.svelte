<script lang="ts">
  import '../normalize.css'
  import '../app.css';
  import Starfield from '../components/Starfield.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    window.scrollTo(0, 0);
  })
</script>


<Starfield />
<div id="app" class="viewport">
  <main>
    <slot />
  </main>
  
  <footer>
    <p>Footer</p>
  </footer>
</div>

<style>
  footer {
    margin-top: auto;
  }
</style>