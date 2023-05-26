import React, { createContext } from "react";
import CompA from "./CompA";
import Compc from "./Compc";

const data = createContext();
const data2 = createContext();


function Comp() {
  const name = "Hello World!";
  const lastName = "Namsate Duniya"
  return (
    <>
      <data.Provider value={name}>
        <data2.Provider value={lastName}>
        <CompA />
        <Compc/>
        </data2.Provider>
      </data.Provider>
    </>
  );
}

export default Comp;
export { data,data2 }
