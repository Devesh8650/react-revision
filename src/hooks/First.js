import React, { useState } from "react";
import UseProp from "./UseProp";

function First() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(10);
  return (
    <>
      {/* <h1>{data}</h1>
<button onClick={()=>setData(data + 1)}>+</button>
<button onClick={()=>setData(data - 1)}>-</button> */}
      <UseProp data={data} count={count} />
      <button onClick={() => setData(data + 1)}>update</button>
      <button onClick={() => setCount(count + 1)}>update count</button>
    </>
  );
}

export default First;
