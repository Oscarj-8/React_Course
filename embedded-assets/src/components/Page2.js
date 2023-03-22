import React from "react";

function Page2() {
  return (
    <div className="page1-card">
      <h1>Hey this is page two</h1>
      <p>
        <i>
          In this page, the image is added by using the 'require()' function.
          The function is embedded inside the 'src' JSX attribute, importing the
          path that contains the image is not necessary
        </i>
      </p>
      <img src={require("../assets/image.jpg")} height="300" />
    </div>
  );
}

export default Page2;
