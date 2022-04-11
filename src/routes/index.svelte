<script context="module" lang="ts">
  export const prerender = true;
  import Greeting from "../components/Greeting.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Greeting />
