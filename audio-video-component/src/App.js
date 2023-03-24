import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Audio and Video in React using ReactPlayer</h1>
      <ReactPlayer
        height={200}
        width={300}
        url="https://www.facebook.com/peopleareawesome/videos/best-videos-of-the-year-so-far/1393626100686564/"
        volume={0.5}
        controls={true}
        playing={false}
      />
    </div>
  );
}

export default App;
