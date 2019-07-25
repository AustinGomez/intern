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

  let errorMessage = props.errorMessage ? (
    <article className="message is-danger">
      <div className="message-body">{props.errorMessage}h</div>
    </article>
  ) : null;

  let elements = React.Children.toArray(props.children).map(element => {
    const func = obj => {
      setValues(state => ({ ...state, ...obj }));
      errorMessage = null; // hide error message if the user is making changes
    };
    return cloneElement(element, { ...element.props, onUpdate: func });
  });

  return (
    <div className="control">
      {elements}
      <div className="field is-grouped is-grouped-right">
        <div className="control">
          <button
            className="button is-link"
            onClick={() => props.onSubmit(values)}
          >
            Submit
          </button>
        </div>
        <div className="control">
          <button
            className="button is-text"
            onClick={() => props.onCancel(values)}
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
      {errorMessage}
    </div>
  );
};

FormContainer.propTypes = propTypes;

export default FormContainer;
