import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  label: PropTypes.string,
  starHeight: PropTypes.number
};

const FormStarInput = props => {
  const [rating, setRating] = useState();

  const handleChangeRating = selectedRating => {
    const event = {
      target: {
        value: selectedRating
      }
    };
    setRating(selectedRating);
    props.onUpdate(event);
  };

  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <StarRatings
          changeRating={selectedRating => handleChangeRating(selectedRating)}
          rating={rating}
          starRatedColor="#3273dc"
          starHoverColor="#3273dc"
          numberOfStars={5}
          starDimension={props.starHeight || 30}
          starSpacing="5px"
          name={props.name}
        />
      </div>
    </div>
  );
};

FormStarInput.propTypes = propTypes;

export default FormStarInput;
