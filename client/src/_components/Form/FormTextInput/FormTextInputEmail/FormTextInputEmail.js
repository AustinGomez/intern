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

const FormTextInputEmail = props => {
  return (
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type="email"
          placeholder="hello@austingomez.me"
          onInput={props.onUpdate}
          required={props.isRequired}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
      </div>
    </div>
  );
};

FormTextInputEmail.propTypes = propTypes;
FormTextInputEmail.defaultProps = defaultProps;

export default FormTextInputEmail;
