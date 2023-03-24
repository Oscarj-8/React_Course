import "./App.css";

const topDesserts = [
  {
    id: "1",
    name: "Tiramisu",
    description: "The best tiramisu in the town",
    price: "$9.00",
  },
  {
    id: "2",
    name: "Cream",
    description: "The best cream in the town",
    price: "$10.00",
  },
  {
    id: "3",
    name: "Chocolate",
    description: "The best chocolate in the town",
    price: "$12.00",
  },
  {
    id: "4",
    name: "Strawberry juice",
    description: "The best strawberry juices in the town",
    price: "$6.00",
  },
];

function App() {
  const listItems = topDesserts.map((dessert) => {
    const item = `${dessert.name} - ${dessert.price}`;
    return (
      <li className="lists" key={dessert.id}>
        {item}
      </li>
    );
  });
  return (
    <div className="wrapper">
      <h1>Top Little Lemon's desserts</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
