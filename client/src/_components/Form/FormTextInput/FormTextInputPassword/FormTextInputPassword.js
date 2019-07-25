import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onUpdate: PropTypes.func
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
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock" />
        </span>
      </p>
    </div>
  );
};

FormTextInputPassword.propTypes = propTypes;

export default FormTextInputPassword;
