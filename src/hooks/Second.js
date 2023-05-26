import React, { useEffect, useState } from "react";

function Second() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  });

  return (
    <>
      <h1>UseEffect Hooks {count}</h1>
    </>
  );
}

export default Second;
