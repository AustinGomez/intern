import React, { useState } from "react";
import useFetchData from "../../_hooks/useFetchData";
import { Link } from "react-router-dom";

import SearchBar from "../../_components/SearchBar";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const { pending, error } = useFetchData(
    "http://localhost:8000/api/companies/",
    setCompanies
  );
  if (pending === true) return "pending";
  return (
    <>
      <div className="hero">
        <div className="hero-body">
          <div className="column is-6-fullhd is-6-desktop is-6-tablet is-offset-3-fullhd is-offset-3-desktop is-offset-3-tablet">
            <h1 className="title is-1 has-text-centered has-text-weight-bold">
              Intern Website
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
      <hr />
      <ul>
        {companies.data.map((company, index) => {
          return (
            <li key={index}>
              <Link to={`/companies/${company.id}`}>{company.name}</Link>
            </li>
          );
        })}
      </ul>
      {error && <span class="error">{error.response}</span>}
    </>
  );
};

export default Home;
