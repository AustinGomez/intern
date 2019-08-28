import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "_components/SearchBar";
import LoginModal from "_components/LoginModal";
import { useUserStateValue } from "_state/UserState";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [{ user }, dispatch] = useUserStateValue();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    dispatch({
      type: "CLEAR_USER"
    });
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <p className="title is-4">
              Intern<span className="has-text-primary">Beat</span>
            </p>
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
        <div
          id="navMenu"
          className={`navbar-menu ${isOpen ? "is-active" : ""}`}
        >
          <div className="navbar-start" />

          <div className="navbar-end">
            <div className="navbar-item">
              <SearchBar
                inputCustomClass={"is-hidden-desktop"}
                buttonCustomClass={"is-hidden-desktop"}
              />
            </div>
            {user ? (
              <a className="navbar-item is-link" onClick={handleLogout}>
                Log Out
              </a>
            ) : (
              <a className="navbar-item is-link" onClick={openLoginModal}>
                Log In
              </a>
            )}
          </div>
        </div>
      </nav>
      <LoginModal isActive={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Navbar;
