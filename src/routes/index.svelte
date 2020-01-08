<script>
  import storedGifs from "../stores/gifs";
  import Grid from "../components/Grid.svelte";
</script>

<style>
</style>

<svelte:head>
  <title>Gif or Gif - Svelte version</title>
</svelte:head>

<div>
  {#if $storedGifs && $storedGifs.data && $storedGifs.data.length > 0}
    <Grid gifs={$storedGifs.data} />
  {:else}
    <p>Search a term</p>
  {/if}
</div>
