import React, { useState, useCallback } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import throttle from "lodash/throttle";
import { withRouter } from "react-router-dom";
import { autoSuggestMatch, autoSuggestParse } from "./SearchBarUtilities";
import PropTypes from "prop-types";
import "./CompanySearchBar.css";

const propTypes = {
  history: PropTypes.object,
  inputCustomClass: PropTypes.string,
  hideOnDesktop: PropTypes.boolean
};
const defaultProps = {
  inputCustomClass: "",
  hideOnDesktop: false
};

const CompanySearchBar = ({
  history,
  inputCustomClass,
  hideOnDesktop,
  handleSubmit
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const renderSuggestion = (suggestion, { query }) => {
    const matches = autoSuggestMatch(suggestion.name, query);
    const parts = autoSuggestParse(suggestion.name, matches);

    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight
            ? "react-autosuggest__suggestion-match has-text-primary"
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

  const getSuggestionValue = suggestion => suggestion.name;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = useCallback(
    throttle(({ value }) => {
      if (value.length > 1) {
        getSuggestions(value);
      }
    }, 800),
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

    setLoading(true);

    axios(`companies/?q=${val}&limit=3`)
      .then(response => {
        setLoading(false);
        setSuggestions(response.data ? response.data.results : []);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const defaultHandleSuggestionSelected = (event, selectedSuggestion) => {
    history.push(`/companies/${selectedSuggestion.suggestion.slug}`);
    event.preventDefault();
  };

  const inputProps = {
    placeholder: "Search for a company",
    value,
    onChange: onChange,
    className: `input ${inputCustomClass}`
  };

  const renderInputComponent = inputProps => (
    <div
      className={`control has-icons-left ${
        hideOnDesktop ? "is-hidden-desktop" : ""
      } ${isLoading ? "is-loading" : ""}`}
    >
      <input className="input" type="text" {...inputProps} />
      <span className={`icon is-small is-left`}>
        <i className="fas fa-search" />
      </span>
    </div>
  );

  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={handleSubmit || defaultHandleSuggestionSelected}
          renderInputComponent={renderInputComponent}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    </div>
  );
};

CompanySearchBar.propTypes = propTypes;
CompanySearchBar.defaultProps = defaultProps;

export default withRouter(CompanySearchBar);
