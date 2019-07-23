import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  src: PropTypes.string,
  iconText: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

const FallbackIcon = React.memo(({ src, iconText, height, width }) => {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleImageLoadError = event => {
    setErrored(true);
  };

  const handleImageLoad = event => {
    setLoaded(true);
  };

  useEffect(() => {
    setErrored(false);
    setLoaded(false);
  }, [iconText]);

  // Generate random icon color
  let rgb = [];
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256);
    rgb.push(r);
  }
  var styles = {
    width: width + "px",
    height: height + "px",
    lineHeight: height + "px",
    fontSize: 48 + "px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: `rgb(${rgb})`
  };

  // Render a hidden image first to see if it will load.
  if (src && !errored && !loaded) {
    return (
      <img
        className="is-hidden"
        onError={handleImageLoadError}
        onLoad={handleImageLoad}
        src={src}
        alt="company logo icon"
      />
    );
  } else if (src && loaded) {
    return (
      <img
        className="company-icon image is-64x64"
        onError={handleImageLoadError}
        src={src}
        alt="company logo icon"
      />
    );
  } else {
    return (
      <p className="has-text-centered" style={styles}>
        {iconText[0]}
      </p>
    );
  }
});

FallbackIcon.propTypes = propTypes;

export default FallbackIcon;
