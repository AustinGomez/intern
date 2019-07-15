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
      <SearchBar />
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
