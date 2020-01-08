<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import SearchBar from "../components/SearchBar.svelte";

  export let segment;
</script>

<style>

</style>

<header>
  <Nav {segment} />
</header>

<main>
  <SearchBar />
  <slot />
</main>

<footer>
  <Footer />
</footer>
