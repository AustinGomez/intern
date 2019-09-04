import React, { useState } from "react";
import {
  FormContainer,
  FormTextareaInput,
  FormStarInput
} from "../../_components/FormComponents";

const WriteReview = props => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [company, setCompany] = useState();
  const [job, setJob] = useState();
  const [review, setReview] = useState();

  const onSubmit = values => {
    return;
    // axios({
    //   method: "POST",
    //   url: "rest-auth/login/",
    //   data: values
    // })
    //   .then(response => {
    //     dispatch({
    //       type: "SET_USER",
    //       user: response.data.key
    //     });
    //     props.onClose();
    //   })
    //   .catch(error => {
    //     setError(error.response.data);
    //   });
  };

  return (
    <div className="section">
      <div className="container">
        <FormContainer
          onSubmit={onSubmit}
          errorMessage={error.non_field_errors}
          isLoading={isLoading}
          hideCancelButton={true}
        >
          <FormTextareaInput
            label={"Description"}
            valuesKey="description"
            placeholder="Include a thoughtful review."
            error={error.description}
            isRequired
          />
        </FormContainer>
      </div>
    </div>
  );
};

export default WriteReview;
