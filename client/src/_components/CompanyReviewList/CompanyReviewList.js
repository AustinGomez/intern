import React from "react";
import ContentCard from "_components/ContentCard";

const CompanyReviewList = ({ reviews, isLoading }) => {
  const formatDate = dateString => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  if (!isLoading && !reviews.length) {
    return <p className="title has-text-centered">No results</p>;
  }

  const loadingReviewCards = [...Array(4)].map((review, index) => {
    return (
      <div key={index}>
        <ContentCard showIcon={false} />
        {index !== reviews.length - 1 ? <hr /> : null}
      </div>
    );
  });

  const reviewCards = reviews.map((review, index) => {
    return (
      <div key={index}>
        <ContentCard
          overallRating={review.overall_rating}
          description={review.description}
          company={review.company}
          currency={review.currency}
          title={review.job.title}
          subTitleItems={[review.job.location, formatDate(review.created_date)]}
          salary={review.salary_in_cents}
          payFrequency={review.pay_period}
          jobTitle={review.job.title}
          jobLocation={review.job.location}
          showIcon={false}
        />
        {index !== reviews.length - 1 ? <hr /> : null}
      </div>
    );
  });

  return (
    <div className="box">
      <div className="container">
        {isLoading ? loadingReviewCards : reviewCards}
      </div>
    </div>
  );
};

export default CompanyReviewList;
