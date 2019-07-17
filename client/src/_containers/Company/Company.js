import React, { useState } from "react";
import useFetchData from "../../_hooks/useFetchData";
import useFetchPaginatedData from "../../_hooks/useFetchPaginatedData";

import Select from "react-select";
import CompanyHeader from "_components/CompanyHeader";
import Footer from "_components/Footer";

import "./company.css";
import ReviewCard from "../../_components/ReviewCard";

const Company = props => {
  const [company, setCompany] = useState([]);
  const [companyReviews, setCompanyCompanyReviews] = useState([]);
  const [selectedJobLocations, setJobLocations] = useState([]);
  const [selectedJobTitles, setJobTitles] = useState([]);

  const { fetchCompanyDetailsPending, fetchCompanyDetailsError } = useFetchData(
    `http://192.168.0.36:8000/api/companies/${props.match.params.slug}/`,
    setCompany
  );
  const {
    fetchCompanyReviewsPending,
    fetchCompanyReviewsError
  } = useFetchPaginatedData(
    `http://192.168.0.36:8000/api/companies/${props.match.params.slug}/reviews/`,
    setCompanyCompanyReviews
  );

  if (
    fetchCompanyDetailsPending ||
    !company.name ||
    !companyReviews ||
    !companyReviews.length
  )
    return null;

  const jobLocations = Array.from(
    new Set(companyReviews.map(review => review.job.location))
  ).map(location => {
    const review = companyReviews.find(
      review => review.job.location === location
    );
    return {
      value: review.job.location,
      label: review.job.location
    };
  });
  const jobTitles = Array.from(
    new Set(companyReviews.map(review => review.job.slug))
  ).map(slug => {
    const review = companyReviews.find(review => review.job.slug === slug);
    return {
      value: review.job.slug,
      label: review.job.title
    };
  });

  const filteredCompanyReviews = companyReviews
    .filter(review => {
      return (
        !selectedJobLocations ||
        selectedJobLocations.length === 0 ||
        !!selectedJobLocations.find(
          location => location.value === review.job.location
        )
      );
    })
    .filter(review => {
      return (
        !selectedJobTitles ||
        selectedJobTitles.length === 0 ||
        !!selectedJobTitles.find(title => title.value === review.job.slug)
      );
    });

  return (
    <>
      <div className="container header">
        <div className="section">
          <CompanyHeader
            name={company.name}
            iconText={company.name.split("")}
            logoUrl={company.logo_url}
            averageRating={company.avg_rating}
            totalNumberOfReviews={company.user_reviews_count}
          />
        </div>
      </div>
      <div className="container">
        <div className="section">
          <h6>REVIEWS</h6>
          <br />
          <h2>FILTER ON LOCATION</h2>
          <Select
            value={selectedJobLocations}
            onChange={selectedOption => setJobLocations(selectedOption)}
            options={jobLocations}
            isMulti
          />
          <h2>FILTER ON JOB TITLE</h2>
          <Select
            value={selectedJobTitles}
            onChange={selectedOption => setJobTitles(selectedOption)}
            options={jobTitles}
            isMulti
          />
        </div>
      </div>
      <div className="container">
        {filteredCompanyReviews.map(review => {
          return (
            <ReviewCard
              overallRating={review.overall_rating}
              description={review.description}
              company={company}
              currency={review.currency}
              userName={""}
              slug={""}
              salary={review.salary_in_cents}
              payFrequency={review.pay_period}
              jobTitle={review.job.title}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Company;
