import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FormContainer from "../../_components/Form/FormContainer";
import FormTextInput from "../../_components/Form/FormTextInput/FormTextInput";

const RegisterForm = props => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = values => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "rest-auth/registration/",
      data: values
    })
      .then(response => {
        setIsLoading(false);
        props.history.push("/confirm-email");
      })
      .catch(error => {
        setError(error.response.data);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1 className="title is-2">Register</h1>
      <FormContainer
        onSubmit={onSubmit}
        errorMessage={error.non_field_errors}
        isLoading={isLoading}
        hideCancelButton={true}
        isLoading={isLoading}
      >
        <FormTextInput
          label={"email"}
          valuesKey="email"
          icon="fas fa-envelope"
          type="email"
          error={error.email}
          isRequired
        />
        <FormTextInput
          label="Password"
          valuesKey="password1"
          icon="fas fa-lock"
          type="password"
          error={error.password1}
          isRequired
        />
        <FormTextInput
          label="Confirm Password"
          valuesKey="password2"
          icon="fas fa-lock"
          type="password"
          error={error.password2}
          isRequired
        />
      </FormContainer>
    </>
  );
};

export default withRouter(RegisterForm);
