import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import FallbackIcon from "_components/FallbackIcon";

import "./ReviewCard.css";

const propTypes = {
  overallRating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
  salary: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  payFrequency: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  textLimit: PropTypes.number,
  showIcon: PropTypes.bool
};

const ReviewCard = ({
  overallRating,
  description,
  company,
  salary,
  currency,
  payFrequency,
  jobTitle,
  textLimit = 100,
  showIcon = true
}) => {
  const formattedDescription =
    description.length > textLimit ? (
      <span>{description.substring(0, textLimit)}&nbsp;...</span>
    ) : (
      description
    );

  return (
    <div className="box is-equal-height">
      <article className="media">
        {showIcon ? (
          <div className="media-left">
            <Link to={`/companies/${company.slug}`} className="is-64x64">
              <FallbackIcon
                iconText={company.name}
                src={company.logo_url}
                height={64}
                width={64}
              />
            </Link>
          </div>
        ) : null}

        <div className="media-content">
          <div className="content">
            <span className="title is-5 is-inline">
              <Link
                className="has-text-grey-dark"
                to={`/companies/${company.slug}`}
              >
                {company.name}
              </Link>
            </span>
            <br />
            <small className="is-subtitle">{jobTitle}</small>
            <br />
            <small>
              ${salary / 100} ({currency}){" "}
              {payFrequency.charAt(0) + payFrequency.slice(1)}
            </small>
            <br />
            <StarRatings
              rating={overallRating}
              starRatedColor="#abcde7"
              numberOfStars={5}
              starDimension="17px"
              starSpacing="1px"
              name="rating"
            />
            <br />
            {formattedDescription}
          </div>
        </div>
      </article>
    </div>
  );
};

ReviewCard.propTypes = propTypes;

export default ReviewCard;
