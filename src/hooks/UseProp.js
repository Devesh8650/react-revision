import React, { useEffect } from "react";

function UseProp(props) {
  useEffect(() => {
    alert("count is " + props.count);
  }, [props.count]);

  useEffect(() => {
    alert("run data effect is " + props.data);
  }, [props.data]);
  return (
    <>
      <h1>Count Props: {props.count}</h1>
      <h1>Data Props: {props.data}</h1>
    </>
  );
}

export default UseProp;
