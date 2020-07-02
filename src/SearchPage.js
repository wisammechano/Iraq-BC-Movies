import React, { useEffect } from "react";
import MoviesGrid from "./comps/MoviesGrid";
import Context from "./ContextProvider";
import { useParams } from "react-router-dom";

export default function SearchPage(props) {
  const [state, dispatch] = React.useContext(Context);
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      dispatch({
        type: "SET_QUERY",
        query
      });
    }
  }, [query, dispatch]);

  const movies = state.searchResults.filter(
    m => m.genre_ids.includes(state.activeGenre) || state.activeGenre === -1
  );

  return <MoviesGrid movies={movies} />;
}
