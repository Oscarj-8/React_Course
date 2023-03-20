import "./App.css";
import tech from "./tech.png";

function App() {
  const time = new Date();
  const day = time.toLocaleDateString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;
  if (day.toLowerCase() === "monday") {
    dayMessage = "Hey it's Monday";
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = "Hey it's Tuesday";
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = "Hey it's Wednesday";
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = "Hey it's Thursday";
  } else if (day.toLowerCase() === "friday") {
    dayMessage = "Hey it's weekend is coming";
  } else {
    dayMessage = "Have fun, its weekend";
  }
  return (
    <div className="wrapper">
      <h1>
        {dayMessage} <img src={tech} />
      </h1>
      {morning ? <h2>Have you eaten your breakfast?</h2> : ""}
    </div>
  );
}

export default App;
