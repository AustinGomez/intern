import React from "react";
import PropTypes from "prop-types";

import FallbackIcon from "../../_components/FallbackIcon";

import "./CompanyHeader.scss";
import StarRatings from "react-star-ratings";

const CompanyHeader = props => {
  return (
    <div className="columns">
      <div className="column is-one-third is-offset-one-sixth">
        <div className="float-right">
          <FallbackIcon
            iconText={props.iconText}
            src={props.logoUrl}
            height={64}
            width={64}
          />
        </div>
      </div>
      <div className="column">
        <h4>{props.name}</h4>
        <div className="inline">
          <h1 className="m-r-1">Average Internship Rating: </h1>
          <StarRatings
            rating={props.averageRating}
            starRatedColor="blue"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
            name="rating"
          />
        </div>
        <h1>Total number of reviews:{props.totalNumberOfReviews}</h1>
      </div>
    </div>
  );
};

CompanyHeader.propTypes = {
  name: PropTypes.string,
  iconText: PropTypes.array,
  logoUrl: PropTypes.string,
  averageRating: PropTypes.number,
  totalNumberOfReviews: PropTypes.number
};

export default CompanyHeader;
