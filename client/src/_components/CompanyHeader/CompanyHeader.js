import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FallbackIcon from "../../_components/FallbackIcon";
import "./CompanyHeader.scss";
import StarRatings from "react-star-ratings";

const CompanyHeader = React.memo(props => {
  const icon = useMemo(() => {
    return (
      <FallbackIcon
        iconText={props.iconText}
        src={props.logoUrl}
        height={80}
        width={80}
      />
    );
  }, [props.iconText, props.logoUrl]);

  return (
    <div className="container">
      <div className="columns is-mobile is-centered is-multiline">
        <div className="column is-narrow">{icon}</div>
        <div className="column is-narrow">
          <p className="title is-4 is-marginless">{props.name}</p>
          <small>Reviews: {props.totalNumberOfReviews}</small>
          <br />
          <div className="inline">
            <StarRatings
              rating={props.averageRating}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="3px"
              name="rating"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

CompanyHeader.propTypes = {
  name: PropTypes.string,
  iconText: PropTypes.array,
  logoUrl: PropTypes.string,
  averageRating: PropTypes.number,
  totalNumberOfReviews: PropTypes.number
};

export default CompanyHeader;
