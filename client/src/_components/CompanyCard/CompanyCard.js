import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FallbackIcon from "_components/FallbackIcon";
import StarRatings from "react-star-ratings";

import "./CompanyCard.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  salary: PropTypes.number,
  iconSr: PropTypes.string,
  slug: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired
};

const CompanyCard = ({
  name,
  rating,
  iconSrc,
  slug,
  reviewCount,
  city,
  region,
  country
}) => {
  return (
    <div className="box is-equal-height">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <Link to={`/companies/${slug}`} className="is-64x64">
              <FallbackIcon
                iconText={name}
                src={iconSrc}
                height={64}
                width={64}
              />
            </Link>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <Link to={`/companies/${slug}`}>
              <span className="title is-5">{name}</span>
            </Link>
            <br />
            {city || region ? (
              <small>
                {city ? city : ""}
                {region && city ? ", " + region : region}
              </small>
            ) : null}
            <br />
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="1px"
              name="rating"
            />
            <br />
          </div>
        </div>
      </article>
    </div>
  );
};

CompanyCard.propTypes = propTypes;

export default CompanyCard;
