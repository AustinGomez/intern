import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  //   images: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       src: PropTypes.string.isRequired,
  //       height: PropTypes.number.isRequired,
  //       width: PropTypes.number.isRequired
  //     })
  //   ).isRequired,
  //   rowHeight: PropTypes.number.isRequired,
  //   margin: PropTypes.number
};

const ReviewCard = ({ userName, overallRating, description }) => {
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
              <strong>John Smith</strong> <small>reviewed</small>{" "}
              <strong>Google</strong>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
              Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

ReviewCard.propTypes = propTypes;

export default ReviewCard;
