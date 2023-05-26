import React, { useState } from "react";

function Array2() {
  const arr = [
    {
      name: "John",
      age: 19,
    },
    {
      name: "Candy",
      age: 18,
    },
    {
      name: "mandy",
      age: 20,
    },
  ];

  const [name, setName] = useState(arr);
  const handleAddFriend = () => {
    const newarr = [...name,'Devesh'];
    setName(newarr);
  };
  return (
    <>
      <button onClick={handleAddFriend}>Add Friends</button>
      <ul>
        {name.map((friend, index) => (
          <li key={index}>
            <span>My Name is {friend.name}</span>
            <span>  age is {friend.age}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Array2;
