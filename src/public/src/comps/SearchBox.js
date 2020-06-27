import React, { useState } from "react";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";

import API from "../API";

export default function SearchBox(props) {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    props.onSearch();
    API.search(query).then(res => {
      setLoading(false);
      props.onResult(res.results);
    });
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={e => setQuery(e.target.value)}
      />
      <Button variant="outline-info">
        {!isLoading && "Search"}
        {isLoading && <Spinner animation="border" variant="light" />}
      </Button>
    </Form>
  );
}
