import image from "../assets/image.jpg";
function Page1() {
  return (
    <div className="page1-card">
      <h1>Hey this is page one</h1>
      <p>
        <i>
          In this page, the image is added by importing the image containing
          folder to this component and embedding the img in the JSX in 'src'
          attribute
        </i>
      </p>
      <img src={image} height="300" alt="Image one" />
    </div>
  );
}

export default Page1;
