import React, { useState } from "react";
import useFetchData from "../../_hooks/useFetchData";
import { Link } from "react-router-dom";
import ReviewCard from "_components/ReviewCard";
import CompanyCard from "_components/CompanyCard";
import SearchBar from "../../_components/SearchBar";
import Footer from "_components/Footer";

const Home = props => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { fetchCompaniesPending, fetchCompaniesError } = useFetchData(
    "http://localhost:8000/api/search/?ordering=-avg_rating,-total_rating,-modified_date&limit=4",
    setCompanies
  );

  const { fetchReviewPending, fetchReviewError } = useFetchData(
    "http://localhost:8000/api/reviews/?ordering=-created_date&limit=4",
    setReviews
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
        <div className="section">
          <h1 className="title is-4">Recent reviews</h1>
          <div className="columns is-mobile is-multiline">
            {reviews.map((review, index) => {
              return (
                <div
                  className="column is--fullhd is-6-tablet is-full-mobile"
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
            })}
          </div>
        </div>
        <div className="section">
          <h1 className="title is-4">Top companies</h1>
          <div className="columns is-mobile is-multiline">
            {companies.map((company, index) => {
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
            })}
          </div>
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
