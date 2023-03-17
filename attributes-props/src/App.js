import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header message="Oz" />
      <div className="main-side">
        <Main message="Oz" />
        <Sidebar message="Oz" noIdea="Nothing" />
      </div>
    </>
  );
}

export default App;
