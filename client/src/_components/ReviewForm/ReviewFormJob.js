import React, { useState } from "react";
import SelectedJobCard from "_components/ReviewForm/ReviewFormSelectedJobCard";
import CompanySearchBar from "_components/CompanySearchBar";

const ReviewFormJob = props => {
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
      {props.job ? (
        <SelectedJobCard job={props.job} />
      ) : (
        <>
          <label>Select a job title</label>
          <CompanySearchBar />
        </>
      )}
    </>
  );
};

export default ReviewFormJob;
