import React from "react";
import { Dropdown } from "react-bootstrap";

export default function GenresSelector(props) {
  const handleClick = e => {
    props.setGenre(+e.target.id.split("-")[1]);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.activeGenre.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.genres.map(g => (
          <Dropdown.Item
            id={`${g.name}-${g.id}`}
            onClick={handleClick}
            as="button"
            key={`${g.name}-${g.id}`}
          >
            {g.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
