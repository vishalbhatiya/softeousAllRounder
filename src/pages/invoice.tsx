import React, { useContext, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TableDataContext } from "../context";

const Invoice = (props: any) => {
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>FName</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    var dataContext = useContext(TableDataContext);
    var data = dataContext.employees;

    const row = data.map((row: any) => {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.Name}</td>
          <td>{row.FName}</td>
          <td>{row.Department}</td>
          <td>
            {row.Action}
            <button>
            </button>
            <button>
            </button>
           
          </td>
        </tr>
      );
    });
    return <tbody>{row}</tbody>;
  };

  return (
    <>
      {props.userName}
      <Table striped bordered hover>
        <TableHeader />
        <TableBody />
      </Table>
    </>
  );
};

export default Invoice;
