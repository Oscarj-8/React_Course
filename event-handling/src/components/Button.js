import React from "react";

function Button() {
  const clicked = () => {
    console.log("YOU JUST CLICKED THE onClick BUTTON");
  };
  const mouseOver = () => {
    console.log("YOU JUST HOVERED OVER ON THE onMouseOver BUTTON");
  };
  return (
    <div className="cards">
      <div className="card1 common">
        <h1>onClick event</h1>
        <h3>This cards explains about onClick event handling</h3>
        <p>
          <i>
            When the onCLick button is clicked you will see a message on dev
            tools, <br />
            To open dev tools right click anywhere on the screen and click on
            inspect.
          </i>
        </p>
        <button onClick={clicked} className="btn">
          onClick
        </button>
      </div>
      <div className="card2 common">
        <h1>onMouseOver event</h1>
        <h3>This cards explains about onMouseOver event handling</h3>
        <p>
          <i>
            When a cursor is hovered over the onMouseOver button you will see a
            message on dev tools, <br />
            To open dev tools right click anywhere on the screen and click on
            inspect.
          </i>
        </p>
        <button onMouseOver={mouseOver} className="btn">
          onMouseOver
        </button>
      </div>
    </div>
  );
}

export default Button;
