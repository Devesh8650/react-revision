import React from "react";
import Counter from "./Counter";
import { useDispatch } from "react-redux";

function Redux() {
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={(e)=>dispatch({type:"INCREMENT"})}>Increment</button>
      <Counter />
      <button onClick={(e)=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </>
  );
}

export default Redux;
