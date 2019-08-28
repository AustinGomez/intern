import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useUserStateValue } from "_state/UserState";

const EmailConfirmed = props => {
  const [{ user }] = useUserStateValue();

  // If the user is logged in, then bring them to the home page.
  if (user) {
    props.history.push("/");
  }

  return (
    <div className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size={"10x"}
              color={"lightgreen"}
            />
          </p>
          <p className="title is-1">You're all set.</p>
          <p className="subtitle">
            Just log in and start reviewing{" "}
            <span aria-label="smiley emoji" role="img">
              😄
            </span>
          </p>

          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EmailConfirmed);
