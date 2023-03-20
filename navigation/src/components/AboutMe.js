import React from "react";
import emoji from "../assests/images/emoji2.png";

function AboutMe() {
  return (
    <div className="abtme card">
      <h1>This is about About Me</h1>
      <p>
        After installing the App component needs to be wrapped around
        BrowserRouter, and instead of using li elements unlike HTMl, React uses
        Routes element which it self encloses Route elements.
        <br />
        <i>For more check out the source code</i>
      </p>
      <img height={250} src={emoji} />
    </div>
  );
}

export default AboutMe;
