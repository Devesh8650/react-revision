import React from "react";

function Child(props) {
  return (
    <>
      {/* <p>My Name is {[pros.name]}</p>
      <p>My Name is {[pros.age]}</p> */}
      <h2>Child Component</h2>
      <ul>
        {props.data.map((data,index)=>(
            <li key={index}>
                {data}
            </li>
        ))}
      </ul>
    </>
  );
}

export default Child;
