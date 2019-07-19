import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import FallbackIcon from "_components/FallbackIcon";

import "./ContentCard.css";

const propTypes = {
  overallRating: PropTypes.number,
  description: PropTypes.string,
  company: PropTypes.object.isRequired,
  textLimit: PropTypes.number,
  showIcon: PropTypes.bool
};

const ContentCard = ({
  overallRating,
  description,
  company,
  subTitleItems,
  title,
  textLimit,
  showIcon = true
}) => {
  const formattedDescription = text => {
    if (textLimit && text.length > textLimit) {
      return <span>{text.substring(0, textLimit)}&nbsp;...</span>;
    }
    return text;
  };

  return (
    // <div className="box review-card is-equal-height">
    <div className="review-card is-equal-height">
      <article className="media">
        {showIcon ? (
          <div className="media-left">
            <Link to={`/companies/${company.slug}`} className="image is-64x64">
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
                {title}
              </Link>
            </span>

            <br />

            <small>
              {subTitleItems &&
                subTitleItems.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
            </small>

            <StarRatings
              rating={overallRating}
              starRatedColor="#abcde7"
              numberOfStars={5}
              starDimension="17px"
              starSpacing="1px"
              name="rating"
            />
            <br />
            {formattedDescription(description)}
          </div>
        </div>
      </article>
    </div>
    // </div>
  );
};

ContentCard.propTypes = propTypes;

export default ContentCard;
