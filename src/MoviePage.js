import React, { useState, useEffect } from "react";
import API from "./API";
export default function MoviePage(props) {
  const [movie, setMovie] = useState(null);
  const getMovie = async id => {
    const movie = await API.movie(id);
    setMovie(movie);
  };
  useEffect(() => {
    getMovie(props.movie_id);
  });
  return (
    <div>
      <button onClick={props.back}>Back</button>
      {(movie && JSON.stringify(movie)) || "Loading.."}
    </div>
  );
}
