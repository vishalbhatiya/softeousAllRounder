import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Layout from './pages/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Employee from './pages/employee';
import Invoice from './pages/invoice';
import Accounts from './pages/Accounts';
import EmployeeList from './pages/employeelist';
import Addemployee from './pages/addemployee';
import { TableDataContext } from './context';
import Callback from './pages/callback';
import Reducer from './pages/reducer';
import BookContainer from './reduxContainer/bookContainer';
import BookContainerA from './pages/reduxAgain/bookContainerA';
import ReduxToolKit from './pages/reduxToolKit/reduxToolKit';
import RegistrationForm from './pages/registrationForm';

function App() {

  const [userName, setUserName] = useState("Narendra");

  const tableDataContext = useContext(TableDataContext);

  let data: {
    id: number;
    Name: string;
    FName: string;
    Department: string;
    Action: string;
  }[] = [
    { id: 1, Name: "deepu", FName: "vishal", Department: "it", Action: "" },
    { id: 2, Name: "deepu", FName: "vishal", Department: "it", Action: "" },
  ];

  tableDataContext.employees = data;

  return (
    <>
    UserName : {userName}
    <Button onClick={() => { setUserName(userName + 2)}}></Button>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
           
            <Route path="/employee" element={<Employee></Employee>}></Route> 
            <Route path="/invoice" element={<Invoice userName={userName}></Invoice>}></Route> 
            <Route path="/Accounts" element={<Accounts></Accounts>}></Route> 
            <Route path="/employeelist" element={<EmployeeList></EmployeeList>}></Route> 
            <Route path="/addemployee" element={<Addemployee></Addemployee>}></Route> 
            <Route path="/callback" element={<Callback></Callback>}></Route> 
            <Route path="/reducer" element={<Reducer></Reducer>}></Route>
            <Route path="/bookContainer" element={<BookContainer></BookContainer>}></Route>
            <Route path="/bookContainerA" element={<BookContainerA></BookContainerA>}></Route>
            <Route path="/reduxToolKit" element={<ReduxToolKit></ReduxToolKit>}></Route>
            <Route path='/registrationForm' element={<RegistrationForm></RegistrationForm>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
