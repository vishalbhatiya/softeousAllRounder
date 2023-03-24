import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./Reducer";

const ReduxToolKit = () => {
  const dispatch = useDispatch();

  const { c } = useSelector((state: any) => state.custom);

  const employees : [] = useSelector((state : any) => state.custom.employees )
  console.log("Employees", employees);

  const products : [] = useSelector((state : any) => state.custom.products )
  console.log("Products", products);

  return (
    <>
      <h1>hello</h1>
      
      <div className="App">
        <h2>{c}</h2>
        <button onClick={() => dispatch(counterActions.getEmployees())}>
          Get Employees List
        </button>
        <button onClick={() => dispatch(counterActions.incrementBy(0))}>increment</button>
        <button onClick={() => dispatch(counterActions.incrementByValue(5))}>
          decrementBy5
        </button>

        <button onClick={() => dispatch(counterActions.decrementBy(0))}>decrement</button>
      </div>
    </>
  );
};

export default ReduxToolKit;
