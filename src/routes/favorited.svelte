<script>
  import storedGifs from "../stores/gifs";
  import Grid from "../components/Grid.svelte";
</script>

<style>
  .wrapper {
    display: block;
    text-align: center;
    grid-column: 2;
    margin: 2rem 0;
  }
  @media (max-width: 420px) {
    .wrapper {
      grid-column: 1;
    }
  }
</style>

<svelte:head>
	<title>Your favorited GIFS</title>
</svelte:head>

<div class="wrapper">
  {#if $storedGifs && $storedGifs.favorites && $storedGifs.favorites.length > 0}
    <Grid gifs={$storedGifs.favorites} />
  {:else}
    <p>You have no favorited GIF</p>
  {/if}
</div>
