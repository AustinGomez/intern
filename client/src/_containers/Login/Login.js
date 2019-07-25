import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Footer from "_components/Footer";

import FormContainer from "../../_components/Form/FormContainer";
import FormTextInput from "../../_components/Form/FormTextInput";

const Login = props => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = values => {
    // SIM FAILURE
    console.log(values);
    console.log(errorMessage);
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
                <FormTextInput valuesKey="email" type="email" />
                <FormTextInput valuesKey="password" type="password" />
              </FormContainer>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default withRouter(Login);
