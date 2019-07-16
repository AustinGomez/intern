import React, { useState } from "react";

const FallbackIcon = ({ src, iconText, height, width }) => {
  const [errored, setErrored] = useState(false);
  const handleImageLoadError = event => {
    setErrored(true);
  };

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

  return !errored && src ? (
    <img onError={handleImageLoadError} src={src} alt="company logo icon" />
  ) : (
    <p className="has-text-centered" style={styles}>
      {iconText[0]}
    </p>
  );
};

export default FallbackIcon;
