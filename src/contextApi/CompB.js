import React, { useContext } from "react";
import { data, data2 } from "./Comp";

function CompB() {
  const name = useContext(data);
  const last = useContext(data2);
  return (
    <>
      <h1>compb</h1>
      <p>{name}</p>
      <p>{last}</p>
    </>
  );
}

export default CompB;
