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
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={props.placeholder}
          onInput={props.onUpdate}
          required={props.isRequired}
        />
      </div>
    </div>
  );
};

FormTextInput.propTypes = propTypes;
FormTextInput.defaultProps = defaultProps;

export default FormTextInput;
