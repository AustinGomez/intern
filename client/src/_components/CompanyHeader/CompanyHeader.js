import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FallbackIcon from "../../_components/FallbackIcon";
import "./CompanyHeader.scss";
import StarRatings from "react-star-ratings";

const CompanyHeader = ({
  iconText,
  logoUrl,
  name,
  totalNumberOfReviews,
  averageRating
}) => {
  const icon = useMemo(() => {
    return (
      <FallbackIcon iconText={iconText} src={logoUrl} height={80} width={80} />
    );
  }, [iconText, logoUrl]);

  return (
    <div className="container">
      <div className="columns is-mobile is-centered is-multiline">
        <div className="column is-narrow">{icon}</div>
        <div className="column is-narrow">
          <p className="title is-4 is-marginless">{name}</p>
          <small>Reviews: {totalNumberOfReviews}</small>
          <br />
          <div className="inline">
            <StarRatings
              rating={averageRating}
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
};

CompanyHeader.propTypes = {
  name: PropTypes.string,
  iconText: PropTypes.array,
  logoUrl: PropTypes.string,
  averageRating: PropTypes.number,
  totalNumberOfReviews: PropTypes.number
};

export default CompanyHeader;
