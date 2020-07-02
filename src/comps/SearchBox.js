import React, { useState, useContext, useEffect, useCallback } from "react";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";

import API from "../API";
import Context from "../ContextProvider";
import { useHistory } from "react-router-dom";

export default function SearchBox(props) {
  const [state, dispatch] = useContext(Context);

  // these state entries are to manage local ui
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  const search = useCallback(
    async query => {
      if (query) {
        setLoading(true);
        history.push("/search/" + query);
        const res = await API.search(query);
        setLoading(false);
        dispatch({ type: "SET_RESULTS", results: res.results });
      }
    },
    [history, dispatch]
  );

  const handleSubmit = e => {
    e.preventDefault();
    search(query);
  };

  useEffect(() => {
    state.searchQuery && search(state.searchQuery);
  }, [state.searchQuery, search]);

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        defaultValue={state.searchQuery}
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
