import React, { useState } from "react";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";

import API from "../API";

export default function SearchBox(props) {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      props.onSearch && props.onSearch();
      API.search(query).then(res => {
        setLoading(false);
        props.onResult(res.results);
      });
    }
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={e => setQuery(e.target.value)}
      />
      <Button type="submit" variant="outline-info">
        <div style={{ width: "4rem" }}>
          {!isLoading && "Search"}
          {isLoading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              variant="info"
            />
          )}
        </div>
      </Button>
    </Form>
  );
}
