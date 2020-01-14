export const makeFetchGifsUrl = value =>
  `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=vw4usscjAkDQiPbUvnGdRJfpEUWqZsuY`;

export const saveFavorites = favoritedGifs => {
  localStorage.setItem('favorites', JSON.stringify(favoritedGifs));
};

export const loadFavorites = () => {
  const favoritesStr = localStorage.getItem('favorites');
  if (favoritesStr) {
    return JSON.parse(favoritesStr);
  }
  return [];
};

export const getValueFromQuerySearchParams = search => {
  const queryParams = new URLSearchParams(search);
  return queryParams.get("q");
};