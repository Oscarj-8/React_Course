import "./App.css";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function App() {
  const chemists = people.filter((person1) => person1.profession === "chemist");

  const listItems = chemists.map((person1) => (
    <li key={person1.id} className="list">
      <img src={getImageUrl(person1)} alt={person1.name} />
      <p>
        <b>{person1.name}:</b>
        {" " + person1.profession + " "}
        known for {person1.accomplishment}
      </p>
    </li>
  ));

  const everyoneElse = people.filter(
    (person2) => person2.profession != "chemist"
  );

  const listItems2 = everyoneElse.map((person2) => (
    <li key={person2.id} className="list">
      <img src={getImageUrl(person2)} alt={person2.name} />
      <p>
        <b>{person2.name}:</b>
        {" " + person2.profession + " "}
        known for {person2.accomplishment}
      </p>
    </li>
  ));

  return (
    <article className="art">
      <h1>Chemists</h1>
      <ul className="lists">{listItems}</ul>
      <h1> EveryoneElse </h1>
      <ul className="lists">{listItems2}</ul>
    </article>
  );
}
export default App;
