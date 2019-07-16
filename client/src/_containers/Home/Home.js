import React, { useState, useMemo } from "react";
import useFetchData from "../../_hooks/useFetchData";
import ReviewCard from "_components/ReviewCard";
import CompanyCard from "_components/CompanyCard";
import SearchBar from "../../_components/SearchBar";
import Footer from "_components/Footer";
import featuredReview from "./FeaturedReview";
import config from "config";

const Home = props => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useFetchData(
    "search/?ordering=-avg_rating,-total_rating,-modified_date&limit=4",
    setCompanies
  );

  useFetchData("reviews/?ordering=-created_date&limit=4", setReviews);

  const reviewCards = useMemo(
    () =>
      reviews.map((review, index) => {
        return (
          <div
            className="column is-3-fullhd is-6-tablet is-full-mobile"
            key={index}
          >
            <ReviewCard
              userName={review.user_name}
              userId={review.user_id}
              overallRating={review.overall_rating}
              description={review.description}
              company={review.company}
              jobTitle={review.job.title}
              salary={review.salary_in_cents}
              currency={review.currency}
              payFrequency={review.pay_period}
            />
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
            className="column is-3-desktop is-6-tablet is-full-mobile"
            key={index}
          >
            <CompanyCard
              name={company.name}
              rating={company.avg_rating}
              iconSrc={company.logo_url}
              slug={company.slug}
              reviewCount={company.user_reviews_count}
            />
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
              Intern Website
            </h1>
            <h1 className="title is-4 has-text-centered">
              Find your dream internship.
            </h1>
            <SearchBar history={props.history} />
          </div>
        </div>
      </div>
      <div className="section is-medium has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title">Intern website is powered by students.</p>
              <p className="">
                Read reviews, find salaries, and explore the best companies to
                work for.
              </p>
            </div>
            <div className="column">
              {reviews[0] && (
                <ReviewCard
                  userName={featuredReview.user_name}
                  userId={featuredReview.user_id}
                  overallRating={featuredReview.overall_rating}
                  description={featuredReview.description}
                  company={featuredReview.company}
                  jobTitle={featuredReview.job.title}
                  salary={featuredReview.salary_in_cents}
                  currency={featuredReview.currency}
                  payFrequency={featuredReview.pay_period}
                  textLimit={250}
                />
              )}
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
          <div className="columns is-mobile is-multiline">{companyCards}</div>
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
              <form>
                <div className="field is-grouped">
                  <div className="control is-expanded">
                    <input
                      type="email"
                      className="input is-medium is-flat"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="control">
                    <button className="button is-medium is-link">
                      <strong>Subscribe</strong>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
