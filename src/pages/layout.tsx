import React from "react";
import {
  Button,
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  console.log("Layout called");
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/employee">Employee</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/invoice">Invoice</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/accounts">Accounts</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/employeeList">EmployeeList</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addemployee">AddEmployee</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/callback">Callback</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reducer">Reducer</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/bookContainer">Redux</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/bookContainerA">ReduxAgain</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reduxToolKit">ReduxToolKit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/registrationForm">Registration Form</Link>
            </Nav.Link>
          </Nav>
          <NavDropdown
            align="end"
            title={<FontAwesomeIcon icon={faUser} />}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet></Outlet>
    </>
  );
};

export default Layout;
