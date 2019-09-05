import React, { useState } from "react";
import {
  FormContainer,
  FormTextareaInput,
  FormStarInput
} from "_components/FormComponents";

const WriteReview = props => {
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
      <h1 className="title">Write a review</h1>
      <FormStarInput name="overall" label="Overall rating" starHeight={50} />
      <FormStarInput name="workLife" label="Work life balance" />
      <FormStarInput name="mentorship" label="Mentorship" />
      <FormStarInput name="meaningfulWork" label="Meaningful work rating" />
      <FormTextareaInput
        valuesKey="description"
        customClass="textarea"
        rows="15"
        label="Review description"
        placeholder="Review description. Try to be insightful, and polite!"
      />
    </>
  );
};

export default WriteReview;
