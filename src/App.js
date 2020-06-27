import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./comps/Navbar";
import API from "./API";
import MoviesGrid from "./comps/MoviesGrid";

export default function App() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(-1);

  useEffect(() => {
    API.genres().then(res => {
      setGenres(res.genres);
    });
  }, []);

  return (
    <div className="App">
      <Navbar
        genres={genres}
        activeGenre={activeGenre}
        setGenre={setActiveGenre}
        setMovies={setMovies}
      />
      <MoviesGrid
        movies={movies.filter(
          m => m.genres.includes(activeGenre) || activeGenre === -1
        )}
      />
    </div>
  );
}
