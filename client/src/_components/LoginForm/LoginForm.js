import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FormContainer from "../../_components/Form/FormContainer";
import FormTextInput from "../../_components/Form/FormTextInput/FormTextInput";
import { toast } from "react-toastify";

const LoginForm = props => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = values => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "rest-auth/login/",
      data: values
    })
      .then(response => {
        localStorage.setItem("key", JSON.stringify(response.data.key));
        toast("Logged In!", {
          className: "has-text-success"
        });
      })
      .catch(error => {
        setError(error.response.data);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1 className="title is-2">Log In</h1>
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
          valuesKey="password"
          icon="fas fa-lock"
          type="password"
          isRequired
        />
      </FormContainer>
    </>
  );
};

export default withRouter(LoginForm);
