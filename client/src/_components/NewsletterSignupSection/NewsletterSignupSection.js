import React from "react";
import MailingListSignupInput from "_components/MailingListSignupInput";

const NewsletterSignupSection = () => {
  return (
    <div className="columns is-vcentered">
      <div className="column">
        <p className="title">Stay in the loop</p>
        <p className="subtitle">
          Keep up to date with news, intern stories, and more. No spam.
        </p>
      </div>
      <div className="column">
        <MailingListSignupInput />
      </div>
    </div>
  );
};

export default NewsletterSignupSection;
