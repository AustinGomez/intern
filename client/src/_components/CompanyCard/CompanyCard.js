import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
  iconHref: PropTypes.string,
  city: PropTypes.string
};

const CompanyCard = ({ name, rating, salary, iconHref, city }) => {
  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="review user icon"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Facebook</strong>
              <br />
              Average rating: 5 star
              <br />
              Average salary: $9000 USD
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

CompanyCard.propTypes = propTypes;

export default CompanyCard;
