import React, { useContext } from "react";
import { data2 } from "./Comp";

function Compc() {
  const last = useContext(data2);
  return (
    <>
      <h1>compc</h1>
      <p>{last}</p>
    </>
  );
}

export default Compc;
