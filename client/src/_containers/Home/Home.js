import React, { useState } from "react";
import useFetchData from "../../_hooks/useFetchData";
import { Link } from "react-router-dom";
import ReviewCard from "_components/ReviewCard";
import CompanyCard from "_components/CompanyCard";
import SearchBar from "../../_components/SearchBar";
import Footer from "_components/Footer";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { fetchCompanyPending, fetchCompanyError } = useFetchData(
    "http://localhost:8000/api/search/?ordering=-avg_rating,-total_rating,-modified_date&limit=4",
    setCompanies
  );

  const { fetchReviewPending, fetchReviewError } = useFetchData(
    "http://localhost:8000/api/reviews/?ordering=-created_date&limit=4",
    setReviews
  );

  return (
    <>
      <div className="hero top-hero">
        <div className="hero-content">
          <div className="container">
            <div className="section">
              <div className="column is-6-fullhd is-6-desktop is-6-tablet is-offset-3-fullhd is-offset-3-desktop is-offset-3-tablet">
                <h1 className="title is-1 has-text-centered has-text-weight-bold">
                  Intern Website
                </h1>
                <h1 className="title is-4 has-text-centered">
                  Find your dream internship.
                </h1>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="title is-4">Recent reviews</h1>
          <div className="columns ">
            {reviews.map((review, index) => {
              return (
                <div className="column" key={index}>
                  <ReviewCard
                    userName={review.user_name}
                    userId={review.user_id}
                    overallRating={review.overall_rating}
                    description={review.description}
                    company={review.company.name}
                    jobTitle={review.job.title}
                    slug={review.company.slug}
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
          <div className="columns">
            {companies.map((company, index) => {
              return (
                <div className="column" key={index}>
                  <CompanyCard
                    name={company.name}
                    rating={company.avg_rating}
                    iconHref={company.logo_url}
                    slug={company.slug}
                    reviewCount={company.user_reviews_count}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
