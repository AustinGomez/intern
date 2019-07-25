import React from "react";
import PropTypes from "prop-types";

import FormTextInputEmail from "./FormTextInputEmail";
import FormTextInputPassword from "./FormTextInputPassword";
import FormTextInputUsername from "./FormTextInputUsername";

const propTypes = {
  onUpdate: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  valuesKey: PropTypes.string.isRequired
};

const FormTextInput = props => {
  const handleChange = event => {
    let obj = {};
    obj[props.valuesKey] = event.target.value;
    props.onUpdate(obj);
  };

  if (props.type === "email") {
    return <FormTextInputEmail {...props} onUpdate={handleChange} />;
  }
  if (props.type === "password") {
    return <FormTextInputPassword {...props} onUpdate={handleChange} />;
  }
  if (props.type === "username") {
    return <FormTextInputUsername {...props} onUpdate={handleChange} />;
  }

  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={props.placeholder}
          onInput={handleChange}
        />
      </div>
    </div>
  );
};

FormTextInput.propTypes = propTypes;

export default FormTextInput;
