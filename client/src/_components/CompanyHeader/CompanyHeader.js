import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FallbackIcon from "../../_components/FallbackIcon";
import "./CompanyHeader.scss";
import StarRatings from "react-star-ratings";
import Skeleton from "react-loading-skeleton";

const CompanyHeader = ({
  iconText,
  logoUrl,
  name,
  totalNumberOfReviews,
  averageRating,
  companySize,
  isLoading,
  description,
  hqCity,
  hqRegion
}) => {
  const icon = useMemo(() => {
    return (
      <FallbackIcon iconText={iconText} src={logoUrl} height={80} width={80} />
    );
  }, [iconText, logoUrl]);

  const formatLocation = (hqCity, hqRegion) => {
    let locationString = "";
    if (hqCity) {
      locationString += hqCity;
      if (hqRegion) {
        locationString += ", " + hqRegion;
      }
    } else {
      return;
    }

    return (
      <>
        <small>{locationString}</small>
        <br />
      </>
    );
  };

  return (
    <div className="box">
      <div className="columns is-centered is-vcentered">
        <div className="column">
          <div className="columns is-vcentered is-mobile is-centered">
            <div className="column is-narrow">
              {!isLoading ? icon : <Skeleton height={64} width={64} />}
            </div>
            <div className="column">
              <p className="title is-4 is-marginless">
                {!isLoading ? name : <Skeleton height={20} width={200} />}
              </p>
              <small>
                {totalNumberOfReviews ? (
                  "Reviews: " + String(totalNumberOfReviews)
                ) : (
                  <Skeleton height={12} width={100} />
                )}
              </small>
              <br />
              {!isLoading ? (
                formatLocation(hqCity, hqRegion)
              ) : (
                <>
                  <Skeleton count={1} height={12} width={100} />
                  <br />
                </>
              )}
              <div className="inline">
                <StarRatings
                  rating={averageRating || 0}
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
      </div>
      <hr />
      <div className="column is-narrow has-text-centered-mobile">
        <button className="button is-primary">Write a review</button>
      </div>
      <br />
      <div>{!isLoading ? description : <Skeleton count={3} />}</div>
    </div>
  );
};

CompanyHeader.propTypes = {
  name: PropTypes.string,
  iconText: PropTypes.string,
  logoUrl: PropTypes.string,
  averageRating: PropTypes.number,
  totalNumberOfReviews: PropTypes.number
};

export default CompanyHeader;
