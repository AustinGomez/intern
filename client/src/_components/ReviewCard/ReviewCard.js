import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ReviewCard.css";
import StarRatings from "react-star-ratings";

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
  slug,
  salary,
  currency,
  payFrequency,
  jobTitle
}) => {
  const formattedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div className="box is-equal-height">
      <article className="media">
        {/* TODO: Replace with company photo */}
        {/* <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="review user icon"
            />
          </p>
        </figure> */}
        <div className="media-content">
          <div className="content">
            <p>
              <h1 className="title is-5 is-inline">
                <Link className="has-text-grey-dark" to={`/companies/${slug}`}>
                  {company}
                </Link>
              </h1>{" "}
              - {jobTitle}
              <br />
              <strong>{overallRating} / 5</strong>
              <br />
              {salary / 100} {currency}{" "}
              {payFrequency.charAt(0).toUpperCase() + payFrequency.slice(1)}
              <br />
              {formattedDescription}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

ReviewCard.propTypes = propTypes;

export default ReviewCard;
