import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handler = (e) => {
    e.preventDefault();
    console.log("submitted");
    setName("");
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handler}>
        <fieldset className="wrapper">
          <legend>Add username</legend>
          <label>Username:</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
