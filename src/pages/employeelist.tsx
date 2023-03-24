import React, { useEffect, useState } from "react";
const EmployeeList = () => {
  const [count, setCount] = useState(0);
  const[data,setData]=useState("ram")

  useEffect(()=>{
   console.log("component")
    alert("count work")
  },[])

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const update=()=>{
    setData("seeta")
  }
 
  return (
    <>
      <h1>number is {count}</h1>

      <button onClick={increase}>increase</button>
      <button onClick={decrease}>descrease</button>
      <button onClick={update}>update</button>
    </>
  );
};

export default EmployeeList;
