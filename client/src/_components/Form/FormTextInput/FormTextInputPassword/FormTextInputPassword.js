import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onUpdate: PropTypes.func,
  valuesKey: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};
const defaultProps = {
  isRequired: false
};

const FormTextInputPassword = props => {
  return (
    <div className="field">
      <label className="label">Password</label>
      <p className="control has-icons-left">
        <input
          className="input"
          type="password"
          placeholder="abc123"
          onInput={props.onUpdate}
          required={props.isRequired}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock" />
        </span>
      </p>
    </div>
  );
};

FormTextInputPassword.propTypes = propTypes;
FormTextInputPassword.defaultProps = defaultProps;

export default FormTextInputPassword;
