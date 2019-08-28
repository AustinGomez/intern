import React from "react";

const ConfirmEmail = props => {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-3">Confirmation Sent</h1>
          <p>
            To prevent spam, we've emailed you a link to confirm your account.
            Just click it and you're good to go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
