<script>
  export let gifs;
</script>

<div class="grid">
  {#each gifs as {images, slug}}
      <div class="gif">
        <img src={images.fixed_height_downsampled.url} alt={slug}>
        <button>fav</button>
        <button>link</button>
      </div>
    {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 2rem;
    place-items: center;
  }

  .gif {
    width: 20rem;
    height: 20rem;
    border: 5px solid salmon;
  }

  img {
    height: 20rem;
    width: 20rem;
  }

</style>