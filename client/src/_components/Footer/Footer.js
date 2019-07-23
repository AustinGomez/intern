import React from "react";

const Footer = () => {
  return (
    <footer className="footer has-background-primary">
      <div className="content has-text-centered is-vcentered has-text-white">
        <p>
          <strong className="has-text-white">InternBeat</strong> is made with{" "}
          <span aria-label="heart emoji" role="img">
            ❤️
          </span>{" "}
          by students at the University of Waterloo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
