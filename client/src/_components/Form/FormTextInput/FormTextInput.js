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

const FormTextInput = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={`control ${props.icon ? "has-icons-left" : ""}`}>
        <input
          className={`input ${props.error ? "is-danger" : ""}`}
          type={`${props.type || "text"}`}
          placeholder={props.placeholder}
          onInput={props.onUpdate}
          required={props.isRequired}
        />
        {props.icon ? (
          <span className="icon is-small is-left">
            <i className={props.icon} />
          </span>
        ) : null}
      </div>
      {props.error ? <p class="help is-danger">{props.error}</p> : null}
    </div>
  );
};

FormTextInput.propTypes = propTypes;
FormTextInput.defaultProps = defaultProps;

export default FormTextInput;
