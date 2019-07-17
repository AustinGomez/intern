import React from "react";
import { Link } from "react-router-dom";

import FallbackIcon from "_components/FallbackIcon";

import "./ReviewCard.css";

const ReviewCard = ({
  overallRating,
  description,
  company,
  salary,
  currency,
  payFrequency,
  jobTitle,
  textLimit = 100
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
        <div className="media-left">
          <Link to={`/${company.slug}`} className="is-64x64">
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
              {payFrequency.charAt(0).toUpperCase() + payFrequency.slice(1)}
              <br />
              {formattedDescription}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ReviewCard;
