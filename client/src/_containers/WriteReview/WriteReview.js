import React, { useState } from "react";
import {
  FormContainer,
  FormTextareaInput,
  FormStarInput
} from "../../_components/FormComponents";
import { useStateValue } from "_state/State";
import ReviewForm from "_components/ReviewForm";

const WriteReview = props => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [{ company }, dispatch] = useStateValue();
  const [job, setJob] = useState();
  const [review, setReview] = useState();

  return (
    <div className="section">
      <div className="container">
        <ReviewForm company={company} />
      </div>
    </div>
  );
};

export default WriteReview;
