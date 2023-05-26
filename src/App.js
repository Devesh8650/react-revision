import React from "react";
// import Array2 from './hooks/Array2'
// import Parent from './props/Parent'
// import Comp from './contextApi/Comp'
// import First from './hooks/First'
// import Second from './hooks/Second'
// import Array from './hooks/Array'
// import Object from './hooks/Object'
// import Ref from './hooks/Ref'
import Redux from "./redux/Redux";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function App() {
  return (
    <>
      {/* <Parent/> */}
      {/* <Comp/> */}
      {/* <First/> */}
      {/* <Second/> */}
      {/* <Array/> */}
      {/* <Array2/> */}
      {/* <Object/> */}
      {/* <Ref/> */}
      <Provider store={Store}>
        <Redux />
      </Provider>
    </>
  );
}

export default App;
