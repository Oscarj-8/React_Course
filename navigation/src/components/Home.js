import React from "react";
import image1 from "../assests/images/emoji.png";

function Home() {
  return (
    <div className="home card">
      <h1>This is Home Page</h1>
      <p>
        Inorder to implement Navigation on a web app you need to install and
        import React Router, <br />
        <i>
          It is a library that gives you more control over the routing of
          components.
        </i>
      </p>
      <img height="200px" src={image1}></img>
    </div>
  );
}

export default Home;
