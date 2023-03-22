import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <nav className="nav-items">
        <Link to="page1" className="nav-item">
          Page one
        </Link>
        <Link to="page2" className="nav-item">
          Page two
        </Link>
        <Link to="page3" className="nav-item">
          Page three
        </Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
