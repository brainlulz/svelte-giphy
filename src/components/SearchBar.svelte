<script>
  import { goto , stores} from "@sapper/app";
  import { onMount } from "svelte";
  import gifsStore from "../stores/gifs";
  import fetchGifs from "../services/fetchGifs";
  import { getValueFromQuerySearchParams } from "../utils";
  const { page } = stores();

  let searchValue = "";

  onMount(() => {
    searchValue = $page.query.search;
    handleSubmit(searchValue);
  });

  async function handleSubmit(value) {
    if (value) value.trim();

    if (!value) return;
    try {
      const searchURLValue = $page.query.search;
      if (searchURLValue !== value) {
        goto(`.?search=${value}`);
      }
      const gifs = await fetchGifs(value);
      const formattedGifs = await gifs.json();
      gifsStore.update(store => ({ ...store, data: formattedGifs.data }));
    } catch (e) {
      console.log(e);
    }
  }
</script>

<style>
  form {
    color: #2b2d42;
  }

  input {
    outline: none;
    display: block;
    border: 5px #2b2d42 solid;
    background: transparent;
    width: 15.5rem;
    height: 2.5rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    position: relative;
    overflow: auto;
    font-family: "SubZER0";
    font-size: 1.5rem;
    color: #2b2d42;
  }
</style>

<form on:submit|preventDefault={handleSubmit(searchValue)}>
  <label for="search">
    Search a GIF
    <input
      type="text"
      id="search"
      bind:value={searchValue}
      placeholder="Search a value" />
  </label>

</form>
