import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func
};

const CustomEmailSignupForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <>
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="field is-grouped">
        <div className="control is-expanded">
          <input
            ref={node => (email = node)}
            type="email"
            className="input is-medium is-flat"
            placeholder="Your email"
            required
          />
        </div>
        <div className="control">
          <button className="button is-medium is-link" onClick={submit}>
            <strong>Submit</strong>
          </button>
        </div>
      </div>
    </>
  );
};

CustomEmailSignupForm.propTypes = propTypes;

export default CustomEmailSignupForm;
