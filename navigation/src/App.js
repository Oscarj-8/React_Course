import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="wrapper">
      <div className="navs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>AboutMe</a>
          </li>
        </ul>
      </div>
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
