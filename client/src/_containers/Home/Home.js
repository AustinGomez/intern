import React, { useState } from "react";
import useFetchData from "../../_hooks/useFetchData";
import { Link } from "react-router-dom";
import ReviewCard from "_components/ReviewCard";
import CompanyCard from "_components/CompanyCard";
import SearchBar from "../../_components/SearchBar";
import Footer from "_components/Footer";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const { pending, error } = useFetchData(
    "http://localhost:8000/api/companies/",
    setCompanies
  );

  const companyTags = () => {
    if (!companies) {
      return null;
    }
    return (
      <ul>
        {companies.data.map((company, index) => {
          return (
            <li key={index}>
              <Link to={`/companies/${company.id}`}>{company.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

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
          <div className="columns is-desktop">
            <div className="column">
              <ReviewCard />
            </div>
            <div className="column">
              <ReviewCard />
            </div>
            <div className="column">
              <ReviewCard />
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="title is-4">Top companies</h1>
          <div className="columns is-desktop">
            <div className="column">
              <CompanyCard />
            </div>
            <div className="column">
              <CompanyCard />
            </div>
            <div className="column">
              <CompanyCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
