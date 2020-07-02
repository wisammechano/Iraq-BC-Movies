import React from "react";
import MovieItem from "./MovieItem";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MoviesGrid(props) {
  return (
    <Container className="my-5">
      <Row>
        {props.movies.map(m => {
          return (
            <Col xs={6} md={4} lg={3} key={m.id}>
              <Link to={`/movies/${m.id}-${m.title.split(" ").join("-")}`}>
                <MovieItem movie={m} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
