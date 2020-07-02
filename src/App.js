import React, { useEffect, useContext } from "react";
import "./styles.css";
import Navbar from "./comps/Navbar";
import API from "./API";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import MoviePage from "./MoviePage";
import Context from "./ContextProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  const [, dispatch] = useContext(Context);

  useEffect(() => {
    API.genres().then(res => {
      dispatch({ type: "SET_GENRES", genres: res.genres });
    });

    API.popular().then(res => {
      dispatch({ type: "SET_MOVIES", movies: res.results });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/movies/:id-:title" component={MoviePage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
