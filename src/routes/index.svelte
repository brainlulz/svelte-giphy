<script>
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
  <h1>Gif or Gif ?</h1>
</div>
