<script>
  export let gifs;
  import gifsStore from "../stores/gifs";
  import { saveFavorites } from "../utils";
  import { fade } from 'svelte/transition';


  // This is a reactive const
  $: favoriteIndexes = $gifsStore.favorites.map(({ id }) => id);

  /**
   * addFavoriteToGifStore - add a favorite gif to the gifs store
   *  @params gif - a gif object
   */
  function addFavoriteToGifStore(gif) {
    const isFavorite = $gifsStore.favorites.find(fav => fav.id === gif.id);
    let newFavorites = [];
    if (isFavorite) {
      // remove favorite
      newFavorites = $gifsStore.favorites.filter(fav => fav.id !== gif.id);
    } else {
      // add favorite
      newFavorites = [...$gifsStore.favorites, gif];
    }

    gifsStore.update(store => ({ ...store, favorites: newFavorites }));
  }

  /**
   * onToggleFavorite - toggle a favorite
   * @params gif - a gif object
   */
  function onToggleFavorite(gif) {
    const favoritedGifs = addFavoriteToGifStore(gif);
    saveFavorites($gifsStore.favorites);
  }
</script>

<style>
  .wrapper {
    justify-self: center;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 14rem);
    grid-gap: 3rem;
    grid-auto-rows: 15rem;
    grid-auto-columns: auto;
    grid-auto-flow: row;
    justify-content: center;
  }

  .gif:hover .modal {
    opacity: 1;
  }

  .gifImage {
    border: 0.5rem solid #2b2d42;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .gifImage.selected {
    border: 0.5rem solid #ef233c;
  }

  .modal {
    background-color: rgba(251, 248, 254, 0.45);
    position: absolute;
    z-index: 1;
    width: 224px;
    height: 240px;
    border: 0.5rem solid transparent;
    display: grid;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .favoritesButton {
    background-color: transparent;
    border: none;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-size: 100%;
    z-index: 2;
    transition: transform 0.1s ease-in-out;
    color: #ef233c;
    font-size: 1.5rem;
  }

  .favoritesButton > svg {
    fill: #ef233c;
  }

  .favoritesButton:hover {
    transform: scale(2, 2);
  }

  .gifLink {
    color: #ef233c;
    font-size: 1.5rem;
  }
</style>

<div class="wrapper" transtition:fade>
  {#each gifs as gif, i}
    <div class="gif">
      <div class="modal">
        <button class="favoritesButton" on:click={onToggleFavorite(gif)} id={i} aria-label="Favorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill-rule="evenodd"
            clip-rule="evenodd">
            <defs />
            <path
              d="M12 21.593C6.37 16.054 1 11.296 1 7.191 1 3.4 4.068 2 6.281
              2c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447
              5.726-4.447C20.266 2.01 23 3.631 23 7.191c0 4.069-5.136 8.625-11
              14.402M17.726 1.01c-2.203 0-4.446 1.042-5.726 3.238C10.715 2.042
              8.478 1 6.281 1 3.098 1 0 3.187 0 7.191 0 11.852 5.571 16.62 12
              23c6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
          </svg>

        </button>
        <a
          class="gifLink"
          href={gif.images.fixed_height_downsampled.url}
          target="_blank"
          rel="noopener noreferrer">
          Link
        </a>
      </div>
      <img
        class="gifImage"
        src={gif.images.fixed_height_downsampled.url}
        alt={gif.slug}
        class:selected={favoriteIndexes.indexOf(gif.id) !== -1} />
    </div>
  {/each}
</div>
