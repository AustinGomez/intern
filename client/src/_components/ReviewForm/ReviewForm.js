import React, { useState } from "react";
import {
  FormContainer,
  FormTextareaInput,
  FormStarInput
} from "_components/FormComponents";

import ReviewFormReview from "./ReviewFormReview";
import ReviewFormJob from "./ReviewFormJob";
import ReviewFormCompany from "./ReviewFormCompany";

const ReviewForm = props => {
  const [error, setError] = useState();

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
    <>
      <FormContainer onSubmit={onSubmit} error={error}>
        <ReviewFormCompany company={props.company} />
        <ReviewFormJob job={props.job} />
        <ReviewFormReview />
      </FormContainer>
    </>
  );
};

export default ReviewForm;
