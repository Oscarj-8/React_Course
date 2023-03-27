import "./App.css";
import { useState } from "react";
function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handler = (e) => {
    e.preventDefault();
    if (score <= 5 && comment.length <= 10) {
      alert("Please tell us whats wrong with our service and Thank you!");
    }

    console.log(`Feedback submitted, ${score} ${comment}`);
    setScore("10");
    setComment("");
  };

  return (
    <div className="container">
      <form onSubmit={handler} className="form">
        <fieldset>
          <h1>Feedback Form</h1>
          <div className="field">
            <label>Score: {score} ⭐</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="field2">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <input className="btn" type="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
