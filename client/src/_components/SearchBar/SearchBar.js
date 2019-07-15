import React, { useState, useCallback } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import throttle from "lodash/throttle";

import { autoSuggestMatch, autoSuggestParse } from "./SearchBarUtilities";

import "./SearchBar.css";

const getSuggestionValue = suggestion => suggestion.name;

const SearchBar = () => {
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
      getSuggestions(value);
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

    axios(`http://localhost:8000/api/autocomplete/?q=${val}`)
      .then(response => {
        setSuggestions(response.data ? response.data : []);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const inputProps = {
    placeholder: "Search for a company",
    value,
    onChange: onChange,
    className: "input"
  };

  return (
    <div class="field is-grouped">
      <p class="control is-expanded">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </p>
      <p class="control">
        <a class="button is-primary">Search</a>
      </p>
    </div>
  );
};

export default SearchBar;
