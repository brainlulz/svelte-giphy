<script>
  export let gifs;
  console.log(gifs);
</script>

<div class="grid">
  {#each gifs as {images, slug}}
      <div>
        <img src={images.fixed_height_downsampled.url} alt={slug}>
      </div>
    {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(1fr, 5);
  }

  .gif {
    width: 5rem;
    height: 5rem;
    border: 1px solid salmon;
  }
</style>