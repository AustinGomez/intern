import React, { useState, useMemo, useEffect } from "react";
import useFetchPaginatedData from "../../_hooks/useFetchPaginatedData";
import ContentCard from "_components/ContentCard";
import SearchBar from "_components/SearchBar";
import featuredReview from "./FeaturedReview";
import MailingListSignupInput from "_components/MailingListSignupInput";

const Home = props => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    document.title = "Internbeat | Internship Reviews";
  }, []);

  useFetchPaginatedData(
    "companies/?ordering=-avg_rating,-total_rating,-modified_date&min_total_rating=20&limit=4",
    setCompanies
  );

  useFetchPaginatedData("reviews/?ordering=-created_date&limit=4", setReviews);

  const reviewCards = useMemo(
    () =>
      reviews.map((review, index) => {
        return (
          <div
            className="column is-6-fullhd is-6-tablet is-full-mobile"
            key={index}
          >
            <div className="box is-equal-height">
              <ContentCard
                userName={review.user_name}
                userId={review.user_id}
                overallRating={review.overall_rating}
                description={review.description}
                company={review.company}
                subTitleItems={[review.job.title, review.job.location]}
                title={review.company.name}
                salary={review.salary_in_cents}
                currency={review.currency}
                payFrequency={review.pay_period}
                textLimit={200}
              />
            </div>
          </div>
        );
      }),
    [reviews]
  );

  const companyCards = useMemo(
    () =>
      companies.map((company, index) => {
        return (
          <div
            className="column is-3-fullhd is-6-tablet is-full-mobile"
            key={index}
          >
            <div className="box is-equal-height">
              <ContentCard
                title={company.name}
                subTitleItems={[company.hq_city]}
                company={company}
                overallRating={company.avg_rating}
              />
            </div>
          </div>
        );
      }),
    [companies]
  );

  return (
    <>
      <div className="container">
        <div className="section is-medium">
          <div className="column is-6-fullhd is-6-desktop is-6-tablet is-offset-3-fullhd is-offset-3-desktop is-offset-3-tablet">
            <h1 className="title is-1 has-text-centered has-text-weight-bold">
              InternBeat
            </h1>
            <h1 className="title is-4 has-text-centered">
              Find your dream internship.
            </h1>
            <SearchBar
              inputCustomClass={"is-medium"}
              buttonCustomClass={"is-medium"}
            />
          </div>
        </div>
      </div>
      <div className="section is-medium has-background-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title has-text-centered">Powered by students</p>
              <p className="has-text-centered">
                Read reviews, find salaries, and explore the best companies to
                work for.
              </p>
            </div>
            <div className="column">
              <div className="box is-equal-height">
                <ContentCard
                  userName={featuredReview.user_name}
                  userId={featuredReview.user_id}
                  overallRating={featuredReview.overall_rating}
                  description={featuredReview.description}
                  company={featuredReview.company}
                  subTitleItems={[
                    featuredReview.job.title,
                    featuredReview.job.location
                  ]}
                  title={featuredReview.company.name}
                  salary={featuredReview.salary_in_cents}
                  currency={featuredReview.currency}
                  payFrequency={featuredReview.pay_period}
                  textLimit={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1 className="title is-4">Recent reviews</h1>
          <div className="columns is-mobile is-multiline">{reviewCards}</div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1 className="title is-4">Top companies</h1>
          <div className="columns is-centered is-multiline">{companyCards}</div>
        </div>
      </div>
      <div className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title">Stay in the loop</p>
              <p className="subtitle">
                Keep up to date with news, intern stories, and more. No spam.
              </p>
            </div>
            <div className="column">
              <MailingListSignupInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
