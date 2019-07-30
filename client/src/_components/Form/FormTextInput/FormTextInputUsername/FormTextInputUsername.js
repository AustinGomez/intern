import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onUpdate: PropTypes.func
};

const FormTextInputUsername = props => {
  return (
    <div className="field">
      <label className="label">Username</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="arya.stark"
          onInput={props.onUpdate}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
      </div>
      <p className="help is-success">This username is available</p>
    </div>
  );
};

FormTextInputUsername.propTypes = propTypes;

export default FormTextInputUsername;
