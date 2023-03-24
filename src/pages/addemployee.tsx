import React, { useMemo, useState } from "react";

const Addemployee = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication= useMemo(function multiply(){
    console.log("*************")
    return add*1
  },[add])
  
  // const multiplication= ()=>{
  //   console.log("*************")
  //   return 12*10
  // }
  
  return (
    <>
      <div className="App">
        <h1>useMemo hook</h1>
         {multiplication} <br />
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <span>{add}</span> <br />
        <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
        <span>{minus}</span>
      </div>
    </>
  );
};

export default Addemployee;
