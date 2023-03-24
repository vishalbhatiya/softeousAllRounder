import React, { useCallback, useMemo, useState } from "react";
import Child from "./child";

const Callback = () => {
    console.log('Callback called');
  const [count, setCount] = useState(0);

  const Learning=useCallback(()=>{
        return <h1>hbh</h1>
  },[])

  console.log(Learning);

// const Learning = () => {
//     console.log('Learning Called');
// }
  return (
    <div className="App">
      <h1> learn callback</h1>
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Child Learning={Learning}/>
    </div>
  );
};

export default Callback;
