import React from "react";
import MoviesGrid from "./comps/MoviesGrid";
import Context from "./ContextProvider";

export default function MainPage(props) {
  const [state] = React.useContext(Context);
  const movies = state.movies.filter(
    m => m.genre_ids.includes(state.activeGenre) || state.activeGenre === -1
  );

  return <MoviesGrid movies={movies} />;
}
