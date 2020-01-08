<script>
  import gifsStore from "../stores/gifs";
  import fetchGifs from "../services/fetchGifs";

  let searchValue = "";


  async function handleSubmit() {
    searchValue = searchValue.trim();
    if (!searchValue) return;

    try {
      const gifs = await fetchGifs(searchValue);
      const formattedGifs = await gifs.json()
      gifsStore.set(formattedGifs)
    } catch(e) {console.log(e);}
  }
</script>

<style>
  input {
    border: 1px solid salmon;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" id="search" bind:value={searchValue} />
</form>
