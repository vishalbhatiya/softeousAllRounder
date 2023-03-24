import React, { useState } from "react";
import { Form, Navbar, Nav } from "react-bootstrap";

const RegistrationForm = () => {
  const data={name:"",email:"",password:""};
  const [input,setInput]=useState(data);
  const handleData=(e:any)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:any)=>{
      e.preventDefault();
  }
  console.log(input)
  return (
    <>
      <div className="card-body">
        <nav className="fs-1 w-auto p-3 Width auto navbar navbar-expand-lg navbar-dark bg-dark">
          <a
            className="navbar-brand fs-1 position-absolute top-50 start-50 translate-middle"
            href="#"
          >
            Navbar
          </a>
        </nav>
        <form onSubmit={handleSubmit} className="container  w-100 p-3">
          <div>
            <input type="text" placeholder="enter your name" 
                 name="name"  value={input.name} onChange={handleData}/>
          </div>
          <div>
            <input type="email" placeholder="enter your email" 
            name="email" value={input
            .email} onChange={handleData} />
          </div>
          <div>
            <input type="password" placeholder="enter your password" 
            name="password" value={input.password} onChange={handleData}
            />
          </div>
          <div className="card-footer">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
