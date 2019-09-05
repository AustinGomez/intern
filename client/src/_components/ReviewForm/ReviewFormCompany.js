import React, { useState } from "react";
import { FormTextInput } from "_components/FormComponents";
import SelectedCompanyCard from "_components/ReviewForm/ReviewFormSelectedCompanyCard";
import CompanySearchBar from "_components/CompanySearchBar";

const ReviewFormCompany = props => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = values => {
    console.log(values);
    setErrorMessage("Houston, we have a problem!");
  };
  const onCancel = () => {
    props.history.push(`/`);
  };

  // TODO: Don't do it like this. Just keep the input (with delete x) and
  // show the icon too.

  // TODO: Add fields of some kind. Maybe in a modal
  return (
    <>
      {props.company ? (
        <SelectedCompanyCard company={props.company} />
      ) : (
        <>
          <label>Select a company</label>
          <CompanySearchBar />
        </>
      )}
    </>
  );
};

export default ReviewFormCompany;
