import React from "react";
import "../index.css";

function Main(props) {
  return (
    <div className="mainside">
      <h1>This is Main from {props.message}</h1>
      <h3>
        <i>The message "Oz" is passed for all of the compartments as a props</i>
      </h3>
    </div>
  );
}

export default Main;
