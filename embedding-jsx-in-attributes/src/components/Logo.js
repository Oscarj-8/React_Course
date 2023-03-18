import React from "react";
import reactimage from "./images/reactimage.jpeg";

function Logo() {
  const picstyles = {
    width: "300px",
    height: "300px",
    borderRadius: "20%",
    margin: "auto",
    display: "block",
  };
  return (
    <div className="divStyle">
      <p className="p-text">
        In this app the "src" jsx expression is embedded in HTML tag in order to
        display the image, check out the code in Logo.js inside "src/components"
      </p>
      <img style={picstyles} src={reactimage} height="200" />
    </div>
  );
}

export default Logo;
