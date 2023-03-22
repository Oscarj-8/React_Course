import React from "react";

function Page3() {
  const randomImg =
    "https://wallpapers.com/images/featured/en3dnh2zi84sgt3t.jpg";
  return (
    <div className="page1-card">
      <h1>Hey this is page three</h1>
      <p>
        <i>
          In this page, the image is added by declaring a variable and assign
          the link of the picture from google and embedding that variable in the
          image JSX element inside the 'src' attribute. No need of imporing the
          path and use of 'reuired()' function aswell.
        </i>
      </p>
      <img src={randomImg} height="300" alt="Image 3" />
    </div>
  );
}

export default Page3;
