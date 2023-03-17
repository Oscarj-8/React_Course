import React from "react";

function Sidebar(props) {
  const color = {
    backgroundColor: "#de9ba7",
  };
  return (
    <div className="mainside" style={color}>
      <h1>This is Sidebar from {props.message}</h1>
      <h3>
        <i>What am i doing here though? {props.noIdea}</i>
      </h3>
    </div>
  );
}

export default Sidebar;
