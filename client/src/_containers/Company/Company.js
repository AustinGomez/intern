import React, { useState, useCallback } from "react";
import useFetchData from "../../_hooks/useFetchData";
import Select from "react-select";
import CompanyHeader from "_components/CompanyHeader";
import Footer from "_components/Footer";
import ReviewCard from "../../_components/ReviewCard";
import Paginator from "_components/Paginator";
import "./Company.css";
import axios from "axios";

const Company = props => {
  const [company, setCompany] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [numberOfReviews, setNumberOfReviews] = useState();
  const [selectedJobLocations, setJobLocations] = useState([]);
  const [selectedJobTitles, setJobTitles] = useState([]);

  const { fetchCompanyDetailsPending } = useFetchData(
    `companies/${props.match.params.slug}/`,
    setCompany
  );

  const setFetchedReviews = useCallback(
    data => {
      setNumberOfReviews(data.count);
      setCompanyReviews(data.results);
    },
    [setNumberOfReviews, setCompanyReviews]
  );

  useFetchData(
    `companies/${props.match.params.slug}/reviews/`,
    setFetchedReviews
  );

  if (
    fetchCompanyDetailsPending ||
    !company.name ||
    !companyReviews ||
    !companyReviews.length
  )
    return null;

  const jobLocations = Array.from(
    new Set(
      companyReviews.map(review => {
        return review.job && review.job.location;
      })
    )
  ).map(location => {
    return { value: location, label: location };
  });
  const jobTitles = Array.from(
    new Set(
      companyReviews.map(review => {
        return review.job && review.job.slug;
      })
    )
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
        selectedJobLocations.find(
          location => location.value === review.job.location
        )
      );
    })
    .filter(review => {
      return (
        !selectedJobTitles ||
        selectedJobTitles.length === 0 ||
        selectedJobTitles.find(title => title.value === review.job.slug)
      );
    });

  const onClickFetchPage = pageNumber => {
    setCurrentPageNumber(pageNumber);
    axios(`companies/${props.match.params.slug}/reviews/?page=${pageNumber}`)
      .then(response => {
        setCompanyReviews(response.data ? response.data.results : []);
        window.scrollTo(0, 0);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="section header">
        <div className="container">
          <CompanyHeader
            name={company.name}
            iconText={company.name}
            logoUrl={company.logo_url}
            averageRating={company.avg_rating}
            totalNumberOfReviews={company.user_reviews_count}
          />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns is-centered reverse-row-order">
            <div className="column is-3-desktop">
              <div className="card">
                <div className="card-content">
                  {" "}
                  <p className="title is-5">Filter</p>
                  <div className="field">
                    <label className="label">Filter by location</label>
                    <Select
                      value={selectedJobLocations}
                      onChange={selectedOption =>
                        setJobLocations(selectedOption)
                      }
                      options={jobLocations}
                      isMulti
                    />
                  </div>
                  <div className="field">
                    <label className="label">Filter by job title</label>
                    <Select
                      value={selectedJobTitles}
                      onChange={selectedOption => setJobTitles(selectedOption)}
                      options={jobTitles}
                      isMulti
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-narrow">
              <div className="container">
                {filteredCompanyReviews.map((review, index) => {
                  return (
                    <ReviewCard
                      key={index}
                      overallRating={review.overall_rating}
                      description={review.description}
                      company={company}
                      currency={review.currency}
                      userName={""}
                      slug={""}
                      salary={review.salary_in_cents}
                      payFrequency={review.pay_period}
                      jobTitle={review.job.title}
                      textLimit={10000}
                      showIcon={false}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Paginator
          pageCount={Math.ceil(numberOfReviews / 10)}
          currentPageNumber={currentPageNumber}
          onClickGoToPage={onClickFetchPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default Company;
