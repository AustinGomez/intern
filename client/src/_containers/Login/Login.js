import React from "react";
import { withRouter } from "react-router-dom";

import LoginForm from "_components/LoginForm";

const Login = props => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
