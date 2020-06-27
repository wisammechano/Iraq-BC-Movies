import React from "react";
export function MoviesGrid(props) {
  return (
    <div>
      {props.movies.map(m => (
        <div>{m.title}</div>
      ))}
    </div>
  );
}
