import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import FormContainer from "../../_components/Form/FormContainer";
import FormTextInputEmail from "../../_components/Form/FormTextInput/FormTextInputEmail";
import FormTextInputPassword from "../../_components/Form/FormTextInput/FormTextInputPassword";

const Login = props => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = values => {
    console.log(values);
    setErrorMessage("Houston, we have a problem!");
  };
  const onCancel = () => {
    props.history.push(`/`);
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third is-offset-one-third">
              <FormContainer
                onSubmit={onSubmit}
                onCancel={onCancel}
                errorMessage={errorMessage}
              >
                <FormTextInputEmail valuesKey="email" isRequired />
                <FormTextInputPassword valuesKey="password" isRequired />
              </FormContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
