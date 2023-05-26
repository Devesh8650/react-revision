import React from "react";
import { useContext } from "react";
import {data}  from "./Comp";
import CompB from "./CompB";

function CompA() {
  const  name = useContext(data);
  return (
    <>
    <h1>compa</h1>
      <p>{name}</p>
      <CompB/>
    </>
  );
}

export default CompA;
