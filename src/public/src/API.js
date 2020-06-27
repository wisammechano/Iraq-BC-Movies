const API = {
  API_KEY: "754ad3989128c7d8cfcc82e6591e7f2e",
  BASE_URL: "https://api.themoviedb.org/3",
  json: json,
  fetchGenres: () => json(`/genre/movie/list`),
  nowPlaying: () => json(`/movie/now_playing`),
  popular: () => json("/movie/popular"),
  search: query => json("/search/movie", query)
};

function json(path, query) {
  let url =
    `${API.BASE_URL + path}?api_key=${this.API_KEY}` + query
      ? `&query=${query}`
      : "";
  return fetch(url)
    .then(r => r.json())
    .catch(err => console.log(err));
}

export default API;
