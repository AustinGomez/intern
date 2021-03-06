import React, { useState, useCallback, useEffect } from "react";
import useFetchData from "../../_hooks/useFetchData";
import useFetchPaginatedData from "_hooks/useFetchPaginatedData";
import Select from "react-select";
import CompanyHeader from "_components/CompanyHeader";
import Paginator from "_components/Paginator";
import "./Company.css";
import CompanyReviewList from "_components/CompanyReviewList/CompanyReviewList";
import { Helmet } from "react-helmet";

const PAGE_LENGTH = 10;

const Company = props => {
  const [company, setCompany] = useState({});
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [numberOfReviews, setNumberOfReviews] = useState(0);
  const [selectedJobLocation, setJobLocation] = useState();
  const [selectedJobTitle, setJobTitle] = useState();

  const pageDescription = `${company &&
    company.name} internship reviews and salaries. See what it's like to be an intern at ${company &&
    company.name}`;
  const pageTitle = `${company &&
    company.name} Internship Reviews | InternBeat`;

  // Fetch company
  const [isCompanyLoading] = useFetchData(
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

  // Fetch reviews
  const [fetchCompanyReviewsPending] = useFetchData(
    `companies/${
      props.match.params.slug
    }/reviews/?limit=${PAGE_LENGTH}&offset=${(currentPageNumber - 1) *
      PAGE_LENGTH}${
      selectedJobLocation ? "&location=" + selectedJobLocation.value : ""
    }${selectedJobTitle ? "&title=" + selectedJobTitle.label : ""}`,
    setFetchedReviews
  );

  // Fetch jobs
  useFetchPaginatedData(
    `companies/${props.match.params.slug}/jobs/?limit=100`,
    setJobs
  );

  useEffect(() => {
    setCurrentPageNumber(1);
  }, [selectedJobLocation, selectedJobTitle]);

  useEffect(() => {
    if (company && company.name) {
      // document.title = ;
    }
  }, [company]);

  const jobTitles =
    jobs &&
    Array.from(new Set(jobs.map(job => job.slug))).map(slug => {
      const title = jobs.find(job => job.slug === slug).title;
      return { value: slug, label: title };
    });

  const jobLocations =
    jobs &&
    Array.from(new Set(jobs.map(job => job.location))).map(location => {
      return { value: location, label: location };
    });

  const onClickFetchPage = pageNumber => {
    setCurrentPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={pageDescription} />
        <meta name="og:description" content={pageDescription} />
        <meta name="og:title" content={pageTitle} />
        <title>{pageTitle}</title>
      </Helmet>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <CompanyHeader
                name={company.name}
                iconText={company.name}
                logoUrl={company.logo_url}
                averageRating={company.avg_rating}
                totalNumberOfReviews={company.user_reviews_count}
                hqCity={company.hq_city}
                hqRegion={company.hq_region}
                hqCountry={company.hq_country}
                companyWebsiteUrl={company.website_url}
                companySize={company.size}
                description={company.description}
                isLoading={isCompanyLoading}
              />
            </div>
          </div>
          <div className="columns is-centered is-desktop reverse-row-order">
            <div className="column is-3-desktop">
              <div className="box is-rounded review">
                <div className="container review-container">
                  <div className="field">
                    <label className="label">Filter by location</label>
                    <Select
                      value={selectedJobLocation}
                      onChange={selectedOption =>
                        setJobLocation(selectedOption)
                      }
                      options={jobLocations}
                      isClearable
                      isSearchable={false}
                    />
                  </div>
                  <div className="field">
                    <label className="label">Filter by job title</label>
                    <Select
                      value={selectedJobTitle}
                      onChange={selectedOption => setJobTitle(selectedOption)}
                      options={jobTitles}
                      isClearable
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <CompanyReviewList
                  reviews={companyReviews}
                  isLoading={fetchCompanyReviewsPending}
                />
              </div>
              <br />
              {numberOfReviews ? (
                <Paginator
                  pageCount={Math.ceil(numberOfReviews / 10)}
                  currentPageNumber={currentPageNumber}
                  onClickGoToPage={onClickFetchPage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
