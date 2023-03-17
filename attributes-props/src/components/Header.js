import React from "react";

function Header(props) {
  const styles = {
    backgroundColor: "#34abeb",
    textAlign: "center",
    padding: "20px",
    margin: "5px",
    borderRadius: "8px",
  };
  return (
    <div style={styles}>
      <h1>This is Header from {props.message}</h1>
      <h3>
        <i>Inline styling in react is applied in this compartment</i>
      </h3>
    </div>
  );
}

export default Header;
