import React, { useState } from "react";
import lemon from "../assets/lemon2.png";

function LittleLemon() {
  const [word, setWord] = React.useState("Eat");
  const handler = () => {
    setWord("Drink");
  };
  return (
    <div className="littleDiv">
      <div className="lemonCard">
        <img height="100px" src={lemon} alt="lemon" />
        <h1>{word} at Little Lemon</h1>
        <p>
          <i>
            When the button "Change" is clicked the text will change in to
            "Drink at Little Lemon", <br></br>
            This change is handled by using one of React hooks, namely useState
            hook. for more check out the code
          </i>
        </p>
        <button onClick={handler}>Change</button>
      </div>
    </div>
  );
}

export default LittleLemon;
