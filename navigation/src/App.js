import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <nav className="navs">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about-me" className="nav-item">
          AboutMe
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
