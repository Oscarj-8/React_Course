import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset className="wrapper">
          <h2>Add Username</h2>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name} type="Submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
