import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import FormContainer from "../../_components/Form/FormContainer";
import FormTextInputPassword from "../../_components/Form/FormTextInput/FormTextInputPassword";

const PasswordResetConfirm = props => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = values => {
    values = setErrorMessage("Houston, we have a problem!");
  };

  return (
    <div className="section">
      <div className="container">
        <FormContainer
          onSubmit={onSubmit}
          onCancel={onCancel}
          errorMessage={errorMessage}
          isLoading={isLoading}
          hideCancelButton={true}
        >
          <FormTextInputPassword valuesKey="new_password1" isRequired />
          <FormTextInputPassword valuesKey="new_password2" isRequired />
        </FormContainer>
      </div>
    </div>
  );
};

export default PasswordResetConfirm;
