const API = {
  API_KEY: "754ad3989128c7d8cfcc82e6591e7f2e",
  BASE_URL: "https://api.themoviedb.org/3",
  json: json,
  genres: () => json(`/genre/movie/list`),
  nowPlaying: () => json(`/movie/now_playing`),
  popular: () => json("/movie/popular"),
  search: query => json("/search/movie", query),
  movie: async movie_id => await json(`/movie/${movie_id}`)
};

function json(path, query) {
  let url = `${API.BASE_URL + path}?api_key=${API.API_KEY}`;
  url += query ? `&query=${query}` : "";

  return fetch(url)
    .then(r => r.json())
    .catch(err => console.log(err));
}

export default API;
