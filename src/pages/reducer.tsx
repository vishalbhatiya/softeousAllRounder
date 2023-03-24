import React, { useReducer } from "react";

let initialstate = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "Increament":
      return state + 1;
    case "Decreament":
      return state - 1;
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
    <div className="App">
    <div>count={count}</div>

      <h1>reducer hook</h1>
      <button onClick={() => dispatch("Increament")}>increament</button>
      <button onClick={()=>dispatch("Decreament")}>decreament</button>
    </div>
    </>
  );
};

export default Reducer;
