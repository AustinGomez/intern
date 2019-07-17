import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "_components/SearchBar";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <p className="title is-4">InternBeat</p>
        </Link>
        <span
          role="button"
          className={`navbar-burger burger ${isOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={() => setIsOpen(isOpen => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>
      <div id="navMenu" className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <div className="navbar-item">
            <SearchBar />
          </div>
          <Link className="navbar-item" to="/">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
