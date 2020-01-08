import {makeFetchGifsUrl} from '../utils';

export default function fetchGifs(value) {
  const searchURl = makeFetchGifsUrl(value);
  return fetch(searchURl);
}