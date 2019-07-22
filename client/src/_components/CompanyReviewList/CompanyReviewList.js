import React from "react";
import ContentCard from "_components/ContentCard";

const CompanyReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return <p className="title has-text-centered">No results</p>;
  }

  return (
    <div className="box">
      <div className="container">
        {reviews.map((review, index) => {
          return (
            <div key={index}>
              <ContentCard
                overallRating={review.overall_rating}
                description={review.description}
                company={review.company}
                currency={review.currency}
                title={review.job.title}
                subTitleItems={[review.job.location]}
                salary={review.salary_in_cents}
                payFrequency={review.pay_period}
                jobTitle={review.job.title}
                jobLocation={review.job.location}
                showIcon={false}
              />
              {index !== reviews.length - 1 ? <hr /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyReviewList;
