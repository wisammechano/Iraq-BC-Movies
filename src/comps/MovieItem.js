import React from "react";
import { Card, Badge, Col, Row } from "react-bootstrap";

export default function MovieItem(props) {
  return (
    <Card onClick={props.onClick} className="shadow my-3 card-shadow">
      <Card.Img
        variant="top"
        src={"https://image.tmdb.org/t/p/w300" + props.movie.poster_path}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Row className="justify-content-md-between">
          <Col>
            <Badge pill variant="primary">
              {props.movie.release_date.substring(0, 4)}
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              Rating {props.movie.vote_average}
            </Badge>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
