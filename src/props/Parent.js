import React from "react";
import Child from "./Child";

function Parent() {
//   const name = "Devesh kumar";
//   const age = 25;
const data = ['Devesh','Kumar',25]
  return (
    <>
      <h1>Parent Component</h1>
      {/* <Child name={name} age={age} /> */}
      <Child data={data}/>
    </>
  );
}

export default Parent;
