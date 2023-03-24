import React from "react";
import { Table,Button,} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Employee = () => {
  // let data:{id:number,Name:string,FName:string,Department:string}
  //  data=[
  //   {id:1,Name:"deepu",FName:"vishal",Department:"it"},
  //   {id:2,Name:"deep",FName:"visha",Department:"it"},
  // ];
  // `<button><i class="fas fa-edit"></i></button> <button><i class="fas fa-trash"></i></button>`
  let data: {
    id: number;
    Name: string;
    FName: string;
    Department: string;
    Action: string;
  }[] = [
    {
      id: 1,
      Name: "deepu",
      FName: "vishal",
      Department: "it",
      Action: "",
    },
    {
      id: 2,
      Name: "deepu",
      FName: "vishal",
      Department: "it",
      Action: "",
    },
  ];

  const TableHeader = () => {
    return (
      <>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>FName</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
      </>
    );
  };

  const TableBody = (props: any) => {
    const row = props.data.map((row: any) => {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.Name}</td>
          <td>{row.FName}</td>
          <td>{row.Department}</td>
          <td>{row.Action}


          <Button variant="primary" >
            </Button>
            <Button>
             
            </Button>
           






          
          </td>

        
        </tr>
      );
    });
    return <tbody>{row}</tbody>;
  };

  return (
    <Table striped bordered hover>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
};

export default Employee;
