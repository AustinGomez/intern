import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import FallbackIcon from "_components/FallbackIcon";
import Skeleton from "react-loading-skeleton";

import "./ContentCard.css";

const propTypes = {
  disableLinkToCompanyPage: PropTypes.bool,
  overallRating: PropTypes.number,
  description: PropTypes.string,
  company: PropTypes.object,
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
  salary,
  payFrequency,
  currency,
  showIcon = true,
  showDescription = true,
  disableLinkToCompanyPage = false
}) => {
  const formattedDescription = text => {
    if (textLimit && text.length > textLimit) {
      return <span>{text.substring(0, textLimit)}&nbsp;...</span>;
    }
    return text;
  };

  const renderIcon = () => {
    if (!showIcon) {
      return;
    }

    if (!company) {
      return (
        <div className="media-left">
          <Skeleton width={64} height={64} />{" "}
        </div>
      );
    }

    const fallbackIcon = (
      <FallbackIcon
        iconText={company.name}
        src={company.logo_url}
        height={64}
        width={64}
      />
    );

    const icon = disableLinkToCompanyPage ? (
      fallbackIcon
    ) : (
      <Link to={`/companies/${company.slug}`} className="image is-64x64">
        {fallbackIcon}
      </Link>
    );

    return <div className="media-left">{icon}</div>;
  };

  const renderTitle = () => {
    if (!company) {
      return <Skeleton width={150} />;
    }

    return disableLinkToCompanyPage ? (
      title
    ) : (
      <Link className="has-text-grey-dark" to={`/companies/${company.slug}`}>
        {title}
      </Link>
    );
  };

  const renderSubTitle = () => {
    if (!company) {
      // For some reason these all render on the same line unless I wrap them in divs.
      return (
        <>
          <div>
            <Skeleton height={10} width={100} />
          </div>
          <div>
            <Skeleton height={10} width={90} />
          </div>
        </>
      );
    }
    return (
      <small>
        {subTitleItems.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}

        {salary && payFrequency && currency ? (
          <div>
            ${salary / 100} {payFrequency} ({currency})
          </div>
        ) : null}
      </small>
    );
  };

  const renderDescription = () => {
    if (!showDescription) {
      return;
    }

    if (company) {
      return formattedDescription(description);
    }
    return <Skeleton count={5} />;
  };

  return (
    <div className="review-card is-equal-height">
      <article className="media">
        <div className="media-left">{renderIcon()}</div>
        <div className="media-content">
          <span className="title is-5">{renderTitle()}</span>
          <br />
          {renderSubTitle()}
          <StarRatings
            rating={overallRating || 0}
            starRatedColor="#3273dc"
            numberOfStars={5}
            starDimension="17px"
            starSpacing="1px"
            name="rating"
          />
          <br />
          {renderDescription()}
        </div>
      </article>
    </div>
  );
};

ContentCard.propTypes = propTypes;

export default ContentCard;
