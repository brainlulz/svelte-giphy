import { writable } from 'svelte/store';


const gifs = writable({
  data: [],
  favorites: []
});

export default gifs;