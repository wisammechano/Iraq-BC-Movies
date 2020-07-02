import React, { useContext, useReducer, createContext } from "react";

const initState = {
  genres: [{ id: -1, name: "All" }],
  movies: [],
  searchResults: [],
  searchQuery: "",
  activeGenre: -1
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.movies };
    case "SET_GENRES":
      return { ...state, genres: [{ id: -1, name: "All" }, ...action.genres] };
    case "SET_ACTIVE_GENRE":
      return { ...state, activeGenre: action.activeGenre };
    case "SET_RESULTS":
      return { ...state, searchResults: action.results };
    case "SET_QUERY":
      return { ...state, searchQuery: action.query };
    default:
      throw new Error("Unknow action type", action.type);
  }
}

const AppContext = createContext({});
export default AppContext;

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}
