import React, { useState } from "react";

function Array() {
  const [items, setItem] = useState([]);

  const addItems = () => {
    setItem([...items, Math.floor(Math.random() * 11)])
  };
  return (
    <>
      <button onClick={addItems}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Array;
