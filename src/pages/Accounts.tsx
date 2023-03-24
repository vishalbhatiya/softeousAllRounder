import React, { useRef, useState } from "react";

const Accounts = () => {
  const refElement = useRef<any>({});
  refElement.current.value="vishal"
  // const [name, setName] = useState("vishal");

  //console.log(refElement);
  const reset = () => {
    // setName("");
    refElement.current.focus();
  };
  const handleInput=()=>{
    console.log(refElement.current.value)
    refElement.current.style.color="red"
    refElement.current.value="bhatiya"

  }
  return (
    <>
      <input
        type="text"
        // value={name}
        ref={refElement}
        // onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <button onClick={handleInput}>handle input</button>
    </>
  );
};

export default Accounts;
