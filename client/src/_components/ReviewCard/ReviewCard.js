import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import FallbackIcon from "_components/FallbackIcon";

import "./ReviewCard.css";

const propTypes = {
  userName: PropTypes.string.isRequired,
  overallRating: PropTypes.number.isRequired,
  description: PropTypes.string,
  company: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

const ReviewCard = ({
  userName,
  userId,
  overallRating,
  description,
  company,
  salary,
  currency,
  payFrequency,
  jobTitle,
  handleCompanyClick
}) => {
  const formattedDescription =
    description.length > 100 ? (
      <span>{description.substring(0, 100)}&nbsp;...</span>
    ) : (
      description
    );

  return (
    <div className="box is-equal-height">
      <article className="media">
        <div className="media-left">
          <Link
            to={`/${company.slug}`}
            className="is-64x64"
            onClick={() => {
              handleCompanyClick(company);
            }}
          >
            <FallbackIcon
              iconText={company.name}
              src={company.logo_url}
              height={64}
              width={64}
            />
          </Link>
        </div>
        <div className="media-content">
          <div className="content">
            <div>
              <h1 className="title is-5 is-inline">
                <Link
                  className="has-text-grey-dark"
                  to={`/companies/${company.slug}`}
                >
                  {company.name}
                </Link>
              </h1>{" "}
              - {jobTitle}
              <br />
              <strong>{overallRating} / 5</strong> - {salary / 100} {currency}{" "}
              {payFrequency.charAt(0).toUpperCase() + payFrequency.slice(1)}{" "}
              salary
              <br />
              {formattedDescription}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

ReviewCard.propTypes = propTypes;

export default ReviewCard;
