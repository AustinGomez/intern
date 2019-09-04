import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onUpdate: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  valuesKey: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};
const defaultProps = {
  isRequired: false
};

const FormTextareaInput = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={`control ${props.icon ? "has-icons-left" : ""}`}>
        <textarea
          className={`textarea ${props.error ? "is-danger" : ""}`}
          type="textarea"
          placeholder={props.placeholder}
          onInput={props.onUpdate}
          required={props.isRequired}
        />
      </div>
      {props.error ? <p class="help is-danger">{props.error}</p> : null}
    </div>
  );
};

FormTextareaInput.propTypes = propTypes;
FormTextareaInput.defaultProps = defaultProps;

export default FormTextareaInput;
