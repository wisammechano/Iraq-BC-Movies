import React, { useState, useEffect } from "react";
import API from "./API";

import { useParams } from "react-router-dom";
export default function MoviePage(props) {
  const [movie, setMovie] = useState(null);
  const { id, title } = useParams();

  const getMovie = async id => {
    const movie = await API.movie(id);
    setMovie(movie);
  };
  useEffect(() => {
    getMovie(id);
  }, [id]);
  return (
    <div>
      <h1>{title.split("-").join(" ")}</h1>
      {(movie && JSON.stringify(movie)) || "Loading.."}
    </div>
  );
}
