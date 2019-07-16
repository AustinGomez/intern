import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FallbackIcon from "_components/FallbackIcon";
import StarRatings from "react-star-ratings";

import "./CompanyCard.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  salary: PropTypes.number,
  iconHref: PropTypes.string,
  slug: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired
};

const CompanyCard = ({ name, rating, salary, iconHref, slug, reviewCount }) => {
  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <Link to={`/${slug}`} className="is-64x64">
              <FallbackIcon
                iconText={name}
                href={iconHref}
                height={64}
                width={64}
              />
            </Link>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <Link to={`/${slug}`}>
                <span className="title is-5">{name}</span>
              </Link>
              <br />
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="1px"
                name="rating"
              />{" "}
              ({reviewCount})
              <br />
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

CompanyCard.propTypes = propTypes;

export default CompanyCard;
