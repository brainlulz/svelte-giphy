<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import SearchBar from "../components/SearchBar.svelte";
  import gifsStore from "../stores/gifs";
  import { loadFavorites } from "../utils";
  import { onMount } from "svelte";

  export let segment;

  onMount(() => {
    gifsStore.set({ favorites: loadFavorites() });
  });
</script>

<style>
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    grid-row: 1;
  }

  main {
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    grid-auto-rows: minmax(5rem, auto);
    grid-row: 2;
  }

  footer {
    grid-row: 3;
  }

  @media (max-width: 420px) {
    main {
      grid-template-columns: 1fr;
    }
  }
</style>

<header>
  <Nav {segment} />
  <SearchBar />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer />
</footer>
