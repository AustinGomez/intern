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
  averageRating,
  companyWebsiteUrl,
  companySize,
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

  const formatCompanyWebsite = url => {
    if (companyWebsiteUrl) {
      return <a href={`${companyWebsiteUrl}`}>{companyWebsiteUrl}</a>;
    } else {
      return "Unknown";
    }
  };

  return (
    <div className="">
      <div className="box">
        <div className="columns is-centered is-vcentered">
          <div className="column is-narrow">
            <div className=" columns is-vcentered is-mobile is-centered is-multiline is-narrow">
              <div className="column is-narrow">{icon}</div>
              <div className="column is-narrow has-text-centered-mobile">
                <p className="title is-4 is-marginless">{name}</p>
                <small>Reviews: {totalNumberOfReviews}</small>
                <br />
                {formatLocation(hqCity, hqRegion)}
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
          <div className="column is-narrow has-text-centered-mobile">
            <div>Website: {formatCompanyWebsite(companyWebsiteUrl)}</div>
            <br />
            <button className="button is-primary">Write a review</button>
          </div>
        </div>
        <hr />
        <div>{description}</div>
      </div>
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
