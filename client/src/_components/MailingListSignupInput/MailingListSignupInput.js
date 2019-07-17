import React from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import config from "config";

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

const MailingListSignupInput = () => {
  return (
    <MailChimpSubscribe
      url={config.mailchimpSignupURL}
      render={({ subscribe, status, message }) => (
        <CustomEmailSignupForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailingListSignupInput;
