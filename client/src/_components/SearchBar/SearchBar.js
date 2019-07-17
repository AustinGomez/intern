import React, { useState, useCallback } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import throttle from "lodash/throttle";
import { withRouter } from "react-router-dom";

import { autoSuggestMatch, autoSuggestParse } from "./SearchBarUtilities";

import "./SearchBar.css";

const getSuggestionValue = suggestion => suggestion.name;

const SearchBar = ({ history }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const renderSuggestion = (suggestion, { query }) => {
    const matches = autoSuggestMatch(suggestion.name, query);
    const parts = autoSuggestParse(suggestion.name, matches);

    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight
            ? "react-autosuggest__suggestion-match"
            : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = useCallback(
    throttle(({ value }) => {
      if (value.length > 1) {
        getSuggestions(value);
      }
    }, 1000),
    []
  );

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = val => {
    if (!val || val.trim().length < 1) {
      setSuggestions([]);
      return;
    }

    axios(`autocomplete/?q=${val}&limit=3`)
      .then(response => {
        setSuggestions(response.data ? response.data.results : []);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSuggestionSelected = (event, selectedSuggestion) => {
    history.push(`/companies/${selectedSuggestion.suggestion.slug}`);
    event.preventDefault();
  };

  const inputProps = {
    placeholder: "Search for a company",
    value,
    onChange: onChange,
    className: "input"
  };

  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={handleSuggestionSelected}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
      <p className="control">
        <button className="button is-primary">Search</button>
      </p>
    </div>
  );
};

export default withRouter(SearchBar);
