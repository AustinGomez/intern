import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";

const propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
  errorMessage: PropTypes.string
};

const FormContainer = props => {
  const [values, setValues] = useState({});

  const errorMessage = props.errorMessage ? (
    <article className="message is-danger">
      <div className="message-body">{props.errorMessage}</div>
    </article>
  ) : null;

  let elements = React.Children.toArray(props.children).map(element => {
    const handleChange = event => {
      const obj = {};
      obj[element.props.valuesKey] = event.target.value;
      setValues(state => ({ ...state, ...obj }));
    };
    return cloneElement(element, { ...element.props, onUpdate: handleChange });
  });

  const formSubmit = e => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return (
    <form onSubmit={formSubmit}>
      {elements}
      <div className="field is-grouped is-grouped-right">
        <div className="control">
          <button
            className={`button is-link ${props.isLoading ? " is-loading" : ""}`}
          >
            Submit
          </button>
        </div>
        <div className="control">
          {!props.hideCancelButton ? (
            <button
              className="button is-text"
              onClick={() => props.onCancel(values)}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
      <br />
      {errorMessage}
    </form>
  );
};

FormContainer.propTypes = propTypes;

export default FormContainer;
