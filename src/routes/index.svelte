<script>
  import storedGifs from "../stores/gifs";
  import Grid from "../components/Grid.svelte";
</script>

<style>
  .wrapper {
    display: block;
    text-align: center;
    grid-column: 2;
    margin-top: 2rem;
  }

  @media (max-width: 420px) {
    .wrapper {
      grid-column: 1;
    }
  }
</style>

<svelte:head>
  <title>Gif or Gif - Svelte version</title>
</svelte:head>

<div class="wrapper">
  {#if $storedGifs && $storedGifs.data && $storedGifs.data.length > 0}
    <Grid gifs={$storedGifs.data} />
  {:else}
    <p>Search a term</p>
  {/if}
</div>