import React from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import config from "config";
import CustomEmailSignupForm from "./MailingListSignupCustomForm";

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
