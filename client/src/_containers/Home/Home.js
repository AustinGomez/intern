import React, { useState, useMemo, useEffect } from "react";
import useFetchPaginatedData from "../../_hooks/useFetchPaginatedData";
import ContentCard from "_components/ContentCard";
import SearchBar from "_components/SearchBar";
import featuredReview from "./FeaturedReview";
import NewsletterSignupSection from "_components/NewsletterSignupSection";

import "./home.css";

const NUMBER_OF_RECENT_REVIEWS = 4;
const NUMBER_OF_TOP_COMPANIES = 8;

const Home = props => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    document.title = "InternBeat | Internship Reviews";
  }, []);

  const [isCompaniesLoading] = useFetchPaginatedData(
    `companies/?ordering=-avg_rating,-total_rating,-modified_date&min_total_rating=20&limit=${NUMBER_OF_TOP_COMPANIES}`,
    setCompanies
  );

  const [isReviewsLoading] = useFetchPaginatedData(
    `reviews/?ordering=-created_date&limit=${NUMBER_OF_RECENT_REVIEWS}`,
    setReviews
  );

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

  const loadingCompanyCards = [...Array(NUMBER_OF_TOP_COMPANIES)].map(
    (_, i) => {
      return (
        <div className="column is-3-fullhd is-6-tablet is-full-mobile" key={i}>
          <div className="box is-equal-height">
            <ContentCard isLoading={true} showDescription={false} />
          </div>
        </div>
      );
    }
  );

  const loadingReviewCards = [...Array(NUMBER_OF_RECENT_REVIEWS)].map(
    (_, i) => {
      return (
        <div className="column is-6-fullhd is-6-tablet is-full-mobile" key={i}>
          <div className="box is-equal-height">
            <ContentCard isLoading={true} />
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="container">
        <div className="section is-medium search-section">
          <div className="column is-6-fullhd is-6-desktop is-6-tablet is-offset-3-fullhd is-offset-3-desktop is-offset-3-tablet">
            <h1 className="title is-1 has-text-centered has-text-weight-bold">
              Intern<span className="has-text-primary">Beat</span>
            </h1>
            <h1 className="title is-4 has-text-centered">
              Find your dream internship.
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="section powered-by-section is-medium has-background-info">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title is-2 has-text-centered-mobile has-text-white">
                Internship reviews powered by students.
              </p>
              <p className=" has-text-centered-mobile has-text-white">
                Read internship reviews, see salaries and offers, and explore
                the best companies to work for.
              </p>
            </div>
            <div className="column">
              <div className="box">
                <ContentCard
                  userName={featuredReview.user_name}
                  x
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
          <div className="columns is-mobile is-multiline">
            {isReviewsLoading ? loadingReviewCards : reviewCards}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1 className="title is-4">Top companies</h1>
          <div className="columns is-centered is-multiline">
            {isCompaniesLoading ? loadingCompanyCards : companyCards}
          </div>
        </div>
      </div>
      <div className="section is-medium ">
        <div className="container">
          <NewsletterSignupSection />
        </div>
      </div>
    </>
  );
};

export default Home;
