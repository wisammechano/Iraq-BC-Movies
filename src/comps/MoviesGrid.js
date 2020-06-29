import React from "react";
import MovieItem from "./MovieItem";
import { Row, Col, Container } from "react-bootstrap";
export default function MoviesGrid(props) {
  return (
    <Container className="my-5">
      <Row>
        {props.movies.map(m => {
          return (
            <Col xs={12} md={4} lg={3} key={m.id}>
              <MovieItem onClick={() => props.onItemClick(m.id)} movie={m} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
