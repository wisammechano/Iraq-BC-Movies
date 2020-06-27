import React from "react";
import { Navbar } from "react-bootstrap";
import GenresSelector from "./GenresSelector";
import SearchBox from "./SearchBox";
export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="mr-auto">
        MyFelx
      </Navbar.Brand>
      <GenresSelector
        genres={props.genres}
        activeGenre={props.activeGenre}
        setGenre={props.setGenre}
      />
      <SearchBox onResult={props.setMovies} />
    </Navbar>
  );
}
